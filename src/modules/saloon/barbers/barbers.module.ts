import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarbersComponent } from './components/barbers/barbers.component';
import { BarberDetailComponent } from './components/barber-detail/barber-detail.component';

import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';
import { BarberAdminGuard } from '../../../guards/barber-admin/barber-admin.guard';

import { AuthGuard } from '../../../guards/auth/auth.guard';
import { RoleAccessGuard } from '../../../guards/role/role-access.guard';
import { LeftSidebarComponent } from './components/barber-detail/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './components/barber-detail/right-sidebar/right-sidebar.component';

const routes:Routes = [{
  path: 'saloon/barbers',
  component: BarbersComponent,
  canActivate: [ AuthGuard, RoleAccessGuard, BarberAdminGuard ],
  data: {roles: ['barber']}
}, {
  path: 'saloon/:saloonId/barbers',
  component: BarbersComponent,
  canActivate: [ AuthGuard, RoleAccessGuard ],
  data: {roles: ['admin', 'barber']}
}, {
  path: 'saloon/barbers/:barberId',
  component: BarberDetailComponent,
  canActivate: [ AuthGuard, RoleAccessGuard, BarberAdminGuard ],
  data: {roles: ['barber']}
}, {
  path: 'admin/barbers/:barberId',
  component: BarberDetailComponent,
  canActivate: [ AuthGuard, RoleAccessGuard ],
  data: {roles: ['admin']}
},
{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full',
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild (routes),
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [BarbersComponent, BarberDetailComponent, LeftSidebarComponent, RightSidebarComponent],
  exports: [
    BarberDetailComponent,
    RouterModule
  ]
})
export class BarbersModule { }
