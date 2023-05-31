import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentComponent } from './components/payment/payment.component';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// import guards to veryfy routing request
import { AuthGuard } from '../../../guards/auth/auth.guard';
import { RoleAccessGuard } from '../../../guards/role/role-access.guard';

import { MyDatePickerModule } from 'mydatepicker';

// Import all custome directives and components use for each module
import { SharedModule } from '../../shared/shared.module';
import { SupportComponent } from './components/support/support.component';

const routes:Routes = [{
  path: 'customer/dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuard, RoleAccessGuard],
  data: {roles: ['consumer']}
}, {
  path: 'admin/customer/:customerId/dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuard, RoleAccessGuard],
  data: {roles: ['admin']}
}, {
  path: 'payment',
  component: PaymentComponent,
  canActivate: [AuthGuard, RoleAccessGuard],
  data: {roles: ['consumer']}
}, {
  path: 'support',
  component: SupportComponent,
  canActivate: [AuthGuard, RoleAccessGuard],
  data: {roles: ['consumer']}
}];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild (routes),
    MyDatePickerModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    RouterModule
  ],
  declarations: [
    DashboardComponent, 
    PaymentComponent, SupportComponent
  ]
})
export class CustomerModule { }
