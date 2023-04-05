import { environment } from 'src/app/environments';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class GoalsClient {
    constructor(private http: HttpClient) { }

    getGoals(): Observable<any> {
        return this.http.get(environment.apiUrl + '/api/goals');
    }
}
