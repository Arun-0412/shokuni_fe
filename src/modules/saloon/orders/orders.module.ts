import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { SalesComponent } from './components/sales/sales.component';
import { OrderInvoiceComponent } from './components/order-invoice/order-invoice.component';
import { RouterModule, Routes } from '@angular/router';
import { BarberAdminGuard } from '../../../guards/barber-admin/barber-admin.guard';

import { AuthGuard } from '../../../guards/auth/auth.guard';
import { RoleAccessGuard } from '../../../guards/role/role-access.guard';
const routes:Routes = [{
   path: 'saloon/sales/:transactionId',
   component: OrderInvoiceComponent,
  //  canActivate: [ AuthGuard, RoleAccessGuard, BarberAdminGuard ],
  canActivate: [ AuthGuard, RoleAccessGuard ],
  data: {roles: ['barber', 'admin']}
},
{
  path: 'orders/sales',
  component: SalesComponent,
  canActivate: [ AuthGuard, RoleAccessGuard, BarberAdminGuard ],
  data: {roles: ['barber']}
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild (routes)
  ],
  declarations: [OrdersComponent, SalesComponent, OrderInvoiceComponent],
  exports: [
    OrderInvoiceComponent,SalesComponent,
    RouterModule
  ]
})
export class OrdersModule { }
