import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import * as monaco from 'monaco-editor';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppInit } from '@/service/app-init';

@Component({
  selector: 'app-editor-view',
  imports: [FormsModule],
  templateUrl: './editor-view.html',
  styleUrl: './editor-view.scss',
  standalone: true
})
export class EditorView implements AfterViewInit, OnDestroy {
  editorOptions = { theme: 'vs', language: 'javascript' };
  code: string = 'function x() {\nconsole.log("Hello world 😺!");\n}';
  editor: monaco.editor.IStandaloneCodeEditor | null = null;

  private themeModeSubscription: Subscription | null = null;

  constructor(
    private _appInit: AppInit
  ) {
    this.themeModeSubscription = this._appInit.themeMode$.subscribe((themeMode) => {
      if (this.editor) {
        const isDarkMode = (themeMode == 'dark') ? true : false;
        monaco.editor.setTheme(isDarkMode ? 'vs-dark' : 'vs');
        // monaco.editor.setTheme(isHighContrast && isDarkMode ? 'hc-black' : 'hc-light');
      }
    });
  }

  ngAfterViewInit(): void {
    this.editor = monaco.editor.create(document.getElementById('monaco-container')!, {
      value: this.code,
      language: this.editorOptions.language,
      automaticLayout: true
    })
  }

  ngOnDestroy(): void {
    if (this.themeModeSubscription) this.themeModeSubscription.unsubscribe();
  }
}
