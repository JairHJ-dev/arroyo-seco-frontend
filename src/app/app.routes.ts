import { Routes } from '@angular/router';
import { ListaAlojamientosComponent } from './alojamiento/components/lista-alojamientos/lista-alojamientos.component';
import { DashboardOferenteComponent } from './alojamiento/components/dashboard-oferente/dashboard-oferente.component';
import { DetalleAlojamientoComponent } from './alojamiento/components/detalle-alojamiento/detalle-alojamiento.component';
import { FormRegistroAlojamientoComponent } from './alojamiento/components/form-registro-alojamiento/form-registro-alojamiento.component';
import { AdminOferentesComponent } from './alojamiento/components/admin-oferentes/admin-oferentes.component';
import { DashboardGastronomiaComponent } from './gastronomia/components/dashboard-gastronomia/dashboard-gastronomia.component';
import { ListaGastronomiaComponent } from './gastronomia/components/lista-gastronomia/lista-gastronomia.component';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  {
    path: 'alojamiento',
    children: [
      { path: 'lista', component: ListaAlojamientosComponent },
      { path: 'dashboard', component: DashboardOferenteComponent, canActivate: [authGuard] },
      { path: 'detalle/:id', component: DetalleAlojamientoComponent },
      { path: 'registro', component: FormRegistroAlojamientoComponent, canActivate: [authGuard] },
      { path: 'admin', component: AdminOferentesComponent, canActivate: [adminGuard] },
      { path: '', redirectTo: 'lista', pathMatch: 'full' }
    ]
  },
  {
    path: 'gastronomia',
    children: [
      { path: 'lista', component: ListaGastronomiaComponent },
      { path: 'dashboard', component: DashboardGastronomiaComponent },
      { path: '', redirectTo: 'lista', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/alojamiento/lista', pathMatch: 'full' },
  { path: '**', redirectTo: '/alojamiento/lista' }
];