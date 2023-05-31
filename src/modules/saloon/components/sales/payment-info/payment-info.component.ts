import { WindowRef } from '@agm/core/utils/browser-globals';
import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BarberDetail } from 'src/modules/saloon/barbers/components/barber-detail/BarberDetail';

import { SaloonService } from '../../../../../services/saloon/saloon.service';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {

  constructor (private saloon:SaloonService,private router:Router) {}

  private pageTitle:string = 'change payment info';

  private paymentInfoForm:FormGroup;
  private activeRoute: ActivatedRoute
  // private stripeAccount: boolean = false ;
  private stripeURL:Boolean = false ;
  private stripeId:string;
  private stripeErrorMessage:string;
  private stripeSuccesMessage:string;
  
  private barberDetail = JSON.parse (localStorage.getItem ('user_detail'));
  @Input() private saloonId:number;

  ngOnInit() {
    this.paymentInfoForm = new FormGroup ({
      // name_on_account: new FormControl (null, [Validators.required, Validators.maxLength(255)]),
      // account_number: new FormControl (null, [Validators.required, Validators.maxLength(255)]),
      // code: new FormControl (null, [Validators.required, Validators.maxLength(10)]),
      // stripeCode:new FormControl (null, [Validators.required, Validators.maxLength(10)]),
      stripe_key:new FormControl (null, [Validators.required, Validators.maxLength(255)]),
      stripe_secret:new FormControl (null, [Validators.required, Validators.maxLength(255)]),
    }); 
    setTimeout (() => {
      // this.getSaloonPaymentDetail ();
      this.getUserStripeDetails ();
    }, this.saloon.vars.onInt_request_delay_in_ms)
  }

  /**
   * Request for payment detail of the saloon
   */
   getUserStripeDetails(){
    this.saloon.vars.displayLoader (true);
    this.saloon.getUserStripeDetails (this.barberDetail.id).subscribe (res => {
      this.stripeId = res.stripeid;
        this.getStripeAccountDetails(res.stripeid)
      if(this.stripeURL){
        this.getStripeAccountDetails(res.stripeid)
      }
    
    // show loader
    this.saloon.vars.displayLoader (false);

    // show error
    this.saloon.vars.showNotification('Barber', res.message, 'success');
  }, err => {
    // show loader
    this.saloon.vars.displayLoader (false);

    // show error
    this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString (err.message), err.message);
  })
}
  // getSaloonPaymentDetail () {
    // show loader
    // this.saloon.vars.displayLoader (true);

    // this.saloon.getSaloonPaymentDetail (this.saloonId).subscribe (res => {

      // update form value
      // this.paymentInfoForm.controls['account_number'].setValue (res.data.account_number || null);

      // show loader
      // this.saloon.vars.displayLoader (false);

      // show error
      // this.saloon.vars.showNotification('Payment History successfully found.', res.message, 'success');
    // }, err => {
      // show loader
      // this.saloon.vars.displayLoader (false);

      // show error
      // this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString (err.errors), err.message);
  //   })
  // }

  /**
   * method to submit payment information of the saloon
   * 
   * @param NgForm 
   * 
   * @return void
   */
  submitPaymentInfoForm (form:NgForm):void {
    let values = form.value;

    Object.keys(values).forEach((key) => (values[key] == null) && delete values[key]);

    // show loader
    this.saloon.vars.displayLoader (true);

    this.saloon.updateSaloonPaymentDetail (values, this.saloonId).subscribe (res => {

      // show loader
      this.saloon.vars.displayLoader (false);

      // show error
      this.saloon.vars.showNotification('Payment History successfully updated.', res.message, 'success');
    }, err => {
      // show loader
      this.saloon.vars.displayLoader (false);

      // show error
      this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString (err.errors), err.message);
    })
  }

  
  submitPaymentURL () {
    this.saloon.vars.displayLoader (true);
    this.saloon.getStripeURL (this.barberDetail.id).subscribe (res => {
      // show loader
      this.saloon.vars.displayLoader (false);
      // show error
      // this.saloon.vars.showNotification('', res.message, 'success');
      window.open(res.url,'_blank')
      this.getUserStripeDetails ();
      this.stripeURL = true

    }, err => {
      // show loader
      this.saloon.vars.displayLoader (false);

      // show error
      this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString (err.errors), err.message);
    })
  }


  getStripeStatus(){
    this.saloon.vars.displayLoader (true);
    this.saloon.getStripeStatus (this.stripeId).subscribe (res => {
      // show loader
      this.saloon.vars.displayLoader (false);
      // show error
      // this.saloon.vars.showNotification('', res.message, 'success');
      window.open(res.url,'_blank')
      setTimeout(() => {
        this.router.navigate(['barber/dashboard']);
      }, 1000);
    }, err => {
      // show loader
      this.saloon.vars.displayLoader (false);

      // show error
      this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString (err.errors), err.message);
    })
  }




  getStripeAccountDetails (stripeId:string){
    this.saloon.vars.displayLoader (true);
    this.saloon.getStripeAccountDetails(stripeId).subscribe(res => {
      this.saloon.vars.displayLoader (false);
      this.stripeSuccesMessage = res.message

    }, err => {
      this.stripeErrorMessage = err.message
      // show loader
      this.saloon.vars.displayLoader (false);
      // show error
      this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString (err.errors), err.message);
    })
    
  }
  newStripeAccount() {
     this.getStripeStatus()
  }


  saveStripeAccount(form:NgForm):void {
    let values = form.value;

    Object.keys(values).forEach((key) => (values[key] == null) && delete values[key]);

    // show loader
    this.saloon.vars.displayLoader (true);

    this.saloon.saveStripeAccount (values, this.barberDetail.id).subscribe (res => {
      // show loader
      this.saloon.vars.displayLoader (false);
      if(res.status == true) {
        this.saloon.vars.showNotification('Stripe keys successfully saved.', res.message, 'success');
        // setTimeout(() => {
          this.router.navigate(['saloon/sales']);
        // }, 3000);
      }else {
        this.saloon.vars.showNotification('Check entered details', res.message);
      }
      // show error
     
    }, err => {
      // show loader
      this.saloon.vars.displayLoader (false);

      // show error
      this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString (err.errors), err.message);
    })
    
  }
}


