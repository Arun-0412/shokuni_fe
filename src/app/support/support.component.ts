import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { FormGroup, FormControl, Validators, NgForm, AbstractControl,FormBuilder } from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  login_form:FormGroup;
  invalidcred: any;
  submitForm: any;
  Token: any;
  constructor(private auth:AuthService,private formBuilder: FormBuilder, vcr: ViewContainerRef, private http : Http, private router: Router) { 

    this.login_form = formBuilder.group({
      country: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      newpassword: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      confrmpassword: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    })

  }

  ngOnInit() {
    // this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        // this.spinner.hide();
    }, 1000);
  }
  submitLogin(login_form:NgForm){

  }
  myDropFunc() {
    var x = document.getElementById("demoDrop");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-green";
    } else { 
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-green", "");
    }
}
  myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

datatables(id){
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
  } else { 
      x.className = x.className.replace(" w3-show", "");
  }
}
topmenu(id){
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
  } else { 
      x.className = x.className.replace(" w3-show", "");
  }
}



MyFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  function(event) {
  if (!event.target.matches('.dropbtn')) {
  
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  }

}
