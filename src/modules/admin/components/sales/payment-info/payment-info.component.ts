import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { SaloonService } from '../../../../../services/saloon/saloon.service';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {
  
  constructor (private saloon:SaloonService,private route:ActivatedRoute) { }

  private pageTitle:string = 'Payment info';

  private paymentInfoForm:FormGroup;
  private stripeid:string;
  private stripeStatus:string;

  @Input() private saloonId:number;
  userId:any

  ngOnInit() {
    this.userId = this.route.snapshot.params["id"] || null;
    this.paymentInfoForm = new FormGroup ({
      name_on_account: new FormControl (null, [Validators.required, Validators.maxLength(255)]),
      account_number: new FormControl (null, [Validators.required, Validators.maxLength(255)]),
      code: new FormControl (null, [Validators.required, Validators.maxLength(10)]),
    }); 

    setTimeout (() => {
      this.getSaloonPaymentDetail ();
      this.getUserStripeDetails();
    }, this.saloon.vars.onInt_request_delay_in_ms)
  }

  getUserStripeDetails(){
    this.saloon.vars.displayLoader (true);
    this.saloon.getUserStripeDetails (this.userId).subscribe (res => {
      this.stripeid = res.stripeid
      this.getStripeAccountDetails(this.stripeid)
      // show loader
      this.saloon.vars.displayLoader (false);
      // show error
      // this.saloon.vars.showNotification('', res.message, 'success');
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
      this.stripeStatus = res.status === 0 ? 'Restrict' : 'Enable'
      this.saloon.vars.displayLoader (false);

    }, err => {
      this.stripeStatus = err.message
      // show loader
      this.saloon.vars.displayLoader (false);
      // show error
      this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString (err.errors), err.message);
    })
    
  }

  /**
   * Request for payment detail of the saloon
   */
  getSaloonPaymentDetail () {
    // show loader
    this.saloon.vars.displayLoader (true);

    this.saloon.getSaloonPaymentDetail (this.saloonId).subscribe (res => {

      // update form value
      this.paymentInfoForm.controls['account_number'].setValue (res.data.account_number || null);
      this.paymentInfoForm.controls['code'].setValue (res.data.code || null);
      this.paymentInfoForm.controls['name_on_account'].setValue (res.data.name_on_account || null);

      // show loader
      this.saloon.vars.displayLoader (false);

      // show error
      this.saloon.vars.showNotification('Payment History successfully found.', res.message, 'success');
    }, err => {
      // show loader
      this.saloon.vars.displayLoader (false);

      // show error
      this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString (err.errors), err.message);
    })
  }

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

}
