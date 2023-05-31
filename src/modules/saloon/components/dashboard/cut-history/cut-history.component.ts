import { Component, OnInit, Input } from '@angular/core';

import { OrdersService } from '../../../../../services/saloon/orders/orders.service';

@Component({
  selector: 'app-cut-history',
  templateUrl: './cut-history.component.html',
  styleUrls: ['./cut-history.component.css']
})
export class CutHistoryComponent implements OnInit {

  @Input() saloonId:number;

  constructor(private order:OrdersService) { }

  private pageTitle:String = 'cut history';

  private cutHistory:Array<any>;

  ngOnInit() {
    setTimeout (() => {
      this.getSaloonOrdersCutHistory ();
    }, this.order.vars.onInt_request_delay_in_ms)
  }

  getSaloonOrdersCutHistory (page:number = 1):void {
    // show loader
    this.order.vars.displayLoader (true);

    this.order.getSaloonOrdersCutHistory (page, this.saloonId).subscribe (res => {
      this.cutHistory = res.data.data;
      // show loader
      this.order.vars.displayLoader (false);
    }, err => {
      // show loader
      this.order.vars.displayLoader (false);

      // show error
      this.order.vars.showNotification(this.order.vars.convertObjectToString (err.errors), err.message);
    })
  }

  lowerCase (str:string):string {
    return str ? str.toLowerCase () : null;
  }

  getCustomerDashboard (customerId:number = null):string {
    // check for users
    if (localStorage.getItem('user_detail') && (JSON.parse(localStorage.getItem('user_detail'))['role'] == 'admin') && customerId) {
      return '/admin/customer/'+customerId+'/dashboard';
    }
  }

}
