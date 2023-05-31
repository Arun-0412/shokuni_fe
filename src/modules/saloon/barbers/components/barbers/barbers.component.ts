import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, NgForm} from '@angular/forms';

import { BarberService } from '../../../../../services/saloon/barber/barber.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-barbers',
  templateUrl: './barbers.component.html',
  styleUrls: ['./barbers.component.css']
})
export class BarbersComponent implements OnInit {

  private barberList:Array<any>;
  private currentPage:number;
  private totalItems:number;

  constructor(private barber:BarberService, private activeRoute: ActivatedRoute) { }

  private pageTitle:string = 'barbers';
  private subTitle:string = 'manage barbers';

  private inviteForm:FormGroup;

  ngOnInit() {

    // /define inveitatio form
    this.inviteForm = new FormGroup ({
      email: new FormControl (null, [Validators.required, Validators.email])
    });

    setTimeout (() => {
      this.getSaloonBarbers ();
    }, this.barber.vars.onInt_request_delay_in_ms);
  }

  /**
   * method to get list of saloon barbers
   * 
   * @param number page
   * 
   * @returns void
   */
  getSaloonBarbers (page:number = 1):void {
    // show loader
    this.barber.vars.displayLoader (true);

    this.barber.getSaloonBarbers (page, this.activeRoute.snapshot.params["saloonId"] || null).subscribe (res => {
      // hide loader
      this.barber.vars.displayLoader (false);

      // assign barber orders
      this.barberList = res.data.data;
      this.currentPage = res.data.current_page;
      this.totalItems = res.data.total;
    }, err => {
      // hide loader
      this.barber.vars.displayLoader (false);

      // display errors notification
      this.barber.vars.showNotification (this.barber.vars.convertObjectToString (err.errors), err.message);
    })
  }


  /**
   * Method to submit invite barber
   * 
   * @param NgForm
   * 
   * @return void
   */
  submitInviteForm (form:NgForm):void {
    // show loader
    this.barber.vars.displayLoader (true);

    this.barber.inviteBarber (form.value, this.activeRoute.snapshot.params["saloonId"] || null).subscribe (res => {
      // hide loader
      this.barber.vars.displayLoader (false);

      this.barber.vars.showNotification (this.barber.vars.convertObjectToString (res.data), res.message, 'success');
    }, err => {
      // hide loader
      this.barber.vars.displayLoader (false);

      // display errors notification
      this.barber.vars.showNotification (this.barber.vars.convertObjectToString (err.errors), err.message);
    });
  }

  /**
   * Get router link to send 
   * 
   * @param number barber id
   * 
   * @return string
   */
  getBarberRouterLink (barberId:number):string {
    // check for user role
    if (this.barber.vars.getUserRole() === 'admin') {
      return '/admin/barbers/' + barberId;
    }

    return '/saloon/barbers/' + barberId;
  }
}
