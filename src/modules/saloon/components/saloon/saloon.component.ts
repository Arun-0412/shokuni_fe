import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm, FormArray, FormBuilder } from '@angular/forms';

import { SaloonService } from '../../../../services/saloon/saloon.service';
import { CommonService } from '../../../../services/common/common.service';

import { Saloon } from './Saloon';
import { Country } from './Country';

import { ActivatedRoute } from '@angular/router';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';

@Component({
  selector: 'app-saloon',
  templateUrl: './saloon.component.html',
  styleUrls: ['./saloon.component.css'],
  providers: [GoogleMapsAPIWrapper]
})
export class SaloonComponent implements OnInit {

  geocoder: any;
  google: any;

  constructor(
    private saloon: SaloonService,
    private common: CommonService,
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private mapsApiLoader: MapsAPILoader,
    private wrapper: GoogleMapsAPIWrapper,
    private router: Router
  ) { }

  private pageTitle: String = 'manage shop';
  private subTitle: String = 'edit shop';

  private saloonForm: FormGroup;
  private saloonDetail: Saloon;

  readonly MIN_FILE_SIZE_IN_BYTE: number = 1024;
  readonly MAX_FILE_SIZE_IN_BYTE: number = 102400;
  readonly ALLOW_FILE_EXT: Array<String> = ['jpg', 'jpeg', 'png'];

  readonly IMG_DIR: string = 'saloon';
  private saloonLogo: string;

  private updateAddress: boolean = false;

  private lat: number = 10.2492747;
  private lng: number = 164.5409872;

  private countries: Country[];

