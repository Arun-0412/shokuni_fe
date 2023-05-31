import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, FormControl, Validators, NgForm, FormArray, FormBuilder } from '@angular/forms';

import { BarberDetail } from '../BarberDetail';

import { BarberService } from '../../../../../../services/saloon/barber/barber.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private barber:BarberService) { }

  private barberDetailForm:FormGroup;

  @Input() private barberDetail:BarberDetail;

  ngOnInit() {
    this.barberDetailForm = new FormGroup ({
      first_name: new FormControl (null, [Validators.required, Validators.maxLength (75)]),
      last_name: new FormControl (null, [Validators.required, Validators.maxLength (75)]),
      occupation: new FormControl (null, [Validators.required, Validators.maxLength (255)]),
      company_name: new FormControl (null, [Validators.required, Validators.maxLength (255)]),
      number: new FormControl (null, [Validators.required, Validators.maxLength (15)]),
      address: new FormControl (null, [Validators.required, Validators.maxLength (255)]),
      city: new FormControl (null, [Validators.required, Validators.maxLength (255)]),
      state: new FormControl (null, [Validators.required, Validators.maxLength (255)]),
      postcode: new FormControl (null, [Validators.required, Validators.maxLength (8)]),
      social: this.formBuilder.array([this.createItem()])
    });

    // add number of days in schedule saloon-form field
    this.addSocialLinks ();

    this.setBarberDetailValues();
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      social_link_name: new FormControl (null, [Validators.maxLength (255)]),
      social_link: new FormControl (null, [Validators.maxLength (255)])
    });
  }

  /**
   * Append all required social links as per design
   * 
   * @return void
   */
  addSocialLinks () {
    let control = <FormArray>this.barberDetailForm.controls.social;

    // delete first item from formBuilder
    control.removeAt (0);

    let socialLinks = ['linkedin', 'facebook', 'twitter', 'instagram'];
    
    Object (socialLinks).forEach (social => {
            
      // add day in saloon-schdule
      control.push (this.formBuilder.group({
        social_link_name:social,
        social_link:null
      }))

    });
  }

  /**
   * Method to set saloon form values
   * 
   * @return void
   */
  setBarberDetailValues ():void {
    // console.log (this.saloonDetail)
    Object.keys(this.barberDetailForm.controls).forEach((key: string) => {
      // excludes saloon-schdule or other fields
      if (!['social'].includes (key)) {
        let value = (this.barberDetail[key]) ? this.barberDetail[key] : null;

        // check items from saloon detail
        if (this.barberDetail.barber_profile && ['occupation', 'company_name', 'address', 'city', 'state', 'postcode'].includes (key) && this.barberDetail.barber_profile[key]) {
          // get value from barber_profile
          value = this.barberDetail.barber_profile[key];
          console.log(value);
        }

        // set value of each form field
        this.barberDetailForm.controls[key].setValue (value);
      }
    });
    
    // check if saloon-schedule values exists
    if (this.barberDetail.social) {
      let control = <FormArray>this.barberDetailForm.controls.social;
      
      Object(this.barberDetail.social).forEach (day => {
        // check for Saloon-schdule from SaloonForm
        (control.value).forEach ((val, index) => {
          // check for form-control day value and compar with saloon-detail
          if (val.social_link_name === day.social_link_name) {
            // update saloon-schedule form value
            control.at(index).patchValue (day);
            return false;
          }
        })
      })
    }
  }

  /**
   * Submit barber form detail
   */
  submitBarberDetail (form:NgForm):void {
    // show loader
    this.barber.vars.displayLoader(true);

    let values = form.value;

    // remove empty/null keys from object
    Object.keys(values).forEach((key) => (values[key] == null) && delete values[key]);

    // request to update barber detail
    this.barber.updateSaloonBarberDetail (this.barberDetail.id, values).subscribe (res => {
      // hide loader
      this.barber.vars.displayLoader(false);

      // show error
      this.barber.vars.showNotification(this.barber.vars.convertObjectToString (res.data), res.message, 'success');
    }, err => {
      // hide loader
      this.barber.vars.displayLoader(false);

      // show error
      this.barber.vars.showNotification(this.barber.vars.convertObjectToString (err.errors), err.message);
    })
  }

}
