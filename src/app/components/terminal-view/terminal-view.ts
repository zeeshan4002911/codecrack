import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terminal-view',
  imports: [CommonModule],
  templateUrl: './terminal-view.html',
  styleUrl: './terminal-view.scss',
})
export class TerminalView implements OnInit, AfterViewInit, OnDestroy {
  @Input() viewContainer!: ElementRef | undefined;

  position = { top: 50, left: 50 };
  size = { width: 300, height: 200 };
  dragStart = { x: 0, y: 0 };
  isResizableEnable: boolean = true;
  isDraggableEnable: boolean = true;
  isResizing: boolean = false;
  isDragging: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

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
    const margin = 50;
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
    this.position = { top: 0, left: 0 };
    this.size = { width: 0, height: 0 };
    this.dragStart = { x: 0, y: 0 };
    this.isResizing = false;
    this.isDragging = false;
  }
}
