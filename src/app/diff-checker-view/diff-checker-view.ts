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

  editorOptions = {
    theme: 'vs',
    language: 'javascript',
    automaticLayout: true,
    scrollBeyondLastLine: true,
    wordWrap: true // For toggling the word wrap 'on' & 'off'
  };

  originalCode: string = 'function x() {\n\tconsole.log("Hello world from left 😺!");\n}';
  modifiedCode: string = 'function x() {\n\tconsole.log("Hello world from right 😺!");\n}';
  diffChecker: monaco.editor.IStandaloneDiffEditor | null = null;

  constructor(
    private _appInit: AppInit
  ) {
    // Subscription for theme change for diff checker
    this._appInit.themeMode$.pipe(takeUntil(this._destroy)).subscribe((themeMode) => {
      const isDarkMode = (themeMode == 'dark') ? true : false;
      this.editorOptions.theme = isDarkMode ? 'vs-dark' : 'vs';
      if (this.diffChecker) {
        monaco.editor.setTheme(this.editorOptions.theme);
      }
    });

    // Subscription for language change
    this._appInit.selectedLanguage$.pipe(takeUntil(this._destroy)).subscribe((language: any) => {
      this.editorOptions.language = language['id'];
      if (this.diffChecker) {
        const models = this.diffChecker.getModel()?.modified;
        if (models) {
          monaco.editor.setModelLanguage(this.diffChecker.getModel()!.modified, language['id']);
          monaco.editor.setModelLanguage(this.diffChecker.getModel()!.original, language['id']);
        }
      }
    });

    // Subscription for more option action resolver
    this._appInit.appAction$.pipe(takeUntil(this._destroy)).subscribe((action) => {
      if (!this.diffChecker) {
        console.error("Diff Checker doesn't exists to perform action");
        return;
      }
      switch (action) {
        case "format-code":
          this.diffChecker.getOriginalEditor().getAction('editor.action.formatDocument')?.run();
          this.diffChecker.getModifiedEditor().getAction('editor.action.formatDocument')?.run();
          break;
        case "scroll-to-top":
          this.diffChecker.getOriginalEditor().setScrollPosition({ scrollTop: 0 });
          this.diffChecker.getModifiedEditor().setScrollPosition({ scrollTop: 0 });
          break;
        case "scroll-to-bottom":
          // For left side panel
          const originalEditor_sb = this.diffChecker.getOriginalEditor();
          const lineCount_1 = originalEditor_sb.getModel()?.getLineCount();
          originalEditor_sb.revealLine(lineCount_1 ?? 0);

          // For right side panel
          const modifiedEditor_sb = this.diffChecker.getModifiedEditor();
          const lineCount_2 = modifiedEditor_sb.getModel()?.getLineCount();
          modifiedEditor_sb.revealLine(lineCount_2 ?? 0);
          break;
        case "undo":
          this.diffChecker.trigger('undo-button', 'undo', null);
          break;
        case "redo":
          this.diffChecker.trigger('undo-button', 'redo', null);
          break;
        case "font-up":
          const originalEditor_fu = this.diffChecker.getOriginalEditor();
          const currFS_f1 = originalEditor_fu.getRawOptions().fontSize ?? 14;
          originalEditor_fu.updateOptions({ fontSize: currFS_f1 + 2 });

          const modifiedEditor_fu = this.diffChecker.getModifiedEditor();
          const currFS_m1 = modifiedEditor_fu.getRawOptions().fontSize ?? 14;
          modifiedEditor_fu.updateOptions({ fontSize: currFS_m1 + 2 });
          break;
        case "font-down":
          const originalEditor_fd = this.diffChecker.getOriginalEditor();
          const currFS_f2 = originalEditor_fd.getRawOptions().fontSize ?? 14;
          originalEditor_fd.updateOptions({ fontSize: Math.max(6, currFS_f2 - 2) });

          const modifiedEditor_fd = this.diffChecker.getModifiedEditor();
          const currFS_m2 = modifiedEditor_fd.getRawOptions().fontSize ?? 14;
          modifiedEditor_fd.updateOptions({ fontSize: Math.max(6, currFS_m2 - 2) });
          break;
        case "clear-all":
          // Triggering undo stack and executing edit to empty editor

          // For left side panel
          const originalEditor_ca = this.diffChecker.getOriginalEditor()
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
          const modifiedEditor_ca = this.diffChecker.getModifiedEditor()
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
          const originalEditor_jc = this.diffChecker.getOriginalEditor();
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

          const modifiedEditor_jc = this.diffChecker.getModifiedEditor();
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
          this.editorOptions.wordWrap = !this.editorOptions.wordWrap;
          this.diffChecker.updateOptions({
            wordWrap: this.editorOptions.wordWrap ? 'on' : 'off'
          })
          break;
        default:
          console.warn("No such action exists", action);
      }
    })
  }

  ngAfterViewInit(): void {
    this.diffChecker = monaco.editor.createDiffEditor(document.getElementById('diff-checker-container')!, {
      enableSplitViewResizing: true,
      renderSideBySide: true,
      readOnly: false,
      originalEditable: true,
      automaticLayout: this.editorOptions.automaticLayout,
      scrollBeyondLastLine: this.editorOptions.scrollBeyondLastLine,
      wordWrap: this.editorOptions.wordWrap ? 'on' : 'off',
      theme: this.editorOptions.theme
    });
    const originalModel = monaco.editor.createModel(this.originalCode, this.editorOptions.language);
    const modifiedModel = monaco.editor.createModel(this.modifiedCode, this.editorOptions.language);

    this.diffChecker.setModel({
      original: originalModel,
      modified: modifiedModel
    })
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
    if (this.diffChecker) this.diffChecker.dispose();
  }
}
