import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import {RouterModule, Routes} from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { AuthGuard } from '../../../guards/auth/auth.guard';
import { RoleAccessGuard } from '../../../guards/role/role-access.guard';
import { BarberAdminGuard } from '../../../guards/barber-admin/barber-admin.guard';

const routes:Routes = [{
  path: 'saloon/services',
  component: ServicesComponent,
  canActivate: [ AuthGuard, RoleAccessGuard, BarberAdminGuard ],
  data: {roles: ['barber']}
}, {
  path: 'saloon/:saloonId/products',
  component: ServicesComponent,
  canActivate: [ AuthGuard, RoleAccessGuard ],
  data: {roles: ['admin', 'barber']}
}];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild (routes)
  ],
  declarations: [ServicesComponent],
  exports: [
    RouterModule
  ]
})
export class ServicesModule { }
