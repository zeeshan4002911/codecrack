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
  private selectedLanguageSubject = new BehaviorSubject<any>(
    {
      "id": "javascript",
      "aliases": [
        "JavaScript"
      ]
    }
  );
  selectedLanguage$ = this.selectedLanguageSubject.asObservable();

  private appActionSubject = new Subject();
  appAction$ = this.appActionSubject.asObservable();

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
}
