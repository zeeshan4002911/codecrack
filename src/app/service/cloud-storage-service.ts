import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CloudStorageService {
  // Driven by env variable of vite
  private apiUrl = import.meta.env.VITE_API_URL;

  constructor(
    private _https: HttpClient
  ) { }

  pullCodeHandler(codeShareId: string): Observable<any> {
    return this._https.get(`${this.apiUrl}/pull?codeShareId=${codeShareId}`);
  }

  pushCodeHandler(data: any): Observable<any> {
    return this._https.post(`${this.apiUrl}/push`, data);
  }
}
