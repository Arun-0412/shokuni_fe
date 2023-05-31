import { Component, OnInit, Input } from '@angular/core';

import { AdminService } from '../../../../../services/admin/admin.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private admin:AdminService) { }

  @Input() private selectedDate:number;

  private dashboard:Array<any>;
  private dashboardSummary:Array<any>;

  ngOnInit() {
    setTimeout (() => {
      this.getDashboard ();
      this.getDashboardSummary();
    }, this.admin.vars.onInt_request_delay_in_ms);
  }

  /**
   * Request to get list of all saloons
   * 
   * @param number page
   * 
   * @returns void
   */
  getDashboard () {
    let today = new Date (this.selectedDate);
    let date = today.getFullYear () + '-' + ('0' + (today.getMonth () + 1).toString()).slice(-2) + '-' + ('0' + ((today.getDate()).toString())).slice(-2);

    // show loader
    this.admin.vars.displayLoader (true);

    this.admin.getDashboard (date).subscribe (res => {
      // hide loader
      this.admin.vars.displayLoader (false);

      // assign admin orders
      this.dashboard = res.data;
    }, err => {
      // hide loader
      this.admin.vars.displayLoader (false);

      // display errors notification
      this.admin.vars.showNotification (this.admin.vars.convertObjectToString (err.errors), err.message);
    })
  }

  /**
   * Request to get list of all saloons
   * 
   * @param number page
   * 
   * @returns void
   */
  getDashboardSummary () {
    let today = new Date (this.selectedDate);
    let date = today.getFullYear () + '-' + ('0' + (today.getMonth () + 1).toString()).slice(-2) + '-' + ('0' + ((today.getDate()).toString())).slice(-2);

    // show loader
    this.admin.vars.displayLoader (true);

    this.admin.getDashboardSummary (date).subscribe (res => {
      // hide loader
      this.admin.vars.displayLoader (false);

      // assign admin orders
      this.dashboardSummary = res.data;
    }, err => {
      // hide loader
      this.admin.vars.displayLoader (false);

      // display errors notification
      this.admin.vars.showNotification (this.admin.vars.convertObjectToString (err.errors), err.message);
    })
  }

  /**
   * method to get date information
   * @param string type
   */
  getDate()  {
    return new Date();
  }

  nth(d) {
    if(d>3 && d<21) return 'th'; // thanks kennebec
    switch (d % 10) {
          case 1:  return "st";
          case 2:  return "nd";
          case 3:  return "rd";
          default: return "th";
      }
  }

  lowercase (time:string):string {
    return time ? time.toLowerCase() : null;
  }

}
