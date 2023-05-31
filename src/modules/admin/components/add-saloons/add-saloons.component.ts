import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { SaloonService } from '../../../../services/saloon/saloon.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../../services/auth/auth.service';
import { GlobalService } from '../../../../services/global/global.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-add-saloons',
    templateUrl: './add-saloons.component.html',
    styleUrls: ['./add-saloons.component.css']
})
export class AddSaloonsComponent implements OnInit {

    private pageTitle: String = 'saloons';
    private subTitle: String = 'add saloons';
    private saloonForm: FormGroup;
    private invitationToken: string;

    countries: any;
    user_id: any;
    access_token: any;
    logoURL: any;
    logoName: string = '';
    files: any;
    logoheaderURL: any;
    logoheaderName: string = '';
    url: any;

    constructor(private saloon: SaloonService,
        private http: HttpClient,
        private auth: AuthService,
        private href: GlobalService,
        private router: Router) { }


    ngOnInit() {
        this.url = this.href.backend_url;
        this.user_id = String(JSON.parse(localStorage.getItem('user_detail')).id);
        this.access_token = localStorage.getItem('access_token');
        this.doGET();
        this.saloonForm = new FormGroup({
            // first_name: new FormControl(null, [Validators.required]),
            // last_name: new FormControl(null, [Validators.required]),
            name: new FormControl(null, [Validators.required]),
            standard_price: new FormControl(null, [Validators.required]),
            postal_code: new FormControl(null, [Validators.required]),
            lat: new FormControl(null, [Validators.required]),
            lng: new FormControl(null, [Validators.required]),
            vat_number: new FormControl(null,  [Validators.required]),
            company_number: new FormControl(null),
            address: new FormControl(null, [Validators.required]),
            country_id: new FormControl(null, [Validators.required]),
            contact_number: new FormControl(null, [Validators.required]),
            logo_url: new FormControl(null, [Validators.required]),
            header_url: new FormControl(null, [Validators.required]),
            // email: new FormControl(String(JSON.parse(localStorage.getItem('user_detail')).email), [Validators.required]),
        });

        let url = new URL(window.location.href);

        // check if token param found in url-route
        this.invitationToken = (url.searchParams.has('token') && (url.searchParams.get('token')).trim()) ? (url.searchParams.get('token')).trim() : null;

        // if (JSON.parse(localStorage.getItem('user_detail')).id) {
        //     this.getAdminDetails();
        // }
    }

    getAdminDetails() {
        this.saloon.getSaloon(JSON.parse(localStorage.getItem('user_detail')).id).subscribe(saloonres => {
            localStorage.setItem('admin_detail', JSON.stringify(saloonres.data));

            let admin_details = JSON.parse(localStorage.getItem('admin_detail'));
            this.saloonForm = new FormGroup({
                // first_name: new FormControl(admin_details.first_name, [Validators.required, Validators.maxLength(75)]),
                // last_name: new FormControl(admin_details.last_name, [Validators.required, Validators.maxLength(75)]),
                name: new FormControl(admin_details.name, [Validators.required, Validators.maxLength(75)]),
                standard_price: new FormControl(admin_details.standard_price, [Validators.required]),
                postal_code: new FormControl(admin_details.postal_code, [Validators.required]),
                lat: new FormControl(admin_details.lat, [Validators.required]),
                lng: new FormControl(admin_details.lng, [Validators.required]),
                vat_number: new FormControl(admin_details.saloon_detail.vat_number, [Validators.required]),
                company_number: new FormControl(admin_details.saloon_detail.company_number, [Validators.required]),
                address: new FormControl(admin_details.address, [Validators.required]),
                country_id: new FormControl(admin_details.country_id || 74, [Validators.required]),
                contact_number: new FormControl(admin_details.contact_number, [Validators.required]),
                logo_url: new FormControl(admin_details.logo_url, [Validators.required]),
                header_url: new FormControl(admin_details.header, [Validators.required]),
                // email: new FormControl(admin_details.email, [Validators.required]),
            });
        })
    }

    /**
    * Method to register user
    * @param form {first_name: "Test", last_name: "Dev", email: "barber@email.com", password: "123456", number: "1234567890"}
    */
    submitAddSaloon(form: NgForm) {
        let values = form.value;
        // append optional parameters on signup
        values['invitationToken'] = this.invitationToken;
        values['role'] = 'barber';
        values['logo'] = this.logoName;
        values['header'] = this.logoheaderName;
        values['number'] = form.value.contact_number;

        Object.keys(values).forEach((key) => (values[key] == null) && delete values[key]);
        this.auth.vars.displayLoader(true)
        // register user
        values['user_id'] = JSON.parse(localStorage.getItem('user_detail')).id;
        /*alert(userId);*/
        /*==================================================*/
        this.saloon.createSaloon(values).subscribe(saloonres => {
            this.saloon.vars.displayLoader(false);
            this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString(saloonres.data), saloonres.message, 'success');
            localStorage.setItem('admin_detail', JSON.stringify(saloonres.data));
            this.router.navigate(['barber/dashboard']);
            this.saloon.getUserDetail().subscribe(res => {
                localStorage.setItem('user_detail', JSON.stringify(res.data));
                window.location.reload();
            })
        }, saloonerr => {
            this.saloon.vars.displayLoader(false);
            this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString(saloonerr.errors), saloonerr.message);
        });
        /*==================================================*/


    }

    doGET() {
        let url = this.url + '/countries/get';
        let search = new URLSearchParams();
        this.http.get(url).subscribe(
            res => this.countries = res
        );

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
    redirect() {
        this.router.navigate(['/barber/dashboard']);
    }

}
