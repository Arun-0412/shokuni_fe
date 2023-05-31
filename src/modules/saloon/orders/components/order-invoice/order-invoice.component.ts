import { Component, OnInit } from '@angular/core';

import { OrdersService } from '../../../../../services/saloon/orders/orders.service';

import { ActivatedRoute } from '@angular/router';

import * as jspdf from 'jspdf';  
  
import html2canvas from 'html2canvas';  

@Component({
  selector: 'app-order-invoice',
  templateUrl: './order-invoice.component.html',
  styleUrls: ['./order-invoice.component.css']
})
export class OrderInvoiceComponent implements OnInit {

  constructor(private order:OrdersService, private activeRoute: ActivatedRoute) { }

  private pageTitle:String = 'invoice';

  private invoiceDetail:Array<any>;

  ngOnInit() {

    const transactionId = this.activeRoute.snapshot.params["transactionId"];

    // get invoice detail
    setTimeout (() => {
      this.getPaymentDetail (transactionId);
    }, this.order.vars.onInt_request_delay_in_ms);
  }

  /**
   * Request to get list of all saloon orders
   * 
   * @param number page
   * 
   * @return void
   */
  getPaymentDetail (transactionId:number = 1):void {
    // show loader
    this.order.vars.displayLoader (true);

    this.order.getPaymentDetail (transactionId).subscribe (res => {
      this.invoiceDetail = res.data;

      // show loader
      this.order.vars.displayLoader (false);

      // show error
      this.order.vars.showNotification('Invoice detail successfully found.', res.message, 'success');
    }, err => {
      // show loader
      this.order.vars.displayLoader (false);

      // show error
      this.order.vars.showNotification(this.order.vars.convertObjectToString (err.errors), err.message);
    })
  }


  /**
   * Download the invoice information into PDF format
   */
  downloadInvoice () {
    var data = document.getElementById('contentToConvert');  
      html2canvas(data).then(canvas => {  
        // Few necessary setting options  
        var imgWidth = 208;   
        var pageHeight = 295;    
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
    
        const contentDataURL = canvas.toDataURL('image/png')  
        let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
        var position = 0;  
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
        pdf.save('Invoice.pdf'); // Generated PDF   
      });
  }
}
