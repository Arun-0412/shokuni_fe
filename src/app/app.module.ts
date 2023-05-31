import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

// import services
import { AuthService } from '../services/auth/auth.service';

// import child modules
import { AuthModule } from '../modules/auth/auth.module';
import { UsersModule } from '../modules/users/users.module';
import { SaloonModule } from '../modules/saloon/saloon.module';
import { AdminModule } from '../modules/admin/admin.module';

// import notification module
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { InviteBarberComponent } from 'src/modules/admin/components/invite-barber/invite-barber.component';
import { NotAuthGuard } from 'src/guards/not-auth/not-auth.guard';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { LoginComponent } from 'src/modules/auth/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    UsersModule,
    SaloonModule,
    AdminModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: '/login',
      pathMatch: 'full',
    },
    {
      path: 'invite/:inviteId',
      component: InviteBarberComponent,
      canActivate: [NotAuthGuard]
    }, {
      path: '**',
      redirectTo: 'login',
    }]),
    SnotifyModule
  ],
  providers: [
    AuthService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
