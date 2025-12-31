import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CodeRunnerService {
    private worker?: Worker;
    private autoTerminateTimeMS = 10000;
    output$ = new BehaviorSubject<string>('Click Run button to execute code');
    waitingForInput$ = new BehaviorSubject<boolean>(false);

    run(code: string, language: string) {
        this.cleanup();

        // Worker creation based on monaco language id
        if (language == 'javascript') {
            this.worker = new Worker(new URL('./workers/js.worker.js', import.meta.url));
        } else if (language == 'typescript') {
            this.worker = new Worker(new URL('./workers/ts.worker.ts', import.meta.url), { type: 'module' })
        } else if (language === 'python') {
            this.worker = new Worker(new URL('./workers/python.worker.js', import.meta.url), { type: 'module' });
        }

        if (!this.worker) {
            console.info(`No worker present for ${language}`);
            return;
        }
        this.worker.onmessage = ({ data }) => {
            switch (data.type) {
                case 'output':
                    this.output$.next(this.output$.value + data.value + '\n');
                    break;
                case 'input-request':
                    this.waitingForInput$.next(true);
                    break;
                case 'done':
                    this.output$.next(this.output$.value + `[Finished in ${data.value} ms]\n`);
                    break;
                case 'error':
                    this.output$.next(this.output$.value + data.value);
                    break;
                case 'ready':
                    this.output$.next('Executing the code....\n');
                    if (this.worker) this.worker.postMessage({ type: 'run', code });
            }
        };

        this.output$.next('Loading the environment....\n');
        // this.worker.postMessage({ type: 'run', code });
        setTimeout(() => this.worker?.terminate(), this.autoTerminateTimeMS);
    }

    sendInput(value: string) {
        this.waitingForInput$.next(false);
        this.worker?.postMessage({ type: 'input', value });
    }

    cleanup() {
        this.worker?.terminate();
        this.worker = undefined;
    }
}