  ngOnInit() {

    this.saloonForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      logo: new FormControl(null, [Validators.maxLength(255)]),
      vat_number: new FormControl(null, [Validators.maxLength(255)]),
      company_number: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      contact_number: new FormControl(null, [Validators.required, Validators.maxLength(15)]),
      address: new FormControl(null, [Validators.required, Validators.maxLength(2000)]),
      postal_code: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      lat: new FormControl(this.lat, [Validators.required, Validators.maxLength(20)]),
      lng: new FormControl(this.lng, [Validators.required, Validators.maxLength(20)]),
      country_id: new FormControl(null, [Validators.required, Validators.maxLength(3)]),
      website_url: new FormControl(null, [Validators.maxLength(255)]),
      schedule: this.formBuilder.array([this.createItem()])
    });

    // get saloon detail
    setTimeout(() => {
      this.getSaloon(this.activeRoute.snapshot.params["saloonId"] || null);
      this.getCountries();
    }, this.saloon.vars.onInt_request_delay_in_ms);

    // add number of days in schedule saloon-form field
    this.addSaloonScheduleValues();

    this.mapsApiLoader.load().then(() => {
      // @ts-ignore
      this.geocoder = new google.maps.Geocoder();
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      day: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
      start_time: new FormControl(null, [Validators.required, Validators.maxLength(8)]),
      end_time: new FormControl(null, [Validators.required, Validators.maxLength(8)])
    });
  }

  addSaloonScheduleValues() {
    let control = <FormArray>this.saloonForm.controls.schedule;

    // delete first item from formBuilder
    control.removeAt(0);

    Object(this.designOpeningTime()).forEach(day => {

      // add day in saloon-schdule
      control.push(this.formBuilder.group({
        day: day,
        start_time: null,
        end_time: null
      }))

    });
  }

  /**
   * Method to get Saloon Detail
   */
  getSaloon(saloonId: number) {
    // show loader
    this.saloon.vars.displayLoader(true);

    // get saloon detail
    this.saloon.getSaloon(saloonId).subscribe(res => {
      // update saloon-detail
      this.saloonDetail = res.data;
      // set saloon-form values
      this.setSaloonvarmValues();

      // show loader
      this.saloon.vars.displayLoader(false);

      // show error
      this.saloon.vars.showNotification('Saloon detail successfully found', res.message, 'success');
    }, err => {
      // show loader
      this.saloon.vars.displayLoader(false);

      // show error
      this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString(err.errors), err.message);
    })
  }

  getCountries(): void {
    // show loader
    this.common.vars.displayLoader(true);

    this.common.getCountries({ select: 'id,name,phonecode', paginate: 0 }).subscribe(res => {
      // hide loader
      this.common.vars.displayLoader(false);

      // // update countries list
      this.countries = res.data.data;
    }, err => {
      // hide loader
      this.common.vars.displayLoader(false);
    })
  }

  /**
   * Method to show/hide address fields
   */
  toggleAddressFields() {
    this.updateAddress = !this.updateAddress;
  }

  /**
   * Method to set saloon form values
   * 
   * @return void
   */
  setSaloonvarmValues(): void {
    // console.log (this.saloonDetail)
    Object.keys(this.saloonForm.controls).forEach((key: string) => {
      // excludes saloon-schdule or other fields
      if (!['schedule'].includes(key)) {
        let value = (this.saloonDetail[key]) ? this.saloonDetail[key] : null;

        // check items from saloon detail
        if (this.saloonDetail.saloon_detail && ['website_url', 'company_number', 'vat_number'].includes(key) && this.saloonDetail.saloon_detail[key]) {
          // get value from saloon_detail
          value = this.saloonDetail.saloon_detail[key];
        }

        // set value of each form field
        this.saloonForm.controls[key].setValue(value);
      }
    });

    // set saloonLogo value
    this.saloonLogo = this.saloonDetail.logo_url;

    // update lat/lng of saloon address
    this.lat = this.saloonDetail.lat;
    this.lng = this.saloonDetail.lng;

    // check if saloon-schedule values exists
    if (this.saloonDetail && this.saloonDetail.saloon_schedule && this.saloonDetail.saloon_schedule['schedule']) {
      let control = <FormArray>this.saloonForm.controls.schedule;

      Object(this.saloonDetail.saloon_schedule['schedule']).forEach(day => {
        // check for Saloon-schdule from SaloonForm
        (control.value).forEach((val, index) => {
          // check for form-control day value and compar with saloon-detail
          if (val.day === day.day) {
            // update saloon-schedule form value
            control.at(index).patchValue(day);
            return false;
          }
        })
      })
    }
  }

  /**
   * Method to upload image
   */
  uploadImg(event) {
    const file: File = event.target.files[0];

    // check if file is not empty 
    if (!file || !file.size) {
      return false;
    }

    // check for file size
    if ((file.size < this.MIN_FILE_SIZE_IN_BYTE) && (file.size > this.MAX_FILE_SIZE_IN_BYTE)) {
      return this.saloon.vars.showNotification(`Image size must be between ${this.MIN_FILE_SIZE_IN_BYTE / 1024} KB and ${this.MAX_FILE_SIZE_IN_BYTE / 1024} KB`, 'Image');
    }

    let ext = /(?:\.([^.]+))?$/.exec(file.name)[1];

    // check for file extension
    if (!(this.ALLOW_FILE_EXT).includes(ext)) {
      let allowExt = (this.ALLOW_FILE_EXT).join(', ');
      return this.saloon.vars.showNotification(`Allow image extension: ${allowExt}`, 'Image');
    }

    // check for allow extension
    let reader = new FileReader();
    reader.onload = (e: any) => {
      // show loader
      this.saloon.vars.displayLoader(true);
      // upload avatar img on server
      this.common.uploadImg(file, this.IMG_DIR).subscribe(res => {
        // hide loader
        this.saloon.vars.displayLoader(false);

        // update avatar response
        // set file avatar value
        this.saloonLogo = e.target.result;
        // this.profileForm.setValue ({image:res.data[0]})
        this.saloonForm.controls['logo'].setValue(res.data[0]);

        // show success notification
        this.saloon.vars.showNotification('Image successfully uploaded.', res.message, 'success');
      }, err => {
        // hide loader
        this.saloon.vars.displayLoader(false);
        // show login error
        this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString(err.errors), err.message);
      })
    }
    reader.readAsDataURL(file);
  }

  /**
   * Check if saloon country is same as list
   */
  checkSaloonCountry(countryId: number): boolean {
    return countryId == this.saloonForm.controls['country_id'].value;
  }

  /**
   * Method to design Opening Times table
   */
  designOpeningTime(): Array<string> {
    return ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  }

  /**
   * Set dynamic Id for Checkbox in opening times HTL code
   * 
   * @param day 
   * @param dataTraget 
   */
  getDataTarget(day: string, dataTraget: boolean = true): string {
    if (dataTraget) {
      return '#data-target' + day;
    }

    return 'data-target' + day;
  }

  /**
   * Method to submit Saloon detail
   * 
   * @param form
   * 
   * @returns void
   */
  submitSaloon(form: NgForm): void {

    let values = form.value;

    // remove empty/null keys from object
    Object.keys(values).forEach((key) => (values[key] == null) && delete values[key]);

    // check if logo exists
    if (values['logo']) {
      values['header'] = values['logo'];
      values['standard_price'] = 0.00;
    }

    // chec if address updated by user
    // if (this.updateAddress) {
    //   let address = this.saloonForm.controls['address'].value + ',' + this.saloonForm.controls['postal_code'].value;

    //   this.findLocation(address).catch(reject => {
    //     // display error
    //     this.saloon.vars.showNotification(reject, 'Saloon');
    //     console.log("catch lat and lon", reject);
    //   }).then(resolve => {
    //     console.log("lat and lon", resolve);

    //     // set lat/lng of saloon
    //     this.saloonForm.controls['lat'].setValue(resolve.lat);
    //     this.saloonForm.controls['lng'].setValue(resolve.lng);
    //     values['lat'] = resolve.lat;
    //     values['lng'] = resolve.lng;

    //     // values['lat'] = this.saloonForm.controls['lat'];
    //     // values['lng'] = this.saloonForm.controls['lng'];

    //     // submit saloon update form
    //     this.submitSaloonForm(values);
    //   })
    // } else {
    this.submitSaloonForm(values);
    // }
  }

  /**
   * Method to submit saloon form after lat-lng find
   * 
   * @param Object values
   * 
   * @return void
   */
  submitSaloonForm(values: Object): void {
    // show loader
    this.saloon.vars.displayLoader(true);

    let mySaloon = null;

    // check if user wish to register saloon or update
    if (this.saloonDetail) {
      mySaloon = this.saloon.updateSaloon(values, this.activeRoute.snapshot.params["saloonId"] || null);
    } else {
      mySaloon = this.saloon.createSaloon(values);
    }

    // request to update saloon detail
    mySaloon.subscribe(res => {
      // hide loader
      this.saloon.vars.displayLoader(false);

      if (!this.saloonDetail) {
        location.reload()
      }

      // show error
      this.saloon.vars.showNotification('Saloon detail successfully updated', res.message, 'success');
    }, err => {
      // hide loader
      this.saloon.vars.displayLoader(false);
      // show error
      this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString(err.errors), err.message);
    })
  }

  findLocation(address: string): Promise<any> {
    // find saloon geo-location and wait untill response
    return new Promise((resolve, reject) => {
      this.geocoder.geocode({
        'address': address
      }, (results, status) => {
        // @ts-ignore
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[0].geometry.location.lat && results[0].geometry.location.lng)
            return resolve({ lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() });

          return reject('Unable to find lat/lng of saloon address');
        } else {
          return reject('Unable to find lat/lng of saloon address');
        }
      })
    })
  }

  redirect() {
    if (this.router.url == '/barber/add-saloon') {
      this.router.navigateByUrl('/barber/dashboard');
    }
    else {
      this.router.navigateByUrl('admin/saloons');
    }
    console.log("url", this.router.url);

  }
}
