import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// import modules related component
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignupComponent } from './components/signup/signup.component';

// import guards
import { NotAuthGuard } from '../../guards/not-auth/not-auth.guard';

// Import all custome directives and components use for each module
import { SharedModule } from '../shared/shared.module';
import { InviteBarberComponent } from '../admin/components/invite-barber/invite-barber.component';
import { SuccessComponent } from './components/success/success.component';
import { CancelComponent } from './components/cancel/cancel.component';

const routes:Routes = [{
  path: 'login',
  component: LoginComponent,
  // canActivate: [NotAuthGuard]
}, {
  path: 'forgot-password',
  component: ForgotPasswordComponent,
  canActivate: [NotAuthGuard]
},{
  path: 'success',
  component: SuccessComponent,
},{
  path: 'cancel',
  component: CancelComponent,
}, {
  path: 'signup',
  component: SignupComponent,
  canActivate: [NotAuthGuard]
}]

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    RouterModule.forChild (routes),
    SharedModule
  ],
  declarations: [
    LoginComponent, 
    ForgotPasswordComponent, 
    SignupComponent, SuccessComponent, CancelComponent,
  ],
  exports: [
    RouterModule,
  ]
})

export class AuthModule { }