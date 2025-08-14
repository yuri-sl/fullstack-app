import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext'; // se usar pInputText
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs/operators';

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
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  onLoginPage = false;
  ngOnInit(): void {
    this.verificarPagLogin();

    //Verificação sempre que a rota mudar
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        console.log(
          'URL: ',
          event.url,
          ' | afterRedirects:',
          event.urlAfterRedirects
        );

        const isLogin = event.urlAfterRedirects.startsWith('/login-page');
        if (isLogin) {
          console.log("We're at LoginPage");
        }
        this.onLoginPage = event.url.includes('/login-page');
      });
  }
  title = 'fullstack-app';
  shortcutItems = [];
  actionItems = [
    { label: 'Configurações', icon: 'pi pi-cog', routerLink: '/config' },
    { label: 'Ajuda', icon: 'pi pi-question-circle', routerLink: '/ajuda' },
  ];
  navegarLogin() {
    this.router.navigate(['/fazer-login']);
  }
  verificarPagLogin() {
    console.log('The function was called');
    console.log(this.router.url);
    if (this.router.url.includes('/login-page')) {
      console.log("We're in loginPage");
      this.onLoginPage = true;
    }
  }
}
