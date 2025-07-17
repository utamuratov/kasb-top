import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  readonly API_URL = 'http://178.253.43.118:107/api';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.API_URL}/Test/get_all`);
  }

  submit(model: any) {
    return this.http.post<string>(`${this.API_URL}/Test/submit`, model);
  }
}
