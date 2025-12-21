/// <reference lib="webworker" />

import * as ts from 'typescript';

let inputResolver: ((v: string) => void) | null = null;

function send(type: string, value?: string) {
    postMessage({ type, value });
}

const fakeConsole = {
    log: (...args: any[]) => send('output', args.join(' ')),
    error: (...args: any[]) => send('output', '[error] ' + args.join(' '))
};

function readLine(prompt: string): Promise<string> {
    send('output', prompt);
    send('input-request');
    return new Promise(resolve => {
        inputResolver = resolve;
    });
}

addEventListener('message', async ({ data }) => {
    const { type, code, value } = data;

    if (type === 'input' && inputResolver) {
        inputResolver(value);
        inputResolver = null;
        return;
    }

    if (type === 'run') {
        const startTime = performance.now();
        try {
            const transpiled = ts.transpileModule(code, {
                compilerOptions: {
                    target: ts.ScriptTarget.ES2020,
                    module: ts.ModuleKind.None
                }
            }).outputText;

            const fn = new Function(
                'console',
                'readLine',
                `
                (async () => {
                    try {
                        ${transpiled}
                    } catch (err) {
                        postMessage({ type: 'error', value: err.toString() });
                    }
                })();
                `
            );

            await fn(fakeConsole, readLine);
            const endTime = performance.now();
            send('done', (endTime - startTime).toFixed(2));
        } catch (err: any) {
            send('error', err.toString());
        }
    }
});
