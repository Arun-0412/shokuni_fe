import { Component, OnInit } from '@angular/core';

import { AdminService } from '../../../../../services/admin/admin.service';

@Component({
  selector: 'app-pending-review',
  templateUrl: './pending-review.component.html',
  styleUrls: ['./pending-review.component.css']
})
export class PendingReviewComponent implements OnInit {

  constructor(private admin:AdminService) { }

  private pageTitle:string = 'pending review';

  private saloonList:Array<string>;
  private currentPage:number;
  private totalItems:number;

  private saloonDetail:Object;

  ngOnInit() {
    setTimeout (() => {
      this.getSaloonsSummary ();
    }, this.admin.vars.onInt_request_delay_in_ms);
  }

  /**
   * Request to get list of all saloons
   * 
   * @param number page
   * 
   * @returns void
   */
  getSaloonsSummary (page:number = 1) {
    // show loader
    this.admin.vars.displayLoader (true);

    this.admin.getSaloonsSummary (page).subscribe (res => {
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

}
