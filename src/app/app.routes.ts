import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AutosComponent } from './components/autos/autos.component';
import { NuevosComponent } from './components/nuevos/nuevos.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { AgregarAutoComponent } from './components/agregar-auto/agregar-auto.component';
import { authGuard } from './auth/auth.guard';
import { PaginaNoEncontradaComponent } from './pages/pagina-no-encontrada/pagina-no-encontrada.component'; // CORRECTO

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'autos', component: AutosComponent, canActivate: [authGuard] },
  { path: 'nuevos', component: NuevosComponent, canActivate: [authGuard] },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent, canActivate: [authGuard] },
  { path: 'agregar-auto', component: AgregarAutoComponent, canActivate: [authGuard] },
  { path: '**', component: PaginaNoEncontradaComponent } 
];
