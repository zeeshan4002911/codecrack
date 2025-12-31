let inputResolver = null;

function send(type, value) {
    postMessage({ type, value });
}

const fakeConsole = {
    log: (...args) => send('output', args.join(' ')),
    error: (...args) => send('output', '[error] ' + args.join(' '))
};

function readLine(prompt) {
    send('output', prompt);
    send('input-request');
    return new Promise(resolve => {
        inputResolver = resolve;
    });
}

onmessage = async (e) => {
    const { type, code, value } = e.data;

    if (type === 'input' && inputResolver) {
        inputResolver(value);
        inputResolver = null;
        return;
    }

    if (type === 'run') {
        const startTime = performance.now();
        try {
            const fn = new Function(
                'console',
                'readLine',
                `
                (async () => {
                    try {
                        ${code}
                    } catch (err) {
                        postMessage({ type: 'error', value: err.toString() });
                    }
                })();
                `
            );

            await fn(fakeConsole, readLine);
            const endTime = performance.now();
            send('done', (endTime - startTime).toFixed(2));
        } catch (err) {
            send('error', err.toString());
        }
    }
};

send('ready');
