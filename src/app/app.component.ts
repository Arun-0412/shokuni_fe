import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

import { Sidebar } from './sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public objLoaderStatus: boolean;
  public sidebarStatus: boolean = true;

  private siteTitle: String;

  displaySaloon: string;

  constructor(private router: Router, private auth: AuthService,
    private $changeDetector: ChangeDetectorRef) {
    this.objLoaderStatus = true;
  }

  ngOnInit() {
    // get site title
    this.siteTitle = this.auth.vars.project_title;



    this.$changeDetector.detectChanges();

    this.auth.vars.loaderStatus.subscribe((val: boolean) => {
      this.objLoaderStatus = val;
    });

    // redirect to login page if no route selected or user is not login
    if (!this.auth.isLoggedIn()) {
      // logout the user and navigate to login page
      return this.auth.vars.logoutUser();
    }

  }

  /**
   * Method to chnage side bar class to expand/collapse
   * 
   * @return void
   */
  toggleSidebar(): void {
    this.sidebarStatus = !this.sidebarStatus;
  }

  /**
   * Method to check if user is login
   * 
   * @return boolean
   */
  checkLogin(): boolean {
    return this.auth.isLoggedIn();
  }

  /**
   * Method to develop sidbar links
   * 
   * @return Array of Sidebar
   */
  getSidebarLinks() {
    // check if user if login
    if (this.auth.isLoggedIn() && localStorage.getItem('user_detail')) {
      // get user role
      let user_role = String(JSON.parse(localStorage.getItem('user_detail')).role).toUpperCase();
      // console.log("user_role: "+ user_role);
      // return uers links as per it's role

      let count = 0;

      if (count >= 9) {
        this.auth.checkBarberIsAdmin().subscribe(res => {
          this.displaySaloon = res.message;
          this.$changeDetector.detectChanges();
          console.log("api res", res);
        }, err => {
          this.displaySaloon = err.message;
          this.$changeDetector.detectChanges();
          console.log("api err");
        })
        console.log("displaySaloon", this.displaySaloon, count);
        count += 1;
      }

      // setTimeout(() => {
      switch (user_role) {
        case 'CONSUMER':
          return [
            { icon: './assets/images/history.svg', title: 'Dashboard', link: '/customer/dashboard', nested: false, divider: false, nestedLinks: null },
            {
              icon: './assets/images/profile.svg', title: 'Profile', link: null, nested: true, divider: false, nestedLinks: [
                { title: '- profile', link: '/profile' },
                { title: '- password', link: '/change-password' },
                { title: '- payment', link: '/payment' }
              ]
            },
            { icon: './assets/images/support.svg', title: 'FAQ', link: '/support', nested: false, divider: false, nestedLinks: null }
          ];
        case 'BARBER':
          if (JSON.parse(localStorage.getItem('user_detail')).has_saloon) {
            return [
              { icon: './assets/images/admin-icons/home.svg', title: 'dashboard', link: '/barber/dashboard', nested: false, divider: false, nestedLinks: null },
              {
                icon: './assets/images/admin-icons/accounting.svg', title: 'Accounting', link: null, nested: true, divider: false, nestedLinks: [
                  { title: '- sales', link: '/saloon/sales' },
                  //{title: '- Pay admin', link: '/saloon/pay-admin'},
                  //{title: '- password', link: '/change-password'}
                ]
              },

              { icon: './assets/images/admin-icons/manage-barbers.svg', title: 'manage barber', link: '/saloon/barbers', nested: false, divider: false, nestedLinks: null },
              { icon: './assets/images/admin-icons/shop.svg', title: 'manage shop', link: '/barber/add-saloon', nested: false, divider: false, nestedLinks: null },
              {
                icon: './assets/images/admin-icons/manage-products.svg', title: 'manage products', link: null, nested: true, divider: false, nestedLinks: [
                  //{title: '- saloon', link: '/saloon'},
                  //{title: '- dashboard', link: '/saloon/dashboard'},
                  // {title: '- barbers', link: '/saloon/barbers'},
                  { title: '- services', link: '/saloon/services' }
                  // {title: '- sales', link: '/saloon/sales'}
                ]
              },
              // {icon:'./assets/images/admin-icons/settings.svg', title: 'settings', link:'/saloon/barbers', nested: false, divider: false, nestedLinks: null}
            ];
          }
          else {
            return [
              { icon: './assets/images/admin-icons/home.svg', title: 'dashboard', link: '/barber/dashboard', nested: false, divider: false, nestedLinks: null },
              {
                icon: './assets/images/admin-icons/accounting.svg', title: 'Accounting', link: null, nested: true, divider: false, nestedLinks: [
                  { title: '- sales', link: '/saloon/sales' },
                  //{title: '- Pay admin', link: '/saloon/pay-admin'},
                  //{title: '- password', link: '/change-password'}
                ]
              },

              { icon: './assets/images/admin-icons/manage-barbers.svg', title: 'manage barber', link: '/saloon/barbers', nested: false, divider: false, nestedLinks: null },
              // { icon: './assets/images/admin-icons/shop.svg', title: 'manage shop', link: '/barber/add-saloons', nested: false, divider: false, nestedLinks: null },
              {
                icon: './assets/images/admin-icons/manage-products.svg', title: 'manage products', link: null, nested: true, divider: false, nestedLinks: [
                  //{title: '- saloon', link: '/saloon'},
                  //{title: '- dashboard', link: '/saloon/dashboard'},
                  // {title: '- barbers', link: '/saloon/barbers'},
                  { title: '- services', link: '/saloon/services' }
                  // {title: '- sales', link: '/saloon/sales'}
                ]
              },
              // {icon:'./assets/images/admin-icons/settings.svg', title: 'settings', link:'/saloon/barbers', nested: false, divider: false, nestedLinks: null}
            ];
          }
        case 'ADMIN':
          return [
            { icon: './assets/images/admin-icons/home.svg', title: 'Dashboard', link: '/admin', nested: false, divider: false, nestedLinks: null },
            {
              icon: './assets/images/admin-icons/accounting.svg', title: 'accounting', link: null, nested: true, divider: false, nestedLinks: [
                { title: '- sales', link: '/admin/search-sales' },
              ]
            },
            { icon: './assets/images/admin-icons/user.svg', title: 'manage users', link: '/admin/users', nested: false, divider: false, nestedLinks: null },
            //{icon:'./assets/images/admin-icons/applications.svg', title: 'manage discount', link:'/admin/manage-discount', nested: false, divider: false, nestedLinks: null},
            { icon: './assets/images/admin-icons/applications.svg', title: 'manage applications', link: '/admin/applications', nested: false, divider: false, nestedLinks: null },
            {
              icon: './assets/images/admin-icons/shop.svg', title: 'manage shops', link: null, nested: true, divider: false, nestedLinks: [
                { title: '- saloon list', link: '/admin/saloons' },
                { title: '- add saloon', link: '/admin/add-saloons' },
              ]
            }
          ];
      }
      // }, 1000);

    }
  }

  /**
   * Method to get default home page for user
   * 
   * @return String router-link
   */
  getDefaultpage(): string {
    // check for user role
    return this.auth.vars.getDefaultpage();
  }

  /**
   * Method to fetch user avatar or profile image
   * 
   * @return String
   */
  getUserAvatar(): String {
    if (localStorage.getItem('user_detail')) {
      return String(JSON.parse(localStorage.getItem('user_detail')).image_url).trim();
    }
  }

  /**
   * method to get User information
   * 
   * @param string
   * 
   * @return string
   */
  getUserInfo(field: string): string {
    if (localStorage.getItem('user_detail')) {
      return String(JSON.parse(localStorage.getItem('user_detail'))[field]).trim();
    }
  }

  /**
   * Method to logout the user from server and local
   */
  logoutUser() {
    this.auth.vars.displayLoader(true);
    // logout the user from server
    this.auth.logoutUser().subscribe(res => {
      this.auth.vars.displayLoader(false);
      // logout the user and navigate to login page
      this.router.navigateByUrl('/login');
      return this.auth.vars.logoutUser();
    }, err => {
      this.auth.vars.displayLoader(false);
      // logout the user and navigate to login page
      return this.auth.vars.logoutUser();
    })
  }
}
