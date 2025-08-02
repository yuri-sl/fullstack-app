import { Routes } from '@angular/router';
import { MinhaPaginaComponent } from './pages/minha-pagina/minha-pagina.component';

export const routes: Routes = [
  { path: '', redirectTo: 'minha-pagina', pathMatch: 'full' },
  { path: 'minha-pagina', component: MinhaPaginaComponent },
];
