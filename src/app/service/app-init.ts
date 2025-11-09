import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppInit {
  private themeModeSubject = new BehaviorSubject<string>("light");
  themeMode$ = this.themeModeSubject.asObservable();

  toggleThemeMode(newValue: string) {
    this.themeModeSubject.next(newValue);
  }
}
