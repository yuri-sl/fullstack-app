import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

const LOGIN_PATH = '/login-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    RouterModule, // necessário p/ [routerLink]
    CommonModule, // necessário p/ *ngIf
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'fullstack-app';

  // estado da UI
  isLoginPage = false;

  shortcutItems = [];
  actionItems = [
    { label: 'Configurações', icon: 'pi pi-cog', routerLink: '/config' },
    { label: 'Ajuda', icon: 'pi pi-question-circle', routerLink: '/ajuda' },
  ];

  private destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    // estado inicial
    this.setIsLogin(this.router.url);

    // atualiza a cada navegação
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((e) => this.setIsLogin(e.urlAfterRedirects));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  navegarLogin() {
    this.router.navigate([LOGIN_PATH]);
  }

  private setIsLogin(url: string) {
    const clean = url.split(/[?#]/)[0].replace(/\/+$/, '');
    this.isLoginPage = clean.endsWith(LOGIN_PATH);
  }
}
