import { Component, inject, Input } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { BtnComponent } from "../../../../shared/btn/btn.component";
import { BackgroundComponent } from "../background/background.component";
import { FormBuilder, Validators } from '@angular/forms';
import { faEye, faEyeSlash, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterLinkWithHref,
    BtnComponent,
    BackgroundComponent,
],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);
  
  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
  });
  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  status: string = 'init';
}
