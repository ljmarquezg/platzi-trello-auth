
import { Component, inject } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { BtnComponent } from '../../shared/btn/btn.component';
import { AuthService } from '@services/auth.service';

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
  private authService: AuthService = inject(AuthService);
  isOpen = false;

  logout() {
    this.authService.logout();
  }
}
