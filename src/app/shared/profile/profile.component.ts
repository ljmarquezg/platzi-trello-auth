
import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { BtnComponent } from '../../shared/btn/btn.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    BtnComponent,
    OverlayModule
],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  isOpen = false;
}
