import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  constructor() {}
}
