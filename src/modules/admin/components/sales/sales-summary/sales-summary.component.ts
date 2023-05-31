import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrdersService } from '../../../../../services/saloon/orders/orders.service';
import { AuthService } from '../../../../../services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sales-summary',
  templateUrl: './sales-summary.component.html',
  styleUrls: ['./sales-summary.component.css']
})
export class SalesSummaryComponent implements OnInit {

  private salesSummary:Array<any>;

  @Input() private saloonId:number;
  pay:any;
  getid:any;
  private payForm:FormGroup;

  constructor(private route: ActivatedRoute,private order:OrdersService,private auth:AuthService,private http : HttpClient) { }

  ngOnInit() {
    this.getid = this.route.snapshot.paramMap.get('id');

    this.payForm = new FormGroup ({
      pay_out_balance: new FormControl (null, [Validators.required])
    });
    // get all orders belongs to saloon
    setTimeout (() => {
      this.getSalesSummary ();
    }, this.order.vars.onInt_request_delay_in_ms);
  }

  /**
   * Request to get list of all saloon orders
   * 
   * @param number page
   * 
   * @return void
   */
  getSalesSummary ():void {
    // show loader
    this.order.vars.displayLoader (true);

    this.order.getSalesSummary (this.saloonId).subscribe (res => {
      this.salesSummary = res.data;

      // show loader
      this.order.vars.displayLoader (false);

      // show error
      this.order.vars.showNotification('Sales Summary successfully found', res.message, 'success');
    }, err => {
      // show loader
      this.order.vars.displayLoader (false);

      // show error
      this.order.vars.showNotification(this.order.vars.convertObjectToString (err.errors), err.message);
    })
  }

  /**
   * Method to calculate percentage
   * 
   * @param upval
   * @param baseVal
   * 
   * @return number
   */
  calculateSalesSummaryPercentage (upVal:number, baseval:number):number {
    return Math.floor ((upVal/baseval)*100);
  }

  //pay to barber function
  //  submitPay (form:NgForm) {
  //       let values = form.value;
  //       form.value.barbar_id = this.getid;
  //       Object.keys(values).forEach((key) => (values[key] == null) && delete values[key]);    
  //       this.auth.vars.displayLoader (true)
  //       // register user
  //       this.auth.payBarber (values).subscribe ((res) => {
  //         alert(res.status);
  //         console.log('------------->',res);
  //         this.pay =res.message;
  //         this.order.vars.displayLoader (false);
          
  //         if (res.status == true) {
  //           this.order.vars.showNotification (this.order.vars.convertObjectToString (res.message),'success','success');
  //           this.ngOnInit();
  //         } else if(res.status == false) {
  //           this.order.vars.showNotification (this.order.vars.convertObjectToString (res.message),'error' );
  //         }
  //         //this.order.vars.showNotification (this.order.vars.convertObjectToString (res.data), res.message, 'success');
           
  //       }, (err) => {
  //         this.auth.vars.displayLoader(false)
  //         this.auth.vars.showNotification (this.auth.vars.convertObjectToString (err.errors), err.message)
  //       })
  //   }

}
