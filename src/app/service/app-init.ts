import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as monaco from 'monaco-editor';

@Injectable({
  providedIn: 'root',
})
export class AppInit {
  // Check browser preferred theme based on user's browser setting
  prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  private themeModeSubject = new BehaviorSubject<string>(
    (this.prefersDarkMode) ? "dark" : "light"
  );
  themeMode$ = this.themeModeSubject.asObservable();

  languages: any = [];
  selectedLanguage = {
    "id": "javascript",
    "aliases": [
      "JavaScript"
    ]
  };
  private selectedLanguageSubject = new BehaviorSubject<any>(this.selectedLanguage);
  selectedLanguage$ = this.selectedLanguageSubject.asObservable();

  private appActionSubject = new Subject();
  appAction$ = this.appActionSubject.asObservable();

  // Default editor Option, gets overwritten on run time 
  editorOptions = {
    theme: 'vs',
    language: 'javascript',
    automaticLayout: true,
    scrollBeyondLastLine: true,
    wordWrap: true // For toggling the word wrap 'on' & 'off'
  };

  // Storage for code entered on the editor and diff checker by user
  editorCode: string = 'function x() {\n\tconsole.log("Hello world 😺!");\n}';
  originalCode: string = 'function x() {\n\tconsole.log("Hello world from left 😺!");\n}';
  modifiedCode: string = 'function x() {\n\tconsole.log("Hello world from right 😺!");\n}';

  constructor() {
    this.languages = monaco.languages.getLanguages();
    // JSON Comparison as custom language
    this.languages.push({
      "id": "json-compression",
      "aliases": ["JSON Compression"]
    });
  }

  toggleThemeMode(newValue: string) {
    this.themeModeSubject.next(newValue);
  }

  setEditorLanguage(language: any) {
    this.selectedLanguageSubject.next(language);
  }

  dispatchAction(actionName: string) {
    this.appActionSubject.next(actionName);
  }

  setEditorCode(code: string) {
    this.editorCode = code;
  }

  setOriginalCode(code: string) {
    this.originalCode = code;
  }

  setModifiedCode(code: string) {
    this.modifiedCode = code;
  }
}
