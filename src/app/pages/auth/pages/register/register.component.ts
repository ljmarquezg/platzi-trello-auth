import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { BackgroundComponent } from "../../components/background/background.component";
import { HeaderComponent } from "../../components/header/header.component";
import { RegisterFormComponent } from "../../components/register-form/register-form.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FooterComponent, BackgroundComponent, HeaderComponent, RegisterFormComponent],
  templateUrl: './register.component.html'
})
export class RegisterComponent  {

  constructor() { }

}
