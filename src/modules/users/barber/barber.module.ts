import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { RouterModule, Routes } from '@angular/router';

// import guards to veryfy routing request
import { AuthGuard } from '../../../guards/auth/auth.guard';
import { RoleAccessGuard } from '../../../guards/role/role-access.guard';

import { SharedModule } from '../../shared/shared.module';

const routes:Routes = [{
  path: 'barber/dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuard, RoleAccessGuard],
  data: {roles: ['barber']}
}, {
  path: 'admin/saloons/:saloonId/barber/:barberId/dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuard, RoleAccessGuard],
  data: {roles: ['admin']}
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild (routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [DashboardComponent],
})
export class BarberModule { }
