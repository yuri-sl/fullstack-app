import { Routes } from '@angular/router';
import { MinhaPaginaComponent } from './pages/minha-pagina/minha-pagina.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { InfoPageComponent } from './pages/customer-page/info-page/info-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: 'minha-pagina', component: MinhaPaginaComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'customer-page', component: CustomerPageComponent },
  { path: 'info-page', component: InfoPageComponent },
];
