import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../../../services/admin/admin.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../../services/auth/auth.service';
import { SaloonService } from '../../../../services/saloon/saloon.service';
import {IMyDpOptions, IMyInputFieldChanged} from 'mydatepicker';
import { GlobalService } from '../../../../services/global/global.service';


@Component({
  selector: 'app-manage-discount',
  templateUrl: './manage-discount.component.html',
  styleUrls: ['./manage-discount.component.css']
})
export class ManageDiscountComponent implements OnInit {

  	constructor(private admin:AdminService, private saloon:SaloonService,private href:GlobalService,private http : HttpClient,private auth:AuthService) { }

  	private pageTitle:string = 'Manage Discount';
  	private subTitle:string = 'discount';
  	private cardForm:FormGroup;
  	private cashForm:FormGroup;


  	access_token:any;
  	url:any;
  	discount_result:any;

	ngOnInit() {
		this.url = this.href.backend_url;
		this.access_token = localStorage.getItem ('access_token');
		this.getDiscount();

		this.cardForm = new FormGroup ({
            ammount: new FormControl (null, [Validators.required]),
            type: new FormControl (null, [Validators.required])
		});

		this.cashForm = new FormGroup ({
            ammount: new FormControl (null, [Validators.required]),
            type: new FormControl (null, [Validators.required])
		});
	}

  	submitCardSaloon(data) {
        this.saloon.vars.displayLoader(true);
        let uploadData: any = {
	    	"discount_type": data.value.type,
			"discount_price": data.value.ammount,
			"type":"card"
	    };


        let headers = new HttpHeaders ({Authorization: 'Bearer '+ this.access_token });
        this.http.post (this.url+'/admin/update-percentages',uploadData,{headers: headers}).subscribe(res => {
            this.saloon.vars.displayLoader(false);
        },err => {
            if(!err.ok && err.status == 422){
                console.log(err);
            }else if(!err.ok && err.status == 500){
                console.log('500 error');
            }else{
                console.log('Else part');
            }
            this.saloon.vars.displayLoader(false);
        })
            
    }

    submitCashSaloon(data) {
        this.saloon.vars.displayLoader(true);
        let uploadData: any = {
	    	"discount_type": data.value.type,
			"discount_price": data.value.ammount,
			"type":"cash"
	    };
        let headers = new HttpHeaders ({Authorization: 'Bearer '+ this.access_token });
        this.http.post (this.url+'/admin/update-percentages',uploadData,{headers: headers}).subscribe(res => {
            this.saloon.vars.displayLoader(false);
        },err => {
            if(!err.ok && err.status == 422){
                console.log(err);
            }else if(!err.ok && err.status == 500){
                console.log('500 error');
            }else{
                console.log('Else part');
            }
            this.saloon.vars.displayLoader(false);
        })
            
    }


    getDiscount() {
        let url = this.url+'/admin/get-percentages';
        let search = new URLSearchParams();
        this.http.get(url).subscribe(
        	res => this.discount_result = res
        );
    }

}
