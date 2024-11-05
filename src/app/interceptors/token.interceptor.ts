import {
  HttpContext,
  HttpContextToken,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { TokenService } from "@services/token.service";
import { Observable } from "rxjs";

const CHECK_TOKEN = new HttpContextToken<boolean>(() => false);

export function checkToken() {
  return new HttpContext().set(CHECK_TOKEN, true);
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private tokenService = inject(TokenService);

  intercept(req: HttpRequest<unknown>,next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(req.context.get(CHECK_TOKEN)) {
      return this.addToken(req, next);
    }
    return next.handle(req);
  }

  private addToken(req: HttpRequest<unknown>, next: HttpHandler) {
    const accessToken = this.tokenService.getToken();
    if (accessToken) {
      const authRequest = req.clone({
        headers: req.headers.set("Authorization", `Bearer ${accessToken}`),
      })
      return next.handle(authRequest);
    }

    return next.handle(req);
  }
}
