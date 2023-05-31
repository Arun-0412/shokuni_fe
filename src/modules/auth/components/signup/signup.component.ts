import { Component, OnInit } from '@angular/core';

import { NgForm, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private signupForm:FormGroup;

  private project_title:String;

  private pageTitle:String = 'signup';

  private invitationToken:string;

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit() {

    this.project_title = this.auth.vars.project_title;

    this.signupForm = new FormGroup ({
      first_name: new FormControl (null, [Validators.required, Validators.pattern ('^[a-z-A-Z\s]*')]),
      last_name: new FormControl (null, [Validators.required, Validators.pattern ('^[a-z-A-Z\s]*')]),
      email: new FormControl (null, [Validators.required, Validators.email]),
      password: new FormControl (null, [Validators.required, Validators.maxLength(20)]),
      number: new FormControl (null, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    });

    let url = new URL (window.location.href);

    // check if token param found in url-route
    this.invitationToken = (url.searchParams.has('token') && (url.searchParams.get('token')).trim()) ? (url.searchParams.get('token')).trim() : null;
  }

  /**
   * Method to register user
   * @param form {first_name: "Test", last_name: "Dev", email: "barber@email.com", password: "123456", number: "1234567890"}
   */
  submitSignup (form:NgForm) {
    let values = form.value;

    // append optional parameters on signup
    values['invitationToken']= this.invitationToken;
    values['role']= 'barber';

    // remove empty/null keys from object
    Object.keys(values).forEach((key) => (values[key] == null) && delete values[key]);    

    // show loader
    this.auth.vars.displayLoader (true)
    // register user
    this.auth.registerUser (values).subscribe ((res) => {
      this.auth.vars.displayLoader(false);
      this.auth.vars.showNotification ('User successfully registered', res.message, 'success');

      // redirect user to login page after 2 sec
      setTimeout (() => {
        this.auth.vars.logoutUser();
      }, 2000);
      this.router.navigateByUrl('/login');
    }, (err) => {
      this.auth.vars.displayLoader(false)
      this.auth.vars.showNotification (this.auth.vars.convertObjectToString (err.errors), err.message)
    })
  }

}
