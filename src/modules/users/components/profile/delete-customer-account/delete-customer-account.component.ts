import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { UserService } from '../../../../../services/users/user.service';

@Component({
  selector: 'app-delete-customer-account',
  templateUrl: './delete-customer-account.component.html',
  styleUrls: ['./delete-customer-account.component.css']
})
export class DeleteCustomerAccountComponent implements OnInit {

  constructor (private user:UserService) { }

  private deleteForm:FormGroup;

  private deleteText:string;

  ngOnInit() {
    this.deleteForm = new FormGroup ({
      password: new FormControl (null, [Validators.required, Validators.maxLength (20)])
    });
  }

  /**
   * method to delete account
   */
  submitAccountDelete ():void {
    // show loader
    this.user.vars.displayLoader(true);

    // get password field value
    // seumit password to delete account
    this.user.deleteAccount(this.deleteForm.value).subscribe(res => {
      this.user.vars.displayLoader(false);

      this.user.vars.showNotification (this.user.vars.convertObjectToString (res.data), res.message, 'success');

      // check if user is barber and customer
      if (['barber', 'consumer'].includes(this.user.vars.getUserRole())) {
        if (res.message !== 'Saloon-admin') {
          // logout the user
          setTimeout(() => {
            this.user.vars.logoutUser();
          }, 2000);
        }
      }
    }, err => {
      this.user.vars.displayLoader(false);
      this.user.vars.showNotification (this.user.vars.convertObjectToString (err.errors), err.message);
    })
  }

  /**
   * method to check if user really want to delete the account
   */
  checkDelAccPer () {
    if (this.deleteText && ((this.deleteText).trim()).toLowerCase() === 'delete') {
      this.submitAccountDelete();
    }
  }
}
