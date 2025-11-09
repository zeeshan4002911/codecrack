import { AfterViewInit, Component, ElementRef, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppInit } from './service/app-init';
import { Popover } from 'bootstrap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit, OnDestroy {
  themeMode: string | undefined = 'light';
  
  // More Options popover variables
  popoverInstance!: Popover | undefined;
  @ViewChild('popoverBtn', { static: false }) popoverBtn!: ElementRef;
  @ViewChild('popoverContent', { static: false }) popoverContent!: TemplateRef<any>;

  constructor(
    private _appInit: AppInit
  ) {
    this._appInit.themeMode$.subscribe(val => {
      this.themeMode = val;
      this.bodyTagThemeUpdateHandler();
    });
  }

  ngAfterViewInit(): void {
    const embeddedView = this.popoverContent.createEmbeddedView(null);
    const popoverContentEl = embeddedView.rootNodes[0];

    // Initialize Bootstrap Popover for More Options
    this.popoverInstance = new Popover(this.popoverBtn.nativeElement, {
      html: true,
      content: popoverContentEl,
      customClass: 'no-padding-popover'
    });
  }

  public toggleTheme() {
    this.themeMode = (this.themeMode == 'light') ? 'dark' : 'light';
    this._appInit.toggleThemeMode(this.themeMode);
    this.bodyTagThemeUpdateHandler();
  }

  private bodyTagThemeUpdateHandler() {
    if (this.themeMode == 'dark') {
      // Dark mode by setting the bootstrap theme attribute on body
      document.body.setAttribute('data-bs-theme', 'dark');
    } else {
      document.body.setAttribute('data-bs-theme', 'light');
    }
  }

  public moreOptionHanlder(btnName: string) {

  }

  ngOnDestroy(): void {
      this.themeMode = undefined;
      this.popoverInstance = undefined;
  }
}
