import { Component, OnInit, Input } from '@angular/core';


import { ActivatedRoute } from '@angular/router';

import { BarberDetail } from '../BarberDetail';

import { BarberService } from '../../../../../../services/saloon/barber/barber.service';



@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {
  
  constructor( private activeRoute: ActivatedRoute, private barber:BarberService) { }

  @Input() private barberDetail:BarberDetail;

  ngOnInit() {
    const barberId = this.activeRoute.snapshot.params["barberId"];

    // get invoice detail
    setTimeout (() => {
      this.setBarberDetailValues (barberId);
    }, this.barber.vars.onInt_request_delay_in_ms);
   
  }


  setBarberDetailValues (barberId:number) {
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
