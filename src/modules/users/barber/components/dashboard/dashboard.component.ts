import { Component, OnInit } from '@angular/core';
import { BarberService } from '../../../../../services/users/barber/barber.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IMyDpOptions, IMyInputFieldChanged } from 'mydatepicker';
import { SaloonService } from 'src/services/saloon/saloon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private barber: BarberService, private activeRoute: ActivatedRoute, private router: Router, private saloon: SaloonService) { }

  private pageTitle: string = 'dashboard';

  private barberPerformanceData: Array<any> = [];

  private saloonId: number;

  private selectedDate: number;

  displayAddSaloon: boolean = false;

  ngOnInit() {
    let today = new Date();
    this.selectedDate = today.getTime();

    this.saloonId = this.activeRoute.snapshot.params["saloonId"] || null;
    this.getSaloon();

    // get information of barber performance
    setTimeout(() => {
      this.getbarberPerformanceReview();
    }, this.barber.vars.onInt_request_delay_in_ms)
  }
  public myDatePickerOptions: IMyDpOptions = {
    sunHighlight: true,
    satHighlight: true,
    markCurrentDay: true,
    markCurrentMonth: true,
    markCurrentYear: true,
    showClearDateBtn: false,
    alignSelectorRight: true,
    componentDisabled: false,
    firstDayOfWeek: 'su',
    // disableUntil: this.setToday(),
    disableSince: this.setToday(),
    showInputField: false,
    openSelectorOnInputClick: true,
    inline: false,
    editableDateField: false,
    indicateInvalidDate: true,
    // dateFormat: 'yyyy-mm-dd',
    openSelectorTopOfInput: false
  };


  getSaloon() {
    // show loader
    this.saloon.vars.displayLoader(true);
    //alert(this.saloonId);
    // get saloon detail
    this.saloon.getSaloon(this.saloonId).subscribe(res => {
      // update saloon-detail
      // show loader
      this.saloon.vars.displayLoader(false);

      // show error
      this.saloon.vars.showNotification('Saloon detail successfully found', res.message, 'success');
    }, err => {
      // show loader
      this.saloon.vars.displayLoader(false);
      this.displayAddSaloon = true;
      // show error
      this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString(err.errors), err.message);
    })
  }


  setToday() {
    let today = new Date();
    return { year: today.getFullYear(), month: (today.getMonth() + 1), day: (today.getDate() + 1) };
  }
  /**
   * Request to get barber performace by specific date
   * 
   * @param Date:string
   * 
   * @return void
   */
  getbarberPerformanceReview(): void {
    let date = new Date(this.selectedDate);
    let performanceDate = date.getFullYear() + '-' + (('0' + (date.getMonth() + 1)).toString()).slice(-2) + '-' + date.getDate();

    this.barber.vars.displayLoader(true);
    // console.log("1");
    // this.activeRoute.snapshot.params["barberId"]
    this.barber.getbarberPerformanceReview(performanceDate, this.activeRoute.snapshot.params["barberId"] || null).subscribe(res => {
      this.barber.vars.displayLoader(false);
      // console.log("2");
      this.barber.vars.showNotification('Barber performance information success found.', res.message, 'success');

      this.barberPerformanceData = res.data;
    }, err => {
      this.barber.vars.displayLoader(false);

      this.barber.vars.showNotification(this.barber.vars.convertObjectToString(err.errors), err.message);
    })
  }

  /**
   * Method to calculate average cut time
   * 
   * @primitive method
   * 
   * @param time
   * @param number
   * 
   * @return number 
   */
  calculateAvgCutTime(time: number, cut: number): number {
    return Math.floor(time / cut);
  }
  redirect() {
    this.router.navigate(['/profile']);
  }

}
