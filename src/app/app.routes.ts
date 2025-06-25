import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AutosComponent } from './components/autos/autos.component';
import { NuevosComponent } from './components/nuevos/nuevos.component';
import { AutoDetalleComponent } from './components/auto-detalle/auto-detalle.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'autos', component: AutosComponent },
  { path: 'nuevos', component: NuevosComponent },
  { path: 'auto/:id', component: AutoDetalleComponent },
  { path: '**', redirectTo: '' }
];
<<<<<<< HEAD

=======
>>>>>>> cd5dae4892977b3b4e579ff5ae28d53469f49f27
