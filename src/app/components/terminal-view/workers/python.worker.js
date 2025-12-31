/// <reference lib="webworker" />

import { loadPyodide } from 'pyodide';

function send(type, value) {
    postMessage({ type, value });
}

// Redirect Python's print() to mask write
function pyOutput(text) {
    text = String(text) 
    if (text.includes("PyodideFuture")) {
        text += '\nhint: Add await before the input()';
    }
    send('output', text);
}

let inputResolver = null;

// Mask input() function to wait for user input (await is required before python input())
function pyInput(prompt) {
    send('output', prompt);
    send('input-request');
    return new Promise(resolve => {
        inputResolver = resolve;
    });
}

// Load Pyodide once when the worker starts
let pyodide;
async function initializePyodide() {
    try {
        pyodide = await loadPyodide();
        send('ready');
    } catch (err) {
        send('error', 'Failed to load Pyodide: ' + err.toString());
    }
}

initializePyodide();

self.onmessage = async (e) => {
    const { type, code, value } = e.data;

    if (type === 'input' && inputResolver) {
        // Resolve user input from the main thread
        inputResolver(value);
        inputResolver = null;
        return;
    }

    if (type === 'run' && pyodide) {
        const startTime = performance.now();
        try {
            // Updating print and input of Python to custom input and output
            pyodide.globals.set('print', (msg) => pyOutput(msg));
            pyodide.globals.set('input', async (prompt) => {
                const response = await pyInput(prompt);
                return response;
            });

            // Running the Python code
            await pyodide.runPythonAsync(code);

            const endTime = performance.now();
            send('done', (endTime - startTime).toFixed(2));
        } catch (err) {
            let errMsg = err.toString();
            if (errMsg.includes("PyodideFuture")) {
                errMsg += '\nhint: Add await before the input()';
            }
            send('error', errMsg);
        }
    }
};
