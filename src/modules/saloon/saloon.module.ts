import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// import directe components
import { SaloonComponent } from './components/saloon/saloon.component';
import { SalesComponent } from './components/sales/sales.component';

// imports nested custom modules
import { BarbersModule } from './barbers/barbers.module';
import { OrdersModule } from './orders/orders.module';
import { ServicesModule } from './services/services.module';

// import other modules
import { SharedModule } from '../shared/shared.module';

import { AgmCoreModule } from '@agm/core';

import { AuthGuard } from '../../guards/auth/auth.guard';
import { RoleAccessGuard } from '../../guards/role/role-access.guard';
import { BarberAdminGuard } from '../../guards/barber-admin/barber-admin.guard';

import { EntriesComponent } from './components/sales/entries/entries.component';
import { PaymentHistoryComponent } from './components/sales/payment-history/payment-history.component';
import { SalesSummaryComponent } from './components/sales/sales-summary/sales-summary.component';
import { PaymentInfoComponent } from './components/sales/payment-info/payment-info.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProgressComponent } from './components/dashboard/progress/progress.component';
import { CutDetailComponent } from './components/dashboard/cut-detail/cut-detail.component';
import { CutHistoryComponent } from './components/dashboard/cut-history/cut-history.component';
import { PayAdminComponent } from './components/pay-admin/pay-admin.component';
// import { AppSaloon } from '../saloon/components/saloon/saloon.component';

const routes: Routes = [
  {
    path: 'saloon/pay-admin',
    component: PayAdminComponent,
    canActivate: [AuthGuard, RoleAccessGuard],
    data: { roles: ['barber'] }
  },
  {
    path: 'saloon',
    component: SaloonComponent,
    canActivate: [AuthGuard, RoleAccessGuard],
    data: { roles: ['barber'] }
  }, {
    path: 'admin/saloon/:saloonId',
    component: SaloonComponent,
    canActivate: [AuthGuard, RoleAccessGuard],
    data: { roles: ['admin'] }
  }, {
    path: 'saloon/sales',
    component: SalesComponent,
    canActivate: [AuthGuard, RoleAccessGuard, BarberAdminGuard],
    data: { roles: ['barber'] }
  }, {
    path: 'admin/saloon/:saloonId/sales',
    component: SalesComponent,
    canActivate: [AuthGuard, RoleAccessGuard],
    data: { roles: ['admin'] }
  }, {
    path: 'barber/dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard, RoleAccessGuard],
    data: { roles: ['barber'] }
  },
  {
    path: 'barber/add-saloon',
    component: SaloonComponent,
    canActivate: [AuthGuard, RoleAccessGuard],
    data: { roles: ['barber'] }
  },
  {
    path: 'saloon/:saloonId/dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard, RoleAccessGuard],
    data: { roles: ['barber', 'admin'] }
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',

  }];

@NgModule({
  imports: [
    CommonModule,
    SharedModule, BarbersModule, OrdersModule, ServicesModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqMLU0HiPa-yiuVP6RnDB-yWeTFcSCXt0' //Google API key for maps
    })
  ],
  declarations: [
    SaloonComponent, SalesComponent, EntriesComponent,
    PaymentHistoryComponent, SalesSummaryComponent,
    PaymentInfoComponent, DashboardComponent,
    ProgressComponent,
    CutDetailComponent,
    CutHistoryComponent,
    PayAdminComponent
  ],
  exports: [
    BarbersModule, OrdersModule, ServicesModule,
    RouterModule
  ]
})
export class SaloonModule { }
