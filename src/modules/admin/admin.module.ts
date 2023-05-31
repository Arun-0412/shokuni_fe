import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoredApplicationsComponent } from './components/stored-applications/stored-applications.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { SaloonsComponent } from './components/saloons/saloons.component';

import { AuthGuard } from '../../guards/auth/auth.guard';
import { RoleAccessGuard } from '../../guards/role/role-access.guard';

import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { PendingReviewComponent } from './components/dashboard/pending-review/pending-review.component';
import { SummaryComponent } from './components/dashboard/summary/summary.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SalesComponent } from './components/sales/sales.component';
import { AddSaloonsComponent } from './components/add-saloons/add-saloons.component';
import { SearchSalesComponent } from './components/search-sales/search-sales.component';
import { EntriesComponent } from './components/sales/entries/entries.component';
import { PaymentHistoryComponent } from './components/sales/payment-history/payment-history.component';
import { PaymentInfoComponent } from './components/sales/payment-info/payment-info.component';
import { SalesSummaryComponent } from './components/sales/sales-summary/sales-summary.component';
import { ManageDiscountComponent } from './components/manage-discount/manage-discount.component';
import { InviteBarberComponent } from './components/invite-barber/invite-barber.component';
import { NotAuthGuard } from 'src/guards/not-auth/not-auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AuthGuard, RoleAccessGuard],
    data: { roles: ['admin'] }
  }, {
    path: 'admin/users',
    component: UsersComponent,
    canActivate: [AuthGuard, RoleAccessGuard],
    data: { roles: ['admin'] }
  }, {
    path: 'admin/sales/:id',
    component: SalesComponent,
    canActivate: [AuthGuard, RoleAccessGuard],
    data: { roles: ['admin'] }
  }, {
    path: 'admin/search-sales',
    component: SearchSalesComponent,
    canActivate: [AuthGuard, RoleAccessGuard],
    data: { roles: ['admin'] }
  }, {
    path: 'admin/add-saloons',
    component: AddSaloonsComponent,
    canActivate: [AuthGuard, RoleAccessGuard],
    data: { roles: ['admin'] }
  }, {
    path: 'admin/saloons',
    component: SaloonsComponent,
    canActivate: [AuthGuard, RoleAccessGuard],
    data: { roles: ['admin'] }
  }, {
    path: 'admin/applications',
    component: StoredApplicationsComponent,
    canActivate: [AuthGuard, RoleAccessGuard],
    data: { roles: ['admin'] }
  }, {
    path: 'admin/manage-discount',
    component: ManageDiscountComponent,
    canActivate: [AuthGuard, RoleAccessGuard],
    data: { roles: ['admin'] }
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManageDiscountComponent,
    StoredApplicationsComponent,
    DashboardComponent,
    UsersComponent,
    SaloonsComponent,
    PendingReviewComponent,
    SummaryComponent,
    SalesComponent,
    AddSaloonsComponent,
    SearchSalesComponent,
    EntriesComponent,
    PaymentHistoryComponent,
    PaymentInfoComponent,
    SalesSummaryComponent,
    ManageDiscountComponent,
    InviteBarberComponent],
  exports: [
    RouterModule,
    AddSaloonsComponent
  ]
})
export class AdminModule { }
