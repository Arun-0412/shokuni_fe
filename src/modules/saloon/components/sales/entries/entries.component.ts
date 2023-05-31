import { Component, OnInit, Input } from '@angular/core';

import { OrdersService } from '../../../../../services/saloon/orders/orders.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  constructor(private order:OrdersService) { }

  private pageTitle:String = 'entries';

  private barberEntries:Array<any>;

  private currentPage:number;
  private totalItems:number;

  @Input() private saloonId:number;

  ngOnInit() {
    // get all orders belongs to saloon
    setTimeout (() => {
      this.getSaloonOrders ();
    }, this.order.vars.onInt_request_delay_in_ms);
  }

  /**
   * Request to get list of all saloon orders
   * 
   * @param number page
   * 
   * @return void
   */
  getSaloonOrders (page:number = 1):void {
    // show loader
    this.order.vars.displayLoader (true);

    this.order.getSaloonOrders (page, this.saloonId).subscribe (res => {
      this.barberEntries = res.data.data;
      this.currentPage = res.data.current_page;
      this.totalItems = res.data.total;

      // show loader
      this.order.vars.displayLoader (false);

      // show error
      this.order.vars.showNotification(res.message, 'Orders', 'success');
    }, err => {
      // show loader
      this.order.vars.displayLoader (false);

      // show error
      this.order.vars.showNotification(this.order.vars.convertObjectToString (err.errors), err.message);
    })
  }

  /**
   * Conhverg Array of services into string
   * 
   * @param Array
   * 
   * @return string
   */
  displayServiceName (services:Array<any>):string {
    let serviceStr = '';
    if (services.length) {
      for (let service of services) {
        serviceStr += service.name + ', ';
      }
    }

    // remove last comma from string
    return (serviceStr.trim()).replace (/,\s*$/, '');
  }
}
