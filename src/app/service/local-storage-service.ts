import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private _localStorage: { [key: string]: any } = {};

  constructor() {
    this._localStorage = JSON.parse(localStorage.getItem('codecrack') ?? '{}');
  }

  get(key: string) {
    return this._localStorage[key];
  }

  getAll() {
    return this._localStorage;
  }

  set(key: string, value: any) {
    this._localStorage[key] = value;
    localStorage.setItem('codecrack', JSON.stringify(this._localStorage));
  }

  setAll(values: any) {
    this._localStorage = values;
    localStorage.setItem('codecrack', JSON.stringify(this._localStorage));
  }

  clear() {
    this._localStorage = {};
    localStorage.removeItem('codecrack');
  }
}
