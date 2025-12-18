import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terminal-view',
  imports: [CommonModule],
  templateUrl: './terminal-view.html',
  styleUrl: './terminal-view.scss',
})
export class TerminalView implements OnInit, AfterViewInit, OnDestroy {

  position = { top: 50, left: 50 };
  size = { width: 300, height: 200 };
  dragStart = { x: 0, y: 0 };
  isResizing: boolean = false;
  isDragging: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

  }
  ngOnDestroy(): void {
    this.position = { top: 0, left: 0 };
    this.size = { width: 0, height: 0 };
    this.dragStart = { x: 0, y: 0 };
    this.isResizing = false;
    this.isDragging = false;
  }

  // This method initializes the drag event when mouse is pressed
  dragStartHandler(event: MouseEvent | TouchEvent): void {
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
    this.isResizing = true;
  }

  // Mouse move handler for dragging and resizing
  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  _f1(event: MouseEvent | TouchEvent): void {
    const clientX = (event instanceof MouseEvent) ? event.clientX : event.touches[0].clientX;
    const clientY = (event instanceof MouseEvent) ? event.clientY : event.touches[0].clientY;
    if (this.isResizing) {
      this.size.width = clientX - this.position.left;
      this.size.height = clientY - this.position.top;
    } else if (this.isDragging) {
      this.position.left = clientX - this.dragStart.x;
      this.position.top = clientY - this.dragStart.y;
      this.checkStickPosition();
    }
  }

  // Mouse up handler for stopping drag/resize
  @HostListener('document:mouseup')
  @HostListener('document:touchend')
  _f2(): void {
    this.isDragging = false;
    this.isResizing = false;
  }

  // Stick to the sides when dragged close
  checkStickPosition(): void {
    const margin = 50;
    const viewContainerHeight = document.getElementById('view-container')?.offsetHeight ?? 0;
    const viewContainerWidth = document.getElementById('view-container')?.offsetWidth ?? 0;
    const screenWidth = viewContainerWidth;
    const screenHeight = viewContainerHeight;

    if (this.position.left < margin) {
      this.position.left = 0; // stick to the left
    } else if (this.position.left + this.size.width > screenWidth - margin) {
      this.position.left = screenWidth - this.size.width; // stick to the right
    }

    if (this.position.top < margin) {
      this.position.top = 0; // stick to the top
    } else if (this.position.top + this.size.height > screenHeight - margin) {
      this.position.top = screenHeight - this.size.height; // stick to the bottom
    }
  }
}
