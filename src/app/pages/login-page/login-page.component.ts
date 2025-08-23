import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { UsuarioService } from '../../usuario.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ButtonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm!: FormGroup; // só declaramos

  loading = false;
  apiError: string | null = null;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.loginForm = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  submit() {
    this.apiError = null;
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    const dadosLogin = this.loginForm.getRawValue();
    console.log(dadosLogin);
    this.loading = false;
  }
}
