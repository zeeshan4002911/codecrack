import { AfterViewInit, Component } from '@angular/core';
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
export class App implements AfterViewInit {
  themeMode: string = 'light';

  constructor(
    private _appInit: AppInit
  ) {
    this._appInit.themeMode$.subscribe(val => {
      this.themeMode = val;
      this.bodyTagThemeUpdateHandler();
    });
  }

  ngAfterViewInit(): void {
    const popoverTriggerList = Array.from(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    popoverTriggerList.forEach(
      (popoverTriggerEl) => new Popover(popoverTriggerEl)
    );
  }

  toggleTheme() {
    this.themeMode = (this.themeMode == 'light') ? 'dark' : 'light';
    this._appInit.toggleThemeMode(this.themeMode);
    this.bodyTagThemeUpdateHandler();
  }

  bodyTagThemeUpdateHandler() {
    if (this.themeMode == 'dark') {
      // Dark mode by setting the bootstrap theme attribute on body
      document.body.setAttribute('data-bs-theme', 'dark');
    } else {
      document.body.setAttribute('data-bs-theme', 'light');
    }
  }
}
