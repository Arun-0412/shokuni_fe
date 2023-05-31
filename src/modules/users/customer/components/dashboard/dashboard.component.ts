import { Component, OnInit } from '@angular/core';

import { CustomerOrder } from './CustomerOrder';

import { CustomersService } from '../../../../../services/users/customer/customers.service';

import { Angular5Csv } from 'angular5-csv/Angular5-csv';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private customer:CustomersService, private activeRoute: ActivatedRoute) { }

  private pageTitle:string = 'history';

  private customerOrders:CustomerOrder[];
  private currentPage:number;
  private totalItems:number;

  ngOnInit() {
    // set it as 0.1 second after DOM initialization
    setTimeout (() => {
      this.getCustomerOrders();
    }, this.customer.vars.onInt_request_delay_in_ms);
  }

  /**
   * method to genertae page counter to design dynamic pagination
   * 
   * @param counter 
   * 
   * @returns array
   */
  generatePageCounter (counter:number):Array<number> {
    return Array(counter).fill(0).map((x,i)=>i);
  }


  /**
   * get list of all customer orders
   */
  getCustomerOrders (page:number = 1) {
    // show loader
    this.customer.vars.displayLoader (true);
    this.customer.getCustomerOrders (page, this.activeRoute.snapshot.params["customerId"] || null).subscribe (res => {
      // hide loader
      this.customer.vars.displayLoader (false);

      // assign customer orders
      this.customerOrders = res.data.data;
      this.currentPage = res.data.current_page;
      this.totalItems = res.data.total;
    }, err => {
      // hide loader
      this.customer.vars.displayLoader (false);

      // display errors notification
      this.customer.vars.showNotification (this.customer.vars.convertObjectToString (err.errors), err.message);
    })
  }

  /**
   * Method to export Order in CSV format
   * 
   * @param CustomerOrder:Order
   * 
   * @return void
   */
  exportOrder(order:CustomerOrder):void {
  }
}
