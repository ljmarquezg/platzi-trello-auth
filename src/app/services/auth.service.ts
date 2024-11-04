import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {environment} from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http: HttpClient = inject(HttpClient);
  apiUrl = environment.API_URL;

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
}