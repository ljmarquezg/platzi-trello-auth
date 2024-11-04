import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { CustomValidators } from '@utils/validators';
import { BtnComponent } from "@shared/btn/btn.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from '@services/auth.service';
import { RequestStatus } from '@models/request-status.model';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
    BtnComponent
],
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  private authService: AuthService = inject(AuthService);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private router: Router = inject(Router);

  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validators: [ CustomValidators.MatchValidator('password', 'confirmPassword') ]
  });
  status: RequestStatus = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  errorMessage: string = '';

  register() {
    console.log('test');
    if (this.form.valid) {
      this.status = 'loading';
      const { name, email, password } = this.form.getRawValue();
      this.authService.register(name, email, password).subscribe({
        next: () => {
            this.router.navigate(['/login']);
        },
        error: (error) => {
          this.status = 'failed';
          if(error.error.name === 'QueryFailedError') {
            this.errorMessage = 'Email already exists';
          } else {
            this.errorMessage = error.error.message;
          }
          console.log(error);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
