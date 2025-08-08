import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

let clientes = [
  { nome: 'Maria', email: 'maria@email.com' },
  { nome: 'João', email: 'joao@email.com' },
];
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ButtonModule, InputTextModule, TableModule, ToastModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
