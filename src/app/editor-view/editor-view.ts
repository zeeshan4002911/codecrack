import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import * as monaco from 'monaco-editor';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { AppInit } from '@/service/app-init';

@Component({
  selector: 'app-editor-view',
  imports: [FormsModule],
  templateUrl: './editor-view.html',
  styleUrl: './editor-view.scss',
  standalone: true
})
export class EditorView implements AfterViewInit, OnDestroy {
  private _destroy: Subject<boolean> = new Subject<boolean>();

  themeMode: string | undefined = 'light';

  editorOptions = { theme: 'vs', language: 'javascript' };
  code: string = 'function x() {\n\tconsole.log("Hello world 😺!");\n}';
  editor: monaco.editor.IStandaloneCodeEditor | null = null;

  constructor(
    private _appInit: AppInit
  ) {
    this._appInit.themeMode$.pipe(takeUntil(this._destroy)).subscribe((themeMode) => {
      this.themeMode = themeMode;
      if (this.editor) {
        const isDarkMode = (themeMode == 'dark') ? true : false;
        monaco.editor.setTheme(isDarkMode ? 'vs-dark' : 'vs');
        // monaco.editor.setTheme(isHighContrast && isDarkMode ? 'hc-black' : 'hc-light');
      }
    });
    this._appInit.selectedLanguage$.pipe(takeUntil(this._destroy)).subscribe((language: any) => {
      if (this.editor) {
        monaco.editor.setModelLanguage(this.editor.getModel()!, language['id']);
      }
    });
    this._appInit.appAction$.pipe(takeUntil(this._destroy)).subscribe((action) => {
      switch (action) {
        case "format-code":
          if (this.editor) this.editor.getAction('editor.action.formatDocument')?.run();
          break;
        case "scroll-to-top":
          if (this.editor) this.editor.setScrollPosition({ scrollTop: 0 });
          break;
        case "scroll-to-bottom":
          if (this.editor) {
            const lineCount = this.editor.getModel()?.getLineCount();
            this.editor.revealLine(lineCount ?? 0);
          }
          break;
        case "undo":
          if (this.editor) this.editor.trigger('undo-button', 'undo', null);
          break;
        case "redo":
          if (this.editor) this.editor.trigger('undo-button', 'redo', null);
          break;
        case "font-up":
          if (this.editor) {
            const currentFontSize = this.editor.getRawOptions().fontSize ?? 14;
            this.editor.updateOptions({ fontSize: currentFontSize + 2 });
          }
          break;
        case "font-down":
          if (this.editor) {
            const currentFontSize = this.editor.getRawOptions().fontSize ?? 14;
            this.editor.updateOptions({ fontSize: Math.max(6, currentFontSize - 2) });
          }
          break;
        case "clear-all":
          if (this.editor) this.editor.getModel()?.setValue('');
          break;
        case "json-compression":
          if (this.editor) {
            const jsonContent = this.editor.getValue();
            try {
              const jsonObject = JSON.parse(jsonContent);
              const minifiedJson = JSON.stringify(jsonObject);
              this.editor.setValue(minifiedJson);
              // Setting the monaco language as json to have highlight in string
              monaco.editor.setModelLanguage(this.editor.getModel()!, 'json');
            } catch (error) {
              console.error("Invalid JSON:", error);
            }
          }
          break;
        default:
          console.warn("No such action exists", action);
      }
    })
  }

  ngAfterViewInit(): void {
    const isDarkMode = (this.themeMode == 'dark') ? true : false;
    this.editor = monaco.editor.create(document.getElementById('monaco-container')!, {
      value: this.code,
      language: this.editorOptions.language,
      automaticLayout: true,
      theme: (isDarkMode) ? 'vs-dark' : 'vs'
    })
  }

  ngOnDestroy(): void {
    this._destroy.next(false);
    this._destroy.complete();
    this.themeMode = undefined;
  }
}
