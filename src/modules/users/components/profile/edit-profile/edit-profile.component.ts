import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';

import { UserService } from '../../../../../services/users/user.service';
import { CommonService } from '../../../../../services/common/common.service';

import { SaloonService } from '../../../../../services/saloon/saloon.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../../../services/auth/auth.service';
import { GlobalService } from '../../../../../services/global/global.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private user: UserService,
    private common: CommonService,
    private form: FormBuilder,
    private saloon: SaloonService,
    private http: HttpClient,
    private auth: AuthService,
    private href: GlobalService,
    private $changeDetector: ChangeDetectorRef) {
  }
  private profileForm: FormGroup;

  readonly MIN_FILE_SIZE_IN_BYTE: number = 1024;
  readonly MAX_FILE_SIZE_IN_BYTE: number = 102400;
  readonly ALLOW_FILE_EXT: Array<String> = ['jpg', 'jpeg', 'png'];

  readonly IMG_DIR: string = 'avatar';

  private avatar: String;
  @Input() countries: Array<any>;

  private invitationToken: string;
  countryPhoneCode: any;
  saloonForm: any = {};
  country: any;
  user_id: any;
  access_token: any;
  logoURL: any;
  logoName: any;
  files: any;
  logoheaderURL: any;
  logoheaderName: any;
  url: any;
  type: boolean
  userType: boolean = false;
  hideAgent: boolean = false;

  ngOnInit() {
    this.getAdminDetails();
    this.url = this.href.backend_url;

    if (JSON.parse(localStorage.getItem('admin_detail'))) {
      this.userType = true;
    }

    this.user_id = String(JSON.parse(localStorage.getItem('user_detail')).id);

    this.access_token = localStorage.getItem('access_token');
    let search = new URLSearchParams();

    let user_detail = JSON.parse(localStorage.getItem('user_detail'));

    this.profileForm = this.form.group({
      email: new FormControl(user_detail.email, [Validators.required, Validators.email]),
      first_name: new FormControl(user_detail.first_name, [Validators.required, Validators.maxLength(75)]),
      last_name: new FormControl(user_detail.last_name, [Validators.required, Validators.maxLength(75)]),
      number: new FormControl(user_detail.number, [Validators.required, Validators.maxLength(15), Validators.pattern('^[0-9]{10,15}$')]),
      image: new FormControl(null, [Validators.maxLength(255)]),
      country_id: new FormControl(user_detail.country_id || 91, [Validators.required, Validators.pattern('^[0-9]{1,3}$')])
    });

    if (this.countries) {
      // set default phone code 
      this.setPhoneCode();
      console.log('country code', this.countries);
    }

    // set avatar
    this.getUserAvatar();

    let url = new URL(window.location.href);

    // check if token param found in url-route
    this.invitationToken = (url.searchParams.has('token') && (url.searchParams.get('token')).trim()) ? (url.searchParams.get('token')).trim() : null;
  }


  getAdminDetails() {
    this.saloon.getSaloon(JSON.parse(localStorage.getItem('user_detail')).id).subscribe(saloonres => {
      localStorage.setItem('admin_detail', JSON.stringify(saloonres.data));
      this.hideAgent = true;

      // let admin_details = JSON.parse(localStorage.getItem('admin_detail'));
      // console.log("admin details", admin_details)

      // this.saloonForm = this.form.group({
      //   first_name: new FormControl(admin_details.first_name, [Validators.required, Validators.maxLength(75)]),
      //   last_name: new FormControl(admin_details.last_name, [Validators.required, Validators.maxLength(75)]),
      //   name: new FormControl(admin_details.name, [Validators.required, Validators.maxLength(75)]),
      //   standard_price: new FormControl(admin_details.standard_price, [Validators.required]),
      //   postal_code: new FormControl(admin_details.postal_code, [Validators.required]),
      //   lat: new FormControl(admin_details.lat, [Validators.required]),
      //   lng: new FormControl(admin_details.lng, [Validators.required]),
      //   vat_number: new FormControl(admin_details.saloon_detail.vat_number, [Validators.required]),
      //   company_number: new FormControl(admin_details.saloon_detail.company_number, [Validators.required]),
      //   address: new FormControl(admin_details.address, [Validators.required]),
      //   country_id: new FormControl(admin_details.country_id || 74, [Validators.required]),
      //   contact_number: new FormControl(admin_details.contact_number, [Validators.required]),
      //   logo_url: new FormControl(admin_details.logo_url, [Validators.required]),
      //   header_url: new FormControl(admin_details.header, [Validators.required]),
      //   email: new FormControl(admin_details.email, [Validators.required]),
      //   // password: new FormControl(admin_details.password, [Validators.required, Validators.maxLength(20)]),
      //   // rePassword: new FormControl(admin_details.rePassword, [Validators.required, Validators.maxLength(20)])
      // });
    })
  }

  changeUser(type: any) {
    if (type == 'saloon') {
      this.userType = false;
    }
    else {
      this.userType = true;
    }
  }


  typecheck(type) {
    console.log("type", type);

    if (type == "admin") {
      this.type = true;
      console.log("if", this.type);
    }
    else {
      this.type = false
      console.log("else", this.type);
    }
    this.$changeDetector.detectChanges()
  }

  submitAddSaloon(form: any) {
    console.log("form", form);

    let values = form.value;
    // append optional parameters on signup
    values['invitationToken'] = this.invitationToken;
    values['role'] = 'barber';
    values['logo'] = this.logoName;
    values['header'] = this.logoheaderName;
    values['number'] = form.value.contact_number;

    Object.keys(values).forEach((key) => (values[key] == null) && delete values[key]);
    this.auth.vars.displayLoader(true)
    values.id = JSON.parse(localStorage.getItem('user_detail')).id;
    console.log("form values", values);

    /*alert(userId);*/
    /*==================================================*/
    this.saloon.createSaloon(values).subscribe(saloonres => {
      this.saloon.vars.displayLoader(false);
      this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString(saloonres.data), saloonres.message, 'success');
      localStorage.setItem('admin_detail', JSON.stringify(saloonres.data));
    }, saloonerr => {
      this.saloon.vars.displayLoader(false);
      this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString(saloonerr.errors), saloonerr.message);
    });
    /*==================================================*/
  }

  logoUpload(event) {
    this.saloon.vars.displayLoader(true);
    this.files = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append("image[]", this.files, this.files.name);
    uploadData.append("directory", "saloon");
    let headers = new HttpHeaders({ Authorization: 'Bearer ' + this.access_token });
    //'http://10.10.10.145/shokuni_new/public/v2/image'
    this.http.post(this.url + '/image', uploadData, { headers: headers }).subscribe(res => {
      this.logoName = res["data"][0];
      this.saloon.vars.displayLoader(false);
    }, err => {
      if (!err.ok && err.status == 422) {
        console.log(err);
      }
      else if (!err.ok && err.status == 500) {
        console.log('500 error');
      }
      else {
        console.log('Else part');
      }
      this.saloon.vars.displayLoader(false);
    })

  }

  logoheaderUpload(event) {
    this.saloon.vars.displayLoader(true);
    this.files = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append("image[]", this.files, this.files.name);
    uploadData.append("directory", "saloon-header");
    let headers = new HttpHeaders({ Authorization: 'Bearer ' + this.access_token });
    //'http://10.10.10.145/shokuni_new/public/v2/image'
    this.http.post(this.url + '/image', uploadData, { headers: headers }).subscribe(res => {
      this.logoheaderName = res["data"][0];
      this.saloon.vars.displayLoader(false);
    }, err => {
      if (!err.ok && err.status == 422) {
        console.log(err);
      }
      else if (!err.ok && err.status == 500) {
        console.log('500 error');
      }
      else {
        console.log('Else part');
      }
      this.saloon.vars.displayLoader(false);
    })
  }





  /**
   * method to set default phone code
   */
  setPhoneCode(): void {
    this.countryPhoneCode = this.countries.filter((temp: any) => temp.phonecode == this.profileForm.controls['country_id'].value)
    this.countryPhoneCode = '(' + this.countryPhoneCode[0].id + ')';
  }

  /**
   * method to get user profile image
   * 
   * @returns string
   */
  getUserAvatar() {
    this.avatar = JSON.parse(localStorage.getItem('user_detail')).image_url;
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
      return this.user.vars.showNotification(`Image size must be between ${this.MIN_FILE_SIZE_IN_BYTE / 1024} KB and ${this.MAX_FILE_SIZE_IN_BYTE / 1024} KB`, 'Image');
    }

    let ext = /(?:\.([^.]+))?$/.exec(file.name)[1];

    // check for file extension
    if (!(this.ALLOW_FILE_EXT).includes(ext)) {
      let allowExt = (this.ALLOW_FILE_EXT).join(', ');
      return this.user.vars.showNotification(`Allow image extension: ${allowExt}`, 'Image');
    }

    // check for allow extension
    let reader = new FileReader();
    reader.onload = (e: any) => {
      // show loader
      this.user.vars.displayLoader(true);
      // upload avatar img on server
      this.common.uploadImg(file, this.IMG_DIR).subscribe(res => {
        // hide loader
        this.user.vars.displayLoader(false);

        // update avatar response
        // set file avatar value
        this.avatar = e.target.result;
        // this.profileForm.setValue ({image:res.data[0]})
        this.profileForm.controls['image'].setValue(res.data[0]);

        // show success notification
        this.user.vars.showNotification('Image successfully uploaded.', res.message, 'success');
      }, err => {
        // hide loader
        this.user.vars.displayLoader(false);
        // show login error
        this.user.vars.showNotification(this.user.vars.convertObjectToString(err.errors), err.message);
      })
    }
    reader.readAsDataURL(file);
  }

  /**
   * Method to update country code
   * 
   * @param country
   * 
   * @return void
   */
  updateCountry(target): void {
    this.countryPhoneCode = '(' + target.options[target.selectedIndex].getAttribute('phonecode') + ')';
    console.log("country code", this.countryPhoneCode, target);

  }

  /**
   * Method to update profile information of the user
   * 
   * @param NgForm
   */
  submitProfileUpdate(form: NgForm) {
    let values = form.value;

    // /remove all null or empty values
    Object.keys(values).forEach((key) => (values[key] == null || !(String(values[key]).trim()).length) && delete values[key]);

    // show loader
    this.user.vars.displayLoader(true);
    // update user profile information
    this.user.updateProfile(values).subscribe(res => {

      // hide loader
      this.user.vars.displayLoader(false);

      // update storage fields
      this.updateUserProfileStorageAfterUpdate();

      // show success notification
      this.user.vars.showNotification(this.user.vars.convertObjectToString(res.data), res.message, 'success');
    }, err => {
      // hide loader
      this.user.vars.displayLoader(false);

      // show login error
      this.user.vars.showNotification(this.user.vars.convertObjectToString(err.errors), err.message);
    })
  }

  /**
   * method to update user profile information after update
   */
  updateUserProfileStorageAfterUpdate() {
    // show loader
    this.user.vars.displayLoader(true);

    this.user.getUserDetail().subscribe(res => {
      // update localstorage values
      localStorage.setItem('user_detail', JSON.stringify(res.data));

      // hide loader
      this.user.vars.displayLoader(false);
    }, err => {
      // hide loader
      this.user.vars.displayLoader(false);

      // show login error
      this.user.vars.showNotification(this.user.vars.convertObjectToString(err.errors), err.message);
    })
  }

  /**
   * Method to selete user country id in dropdown
   */
  selectUserCountry(countryId: number): boolean {
    if (countryId) {
      let userCountry = parseInt(JSON.parse(localStorage.getItem('user_detail'))['country_id'])
      return userCountry === userCountry;
    }
  }

}
