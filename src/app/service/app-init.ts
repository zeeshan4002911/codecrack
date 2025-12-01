import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, Subject } from 'rxjs';
import * as monaco from 'monaco-editor';
import { LocalStorageService } from './local-storage-service';
import { CloudStorageService } from './cloud-storage-service';
import * as humps from 'humps';

@Injectable({
  providedIn: 'root',
})
export class AppInit {
  codeShareId: string = "";

  // Check browser preferred theme based on user's browser setting
  prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // Application parameters default values
  defaultData = {
    editorOptions: {
      theme: 'vs',
      language: 'javascript',
      automaticLayout: true,
      scrollBeyondLastLine: true,
      wordWrap: true, // For toggling the word wrap 'on' & 'off'
      fontSize: 14
    },
    selectedTab: "editor",
    themeMode: (this.prefersDarkMode) ? "dark" : "light",
    selectedLanguage: {
      "id": "javascript",
      "aliases": [
        "JavaScript"
      ]
    },
    editorCode: 'function x() {\n\tconsole.log("Hello world 😺!");\n}',
    originalCode: 'function x() {\n\tconsole.log("Hello world from left 😺!");\n}',
    modifiedCode: 'function x() {\n\tconsole.log("Hello world from right 😺!");\n}',
  };

  constructor(
    private _localStorageService: LocalStorageService,
    private _cloudStorageService: CloudStorageService
  ) {
    // Set EditorOption from localStorage if it exists
    const cachedEditorOptions = this._localStorageService.get('editorOptions');
    if (cachedEditorOptions) {
      this.editorOptions = cachedEditorOptions;
    }

    // Select tab from localStorage if it exists else editor as default
    this.selectedTab = this._localStorageService.get('selectedTab') ?? this.defaultData['selectedTab'];

    // Select theme from localStorage if it exists
    const cachedheme = this._localStorageService.get('themeMode');
    if (cachedheme == 'dark' || cachedheme == 'light') {
      this.themeModeSubject.next(cachedheme);
    };

    // Select language from localStorage if it exists 
    const cachedLanguage = this._localStorageService.get('selectedLanguage');
    if (cachedLanguage) {
      this.selectedLanguageSubject.next(cachedLanguage);
    };

    this.languages = monaco.languages.getLanguages();
    // JSON Comparison as custom language
    this.languages.push({
      "id": "json-compression",
      "aliases": ["JSON Compression"]
    });

    /* Set code from localStorage if it exists */
    const editorCode = this._localStorageService.get('editorCode');
    if (editorCode) {
      this.editorCode = editorCode;
    }
    const originalCode = this._localStorageService.get('originalCode');
    if (originalCode) {
      this.originalCode = originalCode;
    }
    const modifiedCode = this._localStorageService.get('modifiedCode');
    if (modifiedCode) {
      this.modifiedCode = modifiedCode;
    }

    /* Listener with debounce to save code to localStorage  */
    const debounTime = 3000;
    this.editorCodeSubject.pipe(
      debounceTime(debounTime)
    ).subscribe(code => {
      this._localStorageService.set('editorCode', code);
    });
    this.originalCodeSubject.pipe(
      debounceTime(debounTime)
    ).subscribe(code => {
      this._localStorageService.set('originalCode', code);
    });
    this.modifiedCodeSubject.pipe(
      debounceTime(debounTime)
    ).subscribe(code => {
      this._localStorageService.set('modifiedCode', code);
    });
  }

  /* Theme variables, logic and persistency */
  private themeModeSubject = new BehaviorSubject<string>(this.defaultData['themeMode']);
  themeMode$ = this.themeModeSubject.asObservable();

  toggleThemeMode(newValue: string) {
    this.themeModeSubject.next(newValue);
    this._localStorageService.set('themeMode', newValue);
  }

  /* Language dropdown variables and methods */
  languages: any = [];
  private selectedLanguageSubject = new BehaviorSubject<any>(this.defaultData['selectedLanguage']);
  selectedLanguage$ = this.selectedLanguageSubject.asObservable();

  setEditorLanguage(language: any) {
    this.selectedLanguageSubject.next(language);
    this._localStorageService.set('selectedLanguage', language);
  }

  /* More option action */
  private appActionSubject = new Subject();
  appAction$ = this.appActionSubject.asObservable();

