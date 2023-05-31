import { Component, OnInit, ViewChild } from '@angular/core';

import { AdminService } from '../../../../services/admin/admin.service';

import {IMyDpOptions, IMyInputFieldChanged} from 'mydatepicker';


import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  constructor(private activeRoute: ActivatedRoute, private admin:AdminService) { }

  private saloonId:number;
  private pageTitle:string = 'dashboard';

  private selectedDate:number;

  ngOnInit() {
    this.saloonId = this.activeRoute.snapshot.params["saloonId"] || null
    let today = new Date ();
    this.selectedDate = today.getTime();
  }
  public myDatePickerOptions: IMyDpOptions = {
    sunHighlight:true,
    satHighlight:true,
    markCurrentDay:true,
    markCurrentMonth:true,
    markCurrentYear:true,
    showClearDateBtn:false,
    alignSelectorRight:true,
    componentDisabled:false,
    firstDayOfWeek:'su',
    // disableUntil: this.setToday(),
    disableSince:this.setToday(),
    showInputField:false,
    openSelectorOnInputClick:true,
    inline: false,
    editableDateField: false,
    indicateInvalidDate:true,
    // dateFormat: 'yyyy-mm-dd',
    openSelectorTopOfInput:false
  };

  setToday() {
    let today = new Date();
    return  {year: today.getFullYear(), month: (today.getMonth() + 1), day: (today.getDate()+1)};
  }

  /**
   * Method to take respective action on datepicker date changed
   * 
   * @param object
   */
  

}
