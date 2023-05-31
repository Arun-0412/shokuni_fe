import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '../../../../services/auth/auth.service';
import { UserService } from '../../../../services/users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  private project_title: String;
  private project_sub_title: String;

  constructor(private auth: AuthService, private router: Router, private user: UserService) { }

  ngOnInit() {
    this.project_title = this.auth.vars.project_title;
    this.project_sub_title = this.auth.vars.project_sub_title;

    // design login form attribute
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      remember: new FormControl(null)
    });
  }

  redirect() {
    console.log('redirect');
    
    this.router.navigateByUrl('/signup');
  }

  /**
   * Method to submit login form
   * 
   * @param NgForm
   * 
   * @return void
   */
  submitLogin(form: NgForm): void {
    // show loader
    this.auth.vars.displayLoader(true);
    // call for login
    this.auth.loginUser(form.value).subscribe((res) => {
      // save login 
      
      this.auth.saveLoginInfo(res.data.access_token, res.data.token_type);
      // hide loader
      this.auth.vars.displayLoader(false);

      // get user detail
      this.getUserDetail();
    }, (err) => {
      // hide loader
      this.auth.vars.displayLoader(false);
      // show login error
      this.auth.vars.showNotification(this.auth.vars.convertObjectToString(err.errors), err.message);
    })
  }

  /**
   * Method to get user detail after login
   */
  getUserDetail() {
    // show loader
    this.auth.vars.displayLoader(true);

    this.user.getUserDetail().subscribe(res => {

      localStorage.setItem('user_detail', JSON.stringify(res.data))

      // hide loader
      this.auth.vars.displayLoader(false);

      this.renderUser();
    }, err => {
      // hide loader
      this.auth.vars.displayLoader(false);

      // show login error
      this.auth.vars.showNotification(this.auth.vars.convertObjectToString(err.errors), err.message);
    })
  }

  /**
   * render user to it's dashboard
   */
  renderUser() {
    // check if userDeatil successfully saved
    if (localStorage.getItem('user_detail')) {
      // render user on successful login
      return this.router.navigateByUrl(this.auth.vars.getDefaultpage());
    }
    // else call recursion
    this.renderUser();
  }
}