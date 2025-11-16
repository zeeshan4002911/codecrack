import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, Subject } from 'rxjs';
import * as monaco from 'monaco-editor';
import { LocalStorageService } from './local-storage-service';

@Injectable({
  providedIn: 'root',
})
export class AppInit {

  constructor(
    private _localStorageService: LocalStorageService
  ) {
    // Select tab from localStorage if it exists else editor as default
    this.selectedTab = this._localStorageService.get('selectedTab') ?? 'editor';

    // Select theme from localStorage if it exists
    const cachedheme = this._localStorageService.get('themeMode');
    if (cachedheme == 'dark' || cachedheme == 'light') {
      this.themeModeSubject.next(cachedheme);
    };

    // Select language from localStorage if it exists 
    const cachedLanguage = this._localStorageService.get('selectedLanguage');
    if (cachedLanguage) {
      this.selectedLanguage = cachedLanguage;
      this.selectedLanguageSubject.next(this.selectedLanguage);
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
  // Check browser preferred theme based on user's browser setting
  prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  private themeModeSubject = new BehaviorSubject<string>(
    (this.prefersDarkMode) ? "dark" : "light"
  );
  themeMode$ = this.themeModeSubject.asObservable();

  toggleThemeMode(newValue: string) {
    this.themeModeSubject.next(newValue);
    this._localStorageService.set('themeMode', newValue);
  }

  /* Language dropdown variables and methods */
  languages: any = [];
  selectedLanguage = {
    "id": "javascript",
    "aliases": [
      "JavaScript"
    ]
  };
  private selectedLanguageSubject = new BehaviorSubject<any>(this.selectedLanguage);
  selectedLanguage$ = this.selectedLanguageSubject.asObservable();

  setEditorLanguage(language: any) {
    this.selectedLanguageSubject.next(language);
    this._localStorageService.set('selectedLanguage', language);
  }

  /* More option action */
  private appActionSubject = new Subject();
  appAction$ = this.appActionSubject.asObservable();

  dispatchAction(actionName: string) {
    this.appActionSubject.next(actionName);
  }

  /* Persistency of selected Tab, default to editor view */
  selectedTab = 'editor';
  setSelectedTab(tabName: string) {
    this.selectedTab = tabName;
    this._localStorageService.set('selectedTab', tabName);
  }

  /* Default editor Option, gets overwritten on run time */
  editorOptions = {
    theme: 'vs',
    language: 'javascript',
    automaticLayout: true,
    scrollBeyondLastLine: true,
    wordWrap: true // For toggling the word wrap 'on' & 'off'
  };

  /* Storage for code entered on the editor and diff checker by user */
  editorCode: string = 'function x() {\n\tconsole.log("Hello world 😺!");\n}';
  originalCode: string = 'function x() {\n\tconsole.log("Hello world from left 😺!");\n}';
  modifiedCode: string = 'function x() {\n\tconsole.log("Hello world from right 😺!");\n}';

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
}
