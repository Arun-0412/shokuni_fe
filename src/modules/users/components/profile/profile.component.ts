import { Component, OnInit } from '@angular/core';

import { Angular5Csv } from 'angular5-csv/Angular5-csv';

import { CommonService } from '../../../../services/common/common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private pageTitle: String = 'edit profile';

  public countries: Array<any> = [];

  constructor(private common: CommonService) { }

  ngOnInit() {
    // get list of countries
    setTimeout(() => {
      this.getCountries();
    }, this.common.vars.onInt_request_delay_in_ms);
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
   * method to get country name by ID
   * 
   * @param int countryId
   * 
   * @returns string
   */
  getCountryName(countryId: number): string {
    for (let country of this.countries) {
      if (country['id'] == countryId) {
        return country['name'];
      }
    }
  }

  /**
   * Method to get phone neumber with country code
   * 
   * @param country_id 
   * @param number 
   * 
   * @returns string
   */
  getPhoneNum(country_id: number, number: number): string {

    // /search for user phon-country id
    for (let country of this.countries) {
      if (country['id'] == country_id) {
        return '(' + country['phonecode'] + ') ' + number;
      }
    }

    return String(number);
  }

  /**
   * Method to download user profile in CSV format
   */
  downloadCSVProfile() {

    // fetch user prfile data from localstorage
    let userDetail = JSON.parse(localStorage.getItem('user_detail'));

    let options = {
      // fieldSeparator: ',',
      // quoteStrings: '"',
      // decimalseparator: '.',
      showLabels: true,
      showTitle: false,
      useBom: true,
      // noDownload: true,
      headers: ["First Name", "Last Name", "E-Mail", "Role", "Contact Number", "Status", "Country", "Image"]
    };

    // set CSV file name as user name
    let filename = userDetail.first_name + ' ' + userDetail.last_name;


    let data = [{
      first_name: userDetail.first_name,
      last_name: userDetail.last_name,
      email: userDetail.email,
      role: userDetail.role,
      number: this.getPhoneNum(userDetail.country_id, userDetail.number),
      status: userDetail.status,
      country_id: this.getCountryName(userDetail.country_id),
      image_url: userDetail.image_url,
    }];

    new Angular5Csv(data, filename, options);
  }
}
