import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {environment} from '@environments/environment';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http: HttpClient = inject(HttpClient);
  apiUrl = environment.API_URL;
  credentials!: {
    email: string;
    password: string;
  }

  setCredentials(email: string, password: string) {
    this.credentials = { email, password };
  }

  getCredential() {
    return this.credentials;
  }

  login(email: string, password: string) {
      return this.http.post(
        `${this.apiUrl}/api/v1/auth/login`,
        { email, password }
      );
  }

  register(name: string, email: string, password: string) {
    return this.http.post(
      `${this.apiUrl}/api/v1/auth/register`,
      { name, email, password }
    );
  }

  registerAndLogin(name: string, email: string, password: string): Observable<Object> {
    return this.register(name, email, password).pipe(
      switchMap(() => this.login(email, password))
    );
  }

  isAvailable(email: string): Observable<{isAvailable: boolean}> {
    return this.http.post<{isAvailable: boolean}>(
      `${this.apiUrl}/api/v1/auth/is-available`,
      { email }
    );
  }
}
