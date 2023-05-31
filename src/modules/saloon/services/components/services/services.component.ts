import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, NgForm} from '@angular/forms';

import { ServicesService } from '../../../../../services/saloon/services/services.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private service:ServicesService, private activeRoute: ActivatedRoute) {  }

  private pageTitle:string = 'products';
  private subTitle:string = 'manage products';

  private serviceList:Array<any>;

  private currentPage:number;
  private totalItems:number;

  private selectedService:Object;

  private serviceForm:FormGroup;
  private editServiceForm:FormGroup;

  ngOnInit() {  
    this.serviceForm = new FormGroup ({
      name: new FormControl (null, [Validators.required, Validators.maxLength(255)]),
      service_type: new FormControl ('extra', [Validators.required, Validators.maxLength(5)]),
      amount: new FormControl (null, [Validators.required, Validators.maxLength(5)]),
      time: new FormControl (null, [Validators.required, Validators.maxLength(2)]),
    });

    this.editServiceForm = new FormGroup ({
      name: new FormControl (null, [Validators.required, Validators.maxLength(255)]),
      service_type: new FormControl ('extra', [Validators.required, Validators.maxLength(5)]),
      amount: new FormControl (null, [Validators.required, Validators.maxLength(5)]),
      time: new FormControl (null, [Validators.required, Validators.maxLength(2)]),
    });
    
    setTimeout (() => {
      this.getSaloonServices ();
    }, this.service.vars.onInt_request_delay_in_ms);
  }

  /**
   * method to get list of saloon barbers
   * 
   * @param number page
   * 
   * @returns void
   */
  getSaloonServices (page:number = 1):void {
    // show loader
    this.service.vars.displayLoader (true);

    this.service.getSaloonServices (page, this.activeRoute.snapshot.params["saloonId"] || null).subscribe (res => {
      // hide loader
      this.service.vars.displayLoader (false);

      // assign service orders
      this.serviceList = res.data.data;
      this.currentPage = res.data.current_page;
      this.totalItems = res.data.total;
    }, err => {
      // hide loader
      this.service.vars.displayLoader (false);

      // display errors notification
      this.service.vars.showNotification (this.service.vars.convertObjectToString (err.errors), err.message);
    })
  }

  /**
   * method to genertae page counter to design dynamic pagination
   * 
   * @param counter 
   * 
   * @returns array
   */
  generatePageCounter (counter:number):Array<number> {
    return Array(counter).fill(0).map((x,i)=>i);
  }

  /**
   * Request for create new service under the saloon
   * 
   * @param NgForm 
   * 
   * @return void
   */
  submitProductForm (form:NgForm) {
    let values = form.value;

    Object.keys(values).forEach((key) => (values[key] == null) && delete values[key]);

    this.service.vars.displayLoader (true);

    this.service.addService (form.value, this.activeRoute.snapshot.params["saloonId"] || null).subscribe (res => {
      this.service.vars.displayLoader (false);
      this.service.vars.showNotification (this.service.vars.convertObjectToString (res.data), res.message, 'success');

      // request to load the services again
      this.getSaloonServices();
    }, err => {
      this.service.vars.displayLoader (false);
      this.service.vars.showNotification (this.service.vars.convertObjectToString (err.errors), err.message);
    })
  }

  selectService(service:Object) {

    this.selectedService = service;

    this.editServiceForm.controls['name'].setValue (service['name']);
    this.editServiceForm.controls['service_type'].setValue (service['service_type']);
    this.editServiceForm.controls['time'].setValue (service['time']);
    this.editServiceForm.controls['amount'].setValue (service['amount'].toFixed(2));
  }

  /**
   * Request for update service under the saloon
   * 
   * @param NgForm 
   * 
   * @return void
   */
  submitEditProductForm (form:NgForm) {
    let values = form.value;

    Object.keys(values).forEach((key) => (values[key] == null) && delete values[key]);

    this.service.vars.displayLoader (true);

    this.service.editService (form.value, this.selectedService['id']).subscribe (res => {
      this.service.vars.displayLoader (false);
      this.service.vars.showNotification (this.service.vars.convertObjectToString (res.data), res.message, 'success');

      // request to load the services again
      this.getSaloonServices();
    }, err => {
      this.service.vars.displayLoader (false);
      this.service.vars.showNotification (this.service.vars.convertObjectToString (err.errors), err.message);
    })
  }
}
