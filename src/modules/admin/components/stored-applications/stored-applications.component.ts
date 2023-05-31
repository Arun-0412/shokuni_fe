import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../../../services/admin/admin.service';

import {IMyDpOptions, IMyInputFieldChanged} from 'mydatepicker';

@Component({
  selector: 'app-stored-applications',
  templateUrl: './stored-applications.component.html',
  styleUrls: ['./stored-applications.component.css']
})
export class StoredApplicationsComponent implements OnInit {

  constructor(private admin:AdminService) { }

  private pageTitle:string = 'store applications';
  private subTitle:string = 'pending applications';

  private selectedDate:number;

  private saloonList:Array<string>;
  private currentPage:number;
  private totalItems:number;

  private saloonDetail:Object;

  private selectedSaloon:Array<number> = [];

  ngOnInit() {
    let today = new Date ();
    this.selectedDate = today.getTime();

    setTimeout (() => {
      this.getSaloons ();
    }, this.admin.vars.onInt_request_delay_in_ms);
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
  onDateChanged (event:IMyInputFieldChanged) {
    let date = new Date (event['date'].year, (event['date'].month - 1), event['date'].day)
    this.selectedDate = date.getTime();
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

  /**
   * Method to pull/push saloon value from selectedSaloon array
   * 
   * @param Event
   * 
   * @return void
   */
  updateSelectedSaloon (event:Event):void {
    // check for checkbox status as checked or not
    this.selectedSaloon.includes(parseInt (event.target['value'])) ? this.selectedSaloon.splice (this.selectedSaloon.indexOf(parseInt (event.target['value'])), 1) : null;

    if (event.target['checked']) {
      this.selectedSaloon.push (parseInt (event.target['value']));
    }
  }

  /**
   * Method to submit the status
   * 
   * @param string status
   * 
   * @return void
   */
  submitUpdateStatus (status:string) {
    // check if selectedSaloon not empty
    if (!this.selectedSaloon.length) {
      this.admin.vars.showNotification ('Please select at-least single saloon', 'saloon');
    }

    // send request to update saloon status
    this.admin.vars.displayLoader (true);

    this.admin.updateSaloonStatus ({saloon:this.selectedSaloon, status:status}).subscribe (res => {
      // hide loader
      this.admin.vars.displayLoader (false);

      this.admin.vars.showNotification (this.admin.vars.convertObjectToString (res.data), res.message, 'success');

      this.getSaloons (this.currentPage);
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

  /**
   * method to display Saloon status in colored format
   * 
   * @param string status
   * 
   * @return string
   */
  checkSaloonStatusColor(status:string):string {
    switch (status) {
      case 'received':
        return 'text-warning';
      case 'reject':
        return 'text-danger';
      case 'approve':
        return 'text-success';
    }
  }

  /**
   * method to quickly update saloon status
   * 
   * @param number saloonId
   * @param string status
   * 
   * @return void
   */
  quickSubmitStatus (saloonId:number, status:string):void {
    // check for checkbox status as checked or not
    !this.selectedSaloon.includes(saloonId) ? this.selectedSaloon.push (saloonId) : null;

    this.submitUpdateStatus (status);
  }
}
