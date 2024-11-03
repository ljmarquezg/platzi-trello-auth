import { Component } from '@angular/core';
import { BackgroundComponent } from "../../components/background/background.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ForgotPasswordFormComponent } from "../../components/forgot-password-form/forgot-password-form.component";

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [BackgroundComponent, HeaderComponent, FooterComponent, ForgotPasswordFormComponent],
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  constructor() {}
}
