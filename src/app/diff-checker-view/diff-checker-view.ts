import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import * as monaco from 'monaco-editor';
import { AppInit } from '@/service/app-init';

@Component({
  selector: 'app-diff-checker-view',
  imports: [],
  templateUrl: './diff-checker-view.html',
  styleUrl: './diff-checker-view.scss',
})
export class DiffCheckerView implements AfterViewInit, OnDestroy {
  private _destroy: Subject<boolean> = new Subject<boolean>();
  private diffEditorInstance: monaco.editor.IStandaloneDiffEditor | null = null;

  constructor(
    private _appInit: AppInit
  ) {
    // Subscription for theme change for diff checker
    this._appInit.themeMode$.pipe(takeUntil(this._destroy)).subscribe((themeMode) => {
      const isDarkMode = (themeMode == 'dark') ? true : false;
      this._appInit.editorOptions.theme = isDarkMode ? 'vs-dark' : 'vs';
      if (this.diffEditorInstance) {
        monaco.editor.setTheme(this._appInit.editorOptions.theme);
      }
    });

    // Subscription for language change
    this._appInit.selectedLanguage$.pipe(takeUntil(this._destroy)).subscribe((language: any) => {
      this._appInit.editorOptions.language = language['id'];
      if (this.diffEditorInstance) {
        const models = this.diffEditorInstance.getModel()?.modified;
        if (models) {
          monaco.editor.setModelLanguage(this.diffEditorInstance.getModel()!.modified, language['id']);
          monaco.editor.setModelLanguage(this.diffEditorInstance.getModel()!.original, language['id']);
        }
      }
    });

    // Subscription for more option action resolver
    this._appInit.appAction$.pipe(takeUntil(this._destroy)).subscribe((action) => {
      if (!this.diffEditorInstance) {
        console.error("Diff Checker doesn't exists to perform action");
        return;
      }
      switch (action) {
        case "format-code":
          this.diffEditorInstance.getOriginalEditor().getAction('editor.action.formatDocument')?.run();
          this.diffEditorInstance.getModifiedEditor().getAction('editor.action.formatDocument')?.run();
          break;
        case "scroll-to-top":
          this.diffEditorInstance.getOriginalEditor().setScrollPosition({ scrollTop: 0 });
          this.diffEditorInstance.getModifiedEditor().setScrollPosition({ scrollTop: 0 });
          break;
        case "scroll-to-bottom":
          // For left side panel
          const originalEditor_sb = this.diffEditorInstance.getOriginalEditor();
          const lineCount_1 = originalEditor_sb.getModel()?.getLineCount();
          originalEditor_sb.revealLine(lineCount_1 ?? 0);

          // For right side panel
          const modifiedEditor_sb = this.diffEditorInstance.getModifiedEditor();
          const lineCount_2 = modifiedEditor_sb.getModel()?.getLineCount();
          modifiedEditor_sb.revealLine(lineCount_2 ?? 0);
          break;
        case "undo":
          this.diffEditorInstance.trigger('undo-button', 'undo', null);
          break;
        case "redo":
          this.diffEditorInstance.trigger('undo-button', 'redo', null);
          break;
        case "font-up":
        case "font-down":
          const originalEditor_fu = this.diffEditorInstance.getOriginalEditor();
          originalEditor_fu.updateOptions({ fontSize: this._appInit.editorOptions.fontSize });

          const modifiedEditor_fu = this.diffEditorInstance.getModifiedEditor();
          modifiedEditor_fu.updateOptions({ fontSize: this._appInit.editorOptions.fontSize });
          break;
        case "clear-all":
          // Triggering undo stack and executing edit to empty editor

          // For left side panel
          const originalEditor_ca = this.diffEditorInstance.getOriginalEditor()
          originalEditor_ca.pushUndoStop();
          originalEditor_ca.executeEdits(
            'clear-all',
            [
              {
                range: originalEditor_ca.getModel()!.getFullModelRange(),
                text: '',
                forceMoveMarkers: true
              }
            ]
          )
          originalEditor_ca.pushUndoStop();

          // For right side panel
          const modifiedEditor_ca = this.diffEditorInstance.getModifiedEditor()
          modifiedEditor_ca.pushUndoStop();
          modifiedEditor_ca.executeEdits(
            'clear-all',
            [
              {
                range: modifiedEditor_ca.getModel()!.getFullModelRange(),
                text: '',
                forceMoveMarkers: true
              }
            ]
          )
          modifiedEditor_ca.pushUndoStop();
          break;
        case "json-compression":
          const originalEditor_jc = this.diffEditorInstance.getOriginalEditor();
          const jsonContent_jcl = originalEditor_jc.getValue();
          try {
            const jsonObject = JSON.parse(jsonContent_jcl);
            const minifiedJson = JSON.stringify(jsonObject);
            originalEditor_jc.setValue(minifiedJson);
            // Setting the monaco language as json to have highlight in string
            monaco.editor.setModelLanguage(originalEditor_jc.getModel()!, 'json');
          } catch (error) {
            console.error("Invalid Left JSON:", error);
          }

          const modifiedEditor_jc = this.diffEditorInstance.getModifiedEditor();
          const jsonContent_jc2 = modifiedEditor_jc.getValue();
          try {
            const jsonObject = JSON.parse(jsonContent_jc2);
            const minifiedJson = JSON.stringify(jsonObject);
            modifiedEditor_jc.setValue(minifiedJson);
            // Setting the monaco language as json to have highlight in string
            monaco.editor.setModelLanguage(modifiedEditor_jc.getModel()!, 'json');
          } catch (error) {
            console.error("Invalid Right JSON:", error);
          }
          break;
        case "word-wrap-toggle":
          this.diffEditorInstance.updateOptions({
            wordWrap: this._appInit.editorOptions.wordWrap ? 'on' : 'off'
          })
          break;
        default:
          console.warn("No such action exists", action);
      }
    });
  }

  ngAfterViewInit(): void {
    this.diffEditorInstance = monaco.editor.createDiffEditor(document.getElementById('diff-checker-container')!, {
      enableSplitViewResizing: true,
      renderSideBySide: true,
      readOnly: false,
      originalEditable: true,
      automaticLayout: this._appInit.editorOptions.automaticLayout,
      scrollBeyondLastLine: this._appInit.editorOptions.scrollBeyondLastLine,
      wordWrap: this._appInit.editorOptions.wordWrap ? 'on' : 'off',
      theme: this._appInit.editorOptions.theme,
      fontSize: this._appInit.editorOptions.fontSize
    });
    const originalModel = monaco.editor.createModel(this._appInit.originalCode, this._appInit.editorOptions.language);
    const modifiedModel = monaco.editor.createModel(this._appInit.modifiedCode, this._appInit.editorOptions.language);

    this.diffEditorInstance.setModel({
      original: originalModel,
      modified: modifiedModel
    });

    // Listening for the changes in diff original left panel and update it
    const originalEditor = this.diffEditorInstance.getOriginalEditor();
    originalEditor.onDidChangeModelContent(() => {
      const code = originalEditor.getValue() ?? "";
      this._appInit.setOriginalCode(code);
    });

    // Listening for the changes in diff modified right panel and update it
    const modifiedEditor = this.diffEditorInstance.getModifiedEditor();
    modifiedEditor.onDidChangeModelContent(() => {
      const code = modifiedEditor.getValue() ?? "";
      this._appInit.setModifiedCode(code);
    });
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
    if (this.diffEditorInstance) this.diffEditorInstance.dispose();
  }
}
