import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import {IMyDpOptions} from 'mydatepicker';

import { CustomersService } from '../../../../../services/users/customer/customers.service';

import { PaymentCard } from './payment-card';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public constructor (private customer:CustomersService) { }

  private pageTitle:string = 'payment';

  private paymentForm:FormGroup;
  
  private card:PaymentCard;

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
    disableUntil: this.setToday(),
    showInputField:true,
    openSelectorOnInputClick:true,
    inline: false,
    editableDateField: false,
    indicateInvalidDate:true,
    dateFormat: 'mm/yyyy',
  };

  private placeholder: string = 'Select a date (month/year)';

  setToday() {
    let today = new Date();
    return  {year: today.getFullYear(), month: (today.getMonth() + 1), day: (today.getDate() - 1)};
  }

  ngOnInit() {
    this.paymentForm = new FormGroup ({
      card_number: new FormControl (null, [Validators.required, Validators.maxLength (20)]),
      expiry_date: new FormControl (null, [Validators.required]),
      cvv: new FormControl (null, [Validators.maxLength (4)])
    });

    setTimeout (() => {
      this.getCustomerPaymentCard ();
    }, 100);
  }

  /**
   * Method to save payment form values on submit
   * 
   * @param NgForm form
   * 
   * @returns void
   */
  submitpaymentForm(form:NgForm):void {
    /**
     * Request to save customer cards into BrainTree
     */
    this.customer.vars.displayLoader (true);

    let values = form.value;
    values.expiry_date = (this.paymentForm.controls['expiry_date'].value).formatted;

    // check if card already exists or not
    if (this.card) {
      // card already exists and need to update card detail
      this.updatePaumentCard (values);
    } else {
      // save new card
      this.savecard (values);
    }
  }

  /**
   * Method to updated saved user card
   * 
   * @param values 
   * 
   * @return void
   */
  private updatePaumentCard (values:Object):void {
    // get card token
    this.customer.updatePaumentCard (this.card.token, values).subscribe (res => {
      this.customer.vars.displayLoader (false);
      this.customer.vars.showNotification ("Card successfully updated.", res.message, 'success');

      // update edit card detail in card object
      this.card.maskedNumber = values['card_number'];
      this.card.expirationDate = values['expiry_date'];
    }, err => {
      this.customer.vars.displayLoader (false);
      this.customer.vars.showNotification (this.customer.vars.convertObjectToString (err.errors), err.message);
    });
  }

  /**
   * Method to save new Payment card of user
   * 
   * @param Object values
   * 
   * @returns void
   */
  private savecard (values:Object):void {
    this.customer.savepaymentCards (values).subscribe (res => {
      this.customer.vars.displayLoader (false);

      // set card detail
      this.card = res.data;

      this.customer.vars.showNotification ("Card successfully saved.", res.message, 'success');
    }, err => {
      this.customer.vars.displayLoader (false);
      this.customer.vars.showNotification (this.customer.vars.convertObjectToString (err.errors), err.message);
    });
  }

  /**
   * Method to check if user card exists
   * then received it's card detail
   * 
   * @return void
   */
  getCustomerPaymentCard () {
    this.customer.getCustomerPaymentCard().subscribe (res => {
      this.card = res.data[0];

      // set saved card number
      this.paymentForm.controls['card_number'].setValue ((this.card.maskedNumber).replace(/.(?=.{4})/g, "*"));
      // set saved card expiry date
      this.paymentForm.controls['expiry_date'].setValue ({date: {year: this.card.expirationYear, month: this.card.expirationMonth}, formatted : this.card.expirationMonth + '/' + this.card.expirationYear});

      this.customer.vars.showNotification ("Card successfully found", res.message, 'success');
    }, err => {
      this.customer.vars.showNotification (this.customer.vars.convertObjectToString (err.errors), err.message);
    })
  }
}







