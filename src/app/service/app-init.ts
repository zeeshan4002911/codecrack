import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as monaco from 'monaco-editor';

@Injectable({
  providedIn: 'root',
})
export class AppInit {
  private themeModeSubject = new BehaviorSubject<string>("light");
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

  constructor() {
    this.languages = monaco.languages.getLanguages();
  }

  toggleThemeMode(newValue: string) {
    this.themeModeSubject.next(newValue);
  }

  setEditorLanguage(language: any) {
    this.selectedLanguageSubject.next(language);
  }
}
