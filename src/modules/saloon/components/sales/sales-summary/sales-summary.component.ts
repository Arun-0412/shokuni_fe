import { Component, OnInit, Input } from '@angular/core';

import { OrdersService } from '../../../../../services/saloon/orders/orders.service';

@Component({
  selector: 'app-sales-summary',
  templateUrl: './sales-summary.component.html',
  styleUrls: ['./sales-summary.component.css']
})
export class SalesSummaryComponent implements OnInit {

  private salesSummary:Array<any>;

  @Input() private saloonId:number;

  constructor(private order:OrdersService) { }

  ngOnInit() {
    // get all orders belongs to saloon
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
      console.log('----------->'+this.salesSummary);
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

  /**
   * Method to calculate percentage
   * 
   * @param upval
   * @param baseVal
   * 
   * @return number
   */
  calculateSalesSummaryPercentage (upVal:number, baseval:number):number {
    return Math.floor ((upVal/baseval)*100);
  }

}
