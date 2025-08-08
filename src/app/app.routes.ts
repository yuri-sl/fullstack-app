import { Routes } from '@angular/router';
import { MinhaPaginaComponent } from './pages/minha-pagina/minha-pagina.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: 'minha-pagina', component: MinhaPaginaComponent },
  { path: 'main-page', component: MainPageComponent },
];
