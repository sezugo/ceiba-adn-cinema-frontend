import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'cliente', loadChildren: () => import('./feature/cliente/cliente.module').then(mod => mod.ClienteModule) },
  { path: 'pelicula', loadChildren: () => import('./feature/pelicula/pelicula.module').then(mod => mod.PeliculaModule) },
  { path: 'reserva', loadChildren: () => import('./feature/reserva/reserva.module').then(mod => mod.ReservaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
