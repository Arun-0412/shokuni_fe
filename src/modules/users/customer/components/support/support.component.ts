import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { CommonService } from '../../../../../services/common/common.service';
import { CustomersService } from '../../../../../services/users/customer/customers.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  constructor(private common:CommonService, private customer:CustomersService) { }

  private supportForm:FormGroup;
  private pageTitle:string = 'support';

  private fileLabel:string = 'choose file';

  readonly MIN_FILE_SIZE_IN_BYTE:number = 1024;
  readonly MAX_FILE_SIZE_IN_BYTE:number = 102400;
  readonly ALLOW_FILE_EXT:Array<String> = ['csv', 'xlsx', 'xls'];



  ngOnInit() {
    this.supportForm = new FormGroup ({
      type: new FormControl (null, [Validators.required, Validators.maxLength (2)]),
      description: new FormControl (null, [Validators.required, Validators.maxLength (2000)]),
      file: new FormControl (null, [Validators.maxLength (255)]),
    });
  }

  /**
   * Method to submit support form
   * 
   * @param form:NgForm
   */
  submitSupportForm (form:NgForm):void {
    // show loader
    this.common.vars.displayLoader(true);

    let values = form.value;

    // remove empty/null keys from object
    Object.keys(values).forEach((key) => (values[key] == null) && delete values[key]);

    // request to save support information
    this.customer.saveCustomerSupport (values).subscribe (res => {
      // hide loader
      this.common.vars.displayLoader(false);

      // show success notification
      this.common.vars.showNotification('Request successfuly saved.', res.message, 'success');
    }, err => {
      // hide loader
      this.common.vars.displayLoader(false);

      // show login error
      this.common.vars.showNotification(this.common.vars.convertObjectToString (err.errors), err.message);
    });
  }

  /**
   * Method to upload file
   */
  uploadFile (event) {
    const file:File = event.target.files[0];

    // check if file is not empty 
    if (!file || !file.size) {
      return false;
    }

    // check for file size
    if ((file.size < this.MIN_FILE_SIZE_IN_BYTE) && (file.size > this.MAX_FILE_SIZE_IN_BYTE)) {
        return this.common.vars.showNotification (`File size must be between ${this.MIN_FILE_SIZE_IN_BYTE/1024} KB and ${this.MAX_FILE_SIZE_IN_BYTE/1024} KB`, 'file');
    }

    let ext = /(?:\.([^.]+))?$/.exec (file.name)[1];

    // check for file extension
    if (!(this.ALLOW_FILE_EXT).includes (ext)) {
      let allowExt = (this.ALLOW_FILE_EXT).join(', ');
      return this.common.vars.showNotification (`Allow file extension: ${allowExt}`, 'file');
    }

    // check for allow extension
    let reader = new FileReader();
    reader.onload = (e:any) => {
      // show loader
      this.common.vars.displayLoader(true);
      // upload avatar img on server
      this.common.uploadFile (file, 'support').subscribe(res=> {
        // hide loader
        this.common.vars.displayLoader(false);

        // this.profileForm.setValue ({file:res.data[0]})
        this.supportForm.controls['file'].setValue(res.data[0]);
        this.fileLabel = file.name;

        // show success notification
        this.common.vars.showNotification('file successfully uploaded.', res.message, 'success');
      }, err => {
        // hide loader
        this.common.vars.displayLoader(false);
        // show login error
        this.common.vars.showNotification(this.common.vars.convertObjectToString (err.errors), err.message);
      })
    }
    reader.readAsDataURL(file);
  }

}