  dispatchAction(action: string, payload = {}) {
    let editorOptionUpdate = true
    // Update the values in editor option and pushed to local storage
    switch (action) {
      case "font-up":
        this.editorOptions.fontSize += 2;
        break;
      case "font-down":
        this.editorOptions.fontSize = Math.max(6, this.editorOptions.fontSize - 2);
        break;
      case "word-wrap-toggle":
        this.editorOptions.wordWrap = !this.editorOptions.wordWrap;
        break;
      default:
        editorOptionUpdate = false;
    }
    this.appActionSubject.next({ action, payload });
    if (editorOptionUpdate)
      this._localStorageService.set('editorOptions', this.editorOptions);
  }

  /* Persistency of selected Tab, default to editor view */
  selectedTab = this.defaultData['selectedTab'];
  setSelectedTab(tabName: string) {
    this.selectedTab = tabName;
    this._localStorageService.set('selectedTab', tabName);
  }

  /* Default editor Option, gets overwritten on run time */
  editorOptions = this.defaultData['editorOptions'];
  private editorUpdateSubject = new BehaviorSubject(null);
  // private editorUpdateSubject = new BehaviorSubject<{}>({});
  editorUpdate$ = this.editorUpdateSubject.asObservable();

  /* Storage for code entered on the editor and diff checker by user */
  editorCode: string = this.defaultData['editorCode'];
  originalCode: string = this.defaultData['originalCode'];
  modifiedCode: string = this.defaultData['modifiedCode'];

  private editorCodeSubject = new Subject<string>();
  private originalCodeSubject = new Subject<string>();
  private modifiedCodeSubject = new Subject<string>();

  setEditorCode(code: string) {
    this.editorCode = code;
    this.editorCodeSubject.next(code);
  }

  setOriginalCode(code: string) {
    this.originalCode = code;
    this.originalCodeSubject.next(code);
  }

  setModifiedCode(code: string) {
    this.modifiedCode = code;
    this.modifiedCodeSubject.next(code);
  }

  resetApp() {
    this._localStorageService.clear();
    location.reload();
  }

  getCloudData() {
    this._cloudStorageService.pullCodeHandler(this.codeShareId).subscribe({
      next: (response) => {
        console.log("Response:", response);
        if (response['data'] && response['data']['codeshare_id'] == this.codeShareId) {
          const newData: any = {};
          const resData = response['data'];
          for (let key in resData) {
            if (resData[key]) {
              // Convert underscore case to camel case using humps
              const camelCaseKey = humps.camelize(key);
              newData[camelCaseKey] = resData[key];
              if (['editorOptions', 'selectedLanguage'].includes(camelCaseKey)) {
                newData[camelCaseKey] = JSON.parse(newData[camelCaseKey]);
              }
            }
          }
          this.setAppParameters(newData);
          this.dispatchAction("bToast", {
            "type": "success",
            "message": response['message']
          });
        } else {
          console.error("Response error", response);
          this.dispatchAction("bToast", {
            "type": "error",
            "message": "Response format error"
          });
        }
      },
      error: (error) => {
        console.error("Error:", error);

        let ToastType = "error";
        let ToastMsg = "Unknown Error";
        if (error.status == 404) {
          ToastType = "warning";
          ToastMsg = error?.error?.message;
        }

        this.dispatchAction("bToast", {
          "type": ToastType,
          "message": ToastMsg
        });
      },
      complete: () => { }
    })
  }

  setCloudData() {
    let payload = structuredClone(this._localStorageService.getAll());
    payload['codeShareId'] = this.codeShareId;
    payload['editorOptions'] = JSON.stringify(payload['editorOptions']);
    payload['selectedLanguage'] = JSON.stringify(payload['selectedLanguage']);

    this._cloudStorageService.pushCodeHandler(payload).subscribe({
      next: (response) => {
        console.log("Response:", response);
        this.dispatchAction("bToast", {
          "type": "success",
          "message": response['message']
        });
      },
      error: (error) => {
        console.error("Error:", error);

        let ToastType = "error";
        let ToastMsg = "Unknown Error";
        if (error.status == 500) {
          ToastMsg = error?.error?.message;
        }

        this.dispatchAction("bToast", {
          "type": ToastType,
          "message": ToastMsg
        });
      },
      complete: () => { }
    })
  }

  setAppParameters(newData: {}) {
    const appData = { ...this.defaultData, ...newData };

    /* Setting all the parameters of application in state variables */
    this.editorOptions = appData['editorOptions'];
    this.selectedTab = appData['selectedTab'];
    this.themeModeSubject.next(appData['themeMode']);
    this.selectedLanguageSubject.next(appData['selectedLanguage']);
    this.editorCode = appData['editorCode'];
    this.originalCode = appData['originalCode'];
    this.modifiedCode = appData['modifiedCode'];
    this.editorUpdateSubject.next(null);

    // Updating in local storage for cache
    this._localStorageService.setAll(appData);
  }
}
