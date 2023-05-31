import { Component, OnInit } from '@angular/core';

import { AdminService } from '../../../../services/admin/admin.service';

import { NgForm, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private admin:AdminService) { }

  private pageTitle:string = 'users';
  private subTitle:string = 'manage users';
  private totalItems:number;
  private currentPage:number;

  private userList:Array<string>;

  private selectedUser:Object;

  private resetEmailForm:FormGroup;
  private resetPasswordForm:FormGroup;

  ngOnInit() {
    setTimeout (() => {
      this.getUsers ();
    }, this.admin.vars.onInt_request_delay_in_ms);

    // design login form attribute
    this.resetEmailForm = new FormGroup({
      email: new FormControl (null, [Validators.required, Validators.email]),
    });

    this.resetPasswordForm = new FormGroup({
      password: new FormControl (null, [Validators.required, Validators.maxLength(20)])
    });
  }

  /**
   * Request to get list of all saloons
   * 
   * @param number page
   * 
   * @returns void
   */
  getUsers (page:number = 1, search:string = null) {
    // show loader
    this.admin.vars.displayLoader (true);

    this.admin.getUsers (page, search).subscribe (res => {
      // hide loader
      this.admin.vars.displayLoader (false);

      // assign admin orders
      this.userList = res.data.data;
      this.currentPage = res.data.current_page;
      this.totalItems = res.data.total;
    }, err => {
      // hide loader
      this.admin.vars.displayLoader (false);

      // display errors notification
      this.admin.vars.showNotification (this.admin.vars.convertObjectToString (err.errors), err.message);
    })
  }

  /**
   * method to delete user
   * 
   * @param number userId
   * 
   * @return void
   */
  selectUser (user:Object):void {
    this.selectedUser = user;
  }

  /**
   * Request to update user password by admin
   * 
   * @param NgForm
   * 
   * @return void
   */
  submitChangeUserPassword (form:NgForm):void {
    // show loader
    this.admin.vars.displayLoader(true);
    // call for login
    this.admin.changeUserPassword (this.selectedUser['id'], form.value).subscribe ((res) => {
      // hide loader
      this.admin.vars.displayLoader(false);
      
      this.admin.vars.showNotification(this.admin.vars.convertObjectToString (res.data), res.message, 'success');
    }, (err) => {
      // hide loader
      this.admin.vars.displayLoader(false);
      // show login error
      this.admin.vars.showNotification(this.admin.vars.convertObjectToString (err.errors), err.message);
    })
  }

  /**
   * Request to update user email by admin
   * 
   * @param NgForm
   * 
   * @return void
   */
  submitChangeUserEmail (form:NgForm):void {
    // show loader
    this.admin.vars.displayLoader(true);
    // call for login
    this.admin.changeUserEmail (this.selectedUser['id'], form.value).subscribe ((res) => {
      // hide loader
      this.admin.vars.displayLoader(false);
      
      this.admin.vars.showNotification(this.admin.vars.convertObjectToString (res.data), res.message, 'success');
    }, (err) => {
      // hide loader
      this.admin.vars.displayLoader(false);
      // show login error
      this.admin.vars.showNotification(this.admin.vars.convertObjectToString (err.errors), err.message);
    })
  }

  /**
   * Method to set selected user email in change email form
   * 
   * @return void
   */
  setSelecteduserEmail() {
    this.resetEmailForm.controls['email'].setValue(this.selectedUser['email']);
  }

  /**
   * Request to delete user
   * 
   * @return void
   */
  suspendUser ():void {
    // show loader
    this.admin.vars.displayLoader(true);
    // call for login
    this.admin.deleteUser (this.selectedUser['id']).subscribe ((res) => {
      // hide loader
      this.admin.vars.displayLoader(false);
      
      this.admin.vars.showNotification(this.admin.vars.convertObjectToString (res.data), res.message, 'success');
    }, (err) => {
      // hide loader
      this.admin.vars.displayLoader(false);
      // show login error
      this.admin.vars.showNotification(this.admin.vars.convertObjectToString (err.errors), err.message);
    })
  }

}
