import { AfterViewInit, Component, HostListener, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
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
export class EditorView implements AfterViewInit, OnDestroy, OnChanges {
  private _destroy: Subject<boolean> = new Subject<boolean>();
  private editorInstance: monaco.editor.IStandaloneCodeEditor | null = null;
  @Input() size = { width: 0, height: 0 };

  constructor(
    private _appInit: AppInit
  ) {
    // Subscription for theme change for diff checker
    this._appInit.themeMode$.pipe(takeUntil(this._destroy)).subscribe((themeMode) => {
      const isDarkMode = (themeMode == 'dark') ? true : false;
      this._appInit.editorOptions.theme = isDarkMode ? 'vs-dark' : 'vs';
      if (this.editorInstance) {
        monaco.editor.setTheme(this._appInit.editorOptions.theme);
        // monaco.editor.setTheme(isHighContrast && isDarkMode ? 'hc-black' : 'hc-light');
      }
    });

    // Subscription for language change
    this._appInit.selectedLanguage$.pipe(takeUntil(this._destroy)).subscribe((language: any) => {
      this._appInit.editorOptions.language = language['id'];
      if (this.editorInstance) {
        monaco.editor.setModelLanguage(this.editorInstance.getModel()!, language['id']);
      }
    });

    // Subscription for more option action resolver
    this._appInit.appAction$.pipe(takeUntil(this._destroy)).subscribe((data: any) => {
      if (!this.editorInstance) {
        console.error("Editor doesn't exists to perform action");
        return;
      }
      const { action, paylod } = data;
      switch (action) {
        case "format-code":
          this.editorInstance.getAction('editor.action.formatDocument')?.run();
          break;
        case "scroll-to-top":
          this.editorInstance.setScrollPosition({ scrollTop: 0 });
          break;
        case "scroll-to-bottom":
          const lineCount = this.editorInstance.getModel()?.getLineCount();
          this.editorInstance.revealLine(lineCount ?? 0);
          break;
        case "undo":
          this.editorInstance.trigger('undo-button', 'undo', null);
          break;
        case "redo":
          this.editorInstance.trigger('undo-button', 'redo', null);
          break;
        case "font-up":
        case "font-down":
          this.editorInstance.updateOptions({ fontSize: this._appInit.editorOptions.fontSize });
          break;
        case "clear-all":
          // Triggering undo stack and executing edit to empty editor
          this.editorInstance.pushUndoStop();
          this.editorInstance.executeEdits(
            'clear-all',
            [
              {
                range: this.editorInstance.getModel()!.getFullModelRange(),
                text: '',
                forceMoveMarkers: true
              }
            ]
          )
          this.editorInstance.pushUndoStop();
          break;
        case "json-compression":
          const jsonContent = this.editorInstance.getValue();
          try {
            const jsonObject = JSON.parse(jsonContent);
            const minifiedJson = JSON.stringify(jsonObject);
            this.editorInstance.setValue(minifiedJson);
            // Setting the monaco language as json to have highlight in string
            monaco.editor.setModelLanguage(this.editorInstance.getModel()!, 'json');
          } catch (error) {
            console.error("Invalid JSON:", error);
          }
          break;
        case "word-wrap-toggle":
          this.editorInstance.updateOptions({
            wordWrap: this._appInit.editorOptions.wordWrap ? 'on' : 'off'
          })
          break;
        default:
          console.warn("No such action exists", action);
      }
    });

    // Subscribe for update of editor options and code
    this._appInit.editorUpdate$.pipe(takeUntil(this._destroy)).subscribe(() => {
      if (this.editorInstance) {
        this.editorInstance.updateOptions({
          automaticLayout: this._appInit.editorOptions.automaticLayout,
          scrollBeyondLastLine: this._appInit.editorOptions.scrollBeyondLastLine,
          wordWrap: this._appInit.editorOptions.wordWrap ? 'on' : 'off',
          fontSize: this._appInit.editorOptions.fontSize
        });
        this.editorInstance.setValue(this._appInit.editorCode);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['size'] && !changes['size'].isFirstChange()) {
      if (this.editorInstance) {
        this.editorInstance.layout();
      }
    }
  }

  ngAfterViewInit(): void {
    this.editorInstance = monaco.editor.create(document.getElementById('monaco-container')!, {
      value: this._appInit.editorCode,
      language: this._appInit.editorOptions.language,
      automaticLayout: this._appInit.editorOptions.automaticLayout,
      scrollBeyondLastLine: this._appInit.editorOptions.scrollBeyondLastLine,
      wordWrap: this._appInit.editorOptions.wordWrap ? 'on' : 'off',
      theme: this._appInit.editorOptions.theme,
      fontSize: this._appInit.editorOptions.fontSize
    });

    // Listening for the changes in editor and update it
    this.editorInstance?.onDidChangeModelContent(() => {
      const code = this.editorInstance?.getValue() ?? "";
      this._appInit.setEditorCode(code);
    });

    // Saving the view state for scroll position, expand methods, etc.
    const editorCacheState = this._appInit.editorStateStore['editor'];
    if (editorCacheState) {
      this.editorInstance.restoreViewState(editorCacheState);
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Toggle word wrap on Alt + Z key combination
    if (event.altKey && event.key.toLowerCase() == 'z' && !event.shiftKey) {
      this._appInit.dispatchAction('word-wrap-toggle');
    }
  }

  ngOnDestroy(): void {
    this._destroy.next(false);
    this._destroy.complete();
    if (this.editorInstance) {
      // Saving the view state for scroll position, expand methods, etc.
      const state = this.editorInstance.saveViewState();
      this._appInit.setEditorState({ "editor": state });
      this.editorInstance.dispose();
    }
  }
}
