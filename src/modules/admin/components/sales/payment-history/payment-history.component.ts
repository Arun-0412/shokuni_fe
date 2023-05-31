import { Component, OnInit, Input } from '@angular/core';

import { OrdersService } from '../../../../../services/saloon/orders/orders.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {

  constructor(private order:OrdersService) { }

  private pageTitle:String = 'payments history';

  private paymentHistory:Array<any>;

  private currentPage:number;
  private totalItems:number;

  @Input() private saloonId:number;

  ngOnInit() {
    // get all orders belongs to saloon
    setTimeout (() => {
      this.getSaloonPayments ();
    }, this.order.vars.onInt_request_delay_in_ms);
  }

    /**
   * Request to get list of all saloon orders
   * 
   * @param number page
   * 
   * @return void
   */
  getSaloonPayments (page:number = 1):void {
    // show loader
    this.order.vars.displayLoader (true);

    this.order.getSaloonPayments (page, this.saloonId).subscribe (res => {
      console.log("paymentHistory",res.data.data);
      
      this.paymentHistory = res.data.data;
      this.currentPage = res.data.current_page;
      this.totalItems = res.data.total;

      // show loader
      this.order.vars.displayLoader (false);

      // show error
      this.order.vars.showNotification('Payment History successfully found.', res.message, 'success');
    }, err => {
      // show loader
      this.order.vars.displayLoader (false);

      // show error
      this.order.vars.showNotification(this.order.vars.convertObjectToString (err.errors), err.message);
    })
  }

}
