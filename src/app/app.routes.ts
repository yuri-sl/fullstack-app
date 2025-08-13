import { Routes } from '@angular/router';
import { MinhaPaginaComponent } from './pages/minha-pagina/minha-pagina.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: 'minha-pagina', component: MinhaPaginaComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'login-page', component: LoginPageComponent },
];
