import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationClient {
    constructor(private http: HttpClient) { }

    public login(login: string, password: string): Observable<string> {
        return this.http.post(
            environment.apiUrl + '/auth/login',
            {
                login: login,
                password: password,
            },
            { responseType: 'text' }
        );
    }

    public register(
        login: string,
        email: string,
        password: string,
        sex: string,
        activity: string
    ): Observable<string> {
        return this.http.post(
            environment.apiUrl + '/auth/register',
            {
                login: login,
                email: email,
                password: password,
                sex: sex,
                activity: activity

            },
            { responseType: 'text' }
        );

    }
}
