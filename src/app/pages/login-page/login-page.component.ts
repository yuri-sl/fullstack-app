import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { UsuarioService } from '../../usuario.service';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    CheckboxModule,
    ToastModule,
    FormsModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm!: FormGroup;
  messageService = inject(MessageService);

  loading = false;
  apiError: string | null = null;

  user = {
    email: '',
    password: '',
  };

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
  onSubmit(form: any) {
    if (form.valid) {
      this.messageService.add({
        severity: 'success',
        summary: 'Sucess',
        detail: 'Formulário enviado com sucesso!',
        life: 3000,
      });
      form.resetForm();
    } else {
      this.messageService.add({
        severity: 'Failed',
        summary: 'Failed',
        detail: 'Falha em enviar o formulário!',
        life: 3000,
      });
    }
  }
  /*
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
    */
}
