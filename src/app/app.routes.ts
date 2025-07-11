import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AutosComponent } from './components/autos/autos.component';
import { AutoDetalleComponent } from './components/auto-detalle/auto-detalle.component';
import { NuevosComponent } from './components/nuevos/nuevos.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'autos', component: AutosComponent },
  { path: 'nuevos', component: NuevosComponent },
  { path: 'detalle/:id', component: AutoDetalleComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: '**', redirectTo: '' } // Ruta 404
];