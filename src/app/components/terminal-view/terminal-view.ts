import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInit } from '@/service/app-init';
import { Subject, takeUntil } from 'rxjs';
import { CodeRunnerService } from './code-runner-service';

@Component({
  selector: 'app-terminal-view',
  imports: [CommonModule],
  templateUrl: './terminal-view.html',
  styleUrl: './terminal-view.scss',
})
export class TerminalView implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  private _destroy: Subject<boolean> = new Subject<boolean>();
  @Input() viewContainer!: ElementRef | undefined;
  @Input() selectedLayout: string = "";
  @Output() sizeUpdateEvent = new EventEmitter<{ width: number, height: number }>();
  @Output() layoutUpdateEvent = new EventEmitter<string>();

  position = { top: 50, left: 50 };
  defaultSize = { width: 300, height: 200, minWidth: 100, minHeight: 100 };
  size = { width: 300, height: 200 };
  dragStart = { x: 0, y: 0 };
  isResizableEnable: boolean = true;
  isDraggableEnable: boolean = true;
  isResizing: boolean = false;
  isDragging: boolean = false;
  isDarkMode: boolean = false;

  output: string = "";
  waitingForInput: boolean = false;
  workerStatus: boolean = false;
  selectedLanguage: any = {};
  terminalFontSize: number | undefined = 16;

  constructor(
    private _appInit: AppInit,
    private _codeRunner: CodeRunnerService
  ) {
    // Subscription for theme change
    this._appInit.themeMode$.pipe(takeUntil(this._destroy)).subscribe((themeMode) => {
      const isDarkMode = (themeMode == 'dark') ? true : false;
      this._appInit.editorOptions.theme = isDarkMode ? 'vs-dark' : 'vs';
      this.isDarkMode = isDarkMode;
    });

    // Subscribe for update of editor options and code
    this._appInit.editorUpdate$.pipe(takeUntil(this._destroy)).subscribe(() => {
      this.terminalFontSize = this._appInit.editorOptions.fontSize;
    });

    // Subscription for language change
    this._appInit.selectedLanguage$.pipe(takeUntil(this._destroy)).subscribe((language: any) => {
      this.selectedLanguage = language;
    });

    // Subscription for output and user input from worker
    this._codeRunner.output$.pipe(takeUntil(this._destroy)).subscribe(
      output => this.output = output
    );
    this._codeRunner.waitingForInput$.pipe(takeUntil(this._destroy)).subscribe(
      waitingForInput => this.waitingForInput = waitingForInput
    );
    this._codeRunner.workerStatus$.pipe(takeUntil(this._destroy)).subscribe(
      status => this.workerStatus = status
    )
  }

  // On click of enter passing the user input to running worker
  submit(event: any) {
    this.waitingForInput = false;
    this._codeRunner.sendInput(event.target.value);
    event.target.value = '';
  }

  // Starting the code execution
  runCode() {
    if (!this.workerStatus) {
      console.warn("Worker is not ready to use.")
      return;
    }
    const code = this._appInit.editorCode;
    this._codeRunner.run(code);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['viewContainer'] && !changes['viewContainer'].isFirstChange()) {
      const screenHeight = this.viewContainer?.nativeElement?.offsetHeight ?? 0;
      this.position.top = screenHeight - this.size.height;
      this.position.left = 0;
    }
    if (changes['selectedLayout']) {
      this.layoutChangeHandler(this.selectedLayout);
    }
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event | null): void {
    this.layoutChangeHandler(this.selectedLayout);
  }

  layoutChangeHandler(layoutName: string): void {
    this.selectedLayout = layoutName;
    this.layoutUpdateEvent.emit(this.selectedLayout);
    const screenHeight = this.viewContainer?.nativeElement?.offsetHeight ?? 0;
    const screenWidth = this.viewContainer?.nativeElement?.offsetWidth ?? 0;
    this.isDraggableEnable = false;
    if (layoutName == "bottom") {
      this.position.top = screenHeight - this.size.height;
      this.position.left = 0;
      this.size.width = screenWidth;
      this.size.height = this.defaultSize.height;
      this.sizeUpdateEvent.emit({ ...this.size });
    } else if (layoutName == "left") {
      this.position.top = 0;
      this.position.left = 0;
      this.size.height = screenHeight;
      this.size.width = this.defaultSize.width;
      this.sizeUpdateEvent.emit({ ...this.size });
    } else if (layoutName == "right") {
      this.position.top = 0;
      this.position.left = screenWidth - this.size.width;
      this.size.height = screenHeight;
      this.size.width = this.defaultSize.width;
      this.sizeUpdateEvent.emit({ ...this.size });
    } else if (layoutName == "separate-window") {
      this.isDraggableEnable = true;
      this.size = { ... this.defaultSize };
      this.position = { top: 50, left: 50 };
      this.sizeUpdateEvent.emit({ width: 0, height: 0 });
    }
  }

  // This method initializes the drag event when mouse is pressed or touch start
  dragStartHandler(event: MouseEvent | TouchEvent): void {
    if (!this.isDraggableEnable) return;
    this.isDragging = true;
    const clientX = (event instanceof MouseEvent) ? event.clientX : event.touches[0].clientX;
    const clientY = (event instanceof MouseEvent) ? event.clientY : event.touches[0].clientY;
    this.dragStart.x = clientX - this.position.left;
    this.dragStart.y = clientY - this.position.top;
    event.preventDefault();
  }

  // This method starts the resizing event when mouse is pressed on the resize handle
  resizeStartHandler(event: MouseEvent | TouchEvent): void {
    event.preventDefault();
    if (this.isResizableEnable) this.isResizing = true;
  }

  // Mouse or touch move handler for dragging and resizing
  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  _f1(event: MouseEvent | TouchEvent): void {
    const clientX = (event instanceof MouseEvent) ? event.clientX : event.touches[0].clientX;
    const clientY = (event instanceof MouseEvent) ? event.clientY : event.touches[0].clientY;
    if (this.isResizing) {
      const screenHeight = this.viewContainer?.nativeElement?.offsetHeight ?? 0;
      const screenWidth = this.viewContainer?.nativeElement?.offsetWidth ?? 0;

      if (this.selectedLayout == "bottom") {
        const appHeader = document.getElementById('app-header')?.offsetHeight ?? 0;
        let newTop = clientY - appHeader;
        let newHeight = screenHeight - this.position.top;
        // Restrict the top to not go beyond the app header and not below the default size
        newTop = Math.min(Math.max(0, newTop), screenHeight - this.defaultSize.minHeight);
        newHeight = Math.max(this.defaultSize.minHeight, newHeight);

        this.position.top = newTop;
        this.size.height = newHeight;
        this.sizeUpdateEvent.emit({ ...this.size });
      } else if (this.selectedLayout == "right") {
        let newLeft = clientX;
        let newWidth = screenWidth - this.position.left;
        newLeft = Math.min(Math.max(0, newLeft), screenWidth - this.defaultSize.minWidth);
        newWidth = Math.max(this.defaultSize.minWidth, newWidth);

        this.position.left = newLeft;
        this.size.width = newWidth;
        this.sizeUpdateEvent.emit({ ...this.size });
      } else if (this.selectedLayout == "left") {
        let newWidth = clientX;
        newWidth = Math.max(this.defaultSize.minWidth, Math.min(newWidth, screenWidth));

        this.size.width = newWidth;
        this.sizeUpdateEvent.emit({ ...this.size });
      } else if (this.selectedLayout == "separate-window") {
        let newWidth = clientX - this.position.left;
        let newHeight = clientY - this.position.top;

        // Restrict width and height to not exceed screen or container dimensions
        newWidth = Math.min(newWidth, screenWidth - this.position.left);
        newHeight = Math.min(newHeight, screenHeight - this.position.top);

        const minWidth = 300;
        const minHeight = 200;
        newWidth = Math.max(newWidth, minWidth);
        newHeight = Math.max(newHeight, minHeight);

        // Update size with new constrained values
        this.size.width = newWidth;
        this.size.height = newHeight;
      }
    } else if (this.isDragging) {
      this.position.left = clientX - this.dragStart.x;
      this.position.top = clientY - this.dragStart.y;
      this.checkStickPosition();
    }
  }

  // Mouse up or touch end handler for stopping drag/resize
  @HostListener('document:mouseup')
  @HostListener('document:touchend')
  _f2(): void {
    this.isDragging = false;
    this.isResizing = false;
  }

  // Stick to the sides when dragged close
  checkStickPosition(): void {
    const margin = 5;
    const screenHeight = this.viewContainer?.nativeElement?.offsetHeight ?? 0;
    const screenWidth = this.viewContainer?.nativeElement?.offsetWidth ?? 0;

    if (this.position.left < margin) {
      // stick to the left
      this.position.left = 0;
    } else if (this.position.left + this.size.width > screenWidth - margin) {
      // stick to the right
      this.position.left = screenWidth - this.size.width;
    }

    if (this.position.top < margin) {
      // stick to the top
      this.position.top = 0;
    } else if (this.position.top + this.size.height > screenHeight - margin) {
      // stick to the bottom
      this.position.top = screenHeight - this.size.height;
    }
  }

  ngOnDestroy(): void {
    this._destroy.next(false);
    this._destroy.complete();
    this.position = { top: 0, left: 0 };
    this.size = { width: 0, height: 0 };
    this.dragStart = { x: 0, y: 0 };
    this.isResizing = false;
    this.isDragging = false;
    this.output = "";
    this.waitingForInput = false;
    this.workerStatus = false;
    this.selectedLanguage = {};
    this.terminalFontSize = undefined;
  }
}
