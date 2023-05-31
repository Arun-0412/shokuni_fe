import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';
import { NgForm, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers:[AuthService]
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private auth:AuthService) { }

  private pageTitle:String = 'forgot password';
  private project_title:String;

  private forgotForm:FormGroup;

  ngOnInit() {
    this.project_title = this.auth.vars.project_title;

    // design login form attribute
    this.forgotForm = new FormGroup({
      email: new FormControl (null, [Validators.required, Validators.email]),
    });
  }

	submitForgotPassword(form:NgForm):void {
		// show loader
		this.auth.vars.displayLoader(true);
		// call for login
		this.auth.forgotPassword (form.value).subscribe ((res) => {
			// hide loader
			this.auth.vars.displayLoader(false);
			this.auth.vars.showNotification(res.message, "Forgot Password", "success");
		}, (err) => {
			// hide loader
			this.auth.vars.displayLoader(false);
			// show login error
			this.auth.vars.showNotification(this.auth.vars.convertObjectToString (err.errors), err.message);
		})
	}

}
