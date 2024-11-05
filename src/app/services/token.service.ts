import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  isBrowser: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  saveToken(token: string) {
    if(!this.isBrowser) return;
    setCookie('token-trello', token, { expires: 365, path: '/' });
  }

  getToken() {
    if(!this.isBrowser) return '';

    const token = getCookie('token-trello');
    return token;
  }

  removeToken() {
    if(this.isBrowser){
      removeCookie('token-trello');
    }
  }
}
