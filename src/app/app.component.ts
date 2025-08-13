import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext'; // se usar pInputText
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {}

  title = 'fullstack-app';
  shortcutItems = [];
  actionItems = [
    { label: 'Configurações', icon: 'pi pi-cog', routerLink: '/config' },
    { label: 'Ajuda', icon: 'pi pi-question-circle', routerLink: '/ajuda' },
  ];
  navegarLogin() {
    this.router.navigate(['/fazer-login']);
  }
}
