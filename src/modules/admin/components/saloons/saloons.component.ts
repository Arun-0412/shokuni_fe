import { Component, OnInit } from '@angular/core';

import { AdminService } from '../../../../services/admin/admin.service';

@Component({
  selector: 'app-saloons',
  templateUrl: './saloons.component.html',
  styleUrls: ['./saloons.component.css']
})
export class SaloonsComponent implements OnInit {

  constructor(private admin:AdminService) { }

  private pageTitle:string = 'shops';
  private subTitle:string = 'manage shops';

  private saloonList:Array<string>;
  private currentPage:number;
  private totalItems:number;

  private saloonDetail:Object;

  ngOnInit() {
    setTimeout (() => {
      this.getSaloons ();
    }, this.admin.vars.onInt_request_delay_in_ms);
  }

  /**
   * Request to get list of all saloons
   * 
   * @param number page
   * 
   * @returns void
   */
  getSaloons (page:number = 1, search:string = null) {
    // show loader
    this.admin.vars.displayLoader (true);

    this.admin.getSaloons (page, search).subscribe (res => {
      // hide loader
      this.admin.vars.displayLoader (false);

      // assign admin orders
      this.saloonList = res.data.data;
      this.currentPage = res.data.current_page;
      this.totalItems = res.data.total;
    }, err => {
      // hide loader
      this.admin.vars.displayLoader (false);

      // display errors notification
      this.admin.vars.showNotification (this.admin.vars.convertObjectToString (err.errors), err.message);
    })
  }

  setSaloon (saloonDetail:Object) {
    this.saloonDetail = saloonDetail;
  }

}
