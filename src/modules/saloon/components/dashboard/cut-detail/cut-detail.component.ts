import { Component, OnInit, Input } from '@angular/core';

import { SaloonService } from '../../../../../services/saloon/saloon.service';

@Component({
  selector: 'app-cut-detail',
  templateUrl: './cut-detail.component.html',
  styleUrls: ['./cut-detail.component.css']
})
export class CutDetailComponent implements OnInit {

  constructor(private saloon:SaloonService) { }

  private dashboard:Array<any>;

  @Input() saloonId:number;

  private selectedDate:number;

  private breakDown:Object;
  private totalBreakDown:number = 0;

  ngOnInit() {
    let today = new Date()

    this.selectedDate = today.getTime();

    setTimeout (() => {
      this.getSaloonDashboard ();
      this.getSaloonCutBreakDown();
    }, this.saloon.vars.onInt_request_delay_in_ms);
  }

  getSaloonDashboard () {

    let today = new Date (this.selectedDate);

    let date = (today.getFullYear () + '-'+ (today.getMonth () + 1) + '-' + today.getDate ());

    // show loader
    this.saloon.vars.displayLoader (true);

    this.saloon.getSaloonDashboard (date, this.saloonId).subscribe (res => {
      this.dashboard = res.data;

      // show loader
      this.saloon.vars.displayLoader (false);
    }, err => {
      // show loader
      this.saloon.vars.displayLoader (false);

      // show error
      this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString (err.errors), err.message);
    })
  }

  /**
   * Method to fetch cut breakdown of a date
   */
  getSaloonCutBreakDown () {
    let today = new Date (this.selectedDate);

    let date = '2018-07-03';//(today.getFullYear () + '-'+ (('0' + (today.getMonth () + 1)).toString()).slice (-2) + '-' + (('0' + (today.getDate ())).toString()).slice(-2));

    // show loader
    this.saloon.vars.displayLoader (true);

    this.saloon.getSaloonPaymentBreakDown (date, this.saloonId).subscribe (res => {
      
      this.calculateBreakDown (res.data)

      // show loader
      this.saloon.vars.displayLoader (false);
    }, err => {
      // show loader
      this.saloon.vars.displayLoader (false);

      // show error
      this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString (err.errors), err.message);
    })
  }

  /**
   * method to calculate number of breakDown 
   * 
   * @param Object breakdown
   * 
   * @return void
   */
  calculateBreakDown (breakDownData:Object) {
    let breakDown:Object = {};
    // calculate number of breakDown each hour
    for (let key in breakDownData) {
      // convert key into date-time
      let breakTime = new Date (breakDownData[key] * 1000);
      breakDown[breakTime.getHours()] = (breakTime.getHours() in breakDown) ? (breakDown[breakTime.getHours()] + 1) : 1;

      this.totalBreakDown += 1;
    }

    this.breakDown = Object.keys(breakDown).map(function (key) { return {time:key, count: breakDown[key]}; });
  }

  /**
   * method to calculate breakdown percentage
   * 
   * @param number breakDown
   * 
   * @return number
   */
  calculateBreakDownPercentage (breakDown:number):number {
    if (breakDown) {
      return Math.ceil ((breakDown/this.totalBreakDown)*100);
    }
  }

  /**
   * method to count Time GMT
   * 
   * @param number time
   * 
   * @return string
   */
  convertTimeIntoGMT(time:number):string {
    return (time > 11) ? (((time-12) ? (time-12) : 12) + 'pm') : (time + 'am');
  }

}
