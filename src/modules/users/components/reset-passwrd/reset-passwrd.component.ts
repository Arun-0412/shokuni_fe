import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, AbstractControl,FormBuilder } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import {AuthService} from '../../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpasswrd',
  templateUrl: './reset-passwrd.component.html',
  styleUrls: ['./reset-passwrd.component.css']
})
export class ResetPasswrdComponent implements OnInit {
  invalidcred: any;
  submitForm: any;
  login_form:FormGroup;
  constructor(private auth:AuthService,private formBuilder: FormBuilder, vcr: ViewContainerRef, private http : Http, private router: Router) {this.login_form = formBuilder.group({
    email: ['', Validators.compose([Validators.email, Validators.required])]
   // password: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
  }) }

  ngOnInit() {
  }
  submitLogin(login_form:NgForm) {
    this.submitForm = true;
    this.invalidcred = false;
    if(this.login_form.valid){
  
    let data: any = {
      //"username": userCredentials.getEmail(),
      "email": this.login_form.value.email,
      //"client_secret": "FHboWXJfzSaM3Y8AH8aWht1XAZ9DqIIHhgt8dmeJ",
      //"client_id": 2,
     // "grant_type": "password",
    
      "role": "admin"
    };
    this.serverLoginCall(data);
    }
    // this.router.navigate(['DashboardComponent']);
     console.log (login_form);
   }

   serverLoginCall(data){
    this.http.put ('http://api.shokunidev.co.uk/v2/users/reset-password',data).subscribe(res => {
     //this.auth.submitLogin(data).subscribe(res => {
     if(res.status){
       setTimeout(() => {
       this.router.navigate(['/login']);
         
       }, 2000);
      }
      },err => {
     if(!err.ok && err.status == 422){
       this.invalidcred = true;
       
       console.log(err);
     }
       else if(!err.ok && err.status == 500){
         
           }
           else{
             
           }
        }) 
  }

}
