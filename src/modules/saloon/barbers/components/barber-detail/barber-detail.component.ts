import { Component, OnInit } from '@angular/core';

import { BarberService } from '../../../../../services/saloon/barber/barber.service';

import { ActivatedRoute } from '@angular/router';

import { BarberDetail } from './BarberDetail';

@Component({
  selector: 'app-barber-detail',
  templateUrl: './barber-detail.component.html',
  styleUrls: ['./barber-detail.component.css']
})
export class BarberDetailComponent implements OnInit {

  constructor(private barber:BarberService, private activeRoute: ActivatedRoute) { }

  private pageTitle:string = 'mark andre';
  private subTitle:string = 'personal detail';

  private barberDetail:BarberDetail;

  ngOnInit() {
    const barberId = this.activeRoute.snapshot.params["barberId"];

    // get invoice detail
    setTimeout (() => {
      this.getSaloonBarberDetail (barberId);
    }, this.barber.vars.onInt_request_delay_in_ms);
  }

  getSaloonBarberDetail (barberId:number) {
    // show loader
    this.barber.vars.displayLoader (true);

    this.barber.getSaloonBarberDetail (barberId).subscribe (res => {
      this.barberDetail = res.data;

      // show loader
      this.barber.vars.displayLoader (false);

      // show error
      // this.barber.vars.showNotification('Invoice detail successfully found.', res.message, 'success');
    }, err => {
      // show loader
      this.barber.vars.displayLoader (false);

      // show error
      this.barber.vars.showNotification(this.barber.vars.convertObjectToString (err.errors), err.message);
    })
  }

}
