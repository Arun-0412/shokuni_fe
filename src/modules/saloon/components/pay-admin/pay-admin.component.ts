import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, FormControl, Validators, NgForm} from '@angular/forms';

import { OrdersService } from '../../../../services/saloon/orders/orders.service';

//import { SaloonService } from '../../../../../services/saloon/saloon.service';

@Component({
  selector: 'app-pay-admin',
  templateUrl: './pay-admin.component.html',
  styleUrls: ['./pay-admin.component.css']
})
export class PayAdminComponent implements OnInit {

  constructor(private order:OrdersService) { }

  salesSummary:any;
  
  private pageTitle:string = 'Pay Barber';

  private paymentInfoForm:FormGroup;

  @Input() private saloonId:number;

  ngOnInit() {

  	setTimeout (() => {
      this.getSalesSummary ();
    }, this.order.vars.onInt_request_delay_in_ms);
  }

    /**
   * Request to get list of all saloon orders
   * 
   * @param number page
   * 
   * @return void
   */
  getSalesSummary ():void {
    // show loader
    this.order.vars.displayLoader (true);

    this.order.getSalesSummary (this.saloonId).subscribe (res => {
      this.salesSummary = res.data;

      // show loader
      this.order.vars.displayLoader (false);

      // show error
      this.order.vars.showNotification('Sales Summary successfully found', res.message, 'success');
    }, err => {
      // show loader
      this.order.vars.displayLoader (false);

      // show error
      this.order.vars.showNotification(this.order.vars.convertObjectToString (err.errors), err.message);
    })
  }

}
