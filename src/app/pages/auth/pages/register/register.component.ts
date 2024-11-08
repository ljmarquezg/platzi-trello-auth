import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { BackgroundComponent } from "../../components/background/background.component";
import { HeaderComponent } from "../../components/header/header.component";
import { RegisterFormComponent } from "../../components/register-form/register-form.component";
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLinkWithHref, FooterComponent, BackgroundComponent, HeaderComponent, RegisterFormComponent],
  templateUrl: './register.component.html'
})
export class RegisterComponent  {

  constructor() { }

}
