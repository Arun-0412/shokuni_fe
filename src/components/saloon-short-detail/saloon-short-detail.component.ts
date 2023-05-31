import { Component, OnInit, Input } from '@angular/core';

import { SaloonService } from '../../services/saloon/saloon.service';

import { Saloon } from '../../modules/saloon/components/saloon/Saloon';

@Component({
  selector: 'app-saloon-short-detail',
  templateUrl: './saloon-short-detail.component.html',
  styleUrls: ['./saloon-short-detail.component.css']
})
export class SaloonShortDetailComponent implements OnInit {

  @Input() saloonId:number;

  constructor(private saloon:SaloonService) { }

  private saloonDetail:Saloon;

  ngOnInit() {

    // get information of saloon performance
    setTimeout (() => {
      this.getSaloon();
    }, this.saloon.vars.onInt_request_delay_in_ms)
  }

  /**
   * Method to get Saloon Detail
   */
  getSaloon () {
    // show loader
    this.saloon.vars.displayLoader (true);
    //alert(this.saloonId);
    // get saloon detail
    this.saloon.getSaloon (this.saloonId).subscribe (res => {
      // update saloon-detail
      this.saloonDetail = res.data;
      // show loader
      this.saloon.vars.displayLoader (false);

      // show error
      this.saloon.vars.showNotification('Saloon detail successfully found', res.message, 'success');
    }, err => {
      // show loader
      this.saloon.vars.displayLoader (false);

      // show error
      this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString (err.errors), err.message);
    })
  }

  /**
   * method to get date information
   * @param string type
   */
  getDate()  {
    return new Date();
  }

  /**
   * Method to get opening Time by current  day
   */
  getOpeningTime (schedule:Array<Object>):Object {
    let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    let today = new Date();
    var dayName = days[today.getDay()];

    if (schedule) {
      // find today schedule
      let todaySchedule = Object (schedule).find(day => {
        return day['day'] === dayName;
      })

      return todaySchedule;
    }
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

  /**
   * Method to convert time into timestamp
   */
  timeToDate (time:string) {
    if (time) {
      return new Date (null, null, null, parseInt(time.split (':')[0]), parseInt(time.split (':')[0]), parseInt(time.split (':')[0]));
    }
  }

}
