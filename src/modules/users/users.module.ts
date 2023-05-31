import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// import components under module
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ProfileComponent } from './components/profile/profile.component';
// import { ResetPasswrdComponent } from './components/reset-passwrd/reset-passwrd.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { DeleteCustomerAccountComponent } from './components/profile/delete-customer-account/delete-customer-account.component';

import { BarberModule } from './barber/barber.module';
import { CustomerModule } from './customer/customer.module';

import { AuthGuard } from '../../guards/auth/auth.guard';

// Import all custome directives and components use for each module
import { SharedModule } from '../shared/shared.module';
import { AddSaloonsComponent } from '../admin/components/add-saloons/add-saloons.component';
import { AdminModule } from '../admin/admin.module';

const routes: Routes = [{
  path: 'change-password',
  component: ChangePasswordComponent,
  canActivate: [AuthGuard]
}, {
  path: 'profile',
  component: ProfileComponent,
  canActivate: [AuthGuard]
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
    RouterModule.forChild(routes),
    BarberModule,
    CustomerModule,
    ReactiveFormsModule, FormsModule,
    SharedModule,
    // AddSaloonsComponent,
    AdminModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    RouterModule, BarberModule, CustomerModule,
  ],
  declarations: [
    ChangePasswordComponent,
    ProfileComponent,
    EditProfileComponent,
    DeleteCustomerAccountComponent,

    // ResetPasswrdComponent,
  ]
})
export class UsersModule { }
