import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CodeRunnerService {
    private worker?: Worker;
    workerStatus$ = new BehaviorSubject<boolean>(false);
    output$ = new BehaviorSubject<string>('Click Run button to execute code');
    waitingForInput$ = new BehaviorSubject<boolean>(false);
    selectedLanguage = { id: "", name: "" };

    config(selectedLanguage: { id: string, name: string }) {
        this.terminate();
        this.selectedLanguage = selectedLanguage;
        this.output$.next(`Loading the ${this.selectedLanguage['name']} worker for environment....⏳\n`);
        console.info(`Loading started for ${this.selectedLanguage['name']} worker`);
        
        // Worker creation based on monaco language id
        if (selectedLanguage['id'] == 'javascript') {
            this.worker = new Worker(new URL('./workers/js.worker.js', import.meta.url), { type: 'module' });
        } else if (selectedLanguage['id'] == 'typescript') {
            this.worker = new Worker(new URL('./workers/ts.worker.ts', import.meta.url), { type: 'module' })
        } else if (selectedLanguage['id'] === 'python') {
            this.worker = new Worker(new URL('./workers/python.worker.js', import.meta.url), { type: 'module' });
        }

        if (!this.worker) {
            this.output$.next(`No worker present for ${this.selectedLanguage['name']}`);
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
                    this.output$.next(`${this.selectedLanguage['name']} Worker is loaded and ready to use 🎉`);
                    console.info(`${this.selectedLanguage['name']} Worker is loaded and ready to use`);
                    this.workerStatus$.next(true);
                    break;
            }
        };
    }

    run(code: string) {
        if (!this.worker) {
            this.config(this.selectedLanguage);
        }

        this.output$.next('Executing the code....\n');
        if (this.worker) 
            this.worker.postMessage({ type: 'run', code });
    }

    sendInput(value: string) {
        this.waitingForInput$.next(false);
        this.worker?.postMessage({ type: 'input', value });
    }

    terminate() {
        this.worker?.terminate();
        this.worker = undefined;
        this.workerStatus$.next(false);
        this.waitingForInput$.next(false);
    }
}
