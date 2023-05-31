import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { UserService } from '../../../../services/users/user.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  private pageTitle:String = 'password';
  private subTitle:String = 'change password';

  private passwordForm:FormGroup;

  constructor (private user:UserService) {}

  ngOnInit() {
    this.passwordForm = new FormGroup ({
      old_password: new FormControl (null, [Validators.required, Validators.maxLength (20)]),
      password: new FormControl (null, [Validators.required, Validators.maxLength (20)]),
      rePassword: new FormControl (null, [Validators.required, Validators.maxLength (20)]),
    })
  }

  /**
   * Method to send request to update password
   * 
   * @param NgForm form
   * 
   * @return void
   */
  submitChangePassword (form:NgForm):void {
    // show loader
    this.user.vars.displayLoader(true);

    // send request to change password
    this.user.changePassword (form.value).subscribe ((res) => {
      // show success
      this.user.vars.showNotification(this.user.vars.convertObjectToString (res.data), res.message, 'success');
      
      // hide loader
      this.user.vars.displayLoader(false);
    }, (err) => {
      // hide loader
      this.user.vars.displayLoader(false);
      // show errors
      this.user.vars.showNotification(this.user.vars.convertObjectToString (err.errors), err.message);
    })
  }
}
