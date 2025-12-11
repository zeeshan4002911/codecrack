import { AppInit } from '@/service/app-init';
import { Component, OnDestroy, OnInit, Signal, signal } from '@angular/core';
import { NgWhiteboardComponent, WhiteboardConfig, NgWhiteboardService } from 'ng-whiteboard';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-whiteboard-view',
  imports: [NgWhiteboardComponent],
  providers: [NgWhiteboardService],
  templateUrl: './whiteboard-view.html',
  styleUrl: './whiteboard-view.scss',
})
export class WhiteboardView implements OnInit, OnDestroy {
  private _destroy: Subject<boolean> = new Subject<boolean>();
  // private _whiteboardService = Inject(NgWhiteboardService);
  public boardId = "my-whiteboard";

  whiteboardConfig = signal<Partial<WhiteboardConfig>>({
    fullScreen: true,
    backgroundColor: '#fff',
    strokeColor: '#000'
  })

  private isWhiteboardInitilized: boolean = false;

  constructor(
    private _appInit: AppInit,
    private _whiteboardService: NgWhiteboardService
  ) {
    // Subscription for theme change for diff checker
    this._appInit.themeMode$.pipe(takeUntil(this._destroy)).subscribe((themeMode) => {
      const isDarkMode = (themeMode == 'dark') ? true : false;
      this._appInit.editorOptions.theme = isDarkMode ? 'vs-dark' : 'vs';
      this.whiteboardConfig.update(cfg => (
        {
          ...cfg,
          backgroundColor: (isDarkMode) ? '#000' : '#FFF',
          strokeColor: (isDarkMode) ? '#FFF' : '#000'
        }
      ));
    });

    // Subscription for more option action resolver
    this._appInit.appAction$.pipe(takeUntil(this._destroy)).subscribe((data: any) => {
      if (!this.isWhiteboardInitilized) {
        console.error("Whiteboard doesn't exists to perform action");
        return;
      }
      const { action, paylod } = data;
      switch (action) {
        case "scroll-to-top":

          break;
        case "scroll-to-bottom":

          break;
        case "undo":
          this._whiteboardService.undo();
          break;
        case "redo":
          this._whiteboardService.redo();
          break;
        case "font-up":
        case "font-down":

          break;
        case "clear-all":
          this._whiteboardService.clear();
          break;
        case "word-wrap-toggle":

          break;
        default:
          console.warn("No such action exists", action);
      }
    });
  }

  ngOnInit(): void {
    this._whiteboardService.setActiveBoard(this.boardId);
  }

  public onWhiteBoardReady() {
    this.isWhiteboardInitilized = true;
  }

  ngOnDestroy(): void {
    this._destroy.next(false);
    this._destroy.complete();
    this.isWhiteboardInitilized = false;
  }
}
