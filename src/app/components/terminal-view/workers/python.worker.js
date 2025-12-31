/// <reference lib="webworker" />

import { loadPyodide } from 'pyodide';

function send(type, value) {
    postMessage({ type, value });
}

// Redirect Python's print() to our fakeConsole
const pyConsole = {
    write: (text) => {
        send('output', text);
    }
};

// Mask input() function
let inputResolver = null;
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

// Worker main loop
self.onmessage = async (e) => {
    const { type, code, value } = e.data;

    if (type === 'input' && inputResolver) {
        // Resolve input from the main thread
        inputResolver(value);
        inputResolver = null;
        return;
    }

    if (type === 'run' && pyodide) {
        const startTime = performance.now();
        try {
            // Expose print and input to Python
            pyodide.globals.set('print', (msg) => pyConsole.write(msg));
            pyodide.globals.set('input', async (prompt) => {
                // Wait for input asynchronously
                const response = await pyInput(prompt);
                return response;
            });

            // Run the Python code
            await pyodide.runPythonAsync(code);

            const endTime = performance.now();
            send('done', (endTime - startTime).toFixed(2));
        } catch (err) {
            send('error', err.toString());
        }
    }
};
