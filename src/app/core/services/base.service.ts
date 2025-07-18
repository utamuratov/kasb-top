import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../models/result.model';

@Injectable({
    providedIn: 'root',
})
export class BaseService {
    readonly API_URL = 'https://api-my.firstep.uz/api';

    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get(`${this.API_URL}/Test/get_all`);
    }

    submit(model: any) {
        return this.http.post<{ resultCode: string }>(
            `${this.API_URL}/Test/submit`,
            model,
        );
    }

    discoverResult(natijaID: string) {
        return this.http.get<Result>(`${this.API_URL}/Test/result/${natijaID}`);
    }
}
