(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Absolute Center Spinner */\n.loading {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.dropdown-item{\n    color:#8d8c91 !important;\n    font-size:12px !important;\n    font-weight:400 !important;\n}\ni{\n    color:#e0e0e1 !important;\n}\n.img_src{\n    margin: 0px 0px 0px 16px;\n    width: 58px !important;\n    height: 51px !important;\n}\n.p_name{\n    color:#fff !important;\n    font-size:12px !important;\n    font-weight:400 !important;\n    margin-top:8px !important;\n}\n.span_email{\n    color:#59585d !important;\n    display: block !important;\n    font-size:8px !important;\n    word-break: break-all!important;\n}\n.dropdown-menu.show {\n    position: absolute !important;\n    left: -160px !important;\n}\n.dropdown-menu {\n    min-width: 17rem !important;\n    height: 214px !important;\n    padding:0 0 !important;\n    }\n.header{\n        padding: 21px 0 !important;\n    }\n.svg {\n    -webkit-filter: invert(3.5);\n            filter: invert(3.5);\n  }\n/* Transparent Overlay */\n.loading:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.3);\n}\n/* :not(:required) hides these rules from IE9 and below */\n.loading:not(:required) {\n  /* hide \"loading...\" text */\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.dropdown-menu{ position: relative ;}\n.dropdown-menu:before{ content: \"\"; position: absolute; top:-8px; right: 23px;width: 0;\n\theight: 0;\n\tborder-left: 14px solid transparent;\n\tborder-right: 13px solid transparent;\n\tborder-bottom: 10px solid #343a40;}\n.loading:not(:required):after {\n  content: '';\n  display: block;\n  font-size: 10px;\n  width: 1em;\n  height: 1em;\n  margin-top: -0.5em;\n  -webkit-animation: spinner 1500ms infinite linear;\n  animation: spinner 1500ms infinite linear;\n  border-radius: 0.5em;\n  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n}\n/* Animation */\n@-webkit-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n/************Loader completed*****************/\n/* Sidebar code */\n.color-shokuni {\n    color: #15234A;\n}\n.color-fa-gradient {\n    color:#EFA3EF;\n}\n.text-size-3 {\n    font-size: 3rem;\n}\n.text-bold {\n    font-weight: bold;\n}\n.avatar {\n    width: 37px;\n    border-radius: 50%;\n    height: 37px;\n    /* border-radius: inherit;\n    width: inherit;\n    height: inherit; */\n    /* display: block; */\n    /* position: relative; */\n    /* width: 3rem; */\n    /* width: 48px; */\n  /* height: 48px; */\n   /*  border-radius: 3rem; */\n    /* box-shadow:\n        inset 0 0 0 2px rgba(255,255,255,0.6), \n        0 1px 1px rgba(0,0,0,0.1); */\n    /* background-color: transparent !important; */\n    /* z-index: 999; */\n  }\np {\n    font-family: 'Poppins', sans-serif;\n    font-size: 1.1em;\n    font-weight: 300;\n    line-height: 1.7em;\n    color: #999;\n}\na,\na:hover,\na:focus {\n    color: inherit;\n    text-decoration: none;\n    transition: all 0.3s;\n}\n.navbar {\n    /* padding: 15px 10px; */\n    background: #fff;\n    border: none;\n    border-radius: 0;\n    margin-bottom: 40px;\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n}\n.navbar-btn {\n    box-shadow: none;\n    outline: none !important;\n    border: none;\n}\n/* .line {\n    width: 100%;\n    height: 1px;\n    border-bottom: 1px dashed #ddd;\n    margin: 40px 0;\n} */\ni,\nspan {\n    display: inline-block;\n}\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n.wrapper {\n    display: flex;\n    align-items: stretch;\n}\n#sidebar {\n    min-width: 250px;\n    max-width: 250px;\n    /* background: #7386D5; */\n    color: #fff;\n    transition: all 0.3s;\n}\n#sidebar.active {\n    min-width: 73px;\n    max-width: 73px;\n    text-align: center;\n    \n}\n/* #sidebar.active .sidebar-header h3,\n#sidebar.active .CTAs {\n    display: none;\n} */\n/* #sidebar.active .sidebar-header strong {\n    display: block;\n} */\n#sidebar ul li a {\n    text-align: left;\n}\n#sidebar.active ul li a {\n    padding: 16px 10px;\n    text-align: center;\n    font-size: 0.85em;\n}\n#sidebar.active ul li a i {\n    margin-right: 0;\n    display: block;\n    font-size: 1.8em;\n    margin-bottom: 5px;\n}\n#sidebar.active ul ul a {\n    padding: 10px !important;\n}\n#sidebar.active .dropdown-toggle::after {\n    display:none !important;\n    top: auto;\n    bottom: 10px;\n    right: 50%;\n    -webkit-transform: translateX(50%);\n    transform: translateX(50%);\n}\n/* For side menu hover */\n.bg-dark.active .title_name span{\n    display:none !important;\n}\n.bg-dark .title_name i{\n    display:none;\n}\n.bg-dark .title_name span {\n   /*  display:block !important; */\n}\n/* Ends here */\n.ListIcons { \n    fill:#626684 !important;\n    /* font-size: 71px; */\n    width: 20px;\n    /* float: left; */\n    margin: 1px 17px 2px 18px;\n}\n/* #sidebar .sidebar-header {\n    padding: 20px;\n    background: #6d7fcc;\n} */\n/* #sidebar .sidebar-header strong {\n    display: none;\n    font-size: 1.8em;\n} */\n/* #sidebar ul.components { */\n/* padding: 20px 0; */\n/* border-bottom: 1px solid #47748b; */\n/* } */\n#sidebar ul li a {\n    padding: 14px;\n    font-size: 1.1em;\n    display: block;\n}\n#sidebar ul li a:hover {\n    /* color: #7386D5; */\n    background: #808080;\n}\n#sidebar ul li a i {\n    margin-right: 10px;\n}\n#sidebar ul li.active>a,\na[aria-expanded=\"true\"] {\n    color: #fff;\n    /* background: #6d7fcc; */\n}\na[data-toggle=\"collapse\"] {\n    position: relative;\n}\n.dropdown-toggle::after {\n     display: block; \n    position: absolute;\n    top: 50%;\n    right: 20px;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.profile_img .dropdown-toggle::after {\n    display: none; }\nul ul a {\n    font-size: 0.9em !important;\n    padding-left: 30px !important;\n    /* background: #6d7fcc; */\n}\n/* ul.CTAs {\n    padding: 20px;\n}\n\nul.CTAs a {\n    text-align: center;\n    font-size: 0.9em !important;\n    display: block;\n    border-radius: 5px;\n    margin-bottom: 5px;\n} */\na.download {\n    background: #fff;\n    /* color: #7386D5; */\n}\na.article,\na.article:hover {\n    /* background: #6d7fcc !important; */\n    color: #fff !important;\n}\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n#content {\n    width: 100%;\n    /* padding: 20px; */\n    min-height: 100vh;\n    transition: all 0.3s;\n\n    background-color: #E6E6E6;\n}\n/* ---------------------------------------------------\n    MEDIAQUERIES\n----------------------------------------------------- */\n@media (max-width: 768px) {\n    #sidebar {\n        min-width: 80px;\n        max-width: 80px;\n        text-align: center;\n        margin-left: -80px !important;\n    }\n    .dropdown-toggle::after {\n        top: auto;\n        bottom: 10px;\n        right: 50%;\n        -webkit-transform: translateX(50%);\n        transform: translateX(50%);\n    }\n    #sidebar.active {\n        margin-left: 0 !important;\n    }\n    /* #sidebar .sidebar-header h3,\n    #sidebar .CTAs {\n        display: none;\n    } */\n    /* #sidebar .sidebar-header strong {\n        display: block;\n    } */\n    #sidebar ul li a {\n        padding: 20px 10px;\n    }\n    #sidebar ul li a span {\n        font-size: 0.85em;\n    }\n    #sidebar ul li a i {\n        margin-right: 0;\n        display: block;\n    }\n    #sidebar ul ul a {\n        padding: 10px !important;\n    }\n    #sidebar ul li a i {\n        font-size: 1.3em;\n    }\n    #sidebar {\n        margin-left: 0;\n    }\n    /* #sidebarCollapse span {\n        display: none;\n    } */\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Display loader -->\n<div class=\"loading\" *ngIf=\"objLoaderStatus\">Loading&#8230;</div>\n\n<!-- display notification -->\n<ng-snotify></ng-snotify>\n\n<div class=\"wrapper\">\n    <!-- Sidebar  -->\n    <nav id=\"sidebar\" class=\"bg-dark\" [ngClass]=\"sidebarStatus ? 'active' : ''\" *ngIf=\"checkLogin()\">\n        <ul class=\"list-unstyled components\">\n            <li class=\"toggle_left\" (mouseover)=\"toggleSidebar()\">\n                <a>\n                    <i class=\"fa fa-align-left\" aria-hidden=\"true\"></i>\n                    \n                </a>\n            </li>\n            <li>\n                <a  class=\"text-capitalize title_name\">\n                    <i class=\"fa fa-ellipsis-h ListIcons\" aria-hidden=\"true\"></i>\n                    <span>General</span>\n                </a>\n            </li>\n            <li *ngFor=\"let link of getSidebarLinks(); let i = index\">\n                <!-- check if link is type of nested -->\n                <a *ngIf=\"link.nested\" href=\"#nestedLink{{i}}\"  data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle text-capitalize title_name\">\n                <!--     <i class=\"fa {{link.icon}}\" aria-hidden=\"true\"></i> -->\n                <img class=\"svg ListIcons active\" src=\"{{link.icon}}\" alt=\"\">\n                    <span>{{link.title}}</span>\n                </a>\n                <!-- display nested links if exted -->\n                <ul *ngIf=\"link.nested\" class=\"collapse list-unstyled title_name\" id=\"nestedLink{{i}}\">\n                    <li *ngFor=\"let nested of link.nestedLinks\">\n                        <a [routerLink]=\"nested.link\" class=\"text-capitalize title_name\"><span>{{nested.title}}</span></a>\n                    </li>\n                </ul>\n\n                <!-- else display normal link -->\n                <a *ngIf=\"!link.nested\" [routerLink]=\"link.link\" class=\"text-capitalize title_name\">\n                    <!-- <i class=\"fa {{link.icon}}\" aria-hidden=\"true\"></i> -->\n                     <img class=\"svg ListIcons\" src=\"{{link.icon}}\" alt=\"\">\n                    <span>{{link.title}}</span>\n                </a>\n            </li>\n        </ul>\n    </nav>\n    \n    <!-- Page Content  -->\n    <div id=\"content\">\n\n        <!-- top navigation -->\n        <nav class=\"navbar navbar-expand-lg navbar-light bg-light pt-0 pb-0\" *ngIf=\"checkLogin()\">\n            <div class=\"container-fluid\">\n                <a class=\"navbar-brand text-bold text-lowercase text-size-3 color-shokuni\" [routerLink]=\"getDefaultpage()\">{{siteTitle}}</a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                    <ul class=\"nav navbar-nav ml-auto\">\n                        <li class=\"nav-item mt-2 mr-3 h3\">\n                            <a class=\"nav-link\" [routerLink]=\"getDefaultpage()\">\n                                <i class=\"fa fa-list-alt color-fa-gradient\" aria-hidden=\"true\"></i>\n                            </a>\n                        </li>\n                        <li class=\"nav-item dropdown profile_img\">\n                            <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <img [src]=\"getUserAvatar()\" class=\"avatar\">\n                            </a>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                                <div class=\"header bg-dark\">\n                                    <div class=\"row\">\n                                        <div class=\"col col-md-4\">\n                                           <img [src]=\"getUserAvatar()\" class=\"avatar img_src\">\n                                        </div>\n                                        <div class=\"col col-md-7\">\n                                            <p class=\"p_name\">{{ getUserInfo ('name') }}<span class=\"span_email\">{{ getUserInfo ('email') }}</span></p>\n                                        </div>\n                                    </div>\n                                </div>\n                                <a class=\"dropdown-item\" routerLink=\"/profile\"><i class=\"fa fa-vcard-o\">&#xf2bc;</i> Edit Profile</a>\n                                <a class=\"dropdown-item\" routerLink=\"/support\"><i class=\"fa\">&#xf06a;</i> FAQ</a>\n                                <span class=\"btn btn-transparent text-capitalize ml-4\" (click)=\"logoutUser()\"><small>Logout</small></span>\n                                <!-- <div class=\"dropdown-divider\"></div>\n                                <a class=\"dropdown-item\" href=\"#\">Something else here</a> -->\n                              </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n\n        <!-- display sidebar navigation on xs screen size -->\n      <!--   <button type=\"button\" class=\"btn btn-dark d-block d-sm-none\" (click)=\"toggleSidebar()\">\n            <i class=\"fa fa-align-left\" aria-hidden=\"true\"></i>\n        </button> -->\n        \n        <!-- display components and view -->\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, auth, $changeDetector) {
        this.router = router;
        this.auth = auth;
        this.$changeDetector = $changeDetector;
        this.sidebarStatus = true;
        this.objLoaderStatus = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get site title
        this.siteTitle = this.auth.vars.project_title;
        this.$changeDetector.detectChanges();
        this.auth.vars.loaderStatus.subscribe(function (val) {
            _this.objLoaderStatus = val;
        });
        // redirect to login page if no route selected or user is not login
        if (!this.auth.isLoggedIn()) {
            // logout the user and navigate to login page
            return this.auth.vars.logoutUser();
        }
    };
    /**
     * Method to chnage side bar class to expand/collapse
     *
     * @return void
     */
    AppComponent.prototype.toggleSidebar = function () {
        this.sidebarStatus = !this.sidebarStatus;
    };
    /**
     * Method to check if user is login
     *
     * @return boolean
     */
    AppComponent.prototype.checkLogin = function () {
        return this.auth.isLoggedIn();
    };
    /**
     * Method to develop sidbar links
     *
     * @return Array of Sidebar
     */
    AppComponent.prototype.getSidebarLinks = function () {
        var _this = this;
        // check if user if login
        if (this.auth.isLoggedIn() && localStorage.getItem('user_detail')) {
            // get user role
            var user_role = String(JSON.parse(localStorage.getItem('user_detail')).role).toUpperCase();
            // console.log("user_role: "+ user_role);
            // return uers links as per it's role
            var count = 0;
            if (count >= 9) {
                this.auth.checkBarberIsAdmin().subscribe(function (res) {
                    _this.displaySaloon = res.message;
                    _this.$changeDetector.detectChanges();
                    console.log("api res", res);
                }, function (err) {
                    _this.displaySaloon = err.message;
                    _this.$changeDetector.detectChanges();
                    console.log("api err");
                });
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
                        ];
                    }
                    else {
                        return [
                            { icon: './assets/images/admin-icons/home.svg', title: 'dashboard', link: '/barber/dashboard', nested: false, divider: false, nestedLinks: null },
                            {
                                icon: './assets/images/admin-icons/accounting.svg', title: 'Accounting', link: null, nested: true, divider: false, nestedLinks: [
                                    { title: '- sales', link: '/saloon/sales' },
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
    };
    /**
     * Method to get default home page for user
     *
     * @return String router-link
     */
    AppComponent.prototype.getDefaultpage = function () {
        // check for user role
        return this.auth.vars.getDefaultpage();
    };
    /**
     * Method to fetch user avatar or profile image
     *
     * @return String
     */
    AppComponent.prototype.getUserAvatar = function () {
        if (localStorage.getItem('user_detail')) {
            return String(JSON.parse(localStorage.getItem('user_detail')).image_url).trim();
        }
    };
    /**
     * method to get User information
     *
     * @param string
     *
     * @return string
     */
    AppComponent.prototype.getUserInfo = function (field) {
        if (localStorage.getItem('user_detail')) {
            return String(JSON.parse(localStorage.getItem('user_detail'))[field]).trim();
        }
    };
    /**
     * Method to logout the user from server and local
     */
    AppComponent.prototype.logoutUser = function () {
        var _this = this;
        this.auth.vars.displayLoader(true);
        // logout the user from server
        this.auth.logoutUser().subscribe(function (res) {
            _this.auth.vars.displayLoader(false);
            // logout the user and navigate to login page
            _this.router.navigateByUrl('/login');
            return _this.auth.vars.logoutUser();
        }, function (err) {
            _this.auth.vars.displayLoader(false);
            // logout the user and navigate to login page
            return _this.auth.vars.logoutUser();
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/services/auth/auth.service.ts");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/auth/auth.module */ "./src/modules/auth/auth.module.ts");
/* harmony import */ var _modules_users_users_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/users/users.module */ "./src/modules/users/users.module.ts");
/* harmony import */ var _modules_saloon_saloon_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/saloon/saloon.module */ "./src/modules/saloon/saloon.module.ts");
/* harmony import */ var _modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/admin/admin.module */ "./src/modules/admin/admin.module.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var src_modules_admin_components_invite_barber_invite_barber_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/modules/admin/components/invite-barber/invite-barber.component */ "./src/modules/admin/components/invite-barber/invite-barber.component.ts");
/* harmony import */ var src_guards_not_auth_not_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/guards/not-auth/not-auth.guard */ "./src/guards/not-auth/not-auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import services

// import child modules




// import notification module



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                _modules_users_users_module__WEBPACK_IMPORTED_MODULE_7__["UsersModule"],
                _modules_saloon_saloon_module__WEBPACK_IMPORTED_MODULE_8__["SaloonModule"],
                _modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_9__["AdminModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
                        path: '',
                        redirectTo: '/login',
                        pathMatch: 'full',
                    },
                    {
                        path: 'invite/:inviteId',
                        component: src_modules_admin_components_invite_barber_invite_barber_component__WEBPACK_IMPORTED_MODULE_11__["InviteBarberComponent"],
                        canActivate: [src_guards_not_auth_not_auth_guard__WEBPACK_IMPORTED_MODULE_12__["NotAuthGuard"]]
                    }, {
                        path: '**',
                        redirectTo: 'login',
                    }]),
                ng_snotify__WEBPACK_IMPORTED_MODULE_10__["SnotifyModule"]
            ],
            providers: [
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                { provide: 'SnotifyToastConfig', useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_10__["ToastDefaults"] },
                ng_snotify__WEBPACK_IMPORTED_MODULE_10__["SnotifyService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/barber-join-discussion/barber-join-discussion.component.css":
/*!************************************************************************************!*\
  !*** ./src/components/barber-join-discussion/barber-join-discussion.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar {\n    width: 4rem;\n}\nh5{\n    color:#646470 !important;\n    font-size:13px !important;\n    font-weight: bold !important;\n}\nh6{\n    color:#69686d !important;\n    font-size:10px !important;\n    font-weight:600  !important;\n}\n.joindics{\n    font-weight: 500 !important;\n    color:#9a9aa4 !important;\n    font-size:9px !important;\n}"

/***/ }),

/***/ "./src/components/barber-join-discussion/barber-join-discussion.component.html":
/*!*************************************************************************************!*\
  !*** ./src/components/barber-join-discussion/barber-join-discussion.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row bg-white m-3 shadow\">\n  <div class=\"col\">\n    <h5 class=\"text-capitalize h6 pl-3 pt-3 pb-3\">{{ pageTitle }}</h5>\n    \n    <!-- seperator or line -->\n    <div class=\"line\"></div>\n    <p>Coming soon</p>\n    <!-- <div class=\"row mt-3 p-3\">\n      <div class=\"col-7\">\n        <div class=\"card-title text-capitalize font-weight-bold\">most recent</div>\n\n        \n        <div class=\"media\">\n            <img class=\"mr-3\" class=\"rounded-circle avatar\" [src]=\"getUser ('image_url')\" [alt]=\"getUser ('name')\">\n            <div class=\"media-body\">\n              <div class=\"mt-3 ml-3 h6 text-capitalize text-secondary\">{{ getUser ('name') }}</div>\n            </div>\n        </div>\n\n        <div class=\"mt-3\">\n          <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h6>\n          <p class=\"text-danger\">View Post</p>\n        </div>\n      </div>\n\n      <div class=\"col\">\n        <div class=\"h6 text-capitalize font-weight-bold\">join the discussion</div>\n        <p class=\"joindics\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\n        <span class=\"btn btn-shokuni text-capitalize shadow\">join</span>\n      </div>\n    </div> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/components/barber-join-discussion/barber-join-discussion.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/components/barber-join-discussion/barber-join-discussion.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BarberJoinDiscussionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarberJoinDiscussionComponent", function() { return BarberJoinDiscussionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BarberJoinDiscussionComponent = /** @class */ (function () {
    function BarberJoinDiscussionComponent() {
        this.pageTitle = 'forum';
    }
    BarberJoinDiscussionComponent.prototype.ngOnInit = function () {
    };
    /**
     * Method to get login user image
     */
    BarberJoinDiscussionComponent.prototype.getUser = function (detailField) {
        return JSON.parse(localStorage.getItem('user_detail'))[detailField];
    };
    BarberJoinDiscussionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-barber-join-discussion',
            template: __webpack_require__(/*! ./barber-join-discussion.component.html */ "./src/components/barber-join-discussion/barber-join-discussion.component.html"),
            styles: [__webpack_require__(/*! ./barber-join-discussion.component.css */ "./src/components/barber-join-discussion/barber-join-discussion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BarberJoinDiscussionComponent);
    return BarberJoinDiscussionComponent;
}());



/***/ }),

/***/ "./src/components/pagination/pagination.component.css":
/*!************************************************************!*\
  !*** ./src/components/pagination/pagination.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-link {\n    color: #D7D8DD;\n    border:none;\n    border-radius: 50%;\n    padding: .5rem 0.9rem;\n    /* background-color: #E6E6E6; */\n}\n\n.page-item:first-child .page-link {\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n}\n\n.page-item:last-child .page-link {\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n}\n\n.bg-pagination-select {\n    background-color: #6D6CC9 !important;\n    cursor: not-allowed !important;\n}\n"

/***/ }),

/***/ "./src/components/pagination/pagination.component.html":
/*!*************************************************************!*\
  !*** ./src/components/pagination/pagination.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Pagination -->\n<nav aria-label=\"Page navigation\">\n  <ul class=\"pagination\">\n\n    <li class=\"page-item\"  (click)=\"changePage(1)\">\n        <span class=\"page-link mr-2 text-order-total\">First</span>\n    </li>\n    <li class=\"page-item\" (click)=\"changePage(getPager()?.currentPage - 1)\">\n        <span class=\"page-link mr-2 text-order-total\">Previous</span>\n    </li>\n\n    <!-- design dynamic pagination -->\n    <li *ngFor=\"let page of getPager()?.pages\" (click)=\"changePage(page)\" class=\"page-item\">\n        <span class=\"page-link mr-2 text-order-total\" [ngClass]=\"(page) == currentPage ? 'bg-pagination-select' : ''\">{{page}}</span>\n    </li>\n\n    <li class=\"page-item\" (click)=\"changePage(getPager()?.currentPage + 1)\">\n        <span class=\"page-link mr-2 text-order-total\">Next</span>\n    </li>\n    <li class=\"page-item\" (click)=\"changePage(getPager()?.totalPages)\">\n        <span class=\"page-link mr-2 text-order-total\">Last</span>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/components/pagination/pagination.component.ts":
/*!***********************************************************!*\
  !*** ./src/components/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/global/global.service */ "./src/services/global/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(vars) {
        this.vars = vars;
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // pager object
        this.pager = {};
    }
    PaginationComponent.prototype.ngOnInit = function () { };
    /**
     * method to genertae page counter to design dynamic pagination
     *
     * @param counter
     *
     * @returns array
     */
    PaginationComponent.prototype.getPager = function () {
        var totalItems = this.totalItems;
        var currentPage = this.currentPage;
        var pageSize = this.vars.default_pagination_limit;
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    /**
     * metod to refresh and get data from another page
     * @param page
     */
    PaginationComponent.prototype.changePage = function (page) {
        if (page === void 0) { page = 1; }
        if (page !== this.currentPage)
            this.childEvent.emit(page);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "totalItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "currentPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "childEvent", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/components/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/components/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [_services_global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/components/saloon-short-detail/saloon-short-detail.component.css":
/*!******************************************************************************!*\
  !*** ./src/components/saloon-short-detail/saloon-short-detail.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display-5 {\n    font-size: 2rem;\n}\n\n.avatar {\n    width: 9rem;\n}\n\np{\n    font-size:11px !important;\n    font-weight: 600 !important;\n    color:#898a8f !important;\n}"

/***/ }),

/***/ "./src/components/saloon-short-detail/saloon-short-detail.component.html":
/*!*******************************************************************************!*\
  !*** ./src/components/saloon-short-detail/saloon-short-detail.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-3\">\n  <div class=\"col-4 bg-white shadow\">\n    <div class=\"text-capitalize display-5 text-dark\">{{ getDate() | date:'EEEE' }}</div>\n    <div class=\"text-capitalize text-muted\">{{ getDate () | date:'dd' }}<sup>{{ nth (getDate () | date:'dd') }}</sup> {{ getDate () | date:'MMMM' }}</div>\n    <div class=\"text-black-50 mt-5\">{{ getDate () | date:'hh:mm' }}<sub>{{ lowercase (getDate () | date:'a') }}</sub></div>\n  </div>\n\n  <div class=\"col ml-3\">\n    <div class=\"row shadow bg-white\">\n      <div class=\"col\">\n        <img [src]=\"saloonDetail?.logo_url\" class=\"img-thumbnail mt-3 avatar mt-3\" style=\"height: 9rem;\">\n        <div class=\"mt-1 ml-2 text-dark h5\">{{saloonDetail?.name}}</div>\n      </div>\n      \n      <div class=\"col mt-3\">\n        <div class=\"text-black-50 small\">Shop Name</div>\n        <div class=\"text-dark h6\">{{saloonDetail?.name}}</div>\n        <div class=\"text-black-50 mt-5 small\">Shop Address</div>\n        <div class=\"text-dark h6 mb-5\">{{saloonDetail?.address}}</div>\n      </div>\n      \n      <div class=\"col mt-3\">\n        <div class=\"text-black-50 small\">Opening Times Today</div>\n        <p class=\"openingtimefrom\">\n          {{ timeToDate (getOpeningTime (saloonDetail?.saloon_schedule?.schedule)?.start_time) | date: 'hh:mm' }}<sub>{{ lowercase (timeToDate (getOpeningTime (saloonDetail?.saloon_schedule?.schedule)?.start_time) | date:'a') }}</sub>\n          <i class=\"fa fa-arrow-right mr-3 ml-3\" aria-hidden=\"true\"></i>\n          {{ timeToDate (getOpeningTime (saloonDetail?.saloon_schedule?.schedule)?.end_time) | date: 'hh:mm' }} <sub>{{ lowercase (timeToDate (getOpeningTime (saloonDetail?.saloon_schedule?.schedule)?.end_time) | date:'a') }}</sub>\n        </p> \n      </div>\n    </div>\n  </div>             \n</div>"

/***/ }),

/***/ "./src/components/saloon-short-detail/saloon-short-detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/components/saloon-short-detail/saloon-short-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SaloonShortDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaloonShortDetailComponent", function() { return SaloonShortDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_saloon_saloon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/saloon/saloon.service */ "./src/services/saloon/saloon.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaloonShortDetailComponent = /** @class */ (function () {
    function SaloonShortDetailComponent(saloon) {
        this.saloon = saloon;
    }
    SaloonShortDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get information of saloon performance
        setTimeout(function () {
            _this.getSaloon();
        }, this.saloon.vars.onInt_request_delay_in_ms);
    };
    /**
     * Method to get Saloon Detail
     */
    SaloonShortDetailComponent.prototype.getSaloon = function () {
        var _this = this;
        // show loader
        this.saloon.vars.displayLoader(true);
        //alert(this.saloonId);
        // get saloon detail
        this.saloon.getSaloon(this.saloonId).subscribe(function (res) {
            // update saloon-detail
            _this.saloonDetail = res.data;
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification('Saloon detail successfully found', res.message, 'success');
        }, function (err) {
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * method to get date information
     * @param string type
     */
    SaloonShortDetailComponent.prototype.getDate = function () {
        return new Date();
    };
    /**
     * Method to get opening Time by current  day
     */
    SaloonShortDetailComponent.prototype.getOpeningTime = function (schedule) {
        var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        var today = new Date();
        var dayName = days[today.getDay()];
        if (schedule) {
            // find today schedule
            var todaySchedule = Object(schedule).find(function (day) {
                return day['day'] === dayName;
            });
            return todaySchedule;
        }
    };
    SaloonShortDetailComponent.prototype.nth = function (d) {
        if (d > 3 && d < 21)
            return 'th'; // thanks kennebec
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    SaloonShortDetailComponent.prototype.lowercase = function (time) {
        return time ? time.toLowerCase() : null;
    };
    /**
     * Method to convert time into timestamp
     */
    SaloonShortDetailComponent.prototype.timeToDate = function (time) {
        if (time) {
            return new Date(null, null, null, parseInt(time.split(':')[0]), parseInt(time.split(':')[0]), parseInt(time.split(':')[0]));
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SaloonShortDetailComponent.prototype, "saloonId", void 0);
    SaloonShortDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-saloon-short-detail',
            template: __webpack_require__(/*! ./saloon-short-detail.component.html */ "./src/components/saloon-short-detail/saloon-short-detail.component.html"),
            styles: [__webpack_require__(/*! ./saloon-short-detail.component.css */ "./src/components/saloon-short-detail/saloon-short-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_saloon_saloon_service__WEBPACK_IMPORTED_MODULE_1__["SaloonService"]])
    ], SaloonShortDetailComponent);
    return SaloonShortDetailComponent;
}());



/***/ }),

/***/ "./src/components/show-errors/show-errors.component.css":
/*!**************************************************************!*\
  !*** ./src/components/show-errors/show-errors.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font-sm {\n    font-size: 0.7rem;\n}\n\n.no-padding {\n    padding-top: 0; \n    padding-bottom: 0;\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n}\n\n.bg-trans {\n    background-color: transparent;\n}"

/***/ }),

/***/ "./src/components/show-errors/show-errors.component.html":
/*!***************************************************************!*\
  !*** ./src/components/show-errors/show-errors.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group validation-errors\" *ngIf=\"shouldShowErrors()\">\n  <li class=\"text-danger font-sm no-padding text-white list-group-item border-0 bg-trans\">{{getError()}}</li>\n</ul>"

/***/ }),

/***/ "./src/components/show-errors/show-errors.component.ts":
/*!*************************************************************!*\
  !*** ./src/components/show-errors/show-errors.component.ts ***!
  \*************************************************************/
/*! exports provided: ShowErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowErrorsComponent", function() { return ShowErrorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowErrorsComponent = /** @class */ (function () {
    function ShowErrorsComponent() {
    }
    ShowErrorsComponent_1 = ShowErrorsComponent;
    ShowErrorsComponent.prototype.shouldShowErrors = function () {
        return this.control && this.control.errors && (this.control.dirty || this.control.touched);
    };
    ShowErrorsComponent.prototype.listOfErrors = function () {
        var _this = this;
        return Object.keys(this.control.errors).map(function (field) {
            return _this.getMessage(field, _this.control.errors[field], _this.control);
        });
    };
    ShowErrorsComponent.prototype.getError = function () {
        var _this = this;
        //console.log("show",this.control.errors);
        var errors = Object.keys(this.control.errors)
            .map(function (field) { return _this.getMessage(field, _this.control.errors[field], _this.control); });
        return errors[0];
    };
    ShowErrorsComponent.prototype.getMessage = function (type, params, control) {
        var fname = this.getControlName(control);
        fname = fname.replace("_", " ").replace(" id", "").toLowerCase();
        fname = fname.replace(/\b\w/g, function (l) { return l.toUpperCase(); });
        var msg = ShowErrorsComponent_1.errorMessages[type](params);
        return msg.replace("##FIELD##", fname);
    };
    ShowErrorsComponent.prototype.getControlName = function (c) {
        var formGroup = c.parent.controls;
        return Object.keys(formGroup).find(function (name) { return c === formGroup[name]; }) || null;
    };
    ShowErrorsComponent.prototype.ngOnInit = function () { };
    ShowErrorsComponent.errorMessages = {
        'required': function (params) { return '##FIELD## can\'t be blank'; },
        'minlength': function (params) { return '##FIELD## should be minimum ' + params.requiredLength + ' characters'; },
        'maxlength': function (params) { return '##FIELD## should not be greater then ' + params.requiredLength + ' characters'; },
        'pattern': function (params) { return 'Should be a valid'; },
        'email': function (params) { return "Should be vaild email."; },
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ShowErrorsComponent.prototype, "control", void 0);
    ShowErrorsComponent = ShowErrorsComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'show-errors',
            template: __webpack_require__(/*! ./show-errors.component.html */ "./src/components/show-errors/show-errors.component.html"),
            styles: [__webpack_require__(/*! ./show-errors.component.css */ "./src/components/show-errors/show-errors.component.css")]
        })
    ], ShowErrorsComponent);
    return ShowErrorsComponent;
    var ShowErrorsComponent_1;
}());



/***/ }),

/***/ "./src/directives/numbers-only.directive.ts":
/*!**************************************************!*\
  !*** ./src/directives/numbers-only.directive.ts ***!
  \**************************************************/
/*! exports provided: NumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberDirective", function() { return NumberDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumberDirective = /** @class */ (function () {
    function NumberDirective(el) {
        this.el = el;
        // Allow numbers.
        this.regex = new RegExp(/^[0-9]+$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'Delete', 'ArrowLeft', 'ArrowRight'];
    }
    NumberDirective.prototype.onkeydown = function (event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        // Do not use event.keycode this is deprecated.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
        var current = this.el.nativeElement.value;
        // We need this because the current value on the DOM element
        // is not yet updated with the value from this event
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NumberDirective.prototype, "appNumberOnly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NumberDirective.prototype, "onkeydown", null);
    NumberDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appNumberOnly]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NumberDirective);
    return NumberDirective;
}());



/***/ }),

/***/ "./src/directives/trim-input.directive.ts":
/*!************************************************!*\
  !*** ./src/directives/trim-input.directive.ts ***!
  \************************************************/
/*! exports provided: TrimInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimInputDirective", function() { return TrimInputDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrimInputDirective = /** @class */ (function () {
    function TrimInputDirective() {
    }
    /**
     * Remove whitespace on focus out
     * @param event
     */
    TrimInputDirective.prototype.onblur = function (event) {
        event.target.value = event.target.value.trim();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TrimInputDirective.prototype, "TrimField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TrimInputDirective.prototype, "onblur", null);
    TrimInputDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appTrimInput]',
        }),
        __metadata("design:paramtypes", [])
    ], TrimInputDirective);
    return TrimInputDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/guards/auth/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/guards/auth/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        // check if user login
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/login');
        }
        return this.auth.isLoggedIn();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/guards/barber-admin/barber-admin.guard.ts":
/*!*******************************************************!*\
  !*** ./src/guards/barber-admin/barber-admin.guard.ts ***!
  \*******************************************************/
/*! exports provided: BarberAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarberAdminGuard", function() { return BarberAdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarberAdminGuard = /** @class */ (function () {
    function BarberAdminGuard(auth) {
        this.auth = auth;
    }
    BarberAdminGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        //console.log('----------------->');
        // check from server for user detail
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.auth.checkBarberIsAdmin().toPromise().catch(function (err) {
                console.log('----------------->', err);
                if (err !== undefined) {
                    return observer.next(err.status);
                }
            }).then(function (res) {
                console.log('----------------->', res);
                if (res !== undefined) {
                    return observer.next(res.status);
                }
            });
        });
    };
    BarberAdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], BarberAdminGuard);
    return BarberAdminGuard;
}());



/***/ }),

/***/ "./src/guards/not-auth/not-auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/guards/not-auth/not-auth.guard.ts ***!
  \***********************************************/
/*! exports provided: NotAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthGuard", function() { return NotAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotAuthGuard = /** @class */ (function () {
    function NotAuthGuard(auth) {
        this.auth = auth;
    }
    NotAuthGuard.prototype.canActivate = function (next, state) {
        // check if user login
        return !this.auth.isLoggedIn();
    };
    NotAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NotAuthGuard);
    return NotAuthGuard;
}());



/***/ }),

/***/ "./src/guards/role/role-access.guard.ts":
/*!**********************************************!*\
  !*** ./src/guards/role/role-access.guard.ts ***!
  \**********************************************/
/*! exports provided: RoleAccessGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleAccessGuard", function() { return RoleAccessGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoleAccessGuard = /** @class */ (function () {
    function RoleAccessGuard() {
    }
    RoleAccessGuard.prototype.canActivate = function (next, state) {
        var roles = next.data["roles"];
        return roles.includes(JSON.parse(localStorage.getItem('user_detail')).role);
    };
    RoleAccessGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RoleAccessGuard);
    return RoleAccessGuard;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/modules/admin/admin.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/admin/admin.module.ts ***!
  \*******************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_stored_applications_stored_applications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/stored-applications/stored-applications.component */ "./src/modules/admin/components/stored-applications/stored-applications.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/modules/admin/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users/users.component */ "./src/modules/admin/components/users/users.component.ts");
/* harmony import */ var _components_saloons_saloons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/saloons/saloons.component */ "./src/modules/admin/components/saloons/saloons.component.ts");
/* harmony import */ var _guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../guards/auth/auth.guard */ "./src/guards/auth/auth.guard.ts");
/* harmony import */ var _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../guards/role/role-access.guard */ "./src/guards/role/role-access.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/modules/shared/shared.module.ts");
/* harmony import */ var _components_dashboard_pending_review_pending_review_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard/pending-review/pending-review.component */ "./src/modules/admin/components/dashboard/pending-review/pending-review.component.ts");
/* harmony import */ var _components_dashboard_summary_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/summary/summary.component */ "./src/modules/admin/components/dashboard/summary/summary.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sales/sales.component */ "./src/modules/admin/components/sales/sales.component.ts");
/* harmony import */ var _components_add_saloons_add_saloons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/add-saloons/add-saloons.component */ "./src/modules/admin/components/add-saloons/add-saloons.component.ts");
/* harmony import */ var _components_search_sales_search_sales_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/search-sales/search-sales.component */ "./src/modules/admin/components/search-sales/search-sales.component.ts");
/* harmony import */ var _components_sales_entries_entries_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sales/entries/entries.component */ "./src/modules/admin/components/sales/entries/entries.component.ts");
/* harmony import */ var _components_sales_payment_history_payment_history_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sales/payment-history/payment-history.component */ "./src/modules/admin/components/sales/payment-history/payment-history.component.ts");
/* harmony import */ var _components_sales_payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/sales/payment-info/payment-info.component */ "./src/modules/admin/components/sales/payment-info/payment-info.component.ts");
/* harmony import */ var _components_sales_sales_summary_sales_summary_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/sales/sales-summary/sales-summary.component */ "./src/modules/admin/components/sales/sales-summary/sales-summary.component.ts");
/* harmony import */ var _components_manage_discount_manage_discount_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/manage-discount/manage-discount.component */ "./src/modules/admin/components/manage-discount/manage-discount.component.ts");
/* harmony import */ var _components_invite_barber_invite_barber_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/invite-barber/invite-barber.component */ "./src/modules/admin/components/invite-barber/invite-barber.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    {
        path: 'admin',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_7__["RoleAccessGuard"]],
        data: { roles: ['admin'] }
    }, {
        path: 'admin/users',
        component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_7__["RoleAccessGuard"]],
        data: { roles: ['admin'] }
    }, {
        path: 'admin/sales/:id',
        component: _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_13__["SalesComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_7__["RoleAccessGuard"]],
        data: { roles: ['admin'] }
    }, {
        path: 'admin/search-sales',
        component: _components_search_sales_search_sales_component__WEBPACK_IMPORTED_MODULE_15__["SearchSalesComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_7__["RoleAccessGuard"]],
        data: { roles: ['admin'] }
    }, {
        path: 'admin/add-saloons',
        component: _components_add_saloons_add_saloons_component__WEBPACK_IMPORTED_MODULE_14__["AddSaloonsComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_7__["RoleAccessGuard"]],
        data: { roles: ['admin'] }
    }, {
        path: 'admin/saloons',
        component: _components_saloons_saloons_component__WEBPACK_IMPORTED_MODULE_5__["SaloonsComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_7__["RoleAccessGuard"]],
        data: { roles: ['admin'] }
    }, {
        path: 'admin/applications',
        component: _components_stored_applications_stored_applications_component__WEBPACK_IMPORTED_MODULE_2__["StoredApplicationsComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_7__["RoleAccessGuard"]],
        data: { roles: ['admin'] }
    }, {
        path: 'admin/manage-discount',
        component: _components_manage_discount_manage_discount_component__WEBPACK_IMPORTED_MODULE_20__["ManageDiscountComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_7__["RoleAccessGuard"]],
        data: { roles: ['admin'] }
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    }
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes)
            ],
            declarations: [_components_manage_discount_manage_discount_component__WEBPACK_IMPORTED_MODULE_20__["ManageDiscountComponent"],
                _components_stored_applications_stored_applications_component__WEBPACK_IMPORTED_MODULE_2__["StoredApplicationsComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
                _components_saloons_saloons_component__WEBPACK_IMPORTED_MODULE_5__["SaloonsComponent"],
                _components_dashboard_pending_review_pending_review_component__WEBPACK_IMPORTED_MODULE_10__["PendingReviewComponent"],
                _components_dashboard_summary_summary_component__WEBPACK_IMPORTED_MODULE_11__["SummaryComponent"],
                _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_13__["SalesComponent"],
                _components_add_saloons_add_saloons_component__WEBPACK_IMPORTED_MODULE_14__["AddSaloonsComponent"],
                _components_search_sales_search_sales_component__WEBPACK_IMPORTED_MODULE_15__["SearchSalesComponent"],
                _components_sales_entries_entries_component__WEBPACK_IMPORTED_MODULE_16__["EntriesComponent"],
                _components_sales_payment_history_payment_history_component__WEBPACK_IMPORTED_MODULE_17__["PaymentHistoryComponent"],
                _components_sales_payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_18__["PaymentInfoComponent"],
                _components_sales_sales_summary_sales_summary_component__WEBPACK_IMPORTED_MODULE_19__["SalesSummaryComponent"],
                _components_manage_discount_manage_discount_component__WEBPACK_IMPORTED_MODULE_20__["ManageDiscountComponent"],
                _components_invite_barber_invite_barber_component__WEBPACK_IMPORTED_MODULE_21__["InviteBarberComponent"]],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _components_add_saloons_add_saloons_component__WEBPACK_IMPORTED_MODULE_14__["AddSaloonsComponent"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/modules/admin/components/add-saloons/add-saloons.component.css":
/*!****************************************************************************!*\
  !*** ./src/modules/admin/components/add-saloons/add-saloons.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sub_title{\n    color:#565962;\n    font-size:14px;\n    font-weight:bold\n}\nlabel{\n    color:#6c6d70;\n    font-size:10px;\n    font-weight:500;\n}\n.required::after {\n    color: #EF615F;\n    font-size: 11px;\n    content: ' *';\n}"

/***/ }),

/***/ "./src/modules/admin/components/add-saloons/add-saloons.component.html":
/*!*****************************************************************************!*\
  !*** ./src/modules/admin/components/add-saloons/add-saloons.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- display page title -->\n  <!-- <div class=\"row\">\n    <div class=\"col\">\n      <p class=\"text-capitalize h3 ml-4\">{{pageTitle}}</p>\n    </div>\n  </div> -->\n\n\n  <div class=\"row bg-white mb-5 ml-4 mr-5\">\n    <div class=\"col-md-12\">\n      <p class=\"text-capitalize h5 ml-5 mt-5 mb-4 sub_title\">{{subTitle}}</p>\n      <!-- seperator or line -->\n      <div class=\"line ml-5 mr-5\"></div>\n      <!-- change-password form -->\n      <form class=\"row ml-4 mr-4 mb-5 mt-5\" [formGroup]=\"saloonForm\" novalidate>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label class=\"h6 required\">Saloon Name</label>\n            <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"name\"\n              maxlength=\"20\" autocomplete=\"off\">\n            <show-errors [control]=\"saloonForm.controls.name\"></show-errors>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label class=\"h6 required\">Standard Price</label>\n            <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required\n              formControlName=\"standard_price\" maxlength=\"20\" autocomplete=\"off\">\n            <show-errors [control]=\"saloonForm.controls.standard_price\"></show-errors>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label class=\"h6 required\">Postal Code</label>\n            <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"postal_code\"\n              maxlength=\"8\" autocomplete=\"off\">\n            <show-errors [control]=\"saloonForm.controls.postal_code\"></show-errors>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label class=\"h6 required\">Latitude</label>\n            <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"lat\"\n              maxlength=\"20\" autocomplete=\"off\">\n            <show-errors [control]=\"saloonForm.controls.lat\"></show-errors>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label class=\"h6 required\">Longitude</label>\n            <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"lng\"\n              maxlength=\"20\" autocomplete=\"off\">\n            <show-errors [control]=\"saloonForm.controls.lng\"></show-errors>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label class=\"h6\">Vat Number</label>\n            <input type=\"text\" class=\"form-control no-side-border\" appTrimInput formControlName=\"vat_number\"\n              maxlength=\"20\" autocomplete=\"off\">\n            <!-- <show-errors [control]=\"saloonForm.controls.vat_number\"></show-errors> -->\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label class=\"h6\">Company Number</label>\n            <input type=\"text\" class=\"form-control no-side-border\" appTrimInput formControlName=\"company_number\"\n              maxlength=\"20\" autocomplete=\"off\">\n            <show-errors [control]=\"saloonForm.controls.company_number\"></show-errors>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label class=\"h6 required text-capitalize\">Country</label>\n            <select class=\"form-control\" *ngIf=\"countries\" formControlName=\"country_id\"\n              (change)=\"updateCountry($event.target)\">\n              <option *ngFor=\"let country of countries.data\" [value]=\"country.id\" class=\"text-capitalize\">\n                {{country.name}}</option>\n            </select>\n            <show-errors [control]=\"saloonForm.controls.country_id\"></show-errors>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label class=\"h6 required\">Logo Image</label>\n            <input type=\"file\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"logo_url\"\n              accept=\"image/*\" (change)=\"logoUpload($event)\">\n            <show-errors [control]=\"saloonForm.controls.logo_url\"></show-errors>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label class=\"h6 required\">Header Image</label>\n            <input type=\"file\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"header_url\"\n              accept=\"image/*\" (change)=\"logoheaderUpload($event)\">\n            <show-errors [control]=\"saloonForm.controls.header_url\"></show-errors>\n          </div>\n        </div>\n\n        <!-- <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label class=\"h6 required\">Barber First Name</label>\n            <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"first_name\"\n              maxlength=\"20\" autocomplete=\"off\">\n            <show-errors [control]=\"saloonForm.controls.first_name\"></show-errors>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label class=\"h6 required\">Barber Last Name</label>\n            <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"last_name\"\n              maxlength=\"20\" autocomplete=\"off\">\n            <show-errors [control]=\"saloonForm.controls.last_name\"></show-errors>\n          </div>\n        </div> -->\n\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label class=\"h6 required\">Contact Number</label>\n            <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required\n              formControlName=\"contact_number\" maxlength=\"20\" autocomplete=\"off\">\n            <show-errors [control]=\"saloonForm.controls.contact_number\"></show-errors>\n          </div>\n        </div>\n\n        <!-- <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label class=\"h6 required\">Email</label>\n            <input type=\"email\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"email\"\n              maxlength=\"50\" autocomplete=\"off\" readonly>\n            <show-errors [control]=\"saloonForm.controls.email\"></show-errors>\n          </div>\n        </div> -->\n\n        <div class=\"col-md-6\">\n          <div class=\"form-group mb-5\">\n            <label class=\"h6 required\">Address</label>\n            <textarea class=\"form-control no-side-border\" appTrimInput required formControlName=\"address\"\n              autocomplete=\"off\"></textarea>\n            <show-errors [control]=\"saloonForm.controls.address\"></show-errors>\n          </div>\n        </div>\n\n\n\n\n        <div class=\"col-md-12\">\n          <small><span class=\"required\"></span> indicates required</small>\n          <div class=\"text-left mt-2\">\n            <button [disabled]=\"!saloonForm.valid\" (click)=\"submitAddSaloon (saloonForm)\"\n              class=\"btn btn-shokuni text-capitalize mr-3\">save</button>\n            <button type=\"reset\" (click)=\"redirect()\" class=\"btn btn-transparent text-capitalize\">cancel</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/admin/components/add-saloons/add-saloons.component.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/admin/components/add-saloons/add-saloons.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddSaloonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSaloonsComponent", function() { return AddSaloonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_saloon_saloon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/saloon/saloon.service */ "./src/services/saloon/saloon.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ "./src/services/auth/auth.service.ts");
/* harmony import */ var _services_global_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/global/global.service */ "./src/services/global/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddSaloonsComponent = /** @class */ (function () {
    function AddSaloonsComponent(saloon, http, auth, href, router) {
        this.saloon = saloon;
        this.http = http;
        this.auth = auth;
        this.href = href;
        this.router = router;
        this.pageTitle = 'saloons';
        this.subTitle = 'add saloons';
        this.logoName = '';
        this.logoheaderName = '';
    }
    AddSaloonsComponent.prototype.ngOnInit = function () {
        this.url = this.href.backend_url;
        this.user_id = String(JSON.parse(localStorage.getItem('user_detail')).id);
        this.access_token = localStorage.getItem('access_token');
        this.doGET();
        this.saloonForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            // first_name: new FormControl(null, [Validators.required]),
            // last_name: new FormControl(null, [Validators.required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            standard_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            postal_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lat: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lng: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            vat_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            company_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            country_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            contact_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            logo_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            header_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        var url = new URL(window.location.href);
        // check if token param found in url-route
        this.invitationToken = (url.searchParams.has('token') && (url.searchParams.get('token')).trim()) ? (url.searchParams.get('token')).trim() : null;
        // if (JSON.parse(localStorage.getItem('user_detail')).id) {
        //     this.getAdminDetails();
        // }
    };
    AddSaloonsComponent.prototype.getAdminDetails = function () {
        var _this = this;
        this.saloon.getSaloon(JSON.parse(localStorage.getItem('user_detail')).id).subscribe(function (saloonres) {
            localStorage.setItem('admin_detail', JSON.stringify(saloonres.data));
            var admin_details = JSON.parse(localStorage.getItem('admin_detail'));
            _this.saloonForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                // first_name: new FormControl(admin_details.first_name, [Validators.required, Validators.maxLength(75)]),
                // last_name: new FormControl(admin_details.last_name, [Validators.required, Validators.maxLength(75)]),
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](admin_details.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(75)]),
                standard_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](admin_details.standard_price, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                postal_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](admin_details.postal_code, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                lat: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](admin_details.lat, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                lng: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](admin_details.lng, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                vat_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](admin_details.saloon_detail.vat_number, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                company_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](admin_details.saloon_detail.company_number, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](admin_details.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                country_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](admin_details.country_id || 74, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                contact_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](admin_details.contact_number, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                logo_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](admin_details.logo_url, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                header_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](admin_details.header, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            });
        });
    };
    /**
    * Method to register user
    * @param form {first_name: "Test", last_name: "Dev", email: "barber@email.com", password: "123456", number: "1234567890"}
    */
    AddSaloonsComponent.prototype.submitAddSaloon = function (form) {
        var _this = this;
        var values = form.value;
        // append optional parameters on signup
        values['invitationToken'] = this.invitationToken;
        values['role'] = 'barber';
        values['logo'] = this.logoName;
        values['header'] = this.logoheaderName;
        values['number'] = form.value.contact_number;
        Object.keys(values).forEach(function (key) { return (values[key] == null) && delete values[key]; });
        this.auth.vars.displayLoader(true);
        // register user
        values['user_id'] = JSON.parse(localStorage.getItem('user_detail')).id;
        /*alert(userId);*/
        /*==================================================*/
        this.saloon.createSaloon(values).subscribe(function (saloonres) {
            _this.saloon.vars.displayLoader(false);
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(saloonres.data), saloonres.message, 'success');
            localStorage.setItem('admin_detail', JSON.stringify(saloonres.data));
            _this.router.navigate(['barber/dashboard']);
            _this.saloon.getUserDetail().subscribe(function (res) {
                localStorage.setItem('user_detail', JSON.stringify(res.data));
                window.location.reload();
            });
        }, function (saloonerr) {
            _this.saloon.vars.displayLoader(false);
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(saloonerr.errors), saloonerr.message);
        });
        /*==================================================*/
    };
    AddSaloonsComponent.prototype.doGET = function () {
        var _this = this;
        var url = this.url + '/countries/get';
        var search = new URLSearchParams();
        this.http.get(url).subscribe(function (res) { return _this.countries = res; });
    };
    AddSaloonsComponent.prototype.logoUpload = function (event) {
        var _this = this;
        this.saloon.vars.displayLoader(true);
        this.files = event.target.files[0];
        var uploadData = new FormData();
        uploadData.append("image[]", this.files, this.files.name);
        uploadData.append("directory", "saloon");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ Authorization: 'Bearer ' + this.access_token });
        //'http://10.10.10.145/shokuni_new/public/v2/image'
        this.http.post(this.url + '/image', uploadData, { headers: headers }).subscribe(function (res) {
            _this.logoName = res["data"][0];
            _this.saloon.vars.displayLoader(false);
        }, function (err) {
            if (!err.ok && err.status == 422) {
                console.log(err);
            }
            else if (!err.ok && err.status == 500) {
                console.log('500 error');
            }
            else {
                console.log('Else part');
            }
            _this.saloon.vars.displayLoader(false);
        });
    };
    AddSaloonsComponent.prototype.logoheaderUpload = function (event) {
        var _this = this;
        this.saloon.vars.displayLoader(true);
        this.files = event.target.files[0];
        var uploadData = new FormData();
        uploadData.append("image[]", this.files, this.files.name);
        uploadData.append("directory", "saloon-header");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ Authorization: 'Bearer ' + this.access_token });
        //'http://10.10.10.145/shokuni_new/public/v2/image'
        this.http.post(this.url + '/image', uploadData, { headers: headers }).subscribe(function (res) {
            _this.logoheaderName = res["data"][0];
            _this.saloon.vars.displayLoader(false);
        }, function (err) {
            if (!err.ok && err.status == 422) {
                console.log(err);
            }
            else if (!err.ok && err.status == 500) {
                console.log('500 error');
            }
            else {
                console.log('Else part');
            }
            _this.saloon.vars.displayLoader(false);
        });
    };
    AddSaloonsComponent.prototype.redirect = function () {
        this.router.navigate(['/barber/dashboard']);
    };
    AddSaloonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-saloons',
            template: __webpack_require__(/*! ./add-saloons.component.html */ "./src/modules/admin/components/add-saloons/add-saloons.component.html"),
            styles: [__webpack_require__(/*! ./add-saloons.component.css */ "./src/modules/admin/components/add-saloons/add-saloons.component.css")]
        }),
        __metadata("design:paramtypes", [_services_saloon_saloon_service__WEBPACK_IMPORTED_MODULE_2__["SaloonService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AddSaloonsComponent);
    return AddSaloonsComponent;
}());



/***/ }),

/***/ "./src/modules/admin/components/dashboard/dashboard.component.css":
/*!************************************************************************!*\
  !*** ./src/modules/admin/components/dashboard/dashboard.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".datetex {\n    color: #abacb8;\n    font-size: 10px;\n    padding-left: 10px;\n    text-align: left;\n    background: white;\n    border-radius: 15px;\n    line-height: 30px;\n    float: right;\n    margin-right: 21px !important;\n}\n.dd {\n    color: #655ec2;\n}\n.dropicon {\n    float: right;\n    margin-right: 4px;\n    height: 25px;\n    width: 34px;\n    line-height: 20px;\n    padding-left: 9px;\n    margin-top: -3px;\n}\n.date_picker {\n    position: relative !important;\n    white-space: nowrap !important;\n     width: 1px !important; \n    font-size: 0% !important;\n    background: transparent !important;\n}\ni {\n    padding-left: 0px !important;\n}\n.btn-bs-file{\n    position:relative;\n}\n.btn-bs-file input[type=\"file\"]{\n    position: absolute;\n    top: -9999999;\n    filter: alpha(opacity=0);\n    opacity: 0;\n    width:0;\n    height:0;\n    outline: none;\n    cursor: inherit;\n}\n.width-20 {\n    width: 1rem;\n}"

/***/ }),

/***/ "./src/modules/admin/components/dashboard/dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/modules/admin/components/dashboard/dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n  <!-- display page title -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <p class=\"text-capitalize h3 ml-3\">{{pageTitle}}</p>\n    </div>\n\n    <!-- display datepicker -->\n   <!--  <div class=\"col text-right\">\n      <div class=\"d-flex justify-content-end\">\n        <p class=\"datetex\">\n          Today: \n          <span class=\"dd\">{{ selectedDate | date:'MMM dd' }}</span>\n         \n        </p>\n       <div class=\"width-20 justify-content-end mr-5\">\n          <my-date-picker [options]=\"myDatePickerOptions\" (dateChanged)=\"onDateChanged($event)\"></my-date-picker>\n        </div>\n      </div>\n    </div> -->\n    <div class=\"col-md-8 col-sm-8 col-xs-8\" style=\"margin-left: -1%;\">\n      <p class=\"datetex\">Today: <span class=\"dd\">{{ selectedDate | date:'MMM dd' }}</span> \n        <!--  <i class=\"fa dropicon\">&#xf078;</i> -->\n        <my-date-picker class=\"dropicon\" [options]=\"myDatePickerOptions\" (dateChanged)=\"onDateChanged($event)\"></my-date-picker>\n\n       </p>\n   </div>\n\n  </div>\n\n  <!-- display saloon-summary -->\n  <app-summary [selectedDate]=\"selectedDate\"></app-summary>\n\n  <!-- display pending review -->\n  <app-pending-review></app-pending-review>\n\n  <!-- display forumn HTML -->\n  <app-barber-join-discussion></app-barber-join-discussion>\n</div>\n"

/***/ }),

/***/ "./src/modules/admin/components/dashboard/dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/admin/components/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/admin/admin.service */ "./src/services/admin/admin.service.ts");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary/summary.component */ "./src/modules/admin/components/dashboard/summary/summary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(admin) {
        this.admin = admin;
        this.pageTitle = 'dashboard';
        this.myDatePickerOptions = {
            sunHighlight: true,
            satHighlight: true,
            markCurrentDay: true,
            markCurrentMonth: true,
            markCurrentYear: true,
            showClearDateBtn: false,
            alignSelectorRight: true,
            componentDisabled: false,
            firstDayOfWeek: 'su',
            // disableUntil: this.setToday(),
            disableSince: this.setToday(),
            showInputField: false,
            openSelectorOnInputClick: true,
            inline: false,
            editableDateField: false,
            indicateInvalidDate: true,
            // dateFormat: 'yyyy-mm-dd',
            openSelectorTopOfInput: false
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var today = new Date();
        this.selectedDate = today.getTime();
    };
    DashboardComponent.prototype.setToday = function () {
        var today = new Date();
        return { year: today.getFullYear(), month: (today.getMonth() + 1), day: (today.getDate() + 1) };
    };
    /**
     * Method to take respective action on datepicker date changed
     *
     * @param object
     */
    DashboardComponent.prototype.onDateChanged = function (event) {
        var date = new Date(event['date'].year, event['date'].month - 1, event['date'].day);
        this.selectedDate = date.getTime();
        this.child.getDashboard();
        this.child.getDashboardSummary();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_summary_summary_component__WEBPACK_IMPORTED_MODULE_2__["SummaryComponent"]),
        __metadata("design:type", _summary_summary_component__WEBPACK_IMPORTED_MODULE_2__["SummaryComponent"])
    ], DashboardComponent.prototype, "child", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/modules/admin/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/modules/admin/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/modules/admin/components/dashboard/pending-review/pending-review.component.css":
/*!********************************************************************************************!*\
  !*** ./src/modules/admin/components/dashboard/pending-review/pending-review.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo_url {\n    width: 3rem;\n}\nth{\n    color:#8896b6 !important;\n    font-size:9px !important;\n    font-weight: 600 !important;\n}\ntd.name{\ncolor:#5c5b69 !important;\nfont-size:11px !important;\nfont-weight:bold !important;\n}\ntd.address{\n    color:#a5a7b3 !important;\nfont-size:10px !important;\nfont-weight:bold !important;\n}"

/***/ }),

/***/ "./src/modules/admin/components/dashboard/pending-review/pending-review.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/modules/admin/components/dashboard/pending-review/pending-review.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row bg-white mt-3 ml-3 mr-3 shadow\">\n  <div class=\"d-flex p-2 border-bottom\">\n    <h5 class=\"text-capitalize h6 pl-3 pt-3 pb-3 text-dark\">{{ pageTitle }}</h5>\n  </div>\n</div>\n\n<div class=\"row bg-white mb-3 ml-3 mr-3 shadow\">\n  <div class=\"col\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th scope=\"col\" class=\"text-capitalize text-sm text-muted font-weight-normal\">logo</th>\n            <th scope=\"col\" class=\"text-capitalize text-sm text-muted font-weight-normal\">shop name</th>\n            <th scope=\"col\" class=\"text-capitalize text-sm text-muted font-weight-normal\">address</th>\n            <th scope=\"col\" class=\"text-capitalize text-sm text-muted font-weight-normal\">status</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let saloon of saloonList;\">\n            <td scope=\"row\" class=\"text-capitalize text-black-50\">\n              <img [alt]=\"saloon?.name\" [src]=\"saloon?.logo_url\" class=\"logo_url\" />\n            </td>\n            <td scope=\"row\" class=\"text-capitalize name text-black-50\">\n              {{ saloon?.name }}\n            </td>\n            <td scope=\"row\" class=\"text-capitalize address text-black-50\">\n              {{ saloon?.address }}\n            </td>\n            <td scope=\"row\" class=\"text-capitalize status text-black-50\">\n              {{ saloon?.shop_flag }}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/admin/components/dashboard/pending-review/pending-review.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/modules/admin/components/dashboard/pending-review/pending-review.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PendingReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingReviewComponent", function() { return PendingReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/admin/admin.service */ "./src/services/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PendingReviewComponent = /** @class */ (function () {
    function PendingReviewComponent(admin) {
        this.admin = admin;
        this.pageTitle = 'pending review';
    }
    PendingReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getSaloonsSummary();
        }, this.admin.vars.onInt_request_delay_in_ms);
    };
    /**
     * Request to get list of all saloons
     *
     * @param number page
     *
     * @returns void
     */
    PendingReviewComponent.prototype.getSaloonsSummary = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        // show loader
        this.admin.vars.displayLoader(true);
        this.admin.getSaloonsSummary(page).subscribe(function (res) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // assign admin orders
            _this.saloonList = res.data.data;
            _this.currentPage = res.data.current_page;
            _this.totalItems = res.data.total;
        }, function (err) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // display errors notification
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(err.errors), err.message);
        });
    };
    PendingReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-review',
            template: __webpack_require__(/*! ./pending-review.component.html */ "./src/modules/admin/components/dashboard/pending-review/pending-review.component.html"),
            styles: [__webpack_require__(/*! ./pending-review.component.css */ "./src/modules/admin/components/dashboard/pending-review/pending-review.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], PendingReviewComponent);
    return PendingReviewComponent;
}());



/***/ }),

/***/ "./src/modules/admin/components/dashboard/summary/summary.component.css":
/*!******************************************************************************!*\
  !*** ./src/modules/admin/components/dashboard/summary/summary.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display-5 {\n    font-size: 2rem;\n}\n\n.avatar {\n    width: 9rem;\n}\n\np{\n    font-size:11px !important;\n    font-weight: 600 !important;\n    color:#898a8f !important;\n}\n\n.text-primary{\n    color: #1e336f !important;\n}\n\n.text-danger{\n    color: #bf6d6f !important;\n}\n\n.high_revn{\n    margin-top: -7px !important;\n    color:#b6b5c1 !important;\n    font-size:11px !important;\n    font-weight: 500 !important;\n}\n\nsmall{\n    font-size:8px !important;\n    font-weight:500  !important;\n}\n\n.active_shops{\n    color: #646470 !important;\n    font-size: 16px !important;\n    padding: 8px 0px 0px 0px !important;\n    font-weight: 400 !important;\n    margin-bottom: 0 !important;\n  }\n\n.numeric_value .four_num {\n     color:#e49592 !important;\n     font-size:10px !important;\n     font-weight:600 !important;\n  }\n\n.numeric_value span {\n     color:#8ed9c3 !important;\n     font-size:10px !important;\n     font-weight:600 !important;\n  }\n\n.numeric_value {\n     color:#646470 !important;\n     padding: 14px 0px 0px 0px !important;\n     font-size:10px !important;\n     font-weight:500 !important;\n  }\n\n.open_timing{\n     color: #b46d6b !important;\n     padding: 12px 0px 0px 0px !important;\n     font-size:17px !important;\n     font-weight:bold !important;\n     margin-bottom: 0 !important;\n  }\n\n.shop_open{\n     color:#646470 !important;\n     padding: 0 0 0 0px !important;\n     font-size:8px !important;\n     font-weight:700 !important;\n     margin-bottom: 0 !important;\n  }\n\n.totaktake{ color: #96979b;font-size:13px;font-weight:bold;margin-bottom: 0; }\n\n.totaktakedesc{ color:#abacb8;font-size: 10px;font-weight: bold;}\n\n.total_countt{\n    font-size: 33px !important;\nfont-weight: bold !important;\ncolor: #1e336f !important;\n}\n\n.total_countt span{\n    color:#abacb8 !important;\n    font-size:11px !important;\n    font-weight: bold !important;\n    padding-left: 8px !important;\n}\n\n.avgcuts{ color: #96979b !important;font-size:13px !important;font-weight:bold !important;margin-bottom: 0 !important; }\n\n.avgcutsdesc{ color:#abacb8 !important;font-size: 10px !important;font-weight: bold !important; }\n\n.avgcuts_highrev{ color: #bf6d6f !important;font-size:13px !important;font-weight:bold !important;margin-bottom: 0 !important; }\n\n.coldiv{ border-right: 1px solid !important; border-color: #f1f4f7 !important;padding: 30px 0px 20px 50px !important; }\n\n.coldiv2{ padding: 30px 0px 20px 50px !important; }"

/***/ }),

/***/ "./src/modules/admin/components/dashboard/summary/summary.component.html":
/*!*******************************************************************************!*\
  !*** ./src/modules/admin/components/dashboard/summary/summary.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-3\">\n    <div class=\"col-4 bg-white shadow\">\n        <div class=\"text-capitalize display-5 text-dark\">{{ getDate() | date:'EEEE' }}</div>\n        <div class=\"text-capitalize text-muted\">{{ getDate () | date:'dd' }}<sup>{{ nth (getDate () | date:'dd') }}</sup> {{ getDate () | date:'MMMM' }}</div>\n        <div class=\"text-black-50 mt-5\">{{ getDate () | date:'hh:mm' }}<sub>{{ lowercase (getDate () | date:'a') }}</sub></div>\n    </div>\n  \n    <div class=\"col ml-3\">\n      <div class=\"row shadow bg-white\">\n        <div class=\"col border-right\">\n          <div class=\"row border-bottom\">\n            <div class=\"col text-dark text-capitalize\">\n              <div class=\"d-flex flex-column bd-highlight mb-3\">\n                <div class=\"p-2 font-weight-bold\"><h3 class=\"font-weight-bold text-secondary\">{{ dashboard?.customers }}</h3><span class=\"d-block text-sm bd-highlight\"><small class=\"d-block\">customers today</small></span></div>\n                <!-- <div class=\"text-secondary text-capitalize text-sm p-2 bd-highlight\">customers today</div> -->\n              </div>\n            </div>\n            <div class=\"col text-dark text-capitalize\">\n              <div class=\"d-flex flex-column bd-highlight mb-3\">\n                <div class=\"p-2 font-weight-bold\"><h3 class=\"font-weight-bold text-secondary\">{{ dashboard?.cuts }}</h3><span class=\"d-block text-sm bd-highlight\"><small class=\"d-block\">cuts today</small></span></div>\n                <!-- <div class=\"text-secondary text-capitalize text-sm p-2 bd-highlight\">cuts today</div> -->\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col text-dark text-capitalize\">\n              <div class=\"d-flex flex-column bd-highlight mb-3\">\n                <div class=\"p-2 font-weight-bold\">\n                  <h3 class=\"text-secondary\"><span class=\"text-success\">+</span>{{ dashboard?.chair_open }} /\n                  <span class=\"text-danger\">-</span>{{ dashboard?.chair_close }}</h3><span class=\"d-block text-sm bd-highlight\"><small class=\"d-block\">chairs open / closed</small></span>\n                </div>\n                <!-- <div class=\"text-secondary text-capitalize text-sm bd-highlight\">chairs open / closed</div> -->\n              </div>\n            </div>\n            <div class=\"col text-dark text-capitalize\">\n              <div class=\"d-flex flex-column bd-highlight mb-3\">\n                <div class=\"p-2 font-weight-bold\"><h3 class=\"text-secondary\">{{ dashboard?.avg_wait_time }}<sub class=\"text-lowercase\">m</sub></h3><span class=\"d-block text-sm bd-highlight\"><small class=\"d-block\">average queue wait time</small></span></div>\n                <!-- <div class=\"text-secondary text-capitalize text-sm bd-highlight\">average queue wait time</div> -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <p class=\"active_shops\">Active Shops</p>\n             </div>\n            <div class=\"col-md-6\">\n              <p class=\"numeric_value\"><span>+6</span>/<span class=\"four_num\">-4</span></p> \n            </div>\n          </div>\n          <div class=\"row\">\n             <div class=\"col-md-6\">\n               <i style=\"font-size: 20px;color: #71fac7;padding:20px 0px 0px 20px;\" class=\"fa\">&#xf19c;</i>\n             </div>\n            <div class=\"col-md-6\">\n               <p class=\"open_timing\">{{ dashboard?.shopes_open}}</p>\n                 <h5 class=\"shop_open\">Open</h5>\n            </div>\n          </div>\n          <div class=\"row\">\n             <div class=\"col-md-6\">\n               <i style=\"font-size: 20px;color: #b46d6b;padding:20px 0px 0px 20px;\" class=\"fa\">&#xf19c;</i>\n             </div>\n            <div class=\"col-md-6\">\n               <p class=\"open_timing\">{{ dashboard?.shopes_close}}</p>\n                 <h5 class=\"shop_open\">Closed</h5>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>             \n  </div>\n\n\n  <div class=\"row m-3 bg-white p-4\">\n    <div class=\"col\">\n      <div class=\"d-flex  text-capitalize text-secondary font-weight-bold\">sales today</div>\n      <div class=\"d-flex  text-capitalize font-weight-light text-muted\">revenue from cuts</div>\n\n      <div class=\"d-flex p-2 text-capitalize font-weight-light\">\n        <span class=\"display-4 text-primary font-weight-normal\">{{ dashboard?.income | currency:'GBP' }}<sub class=\"text-muted\"><small>total revenue today</small></sub></span>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"d-flex text-capitalize text-secondary font-weight-bold\">revenue by location</div>\n          <div class=\"d-flex  text-capitalize font-weight-normal text-secondary\">country map</div>\n        </div>\n      </div>\n      <br>\n      \n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\" h3 text-capitalize text-danger font-weight-bold\">{{ dashboardSummary?.highest_revenue_country }} </div>\n           <div class=\"d-flex text-capitalize text-muted font-weight-normal high_revn\">highest revenue</div>\n        </div>\n        <div class=\"col\">\n          <div class=\" h3 text-capitalize text-danger font-weight-bold\">{{ dashboardSummary?.highest_cuts_country }}</div>\n          <div class=\"d-flex  text-capitalize text-muted font-weight-normal high_revn\">most cuts</div>\n        </div>\n        <div class=\"col\">\n          <div class=\" h3 text-capitalize text-danger font-weight-bold\">{{ dashboard?.lowest_wait_time }}</div>\n          <div class=\" text-capitalize text-muted font-weight-normal high_revn\">lowest wait time</div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/modules/admin/components/dashboard/summary/summary.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/admin/components/dashboard/summary/summary.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/admin/admin.service */ "./src/services/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(admin) {
        this.admin = admin;
    }
    SummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getDashboard();
            _this.getDashboardSummary();
        }, this.admin.vars.onInt_request_delay_in_ms);
    };
    /**
     * Request to get list of all saloons
     *
     * @param number page
     *
     * @returns void
     */
    SummaryComponent.prototype.getDashboard = function () {
        var _this = this;
        var today = new Date(this.selectedDate);
        var date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1).toString()).slice(-2) + '-' + ('0' + ((today.getDate()).toString())).slice(-2);
        // show loader
        this.admin.vars.displayLoader(true);
        this.admin.getDashboard(date).subscribe(function (res) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // assign admin orders
            _this.dashboard = res.data;
        }, function (err) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // display errors notification
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Request to get list of all saloons
     *
     * @param number page
     *
     * @returns void
     */
    SummaryComponent.prototype.getDashboardSummary = function () {
        var _this = this;
        var today = new Date(this.selectedDate);
        var date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1).toString()).slice(-2) + '-' + ('0' + ((today.getDate()).toString())).slice(-2);
        // show loader
        this.admin.vars.displayLoader(true);
        this.admin.getDashboardSummary(date).subscribe(function (res) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // assign admin orders
            _this.dashboardSummary = res.data;
        }, function (err) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // display errors notification
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * method to get date information
     * @param string type
     */
    SummaryComponent.prototype.getDate = function () {
        return new Date();
    };
    SummaryComponent.prototype.nth = function (d) {
        if (d > 3 && d < 21)
            return 'th'; // thanks kennebec
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    SummaryComponent.prototype.lowercase = function (time) {
        return time ? time.toLowerCase() : null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SummaryComponent.prototype, "selectedDate", void 0);
    SummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/modules/admin/components/dashboard/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.css */ "./src/modules/admin/components/dashboard/summary/summary.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/modules/admin/components/invite-barber/invite-barber.component.css":
/*!********************************************************************************!*\
  !*** ./src/modules/admin/components/invite-barber/invite-barber.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-side-border {\r\n    border-top: none;\r\n    border-left: none;\r\n    border-right: none;\r\n}\r\n\r\n.no-border {\r\n    border: none;\r\n}\r\n\r\n.btn-login {\r\n    color: #fff;\r\n    background-color: #131F47;\r\n    border-color: #131F47;\r\n}\r\n\r\n.btn-round {\r\n    border-radius: 2rem;\r\n}\r\n\r\n.login-image {\r\n    background-image: url('bg.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n}\r\n\r\n.fixed-right {\r\n    position: fixed;\r\n    right: 0;\r\n}\r\n\r\n.padding-bottom-100 {\r\n    padding-bottom:100%;\r\n}\r\n\r\n.color-dark {\r\n    color: #000;\r\n}\r\n\r\n.text-color-shokuni {\r\n    color: #15234A;\r\n}\r\n\r\n.mt-8 {\r\n    margin-top: 8rem;\r\n}\r\n\r\n.text-decoration-none {\r\n    text-decoration: none;\r\n}\r\n\r\n.text-faint {\r\n    color: #999999;\r\n}"

/***/ }),

/***/ "./src/modules/admin/components/invite-barber/invite-barber.component.html":
/*!*********************************************************************************!*\
  !*** ./src/modules/admin/components/invite-barber/invite-barber.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-3 m-5 p-4\">\n      <form [formGroup]=\"invitebarberForm\" novalidate>\n        <div class=\"display-4 text-center mt-5 font-weight-bold text-lowercase text-color-shokuni\">{{project_title}}\n        </div>\n        <div class=\"text-center mt-4 color-dark text-capitalize\">{{pageTitle}}</div>\n        <div class=\"form-group mt-5\">\n          <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"email\"\n            maxlength=\"255\" autocomplete=\"off\" placeholder=\"Email Address\">\n          <show-errors [control]=\"invitebarberForm.controls.email\"></show-errors>\n        </div>\n\n        <div class=\"text-center mt-5\">\n          <button type=\"submit\" [disabled]=\"!invitebarberForm.valid\" (click)=\"submitInvteBarber (invitebarberForm)\"\n            class=\"btn btn-login btn-round pl-4 pr-4 pt-2 pb-2 text-capitalize\">Accept</button>\n        </div>\n      </form>\n      <div class=\"text-center text-faint mt-8\">Don't have an account?\n        <span>\n          <a routerLink=\"/signup\" class=\"text-capitalize text-danger text-bold\">Sign Up</a>\n        </span>\n      </div>\n    </div>\n    <div class=\"col-md-8 d-xl-block d-none d-md-block d-lg-block login-image padding-bottom-100 fixed-right\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/admin/components/invite-barber/invite-barber.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/modules/admin/components/invite-barber/invite-barber.component.ts ***!
  \*******************************************************************************/
/*! exports provided: InviteBarberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteBarberComponent", function() { return InviteBarberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ "./src/services/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InviteBarberComponent = /** @class */ (function () {
    function InviteBarberComponent(auth, $route, router) {
        this.auth = auth;
        this.$route = $route;
        this.router = router;
        this.pageTitle = 'Accept Invitation';
    }
    InviteBarberComponent.prototype.ngOnInit = function () {
        this.project_title = this.auth.vars.project_title;
        this.inviteId = this.$route.snapshot.params['inviteId'];
        // design login form attribute
        this.invitebarberForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            invitationToken: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.inviteId, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    InviteBarberComponent.prototype.submitInvteBarber = function (form) {
        var _this = this;
        // show loader
        this.auth.vars.displayLoader(true);
        // call for login
        this.auth.inviteBarber(form.value).subscribe(function (res) {
            // hide loader
            _this.auth.vars.displayLoader(false);
            _this.router.navigate(['/login']);
            _this.auth.vars.showNotification(res.message, "Barber Invite", "success");
        }, function (err) {
            // hide loader
            _this.auth.vars.displayLoader(false);
            // show login error
            _this.auth.vars.showNotification(_this.auth.vars.convertObjectToString(err.data), err.message);
        });
    };
    InviteBarberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invite-barber',
            template: __webpack_require__(/*! ./invite-barber.component.html */ "./src/modules/admin/components/invite-barber/invite-barber.component.html"),
            styles: [__webpack_require__(/*! ./invite-barber.component.css */ "./src/modules/admin/components/invite-barber/invite-barber.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], InviteBarberComponent);
    return InviteBarberComponent;
}());



/***/ }),

/***/ "./src/modules/admin/components/manage-discount/manage-discount.component.css":
/*!************************************************************************************!*\
  !*** ./src/modules/admin/components/manage-discount/manage-discount.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/admin/components/manage-discount/manage-discount.component.html":
/*!*************************************************************************************!*\
  !*** ./src/modules/admin/components/manage-discount/manage-discount.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- display page title -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <p class=\"text-capitalize h3 ml-4\">{{pageTitle}}</p>\n    </div>\n  </div>\n\n  <div class=\"row bg-white mb-5 ml-4 mr-5\">\n    <div class=\"col-md-12\">\n      \t<!-- <p class=\"text-capitalize h5 ml-5 mt-5 mb-4 sub_title\">{{subTitle}}</p> -->\n      \t<!-- seperator or line -->\n      \t  \n      \t<!-- change-password form -->\n      \t<div class=\"col-md-12\">\n      \t\t<p class=\"text-capitalize h5 ml-5 mt-5 mb-4 sub_title\">For Card</p>\n      \t\t<div class=\"line ml-5 mr-5\"></div>  \n\t    \t<form class=\"row ml-4 mr-4 mb-5 mt-5\" [formGroup]=\"cardForm\" novalidate>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t  <label class=\"h6 required\">Ammount</label>\n\t\t\t\t\t  <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"ammount\" value=\"{{discount_result[0].discount_price}}\" maxlength=\"20\" autocomplete=\"off\">\n\t\t\t\t\t  <show-errors [control]=\"cardForm.controls.name\"></show-errors>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<input type=\"hidden\" formControlName=\"type\" value=\"card\" required>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t  <label class=\"h6 required\">Type</label>\n\t\t\t\t\t  <select class=\"form-control no-side-border\" appTrimInput required formControlName=\"type\" maxlength=\"20\" autocomplete=\"off\" value=\"{{discount_result[0].discount_type}}\" [(ngModel)]=\"selected\">\n\t\t\t\t\t  \t<option value=\"percentage\">Persentage</option>\n\t\t\t\t\t  \t<option value=\"normal\">Normal</option>\n\t\t\t\t\t  </select>\n\t\t\t\t\t  <show-errors [control]=\"cardForm.controls.name\"></show-errors>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<small><span class=\"required\"></span> indicates required</small>\n\t\t\t\t\t<div class=\"text-left mt-2\">\n\t\t\t\t\t  <button (click)=\"submitCardSaloon(cardForm)\" class=\"btn btn-shokuni text-capitalize mr-3\">save</button>\n\t\t\t\t\t  <button type=\"reset\" class=\"btn btn-transparent text-capitalize\">cancel</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\t\n\n\t\t<div class=\"col-md-12\">\n\t\t\t<p class=\"text-capitalize h5 ml-5 mt-5 mb-4 sub_title\">For Cash</p>\n\t\t\t<div class=\"line ml-5 mr-5\"></div>  \n\t\t\t<form class=\"row ml-4 mr-4 mb-5 mt-5\" [formGroup]=\"cashForm\" novalidate>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t  <label class=\"h6 required\">Ammount</label>\n\t\t\t\t\t  <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"ammount\" value=\"{{discount_result[1].discount_price}}\" maxlength=\"20\" autocomplete=\"off\">\n\t\t\t\t\t  <show-errors [control]=\"cashForm.controls.name\"></show-errors>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<input type=\"hidden\" formControlName=\"type\" value=\"cash\" required>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t  <label class=\"h6 required\">Type</label>\n\t\t\t\t\t  <select class=\"form-control no-side-border\" appTrimInput required formControlName=\"type\" maxlength=\"20\" autocomplete=\"off\" value=\"{{discount_result[1].discount_type}}\" [(ngModel)]=\"selected\">\n\t\t\t\t\t  \t<option value=\"percentage\">Persentage</option>\n\t\t\t\t\t  \t<option value=\"normal\">Normal</option>\n\t\t\t\t\t  </select>\n\t\t\t\t\t  <show-errors [control]=\"cashForm.controls.name\"></show-errors>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<small><span class=\"required\"></span> indicates required</small>\n\t\t\t\t\t<div class=\"text-left mt-2\">\n\t\t\t\t\t  <button (click)=\"submitCashSaloon(cashForm)\" class=\"btn btn-shokuni text-capitalize mr-3\">save</button>\n\t\t\t\t\t  <button type=\"reset\" class=\"btn btn-transparent text-capitalize\">cancel</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\t\n\t    </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/admin/components/manage-discount/manage-discount.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/modules/admin/components/manage-discount/manage-discount.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ManageDiscountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageDiscountComponent", function() { return ManageDiscountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/admin/admin.service */ "./src/services/admin/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ "./src/services/auth/auth.service.ts");
/* harmony import */ var _services_saloon_saloon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/saloon/saloon.service */ "./src/services/saloon/saloon.service.ts");
/* harmony import */ var _services_global_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/global/global.service */ "./src/services/global/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ManageDiscountComponent = /** @class */ (function () {
    function ManageDiscountComponent(admin, saloon, href, http, auth) {
        this.admin = admin;
        this.saloon = saloon;
        this.href = href;
        this.http = http;
        this.auth = auth;
        this.pageTitle = 'Manage Discount';
        this.subTitle = 'discount';
    }
    ManageDiscountComponent.prototype.ngOnInit = function () {
        this.url = this.href.backend_url;
        this.access_token = localStorage.getItem('access_token');
        this.getDiscount();
        this.cardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            ammount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.cashForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            ammount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    ManageDiscountComponent.prototype.submitCardSaloon = function (data) {
        var _this = this;
        this.saloon.vars.displayLoader(true);
        var uploadData = {
            "discount_type": data.value.type,
            "discount_price": data.value.ammount,
            "type": "card"
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ Authorization: 'Bearer ' + this.access_token });
        this.http.post(this.url + '/admin/update-percentages', uploadData, { headers: headers }).subscribe(function (res) {
            _this.saloon.vars.displayLoader(false);
        }, function (err) {
            if (!err.ok && err.status == 422) {
                console.log(err);
            }
            else if (!err.ok && err.status == 500) {
                console.log('500 error');
            }
            else {
                console.log('Else part');
            }
            _this.saloon.vars.displayLoader(false);
        });
    };
    ManageDiscountComponent.prototype.submitCashSaloon = function (data) {
        var _this = this;
        this.saloon.vars.displayLoader(true);
        var uploadData = {
            "discount_type": data.value.type,
            "discount_price": data.value.ammount,
            "type": "cash"
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ Authorization: 'Bearer ' + this.access_token });
        this.http.post(this.url + '/admin/update-percentages', uploadData, { headers: headers }).subscribe(function (res) {
            _this.saloon.vars.displayLoader(false);
        }, function (err) {
            if (!err.ok && err.status == 422) {
                console.log(err);
            }
            else if (!err.ok && err.status == 500) {
                console.log('500 error');
            }
            else {
                console.log('Else part');
            }
            _this.saloon.vars.displayLoader(false);
        });
    };
    ManageDiscountComponent.prototype.getDiscount = function () {
        var _this = this;
        var url = this.url + '/admin/get-percentages';
        var search = new URLSearchParams();
        this.http.get(url).subscribe(function (res) { return _this.discount_result = res; });
    };
    ManageDiscountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-discount',
            template: __webpack_require__(/*! ./manage-discount.component.html */ "./src/modules/admin/components/manage-discount/manage-discount.component.html"),
            styles: [__webpack_require__(/*! ./manage-discount.component.css */ "./src/modules/admin/components/manage-discount/manage-discount.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _services_saloon_saloon_service__WEBPACK_IMPORTED_MODULE_5__["SaloonService"], _services_global_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ManageDiscountComponent);
    return ManageDiscountComponent;
}());



/***/ }),

/***/ "./src/modules/admin/components/sales/entries/entries.component.css":
/*!**************************************************************************!*\
  !*** ./src/modules/admin/components/sales/entries/entries.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar {\n    max-width: 3rem;\n}\nth{\n    color:#8d9aba;\n    font-size:9px;\n    font-weight: bold;\n}\ntd{\n    color:#c7c7cf;\n    font-size:11px;\n    font-weight: bold;\n}\nspan{\n    color:#807f8b;\n    font-size:11px;\n    font-weight: bold;\n}\np{\n    color:#555861 !important;\n    font-weight:bold;\n    font-size:12px;\n}"

/***/ }),

/***/ "./src/modules/admin/components/sales/entries/entries.component.html":
/*!***************************************************************************!*\
  !*** ./src/modules/admin/components/sales/entries/entries.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- order entries -->\n<div class=\"row ml-4 mb-3 mr-4\">\n  <div class=\"col bg-white\">\n    <p class=\"text-capitalize h5 ml-3 mt-4 mb-4\">{{pageTitle}}</p>\n\n    <!-- seperator or line -->\n    <div class=\"line\"></div>\n\n    <div class=\"col\">\n\n      <!-- display Order Entries -->\n      <table class=\"table\">\n            <thead>\n              <tr>\n                <th scope=\"col\" class=\"text-capitalize\">barber</th>\n                <th scope=\"col\" class=\"text-capitalize\">products</th>\n                <th scope=\"col\" class=\"text-capitalize\">cut time</th>\n                <th scope=\"col\" class=\"text-capitalize\">payment</th>\n                <th scope=\"col\" class=\"text-capitalize\">time</th>\n                <th scope=\"col\" class=\"text-capitalize\">date</th>\n                <th scope=\"col\" class=\"text-capitalize\">total</th>\n              </tr>\n            </thead>\n            <tbody *ngIf=\"barberEntries\">\n              <tr *ngFor=\"let order of barberEntries\">\n                  <td scope=\"row\" class=\"text-capitalize\">\n                  <div class=\"media\">\n                    <img class=\"mr-3 avatar rounded-circle\" [src]=\"order?.barber?.image_url\" [alt]=\"order?.barber?.name\">\n                    <div class=\"media-body\">\n                      <span>{{order?.barber?.name}}</span>\n                    </div>\n                  </div>\n                </td>\n                <td scope=\"row\" class=\"text-capitalize\">{{ displayServiceName (order?.services) }}</td>\n                <td scope=\"row\" class=\"text-capitalize\">{{ order?.total_time | secondsToMinuits }}<small>min</small></td>\n                <td scope=\"row\" class=\"text-capitalize\">{{ order?.payment?.payment_mode }}</td>\n                <td scope=\"row\" class=\"text-capitalize\">{{ order?.created_at * 1000 | date:'hh:M a' }}</td>\n                <td scope=\"row\" class=\"text-capitalize\">{{ order?.created_at * 1000 | date:'dd/MM/yy' }}</td>\n                <td scope=\"row\" class=\"text-capitalize\">{{ order?.payment?.final_amount | currency:'GBP' }}</td>\n              </tr>\n            </tbody>\n      </table>\n\n      <!-- display barbers list pagination -->\n      <div class=\"row mt-5\" *ngIf=\"totalItems\">\n        <div class=\"col\">\n          <app-pagination [totalItems]=\"totalItems\" [currentPage]=\"currentPage\" (childEvent)=\"getSaloonOrders ($event)\"></app-pagination>\n        </div>\n      </div>  <!-- display barbers list pagination -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/admin/components/sales/entries/entries.component.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/admin/components/sales/entries/entries.component.ts ***!
  \*************************************************************************/
/*! exports provided: EntriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntriesComponent", function() { return EntriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_saloon_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/saloon/orders/orders.service */ "./src/services/saloon/orders/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntriesComponent = /** @class */ (function () {
    function EntriesComponent(order) {
        this.order = order;
        this.pageTitle = 'entries';
    }
    EntriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get all orders belongs to saloon
        setTimeout(function () {
            _this.getSaloonOrders();
        }, this.order.vars.onInt_request_delay_in_ms);
    };
    /**
     * Request to get list of all saloon orders
     *
     * @param number page
     *
     * @return void
     */
    EntriesComponent.prototype.getSaloonOrders = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        // show loader
        this.order.vars.displayLoader(true);
        this.order.getSaloonOrders(page, this.saloonId).subscribe(function (res) {
            _this.barberEntries = res.data.data;
            _this.currentPage = res.data.current_page;
            _this.totalItems = res.data.total;
            // show loader
            _this.order.vars.displayLoader(false);
            // show error
            _this.order.vars.showNotification(res.message, 'Orders', 'success');
        }, function (err) {
            // show loader
            _this.order.vars.displayLoader(false);
            // show error
            _this.order.vars.showNotification(_this.order.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Conhverg Array of services into string
     *
     * @param Array
     *
     * @return string
     */
    EntriesComponent.prototype.displayServiceName = function (services) {
        var serviceStr = '';
        if (services.length) {
            for (var _i = 0, services_1 = services; _i < services_1.length; _i++) {
                var service = services_1[_i];
                serviceStr += service.name + ', ';
            }
        }
        // remove last comma from string
        return (serviceStr.trim()).replace(/,\s*$/, '');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EntriesComponent.prototype, "saloonId", void 0);
    EntriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entries',
            template: __webpack_require__(/*! ./entries.component.html */ "./src/modules/admin/components/sales/entries/entries.component.html"),
            styles: [__webpack_require__(/*! ./entries.component.css */ "./src/modules/admin/components/sales/entries/entries.component.css")]
        }),
        __metadata("design:paramtypes", [_services_saloon_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]])
    ], EntriesComponent);
    return EntriesComponent;
}());



/***/ }),

/***/ "./src/modules/admin/components/sales/payment-history/payment-history.component.css":
/*!******************************************************************************************!*\
  !*** ./src/modules/admin/components/sales/payment-history/payment-history.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th {\n  color: #8d9aba;\n  font-size: 9px;\n  font-weight: bold;\n}\ntd {\n  color: #e2e2fd;\n  font-size: 11px;\n  font-weight: bold;\n}\na {\n  color: #c7c7cf;\n  font-size: 11px;\n  font-weight: bold;\n}\n.pay_id {\n  color: #757481 !important;\n  font-size: 11px !important;\n  font-weight: bold !important;\n}\np {\n  color: #555861 !important;\n  font-weight: bold;\n  font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/modules/admin/components/sales/payment-history/payment-history.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/modules/admin/components/sales/payment-history/payment-history.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- display payment history -->\n<div class=\"row ml-4 mb-3 mr-4\">\n  <div class=\"col bg-white\">\n    <p class=\"text-capitalize h5 ml-3 mt-4 mb-4\">{{pageTitle}}</p>\n\n    <!-- seperator or line -->\n    <div class=\"line\"></div>\n\n    <div class=\"col\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th scope=\"col\" class=\"text-capitalize\">#</th>\n            <th scope=\"col\" class=\"text-capitalize\">total</th>\n            <th scope=\"col\" class=\"text-capitalize\">admin fee</th>\n            <th scope=\"col\" class=\"text-capitalize\">barber fee <br /> <small>(includes stripe fee)</small></th>\n            <th scope=\"col\" class=\"text-capitalize\">date</th>\n            <th scope=\"col\" class=\"text-capitalize\">view</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"paymentHistory\">\n          <tr *ngFor=\"let payment of paymentHistory\">\n            <th scope=\"row\" class=\"text-capitalize pay_id\">{{payment.id}}</th>\n            <td class=\"text-capitalize\">{{payment.total_amount | currency:'GBP'}}</td>\n            <td class=\"text-capitalize\">{{payment.admin_fee | currency:'GBP'}}</td>\n            <td class=\"text-capitalize\">{{payment.final_amount | currency:'GBP'}}</td>\n            <td class=\"text-capitalize\">{{payment.created_at * 1000 | date:'dd/MM/yy'}}</td>\n            <td class=\"text-capitalize\"><a routerLink=\"/saloon/sales/{{payment.id}}\" class=\"btn btn-link text-capitalize\">link</a></td>\n          </tr>\n        </tbody>\n      </table>\n\n      <!-- display barbers list pagination -->\n      <div class=\"row mt-5\" *ngIf=\"totalItems\">\n        <div class=\"col\">\n          <app-pagination [totalItems]=\"totalItems\" [currentPage]=\"currentPage\" (childEvent)=\"getSaloonPayments ($event)\"></app-pagination>\n        </div>\n      </div>  <!-- display barbers list pagination -->\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/admin/components/sales/payment-history/payment-history.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/modules/admin/components/sales/payment-history/payment-history.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PaymentHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHistoryComponent", function() { return PaymentHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_saloon_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/saloon/orders/orders.service */ "./src/services/saloon/orders/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentHistoryComponent = /** @class */ (function () {
    function PaymentHistoryComponent(order) {
        this.order = order;
        this.pageTitle = 'payments history';
    }
    PaymentHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get all orders belongs to saloon
        setTimeout(function () {
            _this.getSaloonPayments();
        }, this.order.vars.onInt_request_delay_in_ms);
    };
    /**
   * Request to get list of all saloon orders
   *
   * @param number page
   *
   * @return void
   */
    PaymentHistoryComponent.prototype.getSaloonPayments = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        // show loader
        this.order.vars.displayLoader(true);
        this.order.getSaloonPayments(page, this.saloonId).subscribe(function (res) {
            console.log("paymentHistory", res.data.data);
            _this.paymentHistory = res.data.data;
            _this.currentPage = res.data.current_page;
            _this.totalItems = res.data.total;
            // show loader
            _this.order.vars.displayLoader(false);
            // show error
            _this.order.vars.showNotification('Payment History successfully found.', res.message, 'success');
        }, function (err) {
            // show loader
            _this.order.vars.displayLoader(false);
            // show error
            _this.order.vars.showNotification(_this.order.vars.convertObjectToString(err.errors), err.message);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaymentHistoryComponent.prototype, "saloonId", void 0);
    PaymentHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-history',
            template: __webpack_require__(/*! ./payment-history.component.html */ "./src/modules/admin/components/sales/payment-history/payment-history.component.html"),
            styles: [__webpack_require__(/*! ./payment-history.component.css */ "./src/modules/admin/components/sales/payment-history/payment-history.component.css")]
        }),
        __metadata("design:paramtypes", [_services_saloon_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]])
    ], PaymentHistoryComponent);
    return PaymentHistoryComponent;
}());



/***/ }),

/***/ "./src/modules/admin/components/sales/payment-info/payment-info.component.css":
/*!************************************************************************************!*\
  !*** ./src/modules/admin/components/sales/payment-info/payment-info.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n    color:#575a63;\n    font-size:11px;\n    font-weight:bold;\n}\n.p_text{\n    color: #4c4b51;\n    font-size:9px;\n    font-weight:600;\n}\nlabel{\n    font-size:10px;\n    font-weight:bold;\n    color:#78797c;\n}"

/***/ }),

/***/ "./src/modules/admin/components/sales/payment-info/payment-info.component.html":
/*!*************************************************************************************!*\
  !*** ./src/modules/admin/components/sales/payment-info/payment-info.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- display payment-info change screen -->\n<div class=\"row ml-4 pb-5 mr-4\">\n  <div *ngIf=\"stripeid\" class=\"col bg-white\">\n    <p class=\"text-capitalize mt-4 mb-4\">{{pageTitle}}</p>\n    <div>\n      <div class=\"line\"></div>\n    <div *ngIf=\"stripeid\">\n      <p class=\"text-capitalize mt-4 mb-4\">Stripe Id</p>\n      <p style=\"color: #c7c7cf;font-size: 11px;font-weight: bold;\">{{stripeid}}</p>\n    </div>\n    <div class=\"line\"></div>\n    <div *ngIf=\"stripeStatus\">\n      <p class=\"text-capitalize mt-4 mb-4\">Status</p>\n      <p style=\"color: #c7c7cf;font-size: 11px;font-weight: bold;\">{{stripeStatus}}</p>\n    </div>\n  </div>\n  \n    <!-- seperator or line -->\n    <!-- <div class=\"line\"></div>\n\n    <p class=\"mt-4 p_text\">To change your payment information, enter your new account number below.</p>\n  \n    <div class=\"col-5 pb-4\"> -->\n      <!-- design payment information HTML code -->\n      <!-- <form [formGroup]=\"paymentInfoForm\" novalidate>\n        <div class=\"form-group\">\n          <label class=\"h6 required text-capitalize\">account number</label>\n          <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"account_number\" maxlength=\"255\" autocomplete=\"off\">\n          <show-errors [control]=\"paymentInfoForm.controls.account_number\"></show-errors>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"h6 required text-capitalize\">enter short code</label>\n          <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"code\" maxlength=\"255\" autocomplete=\"off\">\n          <show-errors [control]=\"paymentInfoForm.controls.code\"></show-errors>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"h6 required text-capitalize\">name on account</label>\n          <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"name_on_account\" maxlength=\"255\" autocomplete=\"off\">\n          <show-errors [control]=\"paymentInfoForm.controls.name_on_account\"></show-errors>\n        </div> -->\n\n        <!-- seperator or line -->\n        <!-- <div class=\"line mt-4 mb-4\"></div>\n\n        <small><span class=\"required\"></span> indicates required</small>\n        <div class=\"text-left mt-2\">\n          <button [disabled]=\"!paymentInfoForm.valid\" (click)=\"submitPaymentInfoForm (paymentInfoForm)\" class=\"btn btn-shokuni text-capitalize mr-3\">save</button>\n          <button type=\"reset\" class=\"btn btn-transparent text-capitalize\">cancel</button>\n        </div>\n      </form>\n    </div> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/admin/components/sales/payment-info/payment-info.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/modules/admin/components/sales/payment-info/payment-info.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PaymentInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInfoComponent", function() { return PaymentInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_saloon_saloon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/saloon/saloon.service */ "./src/services/saloon/saloon.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentInfoComponent = /** @class */ (function () {
    function PaymentInfoComponent(saloon, route) {
        this.saloon = saloon;
        this.route = route;
        this.pageTitle = 'Payment info';
    }
    PaymentInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.route.snapshot.params["id"] || null;
        this.paymentInfoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name_on_account: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]),
            account_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]),
        });
        setTimeout(function () {
            _this.getSaloonPaymentDetail();
            _this.getUserStripeDetails();
        }, this.saloon.vars.onInt_request_delay_in_ms);
    };
    PaymentInfoComponent.prototype.getUserStripeDetails = function () {
        var _this = this;
        this.saloon.vars.displayLoader(true);
        this.saloon.getUserStripeDetails(this.userId).subscribe(function (res) {
            _this.stripeid = res.stripeid;
            _this.getStripeAccountDetails(_this.stripeid);
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            // this.saloon.vars.showNotification('', res.message, 'success');
        }, function (err) {
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(err.errors), err.message);
        });
    };
    PaymentInfoComponent.prototype.getStripeAccountDetails = function (stripeId) {
        var _this = this;
        this.saloon.vars.displayLoader(true);
        this.saloon.getStripeAccountDetails(stripeId).subscribe(function (res) {
            _this.stripeStatus = res.status === 0 ? 'Restrict' : 'Enable';
            _this.saloon.vars.displayLoader(false);
        }, function (err) {
            _this.stripeStatus = err.message;
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Request for payment detail of the saloon
     */
    PaymentInfoComponent.prototype.getSaloonPaymentDetail = function () {
        var _this = this;
        // show loader
        this.saloon.vars.displayLoader(true);
        this.saloon.getSaloonPaymentDetail(this.saloonId).subscribe(function (res) {
            // update form value
            _this.paymentInfoForm.controls['account_number'].setValue(res.data.account_number || null);
            _this.paymentInfoForm.controls['code'].setValue(res.data.code || null);
            _this.paymentInfoForm.controls['name_on_account'].setValue(res.data.name_on_account || null);
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification('Payment History successfully found.', res.message, 'success');
        }, function (err) {
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * method to submit payment information of the saloon
     *
     * @param NgForm
     *
     * @return void
     */
    PaymentInfoComponent.prototype.submitPaymentInfoForm = function (form) {
        var _this = this;
        var values = form.value;
        Object.keys(values).forEach(function (key) { return (values[key] == null) && delete values[key]; });
        // show loader
        this.saloon.vars.displayLoader(true);
        this.saloon.updateSaloonPaymentDetail(values, this.saloonId).subscribe(function (res) {
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification('Payment History successfully updated.', res.message, 'success');
        }, function (err) {
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(err.errors), err.message);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaymentInfoComponent.prototype, "saloonId", void 0);
    PaymentInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-info',
            template: __webpack_require__(/*! ./payment-info.component.html */ "./src/modules/admin/components/sales/payment-info/payment-info.component.html"),
            styles: [__webpack_require__(/*! ./payment-info.component.css */ "./src/modules/admin/components/sales/payment-info/payment-info.component.css")]
        }),
        __metadata("design:paramtypes", [_services_saloon_saloon_service__WEBPACK_IMPORTED_MODULE_3__["SaloonService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PaymentInfoComponent);
    return PaymentInfoComponent;
}());



/***/ }),

/***/ "./src/modules/admin/components/sales/sales-summary/sales-summary.component.css":
/*!**************************************************************************************!*\
  !*** ./src/modules/admin/components/sales/sales-summary/sales-summary.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".horizontal-divider-right {\n    border-right: 1px solid #cccccc;\n}\n\n.progress-height-5 {\n    height: 5px;\n}\n\n.text-sm {\n    font-size: 12px;\n}\n\n.font-weight-500 {\n    font-weight: 500;\n}\n\n.font-size-14 {\n    font-size:14px;\n}\n\np{\n    font-weight: bold;\n    color:#132149;\n    font-size:16px;\n}"

/***/ }),

/***/ "./src/modules/admin/components/sales/sales-summary/sales-summary.component.html":
/*!***************************************************************************************!*\
  !*** ./src/modules/admin/components/sales/sales-summary/sales-summary.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row ml-4 mt-4 mb-3 mr-2\">\n  <!-- Button trigger modal -->\n  <!-- <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n    Pay to barber\n  </button> -->\n\n  <!-- Modal -->\n  <!-- <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Payout amount</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\"> -->\n          <!-- =========================================== -->\n          <!-- <form class=\"row ml-4 mr-4 mb-5 mt-5\" [formGroup]=\"payForm\" novalidate>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label class=\"h6 required\">Ammount</label>\n                <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"pay_out_balance\" maxlength=\"20\" autocomplete=\"off\" pattern=\"[0-9]\" title=\"Only number allowed.\">\n                <show-errors [control]=\"payForm.controls.pay_out_balance\"></show-errors>\n              </div>\n            </div>\n            \n            <div class=\"col-md-12\">\n              <small><span class=\"required\"></span> indicates required</small>\n              <div class=\"text-left mt-2\">\n                <button [disabled]=\"!payForm.valid\" (click)=\"submitPay(payForm)\" class=\"btn btn-shokuni text-capitalize mr-3\">Pay</button> -->\n                <!-- <button type=\"reset\" class=\"btn btn-transparent text-capitalize\">cancel</button> -->\n                <!-- <button type=\"button\" class=\"btn btn-transparent text-capitalize\" data-dismiss=\"modal\">Close</button>\n              </div>\n            </div>\n        </form> -->\n          <!-- =========================================== -->\n        <!-- </div> -->\n        <!-- <div class=\"modal-footer\">\n          \n        </div> -->\n      <!-- </div>\n    </div>\n  </div> -->\n</div>\n<div class=\"row ml-4 mt-4 mb-3 mr-2\">\n  <!-- display the right section -->\n  <div class=\"col-sm-12 col-xs-12 col-md-7 col-xl-7 col-lg-7\">\n    <!-- Display Total Revenue/ Fee paid -->\n    <div class=\"row\">\n      <!-- Display Total Revenue -->\n      <div class=\"col-sm-6 bg-white pt-5 pl-4 pr-4 pb-5 horizontal-divider-right\">\n        <div class=\"d-flex justify-content-between\">\n          <div class=\"p-2 text-capitalize font-weight-500 text-secondary font-size-14\">total revenue <br/><small>to date</small></div>\n          <div class=\"p-2 text-capitalize color-shokuni font-weight-bold\"><p>{{ salesSummary?.total_payouts  | currency:'GBP' }}</p></div>\n        </div>\n      </div>\n      <!-- Display Fee paid -->\n      <div class=\"col-sm-6 bg-white pt-5 pl-4 pr-4 pb-5\">\n        <div class=\"d-flex justify-content-between\">\n          <div class=\"p-2 text-capitalize font-weight-500 text-secondary font-size-14\">admin fees <br/><small>to date</small></div>\n          <div class=\"p-2 text-capitalize color-shokuni font-weight-bold\"><p>{{ salesSummary?.admin_fee | currency:'GBP' }}</p></div>\n        </div>\n      </div>\n    </div><!-- End of Display Total Revenue/ Fee paid -->\n\n\n    <div class=\"row mt-3\">\n      <!-- Display Total Revenue -->\n      <div class=\"col-sm-6 bg-white pt-5 pl-4 pr-4 pb-5 horizontal-divider-right\">\n        <div class=\"d-flex justify-content-between\">\n          <div class=\"p-2 text-capitalize font-weight-500 text-secondary font-size-14\">total card revenue <br /><small>(Includes Stripe fee)</small><br />\n            <small>to date</small></div>\n          <div class=\"p-2 text-capitalize color-shokuni font-weight-bold\"><p>{{ salesSummary?.card_revenue | currency:'GBP' }}</p></div>\n        </div>\n      </div>\n      <!-- Display Fee paid -->\n      <div class=\"col-sm-6 bg-white pt-5 pl-4 pr-4 pb-5\">\n        <div class=\"d-flex justify-content-between\">\n          <div class=\"p-2 text-capitalize font-weight-500 text-secondary font-size-14\">total cash revenue <br/><small>to date</small></div>\n          <div class=\"p-2 text-capitalize color-shokuni font-weight-bold\"><p>{{ salesSummary?.cash_revenue | currency:'GBP' }}</p></div>\n        </div>\n      </div>\n    </div><!-- End of Display Total Revenue/ Fee paid -->\n  </div>\n\n  <!-- display the left section -->\n  <div class=\"col\">\n    <div class=\"bg-white p-3\">\n      <div class=\"d-flex justify-content-between\">\n        <div class=\"p-2 text-capitalize font-weight-500 text-secondary font-size-14\">card <br/><small>to date</small></div>\n        <div class=\"p-2 text-capitalize color-shokuni font-weight-bold\"><p>{{ salesSummary?.total_card_request }}</p></div>\n      </div>\n\n      <div class=\"progress progress-height-5 mt-4\">\n        <div class=\"progress-bar bg-danger\" role=\"progressbar\" [style.width.%]=\"calculateSalesSummaryPercentage (salesSummary?.total_card_request, salesSummary?.total_cash_request + salesSummary?.total_card_request)\" aria-valuenow=\"(salesSummary?.total_card_request, salesSummary?.total_cash_request + salesSummary?.total_card_request)}}\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n      </div>\n      <div class=\"d-flex justify-content-between\">\n        <div class=\"p-2 text-capitalize text-muted font-weight-light text-sm\">total</div>\n        <div class=\"p-2 text-muted font-weight-light text-sm\">{{calculateSalesSummaryPercentage (salesSummary?.total_card_request, salesSummary?.total_cash_request + salesSummary?.total_card_request)}}%</div>\n      </div>\n    </div>\n    \n    <div class=\"bg-white p-3 mt-3\">\n      <div class=\"d-flex justify-content-between\">\n        <div class=\"p-2 text-capitalize font-weight-500 text-secondary font-size-14\">cash<br/><small>to date</small></div>\n        <div class=\"p-2 text-capitalize color-shokuni font-weight-bold\">{{ salesSummary?.total_cash_request }}</div>\n      </div>\n\n      <div class=\"progress progress-height-5 mt-4\">\n        <div class=\"progress-bar bg-danger\" role=\"progressbar\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]=\"calculateSalesSummaryPercentage (salesSummary?.total_cash_request, salesSummary?.total_cash_request + salesSummary?.total_card_request)\"></div>\n      </div>\n      <div class=\"d-flex justify-content-between\">\n        <div class=\"p-2 text-capitalize text-muted font-weight-light text-sm\">total</div>\n        <div class=\"p-2 text-muted font-weight-light text-sm\">{{calculateSalesSummaryPercentage (salesSummary?.total_cash_request, salesSummary?.total_cash_request + salesSummary?.total_card_request)}}%</div>\n      </div>\n    </div>\n  </div>\n\n</div>  <!-- End of Row Class---->"

/***/ }),

/***/ "./src/modules/admin/components/sales/sales-summary/sales-summary.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/modules/admin/components/sales/sales-summary/sales-summary.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SalesSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesSummaryComponent", function() { return SalesSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_saloon_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/saloon/orders/orders.service */ "./src/services/saloon/orders/orders.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/auth/auth.service */ "./src/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SalesSummaryComponent = /** @class */ (function () {
    function SalesSummaryComponent(route, order, auth, http) {
        this.route = route;
        this.order = order;
        this.auth = auth;
        this.http = http;
    }
    SalesSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getid = this.route.snapshot.paramMap.get('id');
        this.payForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            pay_out_balance: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        // get all orders belongs to saloon
        setTimeout(function () {
            _this.getSalesSummary();
        }, this.order.vars.onInt_request_delay_in_ms);
    };
    /**
     * Request to get list of all saloon orders
     *
     * @param number page
     *
     * @return void
     */
    SalesSummaryComponent.prototype.getSalesSummary = function () {
        var _this = this;
        // show loader
        this.order.vars.displayLoader(true);
        this.order.getSalesSummary(this.saloonId).subscribe(function (res) {
            _this.salesSummary = res.data;
            // show loader
            _this.order.vars.displayLoader(false);
            // show error
            _this.order.vars.showNotification('Sales Summary successfully found', res.message, 'success');
        }, function (err) {
            // show loader
            _this.order.vars.displayLoader(false);
            // show error
            _this.order.vars.showNotification(_this.order.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Method to calculate percentage
     *
     * @param upval
     * @param baseVal
     *
     * @return number
     */
    SalesSummaryComponent.prototype.calculateSalesSummaryPercentage = function (upVal, baseval) {
        return Math.floor((upVal / baseval) * 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SalesSummaryComponent.prototype, "saloonId", void 0);
    SalesSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-summary',
            template: __webpack_require__(/*! ./sales-summary.component.html */ "./src/modules/admin/components/sales/sales-summary/sales-summary.component.html"),
            styles: [__webpack_require__(/*! ./sales-summary.component.css */ "./src/modules/admin/components/sales/sales-summary/sales-summary.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_saloon_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SalesSummaryComponent);
    return SalesSummaryComponent;
}());



/***/ }),

/***/ "./src/modules/admin/components/sales/sales.component.css":
/*!****************************************************************!*\
  !*** ./src/modules/admin/components/sales/sales.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/admin/components/sales/sales.component.html":
/*!*****************************************************************!*\
  !*** ./src/modules/admin/components/sales/sales.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n  <!-- display page title -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <p class=\"text-capitalize h3 ml-4\">{{pageTitle}}</p>\n    </div>\n  </div>  <!-- End of Row Class---->\n  \n  <!-- display sales summary report -->\n  <app-sales-summary [saloonId]=\"saloonId\"></app-sales-summary>\n\n  <!-- display number of ordes entries -->\n  <app-entries [saloonId]=\"saloonId\"></app-entries>\n\n  <!-- display payment history -->\n  <app-payment-history [saloonId]=\"saloonId\"></app-payment-history>\n\n  <!-- display payment information change screen -->\n  <app-payment-info [saloonId]=\"saloonId\"></app-payment-info>\n\n</div>  <!--End of container-fluid--->"

/***/ }),

/***/ "./src/modules/admin/components/sales/sales.component.ts":
/*!***************************************************************!*\
  !*** ./src/modules/admin/components/sales/sales.component.ts ***!
  \***************************************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalesComponent = /** @class */ (function () {
    function SalesComponent(activeRoute) {
        this.activeRoute = activeRoute;
        this.pageTitle = 'sales';
    }
    SalesComponent.prototype.ngOnInit = function () {
        this.saloonId = this.activeRoute.snapshot.params["id"] || null;
        //alert(this.saloonId);
    };
    SalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales',
            template: __webpack_require__(/*! ./sales.component.html */ "./src/modules/admin/components/sales/sales.component.html"),
            styles: [__webpack_require__(/*! ./sales.component.css */ "./src/modules/admin/components/sales/sales.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "./src/modules/admin/components/saloons/saloons.component.css":
/*!********************************************************************!*\
  !*** ./src/modules/admin/components/saloons/saloons.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-flex {\n    display: block;\n}\n\n.avatar {\n    width: 4rem;\n}\n\n.saloon-logo {\n    width:11rem;\n}\n\nth{\n    font-size:10px !important;\n    color:#8896b8 !important;\n}\n\ntd{\n    color:#b3b3bc !important;\n    font-size:12px !important;\n    font-weight:500 !important;\n}\n\n.modal_span{\n    display:block !important;\n    color: #4f4f57 !important;\n    font-size:14px !important;\n    font-weight: 500 !important;\n}\n\n.span2_modal{\n    display:block !important;\n    font-size:7px !important;\n    color:#bebdc7 !important;\n}\n\n.text-danger {\n    color: #c06c71 !important;\n}\n\n.modal-content{\n    width:85% !important;\n}\n\na.saloon_name{\n    color:#b3b3bc !important;\n    font-size:12px !important;\n    font-weight:500 !important;\n}"

/***/ }),

/***/ "./src/modules/admin/components/saloons/saloons.component.html":
/*!*********************************************************************!*\
  !*** ./src/modules/admin/components/saloons/saloons.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n    <!-- display page title -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <p class=\"text-capitalize h3 ml-3\">{{pageTitle}}</p>\n      </div>\n    </div>\n  \n  \n    <div class=\"row bg-white mt-3 ml-3 mr-3 shadow border-bottom\">\n      <div class=\"col\">\n        <p class=\"text-capitalize h5 ml-3 mt-4 mb-4 text-black-50\">{{subTitle}}</p>\n      </div>\n      <div class=\"col text-right mt-3\">\n          <div class=\"form-inline no-flex\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" (keyup)=\"getSaloons(1, $event.target.value)\">\n          </div>\n      </div>\n    </div>\n    \n    <div class=\"row bg-white ml-3 mr-3 shadow\">\n      <div class=\"col\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover\">\n            <thead>\n              <tr>\n                <th scope=\"col\" class=\"text-capitalize font-weight-bold\">#</th>\n                <th scope=\"col\" class=\"text-capitalize font-weight-bold\">logo</th>\n                <th scope=\"col\" class=\"text-capitalize font-weight-bold\">store name</th>\n                <th scope=\"col\" class=\"text-uppercase font-weight-bold\">vat #</th>\n                <th scope=\"col\" class=\"text-capitalize font-weight-bold\">company #</th>\n                <th scope=\"col\" class=\"text-capitalize font-weight-bold\">action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let saloon of saloonList;\">\n                <td scope=\"row\" class=\"text-capitalize text-black-50\">\n                  <input type=\"checkbox\" />\n                </td>\n                <td scope=\"row\" class=\"text-capitalize text-black-50\">\n                  <a routerLink=\"/admin/saloon/{{ saloon?.id }}/sales\">\n                    <img [alt]=\"saloon?.name\" [src]=\"saloon?.logo_url\" class=\"avatar\" />\n                  </a>\n                </td>\n                <td scope=\"row\" class=\"text-capitalize  text-black-50\">\n                  <a class=\"saloon_name\" routerLink=\"/admin/saloon/{{ saloon?.id }}\">{{ saloon?.name }}</a>\n                </td>\n                <td scope=\"row\" class=\"text-capitalize text-black-50\">\n                  {{ saloon?.saloon_detail?.vat_number }}\n                </td>\n                <td scope=\"row\" class=\"text-capitalize text-black-50\">\n                  {{ saloon?.saloon_detail?.company_number }}\n                </td>\n                <td scope=\"row\" class=\"text-capitalize text-black-50\">\n                  <span (click)=\"setSaloon(saloon)\" class=\"btn badge-pill btn-transparent text-capitalize\" data-toggle=\"modal\" data-target=\"#saloonModalCenter\"><small>details</small></span>\n                </td>\n                <td scope=\"row\" class=\"text-capitalize text-black-50\">\n                 <img src=\"./assets/images/admin-icons/view.svg\" class=\"svg\">\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n    <!-- display barbers list pagination -->\n    <div class=\"row bg-white ml-3 mr-3 mb-3 shadow\" *ngIf=\"totalItems\">\n      <div class=\"col\">\n        <app-pagination [totalItems]=\"totalItems\" [currentPage]=\"currentPage\" (childEvent)=\"getSaloons ($event)\"></app-pagination>\n      </div>\n      <!-- <div class=\"col\">\n        <span (click)=\"setSaloon(saloon)\" class=\"btn btn-transparent text-capitalize float-right\" data-toggle=\"modal\" data-target=\"#saloonModalCenter\"><small>Generate Request</small></span>\n      </div> -->\n    </div>  <!-- display barbers list pagination -->\n  </div>\n\n\n\n  <!-- Modal -->\n<div class=\"modal fade bd-example-modal-lg\" id=\"saloonModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"saloonModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row borer-bottom\">\n          <div class=\"col\">\n            <img [src]=\"saloonDetail?.logo_url\" [alt]=\"saloonDetail?.name\" class=\"img-thumbnail saloon-logo\">\n          </div>\n          <div class=\"col\">\n            <div class=\"row\">\n              <div class=\"d-flex flex-column bd-highlight \">\n                <div class=\"p-2 text-capitalize text-black-50 text-sm\"><small>name</small><span class=\"modal_span\">{{ saloonDetail?.name }}</span></div>\n               <!--  <div class=\"p-2 text-capitalize text-body font-weight-normal\">{{ saloonDetail?.name }}</div> -->\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"d-flex flex-column bd-highlight \">\n                <div class=\"p-2 text-capitalize text-black-50 text-sm\"><small>address</small><span class=\"modal_span\">{{ saloonDetail?.address }}, {{ saloonDetail?.postal_code }}</span></div>\n                <!-- <div class=\"p-2 text-capitalize text-body font-weight-normal\">{{ saloonDetail?.address }}, {{ saloonDetail?.postal_code }}</div> -->\n              </div>\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"row\">\n              <div class=\"d-flex flex-column bd-highlight \">\n                <div class=\"p-2 text-capitalize text-black-50 text-sm\"><small>company #</small><span class=\"modal_span\">{{ saloonDetail?.saloon_detail?.company_number }}</span></div>\n                <!-- <div class=\"p-2 text-capitalize text-body font-weight-normal\">{{ saloonDetail?.saloon_detail?.company_number }}</div> -->\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"d-flex flex-column bd-highlight \">\n                <div class=\"p-2 text-uppercase text-black-50 text-sm\"><small>vat #</small><span class=\"modal_span\">{{ saloonDetail?.saloon_detail?.vat_number }}</span></div>\n                <!-- <div class=\"p-2 text-capitalize text-body font-weight-normal\">{{ saloonDetail?.saloon_detail?.vat_number }}</div> -->\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"d-flex flex-column bd-highlight\">\n                <div class=\"p-2 text-capitalize text-black-50 text-sm\"><small>phone</small><span class=\"modal_span\">({{ saloonDetail?.country_detail?.phonecode }}) {{ saloonDetail?.contact_number }}</span></div>\n                <!-- <div class=\"p-2 text-capitalize text-body font-weight-normal\">({{ saloonDetail?.country_detail?.phonecode }}) {{ saloonDetail?.contact_number }}</div> -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"line\"></div>\n\n        <div class=\"row text-center mt-2\">\n          <div class=\"col\">\n            <div class=\"d-flex flex-column mb-3\">\n              <div class=\"h5 text-danger font-weight-bold\">{{ saloonDetail?.performance?.total }}<span class=\"span2_modal\">cuts</span></div>\n             <!--  <div class=\"p-2 font-weight-normal text-black-50 text-sm text-lowercase\">cuts</div> -->\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"d-flex flex-column mb-3\">\n              <div class=\"h5 text-danger font-weight-bold\">{{ saloonDetail?.performance?.amt | currency:'GBP' }}<span class=\"span2_modal\">total revenue</span></div>\n              <!-- <div class=\"p-2 font-weight-normal text-black-50 text-sm text-lowercase\">total revenue</div> -->\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"d-flex flex-column mb-3\">\n              <div class=\"h5 text-danger font-weight-bold\">{{ (saloonDetail?.performance?.total_time/saloonDetail?.performance?.total) | secondsToMinuits }}<sub>m</sub><span class=\"span2_modal\">avg cut time</span></div>\n             <!--  <div class=\"p-2 font-weight-normal text-black-50 text-sm text-lowercase\">avg cut time</div>-->\n            </div> \n          </div>\n          <div class=\"col\">\n            <div class=\"d-flex flex-column mb-3\">\n              <div class=\"h5 text-danger font-weight-bold\">{{ saloonDetail?.avg_wait_time_in_min }}<sub>m</sub><span class=\"span2_modal\">average wait time</span></div>\n              <!-- <div class=\"p-2 font-weight-normal text-black-50 text-sm text-lowercase\">average wait time</div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/admin/components/saloons/saloons.component.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/admin/components/saloons/saloons.component.ts ***!
  \*******************************************************************/
/*! exports provided: SaloonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaloonsComponent", function() { return SaloonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/admin/admin.service */ "./src/services/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaloonsComponent = /** @class */ (function () {
    function SaloonsComponent(admin) {
        this.admin = admin;
        this.pageTitle = 'shops';
        this.subTitle = 'manage shops';
    }
    SaloonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getSaloons();
        }, this.admin.vars.onInt_request_delay_in_ms);
    };
    /**
     * Request to get list of all saloons
     *
     * @param number page
     *
     * @returns void
     */
    SaloonsComponent.prototype.getSaloons = function (page, search) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (search === void 0) { search = null; }
        // show loader
        this.admin.vars.displayLoader(true);
        this.admin.getSaloons(page, search).subscribe(function (res) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // assign admin orders
            _this.saloonList = res.data.data;
            _this.currentPage = res.data.current_page;
            _this.totalItems = res.data.total;
        }, function (err) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // display errors notification
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(err.errors), err.message);
        });
    };
    SaloonsComponent.prototype.setSaloon = function (saloonDetail) {
        this.saloonDetail = saloonDetail;
    };
    SaloonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-saloons',
            template: __webpack_require__(/*! ./saloons.component.html */ "./src/modules/admin/components/saloons/saloons.component.html"),
            styles: [__webpack_require__(/*! ./saloons.component.css */ "./src/modules/admin/components/saloons/saloons.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], SaloonsComponent);
    return SaloonsComponent;
}());



/***/ }),

/***/ "./src/modules/admin/components/search-sales/search-sales.component.css":
/*!******************************************************************************!*\
  !*** ./src/modules/admin/components/search-sales/search-sales.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sub_title{\n    color:#565962;\n    font-size:14px;\n    font-weight:bold\n}\nlabel{\n    color:#6c6d70;\n    font-size:10px;\n    font-weight:500;\n}\n.required::after {\n    color: #EF615F;\n    font-size: 11px;\n    content: ' *';\n}\n/*===================*/\n.no-flex {\n    display: block;\n}\n.avatar {\n    width:3rem;\n}\n.text-muted {\n    color: #8897b6!important;\n}\nth{\n    font-size:11px !important;\n    font-weight: bold !important;\n}\ntd{\n    color:#b0b0bc !important;\n    font-size:12px !important;\n    font-weight: bold !important;\n}\na.name{\n    color:#676675 !important;\n    font-size:11px !important;\n    font-weight: bold !important;\n}\n.anchor_name{\n    margin-top: 7px !important;\n    margin-left: 5px !important;\n}\n.dropdown:hover .dropdown-content {\n    display: block;\n}\n.dropdown {\n    position: relative;\n    display: inline-block;\n  \n}\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n    right: 0;\n}\n.pointer {\n    cursor: pointer;\n}\n.hover-dark:hover {\n    background-color: #cccccc;\n}\n/* .drop_icon{ position: relative;} */\n.drop_icon:before {\n    content: \"\";\n    position: absolute;\n    top: -8px;\n    right: -3px;\n    width: 0;\n    height: 0;\n    border-left: 6px solid transparent;\n    border-right: 9px solid transparent;\n    border-bottom: 8px solid #f9f9f9;\n}\n.dash-search {\n    padding: 50px 15px;\n}\n.dash-search input {\n    width: 100%;\n    min-height: 50px;\n    BORDER-RADIUS: 30px;\n    background-color: #f1f1f1;\n    padding: 0 30px;\n    border-color: #f1f1f1;\n    font-size: 16px;\n    box-shadow: 1px 3px 8px 0px #ccc;\n}"

/***/ }),

/***/ "./src/modules/admin/components/search-sales/search-sales.component.html":
/*!*******************************************************************************!*\
  !*** ./src/modules/admin/components/search-sales/search-sales.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n  <!-- display page title -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <p class=\"text-capitalize h3 ml-3\">{{pageTitle}}</p>\n    </div>\n  </div>\n\n\n  <div class=\"row bg-white mt-3 ml-3 mr-3 shadow border-bottom justify-content-md-center\">\n    <div class=\"dash-search col-lg-8 col-md-8 col-sm-8 col-12 align-self-center\">\n        <div class=\"form-inline no-flex \">\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"{{subTitle}}\" aria-label=\"Search\" (keyup)=\"getUsers(1, $event.target.value)\">\n        </div>\n    </div>\n  </div>\n\n  <div class=\"row bg-white ml-3 mr-3 shadow\">\n    <div class=\"col-lg-4\" *ngFor=\"let user of userList\">\n      <div class=\"card mt-3\">\n        <div class=\"card-body text-center\">\n          <div class=\"mb-3\">\n            <img [alt]=\"user?.name\" [src]=\"user?.image_url\" class=\"avatar rounded-circle\" />\n          </div>\n          <div class=\"anchor_name\">\n            <a routerLink=\"/admin/sales/{{ user?.id }}\" class=\"mt-0 text-capitalize name\">{{ user?.name }}</a>\n            <p>{{ user?.role }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- display users list pagination -->\n  <div class=\"row bg-white ml-3 mr-3 mb-3 shadow\" *ngIf=\"totalItems\">\n    <div class=\"col mt-3\">\n      <app-pagination [totalItems]=\"totalItems\" [currentPage]=\"currentPage\" (childEvent)=\"getUsers ($event)\"></app-pagination>\n    </div>\n  </div>  <!-- display users list pagination -->\n</div>"

/***/ }),

/***/ "./src/modules/admin/components/search-sales/search-sales.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/admin/components/search-sales/search-sales.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SearchSalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSalesComponent", function() { return SearchSalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/admin/admin.service */ "./src/services/admin/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchSalesComponent = /** @class */ (function () {
    function SearchSalesComponent(admin) {
        this.admin = admin;
        this.pageTitle = 'Sales search';
        this.subTitle = 'Search sales';
    }
    SearchSalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getUsers();
        }, this.admin.vars.onInt_request_delay_in_ms);
        // design login form attribute
        this.resetEmailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
        });
        this.resetPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)])
        });
    };
    /**
    * Request to get list of all saloons
    *
    * @param number page
    *
    * @returns void
    */
    SearchSalesComponent.prototype.getUsers = function (page, search) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (search === void 0) { search = null; }
        // show loader
        this.admin.vars.displayLoader(true);
        this.admin.getBarbers(page, search).subscribe(function (res) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // assign admin orders
            _this.userList = res.data.data;
            _this.currentPage = res.data.current_page;
            _this.totalItems = res.data.total;
        }, function (err) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // display errors notification
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
    * method to delete user
    *
    * @param number userId
    *
    * @return void
    */
    SearchSalesComponent.prototype.selectUser = function (user) {
        this.selectedUser = user;
    };
    /**
    * Request to update user password by admin
    *
    * @param NgForm
    *
    * @return void
    */
    SearchSalesComponent.prototype.submitChangeUserPassword = function (form) {
        var _this = this;
        // show loader
        this.admin.vars.displayLoader(true);
        // call for login
        this.admin.changeUserPassword(this.selectedUser['id'], form.value).subscribe(function (res) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(res.data), res.message, 'success');
        }, function (err) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // show login error
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
    * Request to update user email by admin
    *
    * @param NgForm
    *
    * @return void
    */
    SearchSalesComponent.prototype.submitChangeUserEmail = function (form) {
        var _this = this;
        // show loader
        this.admin.vars.displayLoader(true);
        // call for login
        this.admin.changeUserEmail(this.selectedUser['id'], form.value).subscribe(function (res) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(res.data), res.message, 'success');
        }, function (err) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // show login error
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
    * Method to set selected user email in change email form
    *
    * @return void
    */
    SearchSalesComponent.prototype.setSelecteduserEmail = function () {
        this.resetEmailForm.controls['email'].setValue(this.selectedUser['email']);
    };
    /**
    * Request to delete user
    *
    * @return void
    */
    SearchSalesComponent.prototype.suspendUser = function () {
        var _this = this;
        // show loader
        this.admin.vars.displayLoader(true);
        // call for login
        this.admin.deleteUser(this.selectedUser['id']).subscribe(function (res) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(res.data), res.message, 'success');
        }, function (err) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // show login error
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(err.errors), err.message);
        });
    };
    SearchSalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-sales',
            template: __webpack_require__(/*! ./search-sales.component.html */ "./src/modules/admin/components/search-sales/search-sales.component.html"),
            styles: [__webpack_require__(/*! ./search-sales.component.css */ "./src/modules/admin/components/search-sales/search-sales.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], SearchSalesComponent);
    return SearchSalesComponent;
}());



/***/ }),

/***/ "./src/modules/admin/components/stored-applications/stored-applications.component.css":
/*!********************************************************************************************!*\
  !*** ./src/modules/admin/components/stored-applications/stored-applications.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".datetex {\n    width: 105px;\n    color: #abacb8;\n    font-size: 10px;\n    padding-left: 10px; \n    text-align:left;\n    background: white;\n    border-radius: 15px;\n    line-height: 30px;\n    float: right;\n}\n\n.dropicon {\n    float: right;\n    margin-right: 2px;\n    height: 35px;\n    width: 35px;\n    line-height: 0;\n    padding-left: 11px;\n    margin-top: -31px;\n}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n}\n\n.avatar {\n    width: 4rem;\n}\n\n.view-icon {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 19.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 viewBox%3D%220 0 59.2 59.2%22 style%3D%22enable-background%3Anew 0 0 59.2 59.2%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%09%3Cpath d%3D%22M51.062%2C21.561c-11.889-11.889-31.232-11.889-43.121%2C0L0%2C29.501l8.138%2C8.138c5.944%2C5.944%2C13.752%2C8.917%2C21.561%2C8.917%09%09s15.616-2.972%2C21.561-8.917l7.941-7.941L51.062%2C21.561z M49.845%2C36.225c-11.109%2C11.108-29.184%2C11.108-40.293%2C0l-6.724-6.724%09%09l6.527-6.527c11.109-11.108%2C29.184-11.108%2C40.293%2C0l6.724%2C6.724L49.845%2C36.225z%22%2F%3E%09%3Cpath d%3D%22M28.572%2C21.57c-3.86%2C0-7%2C3.14-7%2C7c0%2C0.552%2C0.448%2C1%2C1%2C1s1-0.448%2C1-1c0-2.757%2C2.243-5%2C5-5c0.552%2C0%2C1-0.448%2C1-1%09%09S29.125%2C21.57%2C28.572%2C21.57z%22%2F%3E%09%3Cpath d%3D%22M29.572%2C16.57c-7.168%2C0-13%2C5.832-13%2C13s5.832%2C13%2C13%2C13s13-5.832%2C13-13S36.741%2C16.57%2C29.572%2C16.57z M29.572%2C40.57%09%09c-6.065%2C0-11-4.935-11-11s4.935-11%2C11-11s11%2C4.935%2C11%2C11S35.638%2C40.57%2C29.572%2C40.57z%22%2F%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n\n.icon {\n    background-size: 1.5rem;\n}\n\n.backgroud-no-repeat {\n    background-repeat: no-repeat;\n}\n\n.dropdown {\n    position: relative;\n    display: inline-block;\n  \n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 100px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n    right: 0;\n}\n\n.pointer {\n    cursor: pointer;\n}\n\n.hover-dark:hover {\n    background-color: #cccccc;\n}\n\n/* .drop_icon{ position: relative;} */\n\n.drop_icon:before {\n    content: \"\";\n    position: absolute;\n    top: -8px;\n    right: -3px;\n    width: 0;\n    height: 0;\n    border-left: 6px solid transparent;\n    border-right: 9px solid transparent;\n    border-bottom: 8px solid #f9f9f9;\n}\n\nth{\n    color:#8a96b2;\n    font-size:11px;\n    font-weight: bold !important;\n}\n\n.modal-content{\n    width: 87% !important;\n    margin: 0 auto !important;\n}\n\n.saloon_name{\n    color:#bdbdc7 !important;\n    font-size:12px !important;\n    font-weight:bold !important;\n}"

/***/ }),

/***/ "./src/modules/admin/components/stored-applications/stored-applications.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/modules/admin/components/stored-applications/stored-applications.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n    <!-- display page title -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <p class=\"text-capitalize h3 ml-3\">{{pageTitle}}</p>\n      </div>\n      <div class=\"col text-right mr-4\">\n        <p class=\"datetex\">Today: <span class=\"dd\">{{ selectedDate | date:'MMM dd' }}</span>\n        <my-date-picker class=\"dropicon\" [options]=\"myDatePickerOptions\" (dateChanged)=\"onDateChanged($event)\"></my-date-picker>\n      </div>\n    </div>\n  \n  \n    <div class=\"row bg-white mt-3 ml-3 mr-3 shadow border-bottom\">\n      <div class=\"col\">\n        <p class=\"text-capitalize h5 ml-3 mt-4 mb-4 text-black-50\">{{subTitle}}</p>\n      </div>\n    </div>\n    \n    <div class=\"row bg-white ml-3 mr-3 shadow\">\n      <div class=\"col\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover\">\n            <thead>\n              <tr>\n                <th scope=\"col\" class=\"text-capitalize font-weight-bold\">#</th>\n                <th scope=\"col\" class=\"text-capitalize font-weight-bold\">logo</th>\n                <th scope=\"col\" class=\"text-capitalize font-weight-bold\">store name</th>\n                <th scope=\"col\" class=\"text-uppercase font-weight-bold\">vat #</th>\n                <th scope=\"col\" class=\"text-capitalize font-weight-bold\">company #</th>\n                <th scope=\"col\" class=\"text-capitalize font-weight-bold\">progress</th>\n                <th scope=\"col\" class=\"text-capitalize font-weight-bold\">action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let saloon of saloonList;\">\n                <td scope=\"row\" class=\"text-capitalize text-black-50\">\n                  <input type=\"checkbox\" [value]=\"saloon?.id\" (click)=\"updateSelectedSaloon($event)\"/>\n                </td>\n                <td scope=\"row\" class=\"text-capitalize text-black-50\">\n                  <a routerLink=\"/admin/saloon/{{ saloon?.id }}/sales\">\n                    <img [alt]=\"saloon?.name\" [src]=\"saloon?.logo_url\" class=\"avatar\" />\n                  </a>\n                </td>\n                <td scope=\"row\" class=\"text-capitalize  text-black-50\">\n                  <a class=\"saloon_name\" routerLink=\"/admin/saloon/{{ saloon?.id }}\">{{ saloon?.name }}</a>\n                </td>\n                <td scope=\"row\" class=\"text-capitalize text-black-50 saloon_name\">\n                  {{ saloon?.saloon_detail?.vat_number }}\n                </td>\n                <td scope=\"row\" class=\"text-capitalize text-black-50 saloon_name\">\n                  {{ saloon?.saloon_detail?.company_number }}\n                </td>\n                <td scope=\"row\" class=\"text-capitalize\" [ngClass]=\"checkSaloonStatusColor(saloon?.status || 'received')\">{{ saloon?.status || 'received' }}</td>\n                <td scope=\"row\" class=\"text-capitalize text-black-50\">\n                  <span (click)=\"setSaloon(saloon)\" class=\"btn badge-pill btn-transparent text-capitalize\" data-toggle=\"modal\" data-target=\"#saloonModalCenter\">review</span>\n                </td>\n                <td scope=\"row\">\n                    <div class=\"dropdown\">\n                        <span class=\"text-dark font-weight-bold\">...</span>\n                        <div class=\"dropdown-content drop_icon\">\n                            <p class=\"text-capitalize hover-dark pointer p-1\" (click)=\"quickSubmitStatus(saloon?.id, 'approve')\">approve</p>\n                            <p class=\"text-capitalize hover-dark pointer p-1\" (click)=\"quickSubmitStatus(saloon?.id, 'reject')\">reject</p>\n                        </div>\n                    </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n    <!-- display barbers list pagination -->\n    <div class=\"row bg-white ml-3 mr-3 mb-3 shadow\" *ngIf=\"totalItems\">\n      <div class=\"col-10\">\n        <app-pagination [totalItems]=\"totalItems\" [currentPage]=\"currentPage\" (childEvent)=\"getSaloons ($event)\"></app-pagination>\n      </div>    <!-- display barbers list pagination  end -->\n      <div class=\"col\">\n        <span class=\"btn btn-transparent text-capitalize mr-2\" (click)=\"submitUpdateStatus('reject')\">reject</span>\n        <span class=\"btn btn-shokuni text-capitalize\" (click)=\"submitUpdateStatus('approve')\">approve</span>\n      </div>\n    </div>  \n</div>\n\n\n\n  <!-- Modal -->\n<div class=\"modal fade bd-example-modal-lg\" id=\"saloonModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"saloonModalCenterTitle\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"row borer-bottom\">\n                <div class=\"col\">\n                  <img [src]=\"saloonDetail?.logo_url\" [alt]=\"saloonDetail?.name\" class=\"img-thumbnail saloon-logo\">\n                </div>\n                <div class=\"col\">\n                  <div class=\"row\">\n                    <div class=\"d-flex flex-column bd-highlight \">\n                      <div class=\"p-2 text-capitalize text-black-50 text-sm\"><small>name</small><span class=\"text-capitalize text-body font-weight-normal d-block\">{{ saloonDetail?.name }}</span></div>\n                      <!-- <div class=\"p-2 text-capitalize text-body font-weight-normal\">{{ saloonDetail?.name }}</div> -->\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"d-flex flex-column bd-highlight \">\n                      <div class=\"p-2 text-capitalize text-black-50 text-sm\"><small>address</small><span class=\"text-capitalize text-body font-weight-normal d-block\">{{ saloonDetail?.address }}, {{ saloonDetail?.postal_code }}</span></div>\n                      <!-- <div class=\"p-2 text-capitalize text-body font-weight-normal\">{{ saloonDetail?.address }}, {{ saloonDetail?.postal_code }}</div> -->\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col\">\n                  <div class=\"row\">\n                    <div class=\"d-flex flex-column bd-highlight \">\n                      <div class=\"p-2 text-capitalize text-black-50 text-sm\"><small>company #</small><span class=\"d-block text-capitalize text-body font-weight-bold\">{{ saloonDetail?.saloon_detail?.company_number }}</span></div>\n                      <!-- <div class=\"p-2 text-capitalize text-body font-weight-bold\"></div> -->\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"d-flex flex-column bd-highlight \">\n                      <div class=\"p-2 text-uppercase text-black-50 text-sm\"><small>vat #</small><span class=\"d-block text-capitalize text-body font-weight-bold\">{{ saloonDetail?.saloon_detail?.vat_number }}</span></div>\n                     <!--  <div class=\"p-2 text-capitalize text-body font-weight-bold\"></div> -->\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"d-flex flex-column bd-highlight\">\n                      <div class=\"p-2 text-capitalize text-black-50 text-sm\"><small>phone</small><span class=\"d-block text-capitalize text-body font-weight-bold\">({{ saloonDetail?.country_detail?.phonecode }}) {{ saloonDetail?.contact_number }}</span></div>\n                      <!-- <div class=\"p-2 text-capitalize text-body font-weight-bold\">({{ saloonDetail?.country_detail?.phonecode }}) {{ saloonDetail?.contact_number }}</div> -->\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"line\"></div>\n      \n              <div class=\"row text-center mt-2\">\n                <div class=\"col\">\n                  <div class=\"d-flex flex-column mb-3\">\n                    <div class=\"h5 text-danger font-weight-bold\">{{ (saloonDetail?.performance?.total) || 0 }}<span class=\"font-weight-normal text-black-50 text-sm text-lowercase d-block\"><small>cuts</small></span></div>\n                   <!--  <div class=\"p-2 font-weight-normal text-black-50 text-sm text-lowercase\">cuts</div> -->\n                  </div>\n                </div>\n                <div class=\"col\">\n                  <div class=\"d-flex flex-column mb-3\">\n                    <div class=\"h5 text-danger font-weight-bold\">{{ (saloonDetail?.performance?.amt | currency:'GBP') || 0 }} <span class=\"d-block font-weight-normal text-black-50 text-sm text-lowercase\"><small>total revenue</small></span></div>\n                    <!-- <div class=\"p-2 font-weight-normal text-black-50 text-sm text-lowercase\">total revenue</div> -->\n                  </div>\n                </div>\n                <div class=\"col\">\n                  <div class=\"d-flex flex-column mb-3\">\n                    <div class=\"h5 text-danger font-weight-bold\">{{ ((saloonDetail?.performance?.total_time/saloonDetail?.performance?.total) | secondsToMinuits) || 0 }}<sub>m</sub><span class=\"font-weight-normal text-black-50 text-sm text-lowercase d-block\"><small>avg cut time</small></span></div>\n                   <!--  <div class=\"p-2 font-weight-normal text-black-50 text-sm text-lowercase\">avg cut time</div> -->\n                  </div> \n                </div>\n                <div class=\"col\">\n                  <div class=\"d-flex flex-column mb-3\">\n                    <div class=\"h5 text-danger font-weight-bold\">{{ (saloonDetail?.avg_wait_time_in_min) || 0 }}<sub>m</sub><span class=\"font-weight-normal text-black-50 text-sm text-lowercase d-block\"><small>average wait time</small></span></div>\n                    <!-- <div class=\"p-2 font-weight-normal text-black-50 text-sm text-lowercase\">average wait time</div> -->\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n</div>"

/***/ }),

/***/ "./src/modules/admin/components/stored-applications/stored-applications.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/modules/admin/components/stored-applications/stored-applications.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: StoredApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoredApplicationsComponent", function() { return StoredApplicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/admin/admin.service */ "./src/services/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoredApplicationsComponent = /** @class */ (function () {
    function StoredApplicationsComponent(admin) {
        this.admin = admin;
        this.pageTitle = 'store applications';
        this.subTitle = 'pending applications';
        this.selectedSaloon = [];
        this.myDatePickerOptions = {
            sunHighlight: true,
            satHighlight: true,
            markCurrentDay: true,
            markCurrentMonth: true,
            markCurrentYear: true,
            showClearDateBtn: false,
            alignSelectorRight: true,
            componentDisabled: false,
            firstDayOfWeek: 'su',
            // disableUntil: this.setToday(),
            disableSince: this.setToday(),
            showInputField: false,
            openSelectorOnInputClick: true,
            inline: false,
            editableDateField: false,
            indicateInvalidDate: true,
            // dateFormat: 'yyyy-mm-dd',
            openSelectorTopOfInput: false
        };
    }
    StoredApplicationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var today = new Date();
        this.selectedDate = today.getTime();
        setTimeout(function () {
            _this.getSaloons();
        }, this.admin.vars.onInt_request_delay_in_ms);
    };
    StoredApplicationsComponent.prototype.setToday = function () {
        var today = new Date();
        return { year: today.getFullYear(), month: (today.getMonth() + 1), day: (today.getDate() + 1) };
    };
    /**
     * Method to take respective action on datepicker date changed
     *
     * @param object
     */
    StoredApplicationsComponent.prototype.onDateChanged = function (event) {
        var date = new Date(event['date'].year, (event['date'].month - 1), event['date'].day);
        this.selectedDate = date.getTime();
    };
    /**
     * Request to get list of all saloons
     *
     * @param number page
     *
     * @returns void
     */
    StoredApplicationsComponent.prototype.getSaloons = function (page, search) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (search === void 0) { search = null; }
        // show loader
        this.admin.vars.displayLoader(true);
        this.admin.getSaloons(page, search).subscribe(function (res) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // assign admin orders
            _this.saloonList = res.data.data;
            _this.currentPage = res.data.current_page;
            _this.totalItems = res.data.total;
        }, function (err) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // display errors notification
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Method to pull/push saloon value from selectedSaloon array
     *
     * @param Event
     *
     * @return void
     */
    StoredApplicationsComponent.prototype.updateSelectedSaloon = function (event) {
        // check for checkbox status as checked or not
        this.selectedSaloon.includes(parseInt(event.target['value'])) ? this.selectedSaloon.splice(this.selectedSaloon.indexOf(parseInt(event.target['value'])), 1) : null;
        if (event.target['checked']) {
            this.selectedSaloon.push(parseInt(event.target['value']));
        }
    };
    /**
     * Method to submit the status
     *
     * @param string status
     *
     * @return void
     */
    StoredApplicationsComponent.prototype.submitUpdateStatus = function (status) {
        var _this = this;
        // check if selectedSaloon not empty
        if (!this.selectedSaloon.length) {
            this.admin.vars.showNotification('Please select at-least single saloon', 'saloon');
        }
        // send request to update saloon status
        this.admin.vars.displayLoader(true);
        this.admin.updateSaloonStatus({ saloon: this.selectedSaloon, status: status }).subscribe(function (res) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(res.data), res.message, 'success');
            _this.getSaloons(_this.currentPage);
        }, function (err) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // display errors notification
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(err.errors), err.message);
        });
    };
    StoredApplicationsComponent.prototype.setSaloon = function (saloonDetail) {
        this.saloonDetail = saloonDetail;
    };
    /**
     * method to display Saloon status in colored format
     *
     * @param string status
     *
     * @return string
     */
    StoredApplicationsComponent.prototype.checkSaloonStatusColor = function (status) {
        switch (status) {
            case 'received':
                return 'text-warning';
            case 'reject':
                return 'text-danger';
            case 'approve':
                return 'text-success';
        }
    };
    /**
     * method to quickly update saloon status
     *
     * @param number saloonId
     * @param string status
     *
     * @return void
     */
    StoredApplicationsComponent.prototype.quickSubmitStatus = function (saloonId, status) {
        // check for checkbox status as checked or not
        !this.selectedSaloon.includes(saloonId) ? this.selectedSaloon.push(saloonId) : null;
        this.submitUpdateStatus(status);
    };
    StoredApplicationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stored-applications',
            template: __webpack_require__(/*! ./stored-applications.component.html */ "./src/modules/admin/components/stored-applications/stored-applications.component.html"),
            styles: [__webpack_require__(/*! ./stored-applications.component.css */ "./src/modules/admin/components/stored-applications/stored-applications.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], StoredApplicationsComponent);
    return StoredApplicationsComponent;
}());



/***/ }),

/***/ "./src/modules/admin/components/users/users.component.css":
/*!****************************************************************!*\
  !*** ./src/modules/admin/components/users/users.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-flex {\n    display: block;\n}\n\n.avatar {\n    width:3rem;\n}\n\n.text-muted {\n    color: #8897b6!important;\n}\n\nth{\n    font-size:11px !important;\n    font-weight: bold !important;\n}\n\ntd{\n    color:#b0b0bc !important;\n    font-size:12px !important;\n    font-weight: bold !important;\n}\n\na.name{\n    color:#676675 !important;\n    font-size:11px !important;\n    font-weight: bold !important;\n}\n\n.anchor_name{\n    margin-top: 7px !important;\n    margin-left: 5px !important;\n}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n}\n\n.dropdown {\n    position: relative;\n    display: inline-block;\n  \n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n    right: 0;\n}\n\n.pointer {\n    cursor: pointer;\n}\n\n.hover-dark:hover {\n    background-color: #cccccc;\n}\n\n/* .drop_icon{ position: relative;} */\n\n.drop_icon:before {\n    content: \"\";\n    position: absolute;\n    top: -8px;\n    right: -3px;\n    width: 0;\n    height: 0;\n    border-left: 6px solid transparent;\n    border-right: 9px solid transparent;\n    border-bottom: 8px solid #f9f9f9;\n}"

/***/ }),

/***/ "./src/modules/admin/components/users/users.component.html":
/*!*****************************************************************!*\
  !*** ./src/modules/admin/components/users/users.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n  <!-- display page title -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <p class=\"text-capitalize h3 ml-3\">{{pageTitle}}</p>\n    </div>\n  </div>\n\n\n  <div class=\"row bg-white mt-3 ml-3 mr-3 shadow border-bottom\">\n    <div class=\"col\">\n      <p class=\"text-capitalize h5 ml-3 mt-4 mb-4 text-secondary\">{{subTitle}}</p>\n    </div>\n    <div class=\"col text-right mt-3\">\n        <div class=\"form-inline no-flex\">\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" (keyup)=\"getUsers(1, $event.target.value)\">\n        </div>\n    </div>\n  </div>\n\n  <div class=\"row bg-white ml-3 mr-3 shadow\">\n    <div class=\"col\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th scope=\"col\" class=\"text-capitalize font-weight-bold text-muted\"></th>\n              <th scope=\"col\" class=\"text-capitalize font-weight-bold text-muted\">user</th>\n              <th scope=\"col\" class=\"text-capitalize font-weight-bold text-muted\">cuts</th>\n              <th scope=\"col\" class=\"text-capitalize font-weight-bold text-muted\">last visit</th>\n              <th scope=\"col\" class=\"text-capitalize font-weight-bold text-secondary\"></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let user of userList;\">\n              <td scope=\"row\" class=\"text-capitalize font-weight-normal text-secondary\">\n                <input type=\"checkbox\" />\n              </td>\n              <td scope=\"row\" class=\"text-capitalize font-weight-normal text-secondary\">\n                <div class=\"media\">\n                    <img [alt]=\"user?.name\" [src]=\"user?.image_url\" class=\"avatar rounded-circle\" />\n                  <div class=\"media-body anchor_name\">\n                    <a routerLink=\"/admin/user/{{ user?.id }}/dashboard\" class=\"mt-0 text-capitalize name\">{{ user?.name }}</a>\n                    <p>{{ user?.role }}</p>\n                  </div>\n                </div>\n              </td>\n              <td scope=\"row\" class=\"text-capitalize font-weight-normal text-secondary\">\n                {{ user?.cuts_count }}\n              </td>\n              <td scope=\"row\" class=\"text-capitalize font-weight-normal text-secondary\">\n                {{ (user?.last_active * 1000) || null | date:'dd/MM/y' }}\n              </td>\n              <td scope=\"row\">\n                <div class=\"dropdown\">\n                    <span class=\"text-dark font-weight-bold\">...</span>\n                    <div class=\"dropdown-content drop_icon\">\n                      <p class=\"text-capitalize hover-dark pointer pl-4 pr-2 pt-3 pb-3\" *ngIf=\"user?.role !== 'admin'\" (click)=\"selectUser (user)\" data-toggle=\"modal\" data-target=\"#suspendUserModalCenter\">suspend user</p>\n                      <p class=\"text-capitalize hover-dark pointer pl-4 pr-2 pt-3 pb-3\" (click)=\"selectUser (user);setSelecteduserEmail();\" data-toggle=\"modal\" data-target=\"#resetEmailModalCenter\">reset email</p>\n                      <p class=\"text-capitalize hover-dark pointer pl-4 pr-2 pt-3 pb-3\" (click)=\"selectUser (user)\" data-toggle=\"modal\" data-target=\"#resetPasswordModalCenter\">reset password</p>\n                    </div>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n  <!-- display users list pagination -->\n  <div class=\"row bg-white ml-3 mr-3 mb-3 shadow\" *ngIf=\"totalItems\">\n    <div class=\"col\">\n      <app-pagination [totalItems]=\"totalItems\" [currentPage]=\"currentPage\" (childEvent)=\"getUsers ($event)\"></app-pagination>\n    </div>\n  </div>  <!-- display users list pagination -->\n</div>\n\n\n<!-- Modal: Display user password reset form -->\n<div class=\"modal fade\" id=\"resetPasswordModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"resetPasswordModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title text-capitalize\" id=\"exampleModalLongTitle\">{{ selectedUser?.name }}: change password </h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>      \n      <form [formGroup]=\"resetPasswordForm\" novalidate>\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control no-border\" appTrimInput required formControlName=\"password\" autocomplete=\"off\" maxlength=\"20\" placeholder=\"Password\">\n              <show-errors [control]=\"resetPasswordForm.controls.password\"></show-errors>\n          </div>\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-transparent\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" [disabled]=\"!resetPasswordForm.valid\" data-dismiss=\"modal\" (click)=\"submitChangeUserPassword (resetPasswordForm)\" class=\"btn btn-shokuni btn-round pl-4 pr-4 pt-2 pb-2\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- Modal: Display user email reset form -->\n<div class=\"modal fade\" id=\"resetEmailModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"resetEmailModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title text-capitalize\" id=\"exampleModalLongTitle\">{{ selectedUser?.name }}: change email </h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>      \n      <form [formGroup]=\"resetEmailForm\" novalidate>\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"email\" maxlength=\"255\" autocomplete=\"off\" placeholder=\"email\">\n              <show-errors [control]=\"resetEmailForm.controls.email\"></show-errors>\n          </div>\n        </div>          \n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-transparent\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" data-dismiss=\"modal\" [disabled]=\"!resetEmailForm.valid\" (click)=\"submitChangeUserEmail (resetEmailForm)\" class=\"btn btn-shokuni btn-round pl-4 pr-4 pt-2 pb-2\">Save</button>\n        </div>\n      </form>      \n    </div>\n  </div>\n</div>\n\n<!-- Modal: Display user suspend -->\n<div class=\"modal fade\" id=\"suspendUserModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"suspendUserModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title text-capitalize\" id=\"exampleModalLongTitle\">{{ selectedUser?.name }}: change email </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n          <div class=\"modal-body\">\n            Do you really want to suspend/delete user?\n          </div>          \n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-transparent\" data-dismiss=\"modal\">No</button>\n            <button type=\"button\" (click)=\"suspendUser ()\" data-dismiss=\"modal\" class=\"btn btn-shokuni btn-round pl-4 pr-4 pt-2 pb-2\">Yes</button>\n          </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/modules/admin/components/users/users.component.ts":
/*!***************************************************************!*\
  !*** ./src/modules/admin/components/users/users.component.ts ***!
  \***************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/admin/admin.service */ "./src/services/admin/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(admin) {
        this.admin = admin;
        this.pageTitle = 'users';
        this.subTitle = 'manage users';
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getUsers();
        }, this.admin.vars.onInt_request_delay_in_ms);
        // design login form attribute
        this.resetEmailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
        });
        this.resetPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)])
        });
    };
    /**
     * Request to get list of all saloons
     *
     * @param number page
     *
     * @returns void
     */
    UsersComponent.prototype.getUsers = function (page, search) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (search === void 0) { search = null; }
        // show loader
        this.admin.vars.displayLoader(true);
        this.admin.getUsers(page, search).subscribe(function (res) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // assign admin orders
            _this.userList = res.data.data;
            _this.currentPage = res.data.current_page;
            _this.totalItems = res.data.total;
        }, function (err) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // display errors notification
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * method to delete user
     *
     * @param number userId
     *
     * @return void
     */
    UsersComponent.prototype.selectUser = function (user) {
        this.selectedUser = user;
    };
    /**
     * Request to update user password by admin
     *
     * @param NgForm
     *
     * @return void
     */
    UsersComponent.prototype.submitChangeUserPassword = function (form) {
        var _this = this;
        // show loader
        this.admin.vars.displayLoader(true);
        // call for login
        this.admin.changeUserPassword(this.selectedUser['id'], form.value).subscribe(function (res) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(res.data), res.message, 'success');
        }, function (err) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // show login error
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Request to update user email by admin
     *
     * @param NgForm
     *
     * @return void
     */
    UsersComponent.prototype.submitChangeUserEmail = function (form) {
        var _this = this;
        // show loader
        this.admin.vars.displayLoader(true);
        // call for login
        this.admin.changeUserEmail(this.selectedUser['id'], form.value).subscribe(function (res) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(res.data), res.message, 'success');
        }, function (err) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // show login error
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Method to set selected user email in change email form
     *
     * @return void
     */
    UsersComponent.prototype.setSelecteduserEmail = function () {
        this.resetEmailForm.controls['email'].setValue(this.selectedUser['email']);
    };
    /**
     * Request to delete user
     *
     * @return void
     */
    UsersComponent.prototype.suspendUser = function () {
        var _this = this;
        // show loader
        this.admin.vars.displayLoader(true);
        // call for login
        this.admin.deleteUser(this.selectedUser['id']).subscribe(function (res) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(res.data), res.message, 'success');
        }, function (err) {
            // hide loader
            _this.admin.vars.displayLoader(false);
            // show login error
            _this.admin.vars.showNotification(_this.admin.vars.convertObjectToString(err.errors), err.message);
        });
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/modules/admin/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/modules/admin/components/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/modules/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/modules/auth/components/login/login.component.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/modules/auth/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/modules/auth/components/signup/signup.component.ts");
/* harmony import */ var _guards_not_auth_not_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../guards/not-auth/not-auth.guard */ "./src/guards/not-auth/not-auth.guard.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import modules related component



// import guards

// Import all custome directives and components use for each module

var routes = [{
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
    }, {
        path: 'forgot-password',
        component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"],
        canActivate: [_guards_not_auth_not_auth_guard__WEBPACK_IMPORTED_MODULE_7__["NotAuthGuard"]]
    }, {
        path: 'signup',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
        canActivate: [_guards_not_auth_not_auth_guard__WEBPACK_IMPORTED_MODULE_7__["NotAuthGuard"]]
    }];
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/modules/auth/components/forgot-password/forgot-password.component.css":
/*!***********************************************************************************!*\
  !*** ./src/modules/auth/components/forgot-password/forgot-password.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-side-border {\n    border-top: none;\n    border-left: none;\n    border-right: none;\n}\n\n.no-border {\n    border: none;\n}\n\n.btn-login {\n    color: #fff;\n    background-color: #131F47;\n    border-color: #131F47;\n}\n\n.btn-round {\n    border-radius: 2rem;\n}\n\n.login-image {\n    background-image: url('bg.jpg');\n    background-repeat: no-repeat;\n    background-size: contain;\n}\n\n.fixed-right {\n    position: fixed;\n    right: 0;\n}\n\n.padding-bottom-100 {\n    padding-bottom:100%;\n}\n\n.color-dark {\n    color: #000;\n}\n\n.text-color-shokuni {\n    color: #15234A;\n}\n\n.mt-8 {\n    margin-top: 8rem;\n}\n\n.text-decoration-none {\n    text-decoration: none;\n}\n\n.text-faint {\n    color: #999999;\n}"

/***/ }),

/***/ "./src/modules/auth/components/forgot-password/forgot-password.component.html":
/*!************************************************************************************!*\
  !*** ./src/modules/auth/components/forgot-password/forgot-password.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n      <div class=\"col-sm-12 col-md-3 m-5 p-4\">\n          <form [formGroup]=\"forgotForm\" novalidate>\n              <div class=\"display-4 text-center mt-5 font-weight-bold text-lowercase text-color-shokuni\">{{project_title}}</div>\n              <div class=\"text-center mt-4 color-dark text-capitalize\">{{pageTitle}}</div>\n              <div class=\"form-group mt-5\">\n                  <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"email\" maxlength=\"255\" autocomplete=\"off\" placeholder=\"Email Address\">\n                  <show-errors [control]=\"forgotForm.controls.email\"></show-errors>\n              </div>\n              <p class=\"text-faint mt-5 \">We’ll send instructions on how to reset your password to your email address that is registered with Shokuni.</p>\n              <div class=\"text-center mt-5\">\n                  <button type=\"submit\" [disabled]=\"!forgotForm.valid\" (click)=\"submitForgotPassword (forgotForm)\" class=\"btn btn-login btn-round pl-4 pr-4 pt-2 pb-2 text-capitalize\">reset password</button>\n              </div>\n          </form>\n          <div class=\"text-center text-faint mt-8\">Don't have an account? \n              <span>\n                  <a routerLink=\"/signup\" class=\"text-capitalize text-danger text-bold\">Sign Up</a>\n              </span>\n          </div>\n      </div>\n      <div class=\"col-md-8 d-xl-block d-none d-md-block d-lg-block login-image padding-bottom-100 fixed-right\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/modules/auth/components/forgot-password/forgot-password.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/modules/auth/components/forgot-password/forgot-password.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ "./src/services/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(auth) {
        this.auth = auth;
        this.pageTitle = 'forgot password';
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.project_title = this.auth.vars.project_title;
        // design login form attribute
        this.forgotForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
        });
    };
    ForgotPasswordComponent.prototype.submitForgotPassword = function (form) {
        var _this = this;
        // show loader
        this.auth.vars.displayLoader(true);
        // call for login
        this.auth.forgotPassword(form.value).subscribe(function (res) {
            // hide loader
            _this.auth.vars.displayLoader(false);
            _this.auth.vars.showNotification(res.message, "Forgot Password", "success");
        }, function (err) {
            // hide loader
            _this.auth.vars.displayLoader(false);
            // show login error
            _this.auth.vars.showNotification(_this.auth.vars.convertObjectToString(err.errors), err.message);
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/modules/auth/components/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/modules/auth/components/forgot-password/forgot-password.component.css")],
            providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/modules/auth/components/login/login.component.css":
/*!***************************************************************!*\
  !*** ./src/modules/auth/components/login/login.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-side-border {\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.no-border {\n  border: none;\n}\n\n.btn-login {\n  color: #fff;\n  background-color: #131F47;\n  border-color: #131F47;\n}\n\n.btn-round {\n  border-radius: 2rem;\n}\n\n.login-image {\n  background-image: url('bg.jpg');\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.fixed-right {\n  position: fixed;\n  right: 0;\n}\n\n.padding-bottom-100 {\n  padding-bottom:100%;\n}\n\n.text-color-shokuni {\n  color: #15234A;\n}\n\n.mt-8 {\n  margin-top: 8rem;\n}\n\n.text-decoration-none {\n  text-decoration: none;\n}\n\n.text-faint {\n  color: #999999;\n}"

/***/ }),

/***/ "./src/modules/auth/components/login/login.component.html":
/*!****************************************************************!*\
  !*** ./src/modules/auth/components/login/login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n      <div class=\"col-sm-12 col-md-3 m-5 p-4\">\n          <form [formGroup]=\"loginForm\" novalidate>\n              <div class=\"display-4 text-center mt-5 font-weight-bold text-lowercase text-color-shokuni\">{{project_title}}</div>\n              <div class=\"text-center mt-5 text-capitalize pb-4\">Login to {{project_sub_title}}</div>\n              <div class=\"form-group mt-5\">\n                  <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"username\" maxlength=\"255\" autocomplete=\"off\" placeholder=\"Username\">\n                  <show-errors [control]=\"loginForm.controls.username\"></show-errors>\n              </div>\n              <div class=\"form-group\">\n                  <input type=\"password\" class=\"form-control no-border\" appTrimInput required formControlName=\"password\" autocomplete=\"off\" maxlength=\"20\" placeholder=\"Password\">\n                  <show-errors [control]=\"loginForm.controls.password\"></show-errors>\n              </div>\n              <div class=\"form-group form-check\">\n                  <input type=\"checkbox\" formControlName=\"remember\" class=\"form-check-input\">\n                  <label class=\"form-check-label text-faint\" for=\"exampleCheck1\">Remember</label>\n\n                  <a routerLink=\"/forgot-password\" class=\"label label-default text-decoration-none text-faint mt-1 text-capitalize text-right float-right\">Forget Password?</a>\n              </div>\n              <div class=\"text-center mt-5\">\n                  <button type=\"submit\" [disabled]=\"!loginForm.valid\" (click)=\"submitLogin (loginForm)\" class=\"btn btn-login btn-round pl-4 pr-4 pt-2 pb-2\">Sign In</button>\n              </div>\n          </form>\n          <div class=\"text-center text-faint mt-8\">Don't have an account? \n              <span>\n                  <a (click)=\"redirect()\" class=\"text-capitalize text-danger text-bold\">Sign Up</a>\n              </span>\n          </div>\n      </div>\n      <div class=\"col-md-8 d-xl-block d-none d-md-block d-lg-block login-image padding-bottom-100 fixed-right\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/auth/components/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/modules/auth/components/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ "./src/services/auth/auth.service.ts");
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/users/user.service */ "./src/services/users/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, user) {
        this.auth = auth;
        this.router = router;
        this.user = user;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.project_title = this.auth.vars.project_title;
        this.project_sub_title = this.auth.vars.project_sub_title;
        // design login form attribute
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            remember: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    };
    LoginComponent.prototype.redirect = function () {
        console.log('redirect');
        this.router.navigateByUrl('/signup');
    };
    /**
     * Method to submit login form
     *
     * @param NgForm
     *
     * @return void
     */
    LoginComponent.prototype.submitLogin = function (form) {
        var _this = this;
        // show loader
        this.auth.vars.displayLoader(true);
        // call for login
        this.auth.loginUser(form.value).subscribe(function (res) {
            // save login 
            _this.auth.saveLoginInfo(res.data.access_token, res.data.token_type);
            // hide loader
            _this.auth.vars.displayLoader(false);
            // get user detail
            _this.getUserDetail();
        }, function (err) {
            // hide loader
            _this.auth.vars.displayLoader(false);
            // show login error
            _this.auth.vars.showNotification(_this.auth.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Method to get user detail after login
     */
    LoginComponent.prototype.getUserDetail = function () {
        var _this = this;
        // show loader
        this.auth.vars.displayLoader(true);
        this.user.getUserDetail().subscribe(function (res) {
            localStorage.setItem('user_detail', JSON.stringify(res.data));
            // hide loader
            _this.auth.vars.displayLoader(false);
            _this.renderUser();
        }, function (err) {
            // hide loader
            _this.auth.vars.displayLoader(false);
            // show login error
            _this.auth.vars.showNotification(_this.auth.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * render user to it's dashboard
     */
    LoginComponent.prototype.renderUser = function () {
        // check if userDeatil successfully saved
        if (localStorage.getItem('user_detail')) {
            // render user on successful login
            return this.router.navigateByUrl(this.auth.vars.getDefaultpage());
        }
        // else call recursion
        this.renderUser();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/modules/auth/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/modules/auth/components/login/login.component.css")],
            providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]]
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_users_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/modules/auth/components/signup/signup.component.css":
/*!*****************************************************************!*\
  !*** ./src/modules/auth/components/signup/signup.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-border {\n    border-top: none;\n    border-left: none;\n    border-right: none;\n}\n\n.btn-login {\n    color: #fff;\n    background-color: #131F47;\n    border-color: #131F47;\n}\n\n.btn-round {\n    border-radius: 2rem;\n}\n\n.login-image {\n    background-image: url('bg.jpg');\n    background-repeat: no-repeat;\n    background-size: contain;\n}\n\n.fixed-right {\n    position: fixed;\n    right: 0;\n}\n\n.padding-bottom-100 {\n    padding-bottom:100%;\n}\n\n.text-color-shokuni {\n    color: #15234A;\n}\n\n.mt-6 {\n    margin-top: 6rem;\n}\n\n.text-decoration-none {\n    text-decoration: none;\n}\n\n.text-faint {\n    color: #999999;\n}"

/***/ }),

/***/ "./src/modules/auth/components/signup/signup.component.html":
/*!******************************************************************!*\
  !*** ./src/modules/auth/components/signup/signup.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3 m-5 p-4\">\n                <form [formGroup]=\"signupForm\" novalidate>\n                    <div class=\"display-4 text-center text-capitalize font-weight-bold text-lowercase text-color-shokuni\">{{project_title}}</div>\n                    <div class=\"text-center mt-3 text-capitalize\">{{pageTitle}}</div>\n                    <div class=\"form-group mt-5\">\n                        <input type=\"text\" class=\"form-control no-border\" appTrimInput required formControlName=\"first_name\" maxlength=\"75\" autocomplete=\"off\" placeholder=\"First name\">\n                        <show-errors [control]=\"signupForm.controls.first_name\"></show-errors>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control no-border\" appTrimInput required formControlName=\"last_name\" autocomplete=\"off\" maxlength=\"75\" placeholder=\"Last name\">\n                        <show-errors [control]=\"signupForm.controls.last_name\"></show-errors>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control no-border\" appTrimInput required formControlName=\"email\" autocomplete=\"off\" maxlength=\"255\" placeholder=\"Email\">\n                        <show-errors [control]=\"signupForm.controls.email\"></show-errors>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control no-border\" appTrimInput appNumberOnly required formControlName=\"number\" autocomplete=\"off\" maxlength=\"10\" placeholder=\"Mobile number\">\n                        <show-errors [control]=\"signupForm.controls.number\"></show-errors>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control no-border\" appTrimInput required formControlName=\"password\" autocomplete=\"off\" maxlength=\"20\" placeholder=\"Password\">\n                        <show-errors [control]=\"signupForm.controls.password\"></show-errors>\n                    </div>\n                    <div class=\"text-center mt-5\">\n                        <button type=\"submit\" [disabled]=\"!signupForm.valid\" (click)=\"submitSignup (signupForm)\" class=\"btn btn-login btn-round pl-4 pr-4 pt-2 pb-2\">Sign Up</button>\n                    </div>\n                </form>\n                <div class=\"text-center text-faint mt-6\">Already have an account? \n                    <span>\n                        <a routerLink=\"/login\" class=\"text-capitalize text-danger text-bold\">Sign In</a>\n                    </span>\n                </div>\n            </div>\n            <div class=\"col-md-8 d-xl-block d-none d-md-block d-lg-block login-image padding-bottom-100 fixed-right\"></div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/modules/auth/components/signup/signup.component.ts":
/*!****************************************************************!*\
  !*** ./src/modules/auth/components/signup/signup.component.ts ***!
  \****************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ "./src/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.pageTitle = 'signup';
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.project_title = this.auth.vars.project_title;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z-A-Z\s]*')]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z-A-Z\s]*')]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]),
        });
        var url = new URL(window.location.href);
        // check if token param found in url-route
        this.invitationToken = (url.searchParams.has('token') && (url.searchParams.get('token')).trim()) ? (url.searchParams.get('token')).trim() : null;
    };
    /**
     * Method to register user
     * @param form {first_name: "Test", last_name: "Dev", email: "barber@email.com", password: "123456", number: "1234567890"}
     */
    SignupComponent.prototype.submitSignup = function (form) {
        var _this = this;
        var values = form.value;
        // append optional parameters on signup
        values['invitationToken'] = this.invitationToken;
        values['role'] = 'barber';
        // remove empty/null keys from object
        Object.keys(values).forEach(function (key) { return (values[key] == null) && delete values[key]; });
        // show loader
        this.auth.vars.displayLoader(true);
        // register user
        this.auth.registerUser(values).subscribe(function (res) {
            _this.auth.vars.displayLoader(false);
            _this.auth.vars.showNotification('User successfully registered', res.message, 'success');
            // redirect user to login page after 2 sec
            setTimeout(function () {
                _this.auth.vars.logoutUser();
            }, 2000);
            _this.router.navigateByUrl('/login');
        }, function (err) {
            _this.auth.vars.displayLoader(false);
            _this.auth.vars.showNotification(_this.auth.vars.convertObjectToString(err.errors), err.message);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/modules/auth/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/modules/auth/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/barbers/barbers.module.ts":
/*!******************************************************!*\
  !*** ./src/modules/saloon/barbers/barbers.module.ts ***!
  \******************************************************/
/*! exports provided: BarbersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarbersModule", function() { return BarbersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_barbers_barbers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/barbers/barbers.component */ "./src/modules/saloon/barbers/components/barbers/barbers.component.ts");
/* harmony import */ var _components_barber_detail_barber_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/barber-detail/barber-detail.component */ "./src/modules/saloon/barbers/components/barber-detail/barber-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/modules/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _guards_barber_admin_barber_admin_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../guards/barber-admin/barber-admin.guard */ "./src/guards/barber-admin/barber-admin.guard.ts");
/* harmony import */ var _guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../guards/auth/auth.guard */ "./src/guards/auth/auth.guard.ts");
/* harmony import */ var _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../guards/role/role-access.guard */ "./src/guards/role/role-access.guard.ts");
/* harmony import */ var _components_barber_detail_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/barber-detail/left-sidebar/left-sidebar.component */ "./src/modules/saloon/barbers/components/barber-detail/left-sidebar/left-sidebar.component.ts");
/* harmony import */ var _components_barber_detail_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/barber-detail/right-sidebar/right-sidebar.component */ "./src/modules/saloon/barbers/components/barber-detail/right-sidebar/right-sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [{
        path: 'saloon/barbers',
        component: _components_barbers_barbers_component__WEBPACK_IMPORTED_MODULE_2__["BarbersComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_9__["RoleAccessGuard"], _guards_barber_admin_barber_admin_guard__WEBPACK_IMPORTED_MODULE_7__["BarberAdminGuard"]],
        data: { roles: ['barber'] }
    }, {
        path: 'saloon/:saloonId/barbers',
        component: _components_barbers_barbers_component__WEBPACK_IMPORTED_MODULE_2__["BarbersComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_9__["RoleAccessGuard"]],
        data: { roles: ['admin', 'barber'] }
    }, {
        path: 'saloon/barbers/:barberId',
        component: _components_barber_detail_barber_detail_component__WEBPACK_IMPORTED_MODULE_3__["BarberDetailComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_9__["RoleAccessGuard"], _guards_barber_admin_barber_admin_guard__WEBPACK_IMPORTED_MODULE_7__["BarberAdminGuard"]],
        data: { roles: ['barber'] }
    }, {
        path: 'admin/barbers/:barberId',
        component: _components_barber_detail_barber_detail_component__WEBPACK_IMPORTED_MODULE_3__["BarberDetailComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_9__["RoleAccessGuard"]],
        data: { roles: ['admin'] }
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    }];
var BarbersModule = /** @class */ (function () {
    function BarbersModule() {
    }
    BarbersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ],
            declarations: [_components_barbers_barbers_component__WEBPACK_IMPORTED_MODULE_2__["BarbersComponent"], _components_barber_detail_barber_detail_component__WEBPACK_IMPORTED_MODULE_3__["BarberDetailComponent"], _components_barber_detail_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["LeftSidebarComponent"], _components_barber_detail_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["RightSidebarComponent"]],
            exports: [
                _components_barber_detail_barber_detail_component__WEBPACK_IMPORTED_MODULE_3__["BarberDetailComponent"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ]
        })
    ], BarbersModule);
    return BarbersModule;
}());



/***/ }),

/***/ "./src/modules/saloon/barbers/components/barber-detail/barber-detail.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/modules/saloon/barbers/components/barber-detail/barber-detail.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-sm {\n    font-size: 12px;\n}"

/***/ }),

/***/ "./src/modules/saloon/barbers/components/barber-detail/barber-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./src/modules/saloon/barbers/components/barber-detail/barber-detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- display page title -->\n  <div class=\"row\">\n    <div class=\"col ml-3\">\n      <p class=\"text-capitalize h3\">{{barberDetail?.first_name}} {{barberDetail?.last_name}}</p>\n    </div>\n  </div>\n  \n  \n  <div class=\"row mt-3 ml-0 mb-4\" *ngIf=\"barberDetail\">\n\n    <!-- display left side bar of the barber profile to barber admin -->\n    <div class=\"col-3\">\n      <app-left-sidebar [barberDetail]=\"barberDetail\"></app-left-sidebar>\n    </div>\n\n    <div class=\"col pl-0\">\n      <app-right-sidebar [barberDetail]=\"barberDetail\"></app-right-sidebar>\n    </div>\n  </div>\n\n\n</div>\n  "

/***/ }),

/***/ "./src/modules/saloon/barbers/components/barber-detail/barber-detail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/modules/saloon/barbers/components/barber-detail/barber-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: BarberDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarberDetailComponent", function() { return BarberDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_saloon_barber_barber_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/saloon/barber/barber.service */ "./src/services/saloon/barber/barber.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarberDetailComponent = /** @class */ (function () {
    function BarberDetailComponent(barber, activeRoute) {
        this.barber = barber;
        this.activeRoute = activeRoute;
        this.pageTitle = 'mark andre';
        this.subTitle = 'personal detail';
    }
    BarberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var barberId = this.activeRoute.snapshot.params["barberId"];
        // get invoice detail
        setTimeout(function () {
            _this.getSaloonBarberDetail(barberId);
        }, this.barber.vars.onInt_request_delay_in_ms);
    };
    BarberDetailComponent.prototype.getSaloonBarberDetail = function (barberId) {
        var _this = this;
        // show loader
        this.barber.vars.displayLoader(true);
        this.barber.getSaloonBarberDetail(barberId).subscribe(function (res) {
            _this.barberDetail = res.data;
            // show loader
            _this.barber.vars.displayLoader(false);
            // show error
            // this.barber.vars.showNotification('Invoice detail successfully found.', res.message, 'success');
        }, function (err) {
            // show loader
            _this.barber.vars.displayLoader(false);
            // show error
            _this.barber.vars.showNotification(_this.barber.vars.convertObjectToString(err.errors), err.message);
        });
    };
    BarberDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-barber-detail',
            template: __webpack_require__(/*! ./barber-detail.component.html */ "./src/modules/saloon/barbers/components/barber-detail/barber-detail.component.html"),
            styles: [__webpack_require__(/*! ./barber-detail.component.css */ "./src/modules/saloon/barbers/components/barber-detail/barber-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_saloon_barber_barber_service__WEBPACK_IMPORTED_MODULE_1__["BarberService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BarberDetailComponent);
    return BarberDetailComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/barbers/components/barber-detail/left-sidebar/left-sidebar.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/modules/saloon/barbers/components/barber-detail/left-sidebar/left-sidebar.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-img {\n    width: 7rem;\n    height: 7rem;\n}\n\n.list-group-item {\n    border: none;\n}\n\n.pb-20 {\n    padding-bottom: 14rem;\n}\n\nspan{\n    color:#9798a0 !important;\n    font-size:9px !important;\n    font-weight:600 !important;\n}\n\np{\nfont-size:10px !important;\nfont-weight:600 !important;\ncolor:#78797c;\nmargin-bottom: 0px !important; \n}\n\n.badge{\n    color:#fff !important;\n}\n\n.span_text{\n    font-size:7px !important;\n    color:#cbccd0 !important;\n}\n\nh5{\n    color:#4e4e4f !important;\n    font-size:11px !important;\n    font-weight:bold;\n}\n\nh6{\n    color:#c7c8cd !important;\n    font-size:9px !important;\n    font-weight: 600  !important;\n}\n\n.card-body {\n      padding: 0.25rem !important;\n}"

/***/ }),

/***/ "./src/modules/saloon/barbers/components/barber-detail/left-sidebar/left-sidebar.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/modules/saloon/barbers/components/barber-detail/left-sidebar/left-sidebar.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- display left side bar of the barber profile to barber admin -->\n\n<div class=\"card shadow pb-20\">\n  <div class=\"text-center mt-5\">\n    <!-- display user profile image -->\n    <img class=\"img-thumbnail rounded-circle profile-img card-img-top\" [src]=\"barberDetail?.image_url\" [alt]=\"barberDetail?.first_name\"><br>\n    <h5 class=\"text-capitalize\">{{barberDetail?.first_name}}  {{barberDetail?.last_name}}</h5>\n    <h6>{{barberDetail?.email}}</h6>\n  </div>\n\n  <div class=\"card-body\">\n    <!-- display sidebar link list -->\n    <div class=\"mt-5 pl-1 pr-1\">\n      <ul class=\"list-group list-group-flush\">\n        \n        <li class=\"list-group-item\">\n          <div class=\"d-flex bd-highlight\">\n            <div class=\"w-100\">\n              <i class=\"fa\" aria-hidden=\"true\">&#xf2ba;</i>\n              <span class=\"text-capitalize text-secondary ml-2\">my profile</span>\n            </div>\n            <div class=\"flex-shrink-1\">\n              <span class=\"badge badge-success rounded-circle\">2</span>\n            </div>\n          </div>\n        </li>\n        \n        <li class=\"list-group-item\">\n          <div class=\"d-flex bd-highlight\">\n            <div class=\"w-100\">\n                \n             <i class=\"fa fa-flask\" aria-hidden=\"true\"></i> \n              <span class=\"text-capitalize text-secondary ml-2\">activity</span>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"d-flex bd-highlight\">\n            <div class=\"w-100\">\n              <i class=\"fa\" aria-hidden=\"true\">&#xf086;</i>\n              <span class=\"text-capitalize text-secondary ml-2\">messages</span>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"d-flex bd-highlight\">\n            <div class=\"w-100\">\n              <i class=\"fa\" aria-hidden=\"true\">&#xf080;</i>\n              <span class=\"text-capitalize text-secondary ml-2\">sales</span>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"d-flex bd-highlight\">\n            <div class=\"w-100\">\n              <i class=\"fa\" aria-hidden=\"true\">&#xf073;</i>\n              <span class=\"text-capitalize text-secondary ml-2\">events</span>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"d-flex bd-highlight\">\n            <div class=\"w-100\">\n              <i class=\"fa\" aria-hidden=\"true\">&#xf1cd;</i>\n              <span class=\"text-capitalize text-secondary ml-2\">supports</span>\n            </div>\n          </div>\n        </li>\n\n      </ul>\n    </div>\n\n    <!-- display sidebar details link list -->\n    <div class=\"mt-5 pl-1 pr-1\">\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <div class=\"d-flex bd-highlight\">\n            <div class=\"w-100\">\n              <p class=\"text-capitalize h6\">member profit<br><span class=\"span_text\">Average weekly profit</span></p>\n            </div>\n            <div class=\"flex-shrink-1\">\n              <p class=\"text-primary font-weight-bold\">+{{ barberDetail?.totalOrdersProfit | currency }}</p>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"d-flex bd-highlight\">\n            <div class=\"w-100\">\n              <p class=\"text-capitalize h6\">orders<br><span class=\"span_text\">Weekly Customers Orders</span></p>\n            </div>\n            <div class=\"flex-shrink-1\">\n              <p class=\"text-danger font-weight-bold\">+{{ barberDetail?.totalOrders }}</p>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"d-flex bd-highlight\">\n            <div class=\"w-100\">\n              <p class=\"text-capitalize h6\">issue reports<br><span class=\"span_text\"> System bugs and issues</span></p>\n            </div>\n            <div class=\"flex-shrink-1\">\n              <p class=\"text-success font-weight-bold\">-27,49%</p>\n            </div>\n          </div>\n        </li>\n\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/saloon/barbers/components/barber-detail/left-sidebar/left-sidebar.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/modules/saloon/barbers/components/barber-detail/left-sidebar/left-sidebar.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: LeftSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSidebarComponent", function() { return LeftSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_saloon_barber_barber_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/saloon/barber/barber.service */ "./src/services/saloon/barber/barber.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeftSidebarComponent = /** @class */ (function () {
    function LeftSidebarComponent(activeRoute, barber) {
        this.activeRoute = activeRoute;
        this.barber = barber;
    }
    LeftSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var barberId = this.activeRoute.snapshot.params["barberId"];
        // get invoice detail
        setTimeout(function () {
            _this.setBarberDetailValues(barberId);
        }, this.barber.vars.onInt_request_delay_in_ms);
    };
    LeftSidebarComponent.prototype.setBarberDetailValues = function (barberId) {
        var _this = this;
        this.barber.vars.displayLoader(true);
        this.barber.getSaloonBarberDetail(barberId).subscribe(function (res) {
            _this.barberDetail = res.data;
            // show loader
            _this.barber.vars.displayLoader(false);
            // show error
            // this.barber.vars.showNotification('Invoice detail successfully found.', res.message, 'success');
        }, function (err) {
            // show loader
            _this.barber.vars.displayLoader(false);
            // show error
            _this.barber.vars.showNotification(_this.barber.vars.convertObjectToString(err.errors), err.message);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LeftSidebarComponent.prototype, "barberDetail", void 0);
    LeftSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-sidebar',
            template: __webpack_require__(/*! ./left-sidebar.component.html */ "./src/modules/saloon/barbers/components/barber-detail/left-sidebar/left-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar.component.css */ "./src/modules/saloon/barbers/components/barber-detail/left-sidebar/left-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_saloon_barber_barber_service__WEBPACK_IMPORTED_MODULE_2__["BarberService"]])
    ], LeftSidebarComponent);
    return LeftSidebarComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/barbers/components/barber-detail/right-sidebar/right-sidebar.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/modules/saloon/barbers/components/barber-detail/right-sidebar/right-sidebar.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h5{\n    color:#7e838c !important;\n    font-weight:600 !important;\n    font-size:13px !important;\n}\nlabel{\n    font-size:8px !important;\n    font-weight:500 !important;\n    color:#6e6f74 !important;\n}\n.form-control {\n    font-size:11px !important;\n}\nsmall{\n    color:#b8babf !important;\n    font-size:9px !important;\n}\n.btn{\n    font-size:10px !important;\n}"

/***/ }),

/***/ "./src/modules/saloon/barbers/components/barber-detail/right-sidebar/right-sidebar.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/modules/saloon/barbers/components/barber-detail/right-sidebar/right-sidebar.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-white shadow p-5\">\n    \n    <!-- generate for for barber detail -->\n    <form [formGroup]=\"barberDetailForm\" novalidate>\n        <!-- display section 1 form detail -->\n        <div class=\"row mb-3\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-10\">\n                <div class=\"h5 text-secondary text-capitalize\">1. personal details</div>\n            </div>\n        </div>\n        \n\n        <!-- display section personal detail form fields -->\n        <div class=\"form-group row\">\n            <label for=\"staticEmail\" class=\"text-right col-sm-2 col-form-label text-capitalize\">full name</label>\n            <div class=\"col-sm-6\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <input type=\"text\" class=\"form-control\" appTrimInput required formControlName=\"first_name\" maxlength=\"75\" autocomplete=\"off\" />\n                        <show-errors [control]=\"barberDetailForm.controls.first_name\"></show-errors>\n                    </div>\n                    <div class=\"col\">\n                        <input type=\"text\" class=\"form-control\" appTrimInput required formControlName=\"last_name\" maxlength=\"75\" autocomplete=\"off\" />\n                        <show-errors [control]=\"barberDetailForm.controls.last_name\"></show-errors>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"staticEmail\" class=\"text-right col-sm-2 col-form-label text-capitalize\">occupation</label>\n            <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" appTrimInput required formControlName=\"occupation\" maxlength=\"255\" autocomplete=\"off\" />\n                <show-errors [control]=\"barberDetailForm.controls.occupation\"></show-errors>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"staticEmail\" class=\"text-right col-sm-2 col-form-label text-capitalize\">company name</label>\n            <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" appTrimInput required formControlName=\"company_name\" maxlength=\"255\" autocomplete=\"off\" />\n                <small class=\"form-text text-muted\">If you want your invoices addressed to a company leave blank to use your full name</small>\n                <show-errors [control]=\"barberDetailForm.controls.company_name\"></show-errors>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"staticEmail\" class=\"text-right col-sm-2 col-form-label text-capitalize\">phone</label>\n            <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" appTrimInput required formControlName=\"number\" maxlength=\"255\" autocomplete=\"off\" />\n                <show-errors [control]=\"barberDetailForm.controls.number\"></show-errors>\n            </div>\n        </div>\n\n        <!-- display section 2 form detail -->\n        <div class=\"row mt-5 mb-3\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-10\">\n                <div class=\"h5 text-secondary text-capitalize\">2. address</div>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"staticEmail\" class=\"text-right col-sm-2 col-form-label text-capitalize\">address</label>\n            <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" appTrimInput required formControlName=\"address\" maxlength=\"255\" autocomplete=\"off\" />\n                <show-errors [control]=\"barberDetailForm.controls.address\"></show-errors>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"staticEmail\" class=\"text-right col-sm-2 col-form-label text-capitalize\">city</label>\n            <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" appTrimInput required formControlName=\"city\" maxlength=\"255\" autocomplete=\"off\" />\n                <show-errors [control]=\"barberDetailForm.controls.city\"></show-errors>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"staticEmail\" class=\"text-right col-sm-2 col-form-label text-capitalize\">state</label>\n            <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" appTrimInput required formControlName=\"state\" maxlength=\"255\" autocomplete=\"off\" />\n                <show-errors [control]=\"barberDetailForm.controls.state\"></show-errors>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"staticEmail\" class=\"text-right col-sm-2 col-form-label text-capitalize\">postcode</label>\n            <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" appTrimInput required formControlName=\"postcode\" maxlength=\"255\" autocomplete=\"off\" />\n                <show-errors [control]=\"barberDetailForm.controls.postcode\"></show-errors>\n            </div>\n        </div>\n\n        <!-- display section 3 form detail -->\n        <div class=\"row mt-5 mb-3\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-10\">\n                <div class=\"h5 text-secondary text-capitalize\">3. social links</div>\n            </div>\n        </div>\n\n        <!-- display the fields of social accounts belongs to user/barber -->\n        <div formGroupName=\"social\">\n            <!-- display each social accounts links -->\n            <div class=\"form-group row\" *ngFor=\"let social of barberDetailForm.controls.social.controls;let i = index\" [attr.data-index]=\"i\" [formGroupName]=\"i\">\n                <label for=\"staticEmail\" class=\"text-right col-sm-2 col-form-label text-capitalize\">{{social.value.social_link_name}}</label>\n                <div class=\"col-sm-6\">\n                    <input type=\"hidden\" formControlName=\"social_link_name\" />\n                    <input type=\"text\" class=\"form-control\" appTrimInput formControlName=\"social_link\" maxlength=\"255\" autocomplete=\"off\" />\n                    <show-errors [control]=\"barberDetailForm.controls.social.controls[i].social_link\"></show-errors>\n                </div>\n            </div>\n        </div>\n\n        <!-- seperator or line -->\n        <div class=\"line\"></div>\n\n        <!-- Submit Saloon form -->\n        <div class=\"text-left mt-4\">\n            <button [disabled]=\"!barberDetailForm.valid\" (click)=\"submitBarberDetail (barberDetailForm)\" class=\"btn btn-shokuni text-capitalize mr-3\">save</button>\n            <button type=\"reset\" class=\"btn btn-transparent text-capitalize\">cancel</button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/modules/saloon/barbers/components/barber-detail/right-sidebar/right-sidebar.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/modules/saloon/barbers/components/barber-detail/right-sidebar/right-sidebar.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: RightSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function() { return RightSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_saloon_barber_barber_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/saloon/barber/barber.service */ "./src/services/saloon/barber/barber.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RightSidebarComponent = /** @class */ (function () {
    function RightSidebarComponent(formBuilder, barber) {
        this.formBuilder = formBuilder;
        this.barber = barber;
    }
    RightSidebarComponent.prototype.ngOnInit = function () {
        this.barberDetailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(75)]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(75)]),
            occupation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]),
            company_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]),
            postcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8)]),
            social: this.formBuilder.array([this.createItem()])
        });
        // add number of days in schedule saloon-form field
        this.addSocialLinks();
        this.setBarberDetailValues();
    };
    RightSidebarComponent.prototype.createItem = function () {
        return this.formBuilder.group({
            social_link_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]),
            social_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)])
        });
    };
    /**
     * Append all required social links as per design
     *
     * @return void
     */
    RightSidebarComponent.prototype.addSocialLinks = function () {
        var _this = this;
        var control = this.barberDetailForm.controls.social;
        // delete first item from formBuilder
        control.removeAt(0);
        var socialLinks = ['linkedin', 'facebook', 'twitter', 'instagram'];
        Object(socialLinks).forEach(function (social) {
            // add day in saloon-schdule
            control.push(_this.formBuilder.group({
                social_link_name: social,
                social_link: null
            }));
        });
    };
    /**
     * Method to set saloon form values
     *
     * @return void
     */
    RightSidebarComponent.prototype.setBarberDetailValues = function () {
        var _this = this;
        // console.log (this.saloonDetail)
        Object.keys(this.barberDetailForm.controls).forEach(function (key) {
            // excludes saloon-schdule or other fields
            if (!['social'].includes(key)) {
                var value = (_this.barberDetail[key]) ? _this.barberDetail[key] : null;
                // check items from saloon detail
                if (_this.barberDetail.barber_profile && ['occupation', 'company_name', 'address', 'city', 'state', 'postcode'].includes(key) && _this.barberDetail.barber_profile[key]) {
                    // get value from barber_profile
                    value = _this.barberDetail.barber_profile[key];
                    console.log(value);
                }
                // set value of each form field
                _this.barberDetailForm.controls[key].setValue(value);
            }
        });
        // check if saloon-schedule values exists
        if (this.barberDetail.social) {
            var control_1 = this.barberDetailForm.controls.social;
            Object(this.barberDetail.social).forEach(function (day) {
                // check for Saloon-schdule from SaloonForm
                (control_1.value).forEach(function (val, index) {
                    // check for form-control day value and compar with saloon-detail
                    if (val.social_link_name === day.social_link_name) {
                        // update saloon-schedule form value
                        control_1.at(index).patchValue(day);
                        return false;
                    }
                });
            });
        }
    };
    /**
     * Submit barber form detail
     */
    RightSidebarComponent.prototype.submitBarberDetail = function (form) {
        var _this = this;
        // show loader
        this.barber.vars.displayLoader(true);
        var values = form.value;
        // remove empty/null keys from object
        Object.keys(values).forEach(function (key) { return (values[key] == null) && delete values[key]; });
        // request to update barber detail
        this.barber.updateSaloonBarberDetail(this.barberDetail.id, values).subscribe(function (res) {
            // hide loader
            _this.barber.vars.displayLoader(false);
            // show error
            _this.barber.vars.showNotification(_this.barber.vars.convertObjectToString(res.data), res.message, 'success');
        }, function (err) {
            // hide loader
            _this.barber.vars.displayLoader(false);
            // show error
            _this.barber.vars.showNotification(_this.barber.vars.convertObjectToString(err.errors), err.message);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RightSidebarComponent.prototype, "barberDetail", void 0);
    RightSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-right-sidebar',
            template: __webpack_require__(/*! ./right-sidebar.component.html */ "./src/modules/saloon/barbers/components/barber-detail/right-sidebar/right-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar.component.css */ "./src/modules/saloon/barbers/components/barber-detail/right-sidebar/right-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_saloon_barber_barber_service__WEBPACK_IMPORTED_MODULE_2__["BarberService"]])
    ], RightSidebarComponent);
    return RightSidebarComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/barbers/components/barbers/barbers.component.css":
/*!*****************************************************************************!*\
  !*** ./src/modules/saloon/barbers/components/barbers/barbers.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".width-3 {\n    width:3rem;\n}\n\n.page-link {\n    color: #D7D8DD;\n    border:none;\n    border-radius: 50%;\n    padding: .5rem 0.9rem;\n    background-color: #E6E6E6;\n}\n\n.page-item:first-child .page-link {\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n}\n\n.page-item:last-child .page-link {\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n}\n\n.table thead th {\n    border-bottom: none;\n    border-top: none;\n    color:#8895b7;\n    font-size:0.8rem;\n}\n\n.table td {\n    border-top: none;\n    font-size:11px;\n    font-weight: bold;\n    color:#b3b3bf;\n}\n\n.table td span{\n    font-size:9px;\n    font-weight: bold;\n    color:#b3b3bf;\n}\n\n.border-dashed-bottom {\n    border-bottom: 1px dashed #E6E6E6;\n}\n\n.product_name_class{\n    color:#adafb9;\n    font-size:0.8rem;\n    font-weight:500;\n}\n\n.product_amount_class{\n    color:#6963c5;\n    font-size:0.8rem;\n    font-weight:700;\n}\n\n.text-order-total {\n    color:#8e9abb;\n    font-size:10px;\n    font-weight:800;\n}\n\n.padding_total_amount{\n    padding-top:15px;\n}\n\n.color-saloon-name{\n    color: #696875 !important;\n}\n\n.bg-pagination-select {\n    background-color: #6D6CC9 !important;\n}\n\n.btn-transpert {\n    border: 1px solid #c2c2c2;\n    font-size: 0.8rem;\n    color: grey;\n    background-color: #FFF;\n}\n\n.modal-footer {\n    justify-content: end;\n}\n\n.barber_name{\n    color:#7b7b87 !important;\n    font-size:11px !important;\n    font-weight:700 !important;\n}"

/***/ }),

/***/ "./src/modules/saloon/barbers/components/barbers/barbers.component.html":
/*!******************************************************************************!*\
  !*** ./src/modules/saloon/barbers/components/barbers/barbers.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n  <!-- display page title -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <p class=\"text-capitalize h3 ml-4\">{{pageTitle}}</p>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col bg-white ml-5 mb-5 mr-5 mt-4 pb-1\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <p class=\"text-capitalize h5 ml-3 mt-4 mb-4\">{{subTitle}}</p>\n        </div>\n        <div class=\"col text-right mt-3\">\n          <span class=\"btn text-capitalize btn-transpert\" data-toggle=\"modal\" data-target=\"#inviteBarber\">invite barber</span>\n        </div>\n      </div>\n\n      <!-- seperator or line -->\n      <div class=\"line\"></div>\n\n\n      <!-- <Design table to display barbers information under the saloon -->\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th scope=\"col\" class=\"text-capitalize\">barber</th>\n            <th scope=\"col\" class=\"text-capitalize\">total cuts</th>\n            <th scope=\"col\" class=\"text-capitalize\">average cut time</th>\n            <th scope=\"col\" class=\"text-capitalize\">revenue</th>\n            <th scope=\"col\" class=\"text-capitalize\">last active</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"barberList\">\n          <tr *ngFor=\"let barber of barberList;\">\n            <td>\n              <div class=\"media\">\n                <img class=\"mr-3 rounded-circle width-3\" [src]=\"barber.image_url\" [alt]=\"barber.name\"/>\n                <a [routerLink]=\"getBarberRouterLink(barber.userId)\">\n                  <div class=\"media-body mt-3 barber_name\">{{barber.name}}</div>\n                </a>\n              </div>\n            </td>\n            <td>{{barber.total_cuts}}</td>\n            <td>{{barber.total_cutting_time_in_seconds | secondsToMinuits }}<span>min</span></td>\n            <td>{{barber.total_revenue | currency:'GBP'}}</td>\n            <td>{{barber.last_active_time * 1000 | date:'dd/MM/y H:mm' }}</td>\n          </tr>\n        </tbody>\n      </table>  <!--End of table to display barber list---->\n\n      <!-- seperator or line -->\n      <div class=\"line\"></div>\n\n      <!-- display barbers list pagination -->\n      <div class=\"row mt-5\" *ngIf=\"totalItems\">\n        <div class=\"col\">\n          <!--Pagination -->\n          <app-pagination [totalItems]=\"totalItems\" [currentPage]=\"currentPage\" (childEvent)=\"getSaloonBarbers ($event)\"></app-pagination>\n        </div>\n      </div>  <!-- display barbers list pagination -->\n\n    </div>\n  </div>\n\n</div>\n\n<!-- Invite barber Modal -->\n<div class=\"modal fade bd-example-modal-sm\" id=\"inviteBarber\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"inviteBarberLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title text-capitalize\" id=\"inviteBarberLabel\">invite barber</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form [formGroup]=\"inviteForm\" novalidate>\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label class=\"h6 text-capitalize\">barber email:</label>\n            <input type=\"text\" class=\"form-control\" appTrimInput required formControlName=\"email\" maxlength=\"255\" autocomplete=\"off\" />\n            <show-errors [control]=\"inviteForm.controls.email\"></show-errors>\n          </div>\n        </div>\n        <div class=\"modal-footer text-left\">\n          <button type=\"button\" [disabled]=\"!inviteForm.valid\" class=\"btn btn-shokuni text-capitalize\" (click)=\"submitInviteForm (inviteForm)\" data-dismiss=\"modal\">invite</button>\n          <button type=\"button\" class=\"btn btn-transpert text-capitalize\" data-dismiss=\"modal\">cancel</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/saloon/barbers/components/barbers/barbers.component.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/saloon/barbers/components/barbers/barbers.component.ts ***!
  \****************************************************************************/
/*! exports provided: BarbersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarbersComponent", function() { return BarbersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_saloon_barber_barber_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/saloon/barber/barber.service */ "./src/services/saloon/barber/barber.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BarbersComponent = /** @class */ (function () {
    function BarbersComponent(barber, activeRoute) {
        this.barber = barber;
        this.activeRoute = activeRoute;
        this.pageTitle = 'barbers';
        this.subTitle = 'manage barbers';
    }
    BarbersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // /define inveitatio form
        this.inviteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])
        });
        setTimeout(function () {
            _this.getSaloonBarbers();
        }, this.barber.vars.onInt_request_delay_in_ms);
    };
    /**
     * method to get list of saloon barbers
     *
     * @param number page
     *
     * @returns void
     */
    BarbersComponent.prototype.getSaloonBarbers = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        // show loader
        this.barber.vars.displayLoader(true);
        this.barber.getSaloonBarbers(page, this.activeRoute.snapshot.params["saloonId"] || null).subscribe(function (res) {
            // hide loader
            _this.barber.vars.displayLoader(false);
            // assign barber orders
            _this.barberList = res.data.data;
            _this.currentPage = res.data.current_page;
            _this.totalItems = res.data.total;
        }, function (err) {
            // hide loader
            _this.barber.vars.displayLoader(false);
            // display errors notification
            _this.barber.vars.showNotification(_this.barber.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Method to submit invite barber
     *
     * @param NgForm
     *
     * @return void
     */
    BarbersComponent.prototype.submitInviteForm = function (form) {
        var _this = this;
        // show loader
        this.barber.vars.displayLoader(true);
        this.barber.inviteBarber(form.value, this.activeRoute.snapshot.params["saloonId"] || null).subscribe(function (res) {
            // hide loader
            _this.barber.vars.displayLoader(false);
            _this.barber.vars.showNotification(_this.barber.vars.convertObjectToString(res.data), res.message, 'success');
        }, function (err) {
            // hide loader
            _this.barber.vars.displayLoader(false);
            // display errors notification
            _this.barber.vars.showNotification(_this.barber.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Get router link to send
     *
     * @param number barber id
     *
     * @return string
     */
    BarbersComponent.prototype.getBarberRouterLink = function (barberId) {
        // check for user role
        if (this.barber.vars.getUserRole() === 'admin') {
            return '/admin/barbers/' + barberId;
        }
        return '/saloon/barbers/' + barberId;
    };
    BarbersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-barbers',
            template: __webpack_require__(/*! ./barbers.component.html */ "./src/modules/saloon/barbers/components/barbers/barbers.component.html"),
            styles: [__webpack_require__(/*! ./barbers.component.css */ "./src/modules/saloon/barbers/components/barbers/barbers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_saloon_barber_barber_service__WEBPACK_IMPORTED_MODULE_2__["BarberService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BarbersComponent);
    return BarbersComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/components/dashboard/cut-detail/cut-detail.component.css":
/*!*************************************************************************************!*\
  !*** ./src/modules/saloon/components/dashboard/cut-detail/cut-detail.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6{\n    color:#8a8a93 !important;\n    font-weight: bold !important;\n    font-size:11px !important;\n}\np{\n    color:#bdbcc6 !important;\n    font-size:9px !important;\n    font-weight: 600 !important;\n}\n.cut_break{\n    color:#5c5b69 !important;\n    font-weight:600 !important;\n    font-size:14px !important;\n}\n.avatar {\n    width: 3rem;\n}\n.text-medium {\n    font-size: 14px;\n}\n.text-danger {\n    color: #bf6d70!important;\n}\n.barber_name{\n    color:#9d9ca5 !important;\n    font-size:9px !important;\n    font-weight: 500 !important;\n}\n.breakdown-width {\n    width: 1.5rem;\n\n\n    background-color: transparent;\n  display: inline-block;\n  width: 10px;\n  height: 0px;\n  margin-right: 3px;\n}"

/***/ }),

/***/ "./src/modules/saloon/components/dashboard/cut-detail/cut-detail.component.html":
/*!**************************************************************************************!*\
  !*** ./src/modules/saloon/components/dashboard/cut-detail/cut-detail.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- dislay salon cut detail short details -->\n<div class=\"row shadow m-3 bg-white\">\n  <div class=\"col\">\n    <div class=\"row p-4\">\n      <div class=\"col\">\n        <h6 class=\"text-dark text-capitalize\">Average Cut Time</h6>\n        <p class=\"text-black-50 text-capitalize\">Time Spent On Cuts</p>\n      </div>\n      <div class=\"col\">\n        <h5 class=\"text-danger font-weight-bold mt-3\">{{ dashboard?.avg_cut_in_sec | secondsToMinuits }}<sub>m</sub></h5>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col\">\n    <div class=\"row p-4\">\n      <div class=\"col\">\n        <h6 class=\"text-dark text-capitalize\">Cuts</h6>\n        <p class=\"text-black-50 text-capitalize\">Total Number of Cuts</p>\n      </div>\n      <div class=\"col\">\n        <h5 class=\"text-danger font-weight-bold mt-3\">{{ dashboard?.total_number_of_cuts }}</h5>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col\">\n    <div class=\"row p-4\">\n      <div class=\"col\">\n        <h6 class=\"text-dark text-capitalize\">Total revenue</h6>\n        <p class=\"text-black-50 text-capitalize\">All Customs Value</p>\n      </div>\n      <div class=\"col\">\n        <h5 class=\"text-danger font-weight-bold mt-3\">{{ dashboard?.total_profit_made | currency:'GBP' }}</h5>\n      </div>\n    </div>\n  </div>    \n</div>\n\n<!-- display barber of the saloon having highest performance-->\n<div class=\"row shadow m-3\">\n    <div class=\"col bg-white shadow p-4\">\n      <div class=\"h5 text-capitalize font-weight-normal text-dark cut_break\">cut breakdown</div>\n\n      <div class=\"row align-items-end\" *ngIf=\"breakDown\">\n        <div *ngFor=\"let break of breakDown\" class=\"col bg-primary mr-1\" [style.height.px]=\"calculateBreakDownPercentage(break?.count)\"></div>\n      </div>\n      <div class=\"row text-center\">\n        <div *ngFor=\"let break of breakDown\" class=\"col\">{{ convertTimeIntoGMT (break.time) }}</div>\n      </div>\n    </div>\n\n    <!-- top barber revenue -->\n    <div class=\"col bg-white shadow p-4 ml-3\">\n      <div class=\"h5 text-capitalize font-weight-normal text-dark cut_break\">top barber revenue</div>\n      <div class=\"row p-4\">\n        <div class=\"col\">\n          <div class=\"media\">\n            <img class=\"mr-3 avatar rounded-circle\" [src]=\"dashboard?.top_barber_revenue?.image_url\" [alt]=\"dashboard?.top_barber_revenue?.name\">\n            <div class=\"media-body\">\n              <div class=\"mt-2 mr-3 text-medium font-weight-normal text-dark barber_name\">{{ dashboard?.top_barber_revenue?.name }}</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col text-right\">\n          <div class=\"text-danger font-weight-bold text-medium\">{{ dashboard?.top_barber_revenue?.amt | currency:'GBP' }}</div>\n          <div class=\"text-black-50 font-weight-light small\">revenue</div>\n        </div>\n      </div>\n\n      <div class=\"row text-center border-top pt-4\">\n        <div class=\"col border-right\">\n          <div class=\"text-danger font-weight-bold text-medium text-center\">{{ dashboard?.top_barber_revenue?.count }}</div>\n          <div class=\"text-black-50 font-weight-light small\">cuts</div>\n        </div>\n        <div class=\"col\">\n          <div class=\"text-danger font-weight-bold text-medium\">{{ dashboard?.top_barber_revenue?.avg_time_in_sec | secondsToMinuits }}</div>\n          <div class=\"text-black-50 font-weight-light text-capitalize small\">avg time</div>\n        </div>\n      </div>\n    </div>  <!---top barber revenue-->\n\n    <!-- highest cut count -->\n    <div class=\"col bg-white shadow p-4 ml-3\">\n      <div class=\"h5 text-capitalize font-weight-normal text-dark cut_break\">highest cut count</div>\n\n      <div class=\"row p-4\">\n        <div class=\"col\">\n          <div class=\"media\">\n            <img class=\"mr-3 avatar rounded-circle\" [src]=\"dashboard?.highest_cut_count?.image_url\" [alt]=\"dashboard?.highest_cut_count?.name\">\n            <div class=\"media-body\">\n              <div class=\"mt-2 mr-3 text-medium font-weight-normal text-dark barber_name\">{{ dashboard?.highest_cut_count?.name }}</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col text-right\">\n          <div class=\"text-danger font-weight-bold text-medium mr-1\">{{ dashboard?.highest_cut_count?.count }}</div>\n          <div class=\"text-black-50 font-weight-light small\">cuts</div>\n        </div>\n      </div>\n\n      <div class=\"row text-center border-top pt-4\">\n        <div class=\"col border-right\">\n          <div class=\"text-danger font-weight-bold text-medium\">{{ dashboard?.highest_cut_count?.amt | currency:'GBP' }}</div>\n          <div class=\"text-black-50 font-weight-light text-capitalize small\">revenue</div>\n        </div>\n        <div class=\"col\">\n            <div class=\"text-danger font-weight-bold text-medium\">{{ dashboard?.highest_cut_count?.avg_time_in_sec | secondsToMinuits }}</div>\n          <div class=\"text-black-50 font-weight-light small\">avg time</div>\n        </div>\n      </div>\n      \n    </div>  <!---highest cut count-->\n</div>"

/***/ }),

/***/ "./src/modules/saloon/components/dashboard/cut-detail/cut-detail.component.ts":
/*!************************************************************************************!*\
  !*** ./src/modules/saloon/components/dashboard/cut-detail/cut-detail.component.ts ***!
  \************************************************************************************/
/*! exports provided: CutDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CutDetailComponent", function() { return CutDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_saloon_saloon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/saloon/saloon.service */ "./src/services/saloon/saloon.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CutDetailComponent = /** @class */ (function () {
    function CutDetailComponent(saloon) {
        this.saloon = saloon;
        this.totalBreakDown = 0;
    }
    CutDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var today = new Date();
        this.selectedDate = today.getTime();
        setTimeout(function () {
            _this.getSaloonDashboard();
            _this.getSaloonCutBreakDown();
        }, this.saloon.vars.onInt_request_delay_in_ms);
    };
    CutDetailComponent.prototype.getSaloonDashboard = function () {
        var _this = this;
        var today = new Date(this.selectedDate);
        var date = (today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());
        // show loader
        this.saloon.vars.displayLoader(true);
        this.saloon.getSaloonDashboard(date, this.saloonId).subscribe(function (res) {
            _this.dashboard = res.data;
            // show loader
            _this.saloon.vars.displayLoader(false);
        }, function (err) {
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Method to fetch cut breakdown of a date
     */
    CutDetailComponent.prototype.getSaloonCutBreakDown = function () {
        var _this = this;
        var today = new Date(this.selectedDate);
        var date = '2018-07-03'; //(today.getFullYear () + '-'+ (('0' + (today.getMonth () + 1)).toString()).slice (-2) + '-' + (('0' + (today.getDate ())).toString()).slice(-2));
        // show loader
        this.saloon.vars.displayLoader(true);
        this.saloon.getSaloonPaymentBreakDown(date, this.saloonId).subscribe(function (res) {
            _this.calculateBreakDown(res.data);
            // show loader
            _this.saloon.vars.displayLoader(false);
        }, function (err) {
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * method to calculate number of breakDown
     *
     * @param Object breakdown
     *
     * @return void
     */
    CutDetailComponent.prototype.calculateBreakDown = function (breakDownData) {
        var breakDown = {};
        // calculate number of breakDown each hour
        for (var key in breakDownData) {
            // convert key into date-time
            var breakTime = new Date(breakDownData[key] * 1000);
            breakDown[breakTime.getHours()] = (breakTime.getHours() in breakDown) ? (breakDown[breakTime.getHours()] + 1) : 1;
            this.totalBreakDown += 1;
        }
        this.breakDown = Object.keys(breakDown).map(function (key) { return { time: key, count: breakDown[key] }; });
    };
    /**
     * method to calculate breakdown percentage
     *
     * @param number breakDown
     *
     * @return number
     */
    CutDetailComponent.prototype.calculateBreakDownPercentage = function (breakDown) {
        if (breakDown) {
            return Math.ceil((breakDown / this.totalBreakDown) * 100);
        }
    };
    /**
     * method to count Time GMT
     *
     * @param number time
     *
     * @return string
     */
    CutDetailComponent.prototype.convertTimeIntoGMT = function (time) {
        return (time > 11) ? (((time - 12) ? (time - 12) : 12) + 'pm') : (time + 'am');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CutDetailComponent.prototype, "saloonId", void 0);
    CutDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cut-detail',
            template: __webpack_require__(/*! ./cut-detail.component.html */ "./src/modules/saloon/components/dashboard/cut-detail/cut-detail.component.html"),
            styles: [__webpack_require__(/*! ./cut-detail.component.css */ "./src/modules/saloon/components/dashboard/cut-detail/cut-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_saloon_saloon_service__WEBPACK_IMPORTED_MODULE_1__["SaloonService"]])
    ], CutDetailComponent);
    return CutDetailComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/components/dashboard/cut-history/cut-history.component.css":
/*!***************************************************************************************!*\
  !*** ./src/modules/saloon/components/dashboard/cut-history/cut-history.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-sm {\n    font-size: 12px;\n}\n\n.avatar {\n    width: 3rem;\n}\n\np{\n    color:#595b64 !important;\n    font-size:14px !important;\n    font-weight:600 !important;\n}\n\nth{\n    color:#8896b7 !important;\n    font-size:10px !important;\n    font-weight:bold !important;\n}\n\n.cust_name{\n    color:#8a8994 !important;\n    font-size:11px !important;\n    font-weight: bold !important;\n}\n\ntd{\n    color:#c3c3cb !important;\n    font-size:11px !important;\n    font-weight: 600 !important;\n}"

/***/ }),

/***/ "./src/modules/saloon/components/dashboard/cut-history/cut-history.component.html":
/*!****************************************************************************************!*\
  !*** ./src/modules/saloon/components/dashboard/cut-history/cut-history.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- display progress steps-->\n<div class=\"row m-3 shadow\">\n  <div class=\"col bg-white p-4\">\n    <p class=\"text-capitalize mt-4 mb-4\">{{pageTitle}}</p>\n\n    <!-- display progress circle -->\n    <div class=\"line\"></div>\n\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th scope=\"col\" class=\"text-capitalize font-weight-bold text-sm text-muted\">customer</th>\n                  <th scope=\"col\" class=\"text-capitalize font-weight-bold text-sm text-muted\">time</th>\n                  <th scope=\"col\" class=\"text-capitalize font-weight-bold text-sm text-muted\">date</th>\n                  <th scope=\"col\" class=\"text-capitalize font-weight-bold text-sm text-muted\">total</th>\n                </tr>\n              </thead>\n              <tbody *ngIf=\"cutHistory\">\n                <tr *ngFor=\"let cut of cutHistory;\">\n                  <td scope=\"row\" class=\"text-capitalize font-weight-bold text-sm text-muted\">\n                    <div class=\"media\">\n                      <img class=\"mr-3 avatar rounded-circle\" [src]=\"cut?.image_url\" [alt]=\"cut?.customer_name\">\n                      <div class=\"media-body\">\n                        <a [routerLink]=\"getCustomerDashboard(cut?.customer_id)\" class=\"mt-3 text-capitalize font-weight-bold text-sm text-dark cust_name\">{{ cut?.customer_name }}</a>\n                      </div>\n                    </div>\n                  </td>\n                  <td scope=\"row\" class=\"text-capitalize font-weight-normal text-sm text-muted\">\n                    {{ cut?.created_at * 1000 | date: 'hh:mm' }}<sub>{{ lowerCase (cut?.created_at * 1000 | date: 'a') }}</sub>\n                  </td>\n                  <td scope=\"row\" class=\"text-capitalize font-weight-normal text-sm text-muted\">\n                      {{ cut?.created_at * 1000 | date: 'dd/MM/yyyy' }}\n                  </td>\n                  <td scope=\"row\" class=\"text-capitalize font-weight-normal text-sm text-muted\">\n                      {{ cut?.payment?.final_amount | currency: 'GBP' }}\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/modules/saloon/components/dashboard/cut-history/cut-history.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/modules/saloon/components/dashboard/cut-history/cut-history.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CutHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CutHistoryComponent", function() { return CutHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_saloon_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/saloon/orders/orders.service */ "./src/services/saloon/orders/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CutHistoryComponent = /** @class */ (function () {
    function CutHistoryComponent(order) {
        this.order = order;
        this.pageTitle = 'cut history';
    }
    CutHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getSaloonOrdersCutHistory();
        }, this.order.vars.onInt_request_delay_in_ms);
    };
    CutHistoryComponent.prototype.getSaloonOrdersCutHistory = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        // show loader
        this.order.vars.displayLoader(true);
        this.order.getSaloonOrdersCutHistory(page, this.saloonId).subscribe(function (res) {
            _this.cutHistory = res.data.data;
            // show loader
            _this.order.vars.displayLoader(false);
        }, function (err) {
            // show loader
            _this.order.vars.displayLoader(false);
            // show error
            _this.order.vars.showNotification(_this.order.vars.convertObjectToString(err.errors), err.message);
        });
    };
    CutHistoryComponent.prototype.lowerCase = function (str) {
        return str ? str.toLowerCase() : null;
    };
    CutHistoryComponent.prototype.getCustomerDashboard = function (customerId) {
        if (customerId === void 0) { customerId = null; }
        // check for users
        if (localStorage.getItem('user_detail') && (JSON.parse(localStorage.getItem('user_detail'))['role'] == 'admin') && customerId) {
            return '/admin/customer/' + customerId + '/dashboard';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CutHistoryComponent.prototype, "saloonId", void 0);
    CutHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cut-history',
            template: __webpack_require__(/*! ./cut-history.component.html */ "./src/modules/saloon/components/dashboard/cut-history/cut-history.component.html"),
            styles: [__webpack_require__(/*! ./cut-history.component.css */ "./src/modules/saloon/components/dashboard/cut-history/cut-history.component.css")]
        }),
        __metadata("design:paramtypes", [_services_saloon_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]])
    ], CutHistoryComponent);
    return CutHistoryComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/components/dashboard/dashboard.component.css":
/*!*************************************************************************!*\
  !*** ./src/modules/saloon/components/dashboard/dashboard.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropicon {\n    float: right;\n    margin-right: 2px;\n    height: 35px;\n    width: 35px;\n    line-height: 0;\n    padding-left: 11px;\n    margin-top: -31px;\n}\n.datetex{width: 105px;color: #abacb8;font-size: 10px;padding-left: 10px; \n    text-align:left;background: white;border-radius: 15px;line-height: 30px;float: right;margin-right: 14px;}\n.width-3 {\n        width:3rem;\n    }\n    "

/***/ }),

/***/ "./src/modules/saloon/components/dashboard/dashboard.component.html":
/*!**************************************************************************!*\
  !*** ./src/modules/saloon/components/dashboard/dashboard.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n  <!-- display page title -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <p class=\"text-capitalize h3 ml-4\">{{pageTitle}}</p>\n    </div>\n    <div class=\"col-md-8 col-sm-8 col-xs-8\" style=\"margin-left: -1%;\">\n      <p class=\"datetex\">Today: <span class=\"dd\">{{ selectedDate | date:'MMM dd' }}</span> \n        <!--  <i class=\"fa dropicon\">&#xf078;</i> -->\n        <my-date-picker class=\"dropicon\" [options]=\"myDatePickerOptions\" (dateChanged)=\"onDateChanged($event)\"></my-date-picker>\n\n       </p>\n   </div>\n  </div> \n  \n  <!-- End of Row Class---->\n\n  <!-- display progress screen -->\n  <app-progress></app-progress>\n\n  <!-- display saloon short information -->\n  <app-saloon-short-detail [saloonId]=\"saloonId\"></app-saloon-short-detail>\n\n  <!-- display cut details -->\n  <app-cut-detail [saloonId]=\"saloonId\"></app-cut-detail>\n\n  <!-- display cut history -->\n  <app-cut-history [saloonId]=\"saloonId\"></app-cut-history>\n\n  <!-- display forumn information -->\n  <app-barber-join-discussion></app-barber-join-discussion>\n</div>"

/***/ }),

/***/ "./src/modules/saloon/components/dashboard/dashboard.component.ts":
/*!************************************************************************!*\
  !*** ./src/modules/saloon/components/dashboard/dashboard.component.ts ***!
  \************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/admin/admin.service */ "./src/services/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(activeRoute, admin) {
        this.activeRoute = activeRoute;
        this.admin = admin;
        this.pageTitle = 'dashboard';
        this.myDatePickerOptions = {
            sunHighlight: true,
            satHighlight: true,
            markCurrentDay: true,
            markCurrentMonth: true,
            markCurrentYear: true,
            showClearDateBtn: false,
            alignSelectorRight: true,
            componentDisabled: false,
            firstDayOfWeek: 'su',
            // disableUntil: this.setToday(),
            disableSince: this.setToday(),
            showInputField: false,
            openSelectorOnInputClick: true,
            inline: false,
            editableDateField: false,
            indicateInvalidDate: true,
            // dateFormat: 'yyyy-mm-dd',
            openSelectorTopOfInput: false
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.saloonId = this.activeRoute.snapshot.params["saloonId"] || null;
        var today = new Date();
        this.selectedDate = today.getTime();
    };
    DashboardComponent.prototype.setToday = function () {
        var today = new Date();
        return { year: today.getFullYear(), month: (today.getMonth() + 1), day: (today.getDate() + 1) };
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/modules/saloon/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/modules/saloon/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/components/dashboard/progress/progress.component.css":
/*!*********************************************************************************!*\
  !*** ./src/modules/saloon/components/dashboard/progress/progress.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".steps-form-2 {\n    display: table;\n    width: 100%;\n    position: relative; }\n.steps-form-2 .steps-row-2 {\n    display: table-row; }\n.steps-form-2 .steps-row-2:before {\n    top: 14px;\n    bottom: 0;\n    position: absolute;\n    content: \" \";\n    width: 100%;\n    height: 4px;\n    background-color: #dee1e8; }\n.steps-form-2 .steps-row-2 .steps-step-2 {\n    display: table-cell;\n    text-align: center;\n    position: relative; }\n.steps-form-2 .steps-row-2 .steps-step-2 p {\n    margin-top: 0.5rem; }\n.steps-form-2 .steps-row-2 .steps-step-2 button[disabled] {\n    opacity: 1 !important;\n    filter: alpha(opacity=100) !important; }\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2 {\n    width: 70px;\n    height: 70px;\n    border: 4px solid #dee1e8;\n    background-color: white !important;\n    color: #59698D !important;\n    border-radius: 50%;\n    padding: 22px 18px 15px 18px;\n    margin-top: -22px; }\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2:hover {\n    border: 2px solid #4285F4;\n    color: #4285F4 !important;\n    background-color: white !important; }\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2 .fa {\n    font-size: 1.7rem; }\np{\n        color:#5b5e66 !important;\n        font-weight: bold !important;\n    }\np.cli_inform{\n    color:#81838e;font-size:8px;\n}\n/* Css Class for progree */\n/* Start process-step */\n.confirmation{\n        color:#81838e !important;\n        font-weight:bold !important;\n        font-size:10px !important;\n      }\n.stepwizard-step p {\n    margin-top: 10px;    \n  }\n.stepwizard-row {\n    display: table-row;\n  }\n.stepwizard {\n    display: table;     \n    width: 100%;\n    position: relative;\n  }\n.stepwizard-step button[disabled] {\n    opacity: 1 !important;\n    filter: alpha(opacity=100) !important;\n  }\n.stepwizard-row:before {\n    top: 14px;\n    bottom: 0;\n    position: absolute;\n    content: \" \";\n    width: 66.8%;\n    height: 3px;\n    background-color: #ccc;\n   /*  z-order: 0; */\n   left: 181px;\n    \n  }\n.stepwizard-step {    \n    display: table-cell;\n    text-align: center;\n    position: relative;\n  }\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  line-height: 1.428571429;\n  border-radius: 15px;\n  }\n.btn-primary {\n  color: #fff;\n  background-color: #132149;\n  border-color: #132149;\n}\n/*  Ends here*/\nbutton.btn.btn-default.btn-circle:hover {\n    background: #132149;\n    color: #fff;\n}\n"

/***/ }),

/***/ "./src/modules/saloon/components/dashboard/progress/progress.component.html":
/*!**********************************************************************************!*\
  !*** ./src/modules/saloon/components/dashboard/progress/progress.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- display progress steps-->\n<div class=\"row m-3 shadow\">\n  <div class=\"col bg-white\">\n    <p class=\"text-capitalize mt-4 mb-4\">{{pageTitle}}</p>\n\n    <!-- display progress circle -->\n    <div class=\"row p-4\">\n      <!-- Stepper -->\n     <!--  <div class=\"steps-form-2\">\n        <div class=\"steps-row-2 setup-panel-2 d-flex justify-content-between\">\n          <div class=\"steps-step-2\">\n            <span class=\"btn btn-amber btn-circle-2 waves-effect ml-0\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Basic Information\">\n              <i class=\"fa fa-folder-open-o\" aria-hidden=\"true\"></i>\n            </span>\n          </div>\n          <div class=\"steps-step-2\">\n            <span class=\"btn btn-blue-grey btn-circle-2 waves-effect\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Personal Data\">\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </span>\n          </div>\n          <div class=\"steps-step-2\">\n            <span class=\"btn btn-blue-grey btn-circle-2 waves-effect\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Terms and Conditions\">\n              <i class=\"fa fa-photo\" aria-hidden=\"true\"></i>\n            </span>\n          </div>\n        </div>\n      </div> -->\n      <div class=\"stepwizard\">\n          <div class=\"stepwizard-row\"> \n               <div class=\"stepwizard-step\">\n                   <button type=\"button\" class=\"btn btn-default btn-circle active\"><i class=\"fa\" aria-hidden=\"true\">&#xf041;</i></button>\n                   <p class=\"confirmation\">1. Client Information</p>\n                   <p class=\"text-center cli_inform\">Client information about client information</p>\n               </div>\n               <div class=\"stepwizard-step\">\n                   <button type=\"button\" class=\"btn btn-default btn-circle\"><i class=\"fa\" aria-hidden=\"true\">&#xf041;</i></button>\n                   <p class=\"confirmation\">Account Setup</p>\n                   <p class=\"text-center cli_inform\">Client information about client information</p>\n               \n                 </div>\n               <div class=\"stepwizard-step\">\n                   <button type=\"button\" class=\"btn btn-default btn-circle\"><i class=\"fa\">&#xf041;</i></button>\n                   <p class=\"confirmation\">Confirmation</p>\n                   <p class=\"text-center cli_inform\">Client information about client information</p>\n                 \n                 </div> \n           </div> \n       </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/saloon/components/dashboard/progress/progress.component.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/saloon/components/dashboard/progress/progress.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
        this.pageTitle = 'verification progress';
    }
    ProgressComponent.prototype.ngOnInit = function () {
    };
    ProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__(/*! ./progress.component.html */ "./src/modules/saloon/components/dashboard/progress/progress.component.html"),
            styles: [__webpack_require__(/*! ./progress.component.css */ "./src/modules/saloon/components/dashboard/progress/progress.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/components/pay-admin/pay-admin.component.css":
/*!*************************************************************************!*\
  !*** ./src/modules/saloon/components/pay-admin/pay-admin.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n    color:#575a63;\n    font-size:11px;\n    font-weight:bold;\n}\n.p_text{\n    color: #4c4b51;\n    font-size:9px;\n    font-weight:600;\n}\nlabel{\n    font-size:10px;\n    font-weight:bold;\n    color:#78797c;\n}"

/***/ }),

/***/ "./src/modules/saloon/components/pay-admin/pay-admin.component.html":
/*!**************************************************************************!*\
  !*** ./src/modules/saloon/components/pay-admin/pay-admin.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- display payment-info change screen -->\n<div class=\"row ml-4 pb-5 mr-4\">\n  <div class=\"col bg-white\">\n    <p class=\"text-capitalize mt-4 mb-4\">{{pageTitle}}</p>\n  \n    <!-- seperator or line -->\n    <div class=\"line\"></div>\n  \n    <div class=\"col-5 pb-4\">\n      <!-- design payment information HTML code -->\n      <form [formGroup]=\"paymentInfoForm\" novalidate>\n        <div class=\"form-group\">\n          <label class=\"h6 text-capitalize\">Total Ammount</label>\n          <input type=\"text\" class=\"form-control no-side-border\" appTrimInput name=\"total_ammount\" maxlength=\"255\" autocomplete=\"off\" readonly value=\"{{ salesSummary?.card_revenue + salesSummary?.cash_revenue | currency:'GBP' }}\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"h6 required text-capitalize\">account to be paid</label>\n          <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required name=\"paid_ammount\" maxlength=\"255\" autocomplete=\"off\">\n        </div>\n\n        <!-- seperator or line -->\n        <div class=\"line mt-4 mb-4\"></div>\n\n        <small><span class=\"required\"></span> indicates required</small>\n        <div class=\"text-left mt-2\">\n          <button class=\"btn btn-shokuni text-capitalize mr-3\"  [disabled]=\"!paymentInfoForm.valid\" (click)=\"submitPaymentInfoForm (paymentInfoForm)\">Pay</button>\n          <button type=\"reset\" class=\"btn btn-transparent text-capitalize\">cancel</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/saloon/components/pay-admin/pay-admin.component.ts":
/*!************************************************************************!*\
  !*** ./src/modules/saloon/components/pay-admin/pay-admin.component.ts ***!
  \************************************************************************/
/*! exports provided: PayAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayAdminComponent", function() { return PayAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_saloon_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/saloon/orders/orders.service */ "./src/services/saloon/orders/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { SaloonService } from '../../../../../services/saloon/saloon.service';
var PayAdminComponent = /** @class */ (function () {
    function PayAdminComponent(order) {
        this.order = order;
        this.pageTitle = 'Pay Barber';
    }
    PayAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getSalesSummary();
        }, this.order.vars.onInt_request_delay_in_ms);
    };
    /**
   * Request to get list of all saloon orders
   *
   * @param number page
   *
   * @return void
   */
    PayAdminComponent.prototype.getSalesSummary = function () {
        var _this = this;
        // show loader
        this.order.vars.displayLoader(true);
        this.order.getSalesSummary(this.saloonId).subscribe(function (res) {
            _this.salesSummary = res.data;
            // show loader
            _this.order.vars.displayLoader(false);
            // show error
            _this.order.vars.showNotification('Sales Summary successfully found', res.message, 'success');
        }, function (err) {
            // show loader
            _this.order.vars.displayLoader(false);
            // show error
            _this.order.vars.showNotification(_this.order.vars.convertObjectToString(err.errors), err.message);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PayAdminComponent.prototype, "saloonId", void 0);
    PayAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pay-admin',
            template: __webpack_require__(/*! ./pay-admin.component.html */ "./src/modules/saloon/components/pay-admin/pay-admin.component.html"),
            styles: [__webpack_require__(/*! ./pay-admin.component.css */ "./src/modules/saloon/components/pay-admin/pay-admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_saloon_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]])
    ], PayAdminComponent);
    return PayAdminComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/components/sales/entries/entries.component.css":
/*!***************************************************************************!*\
  !*** ./src/modules/saloon/components/sales/entries/entries.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar {\n    max-width: 3rem;\n}\nth{\n    color:#8d9aba;\n    font-size:9px;\n    font-weight: bold;\n}\ntd{\n    color:#c7c7cf;\n    font-size:11px;\n    font-weight: bold;\n}\nspan{\n    color:#807f8b;\n    font-size:11px;\n    font-weight: bold;\n}\np{\n    color:#555861 !important;\n    font-weight:bold;\n    font-size:12px;\n}"

/***/ }),

/***/ "./src/modules/saloon/components/sales/entries/entries.component.html":
/*!****************************************************************************!*\
  !*** ./src/modules/saloon/components/sales/entries/entries.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- order entries -->\n<div class=\"row ml-4 mb-3 mr-4\">\n  <div class=\"col bg-white\">\n    <p class=\"text-capitalize h5 ml-3 mt-4 mb-4\">{{pageTitle}}</p>\n\n    <!-- seperator or line -->\n    <div class=\"line\"></div>\n\n    <div class=\"col\">\n\n      <!-- display Order Entries -->\n      <table class=\"table\">\n            <thead>\n              <tr>\n                <th scope=\"col\" class=\"text-capitalize\">barber</th>\n                <th scope=\"col\" class=\"text-capitalize\">products</th>\n                <th scope=\"col\" class=\"text-capitalize\">cut time</th>\n                <th scope=\"col\" class=\"text-capitalize\">payment</th>\n                <th scope=\"col\" class=\"text-capitalize\">time</th>\n                <th scope=\"col\" class=\"text-capitalize\">date</th>\n                <th scope=\"col\" class=\"text-capitalize\">total</th>\n              </tr>\n            </thead>\n            <tbody *ngIf=\"barberEntries\">\n              <tr *ngFor=\"let order of barberEntries\">\n                  <td scope=\"row\" class=\"text-capitalize\">\n                  <div class=\"media\">\n                    <img class=\"mr-3 avatar rounded-circle\" [src]=\"order?.barber?.image_url\" [alt]=\"order?.barber?.name\">\n                    <div class=\"media-body\">\n                      <span>{{order?.barber?.name}}</span>\n                    </div>\n                  </div>\n                </td>\n                <td scope=\"row\" class=\"text-capitalize\">{{ displayServiceName (order?.services) }}</td>\n                <td scope=\"row\" class=\"text-capitalize\">{{ order?.total_time | secondsToMinuits }}<small>min</small></td>\n                <td scope=\"row\" class=\"text-capitalize\">{{ order?.payment?.payment_mode }}</td>\n                <td scope=\"row\" class=\"text-capitalize\">{{ order?.created_at * 1000 | date:'hh:M a' }}</td>\n                <td scope=\"row\" class=\"text-capitalize\">{{ order?.created_at * 1000 | date:'dd/MM/yy' }}</td>\n                <td scope=\"row\" class=\"text-capitalize\">{{ order?.payment?.final_amount | currency:'GBP' }}</td>\n              </tr>\n            </tbody>\n      </table>\n\n      <!-- display barbers list pagination -->\n      <div class=\"row mt-5\" *ngIf=\"totalItems\">\n        <div class=\"col\">\n          <app-pagination [totalItems]=\"totalItems\" [currentPage]=\"currentPage\" (childEvent)=\"getSaloonOrders ($event)\"></app-pagination>\n        </div>\n      </div>  <!-- display barbers list pagination -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/saloon/components/sales/entries/entries.component.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/saloon/components/sales/entries/entries.component.ts ***!
  \**************************************************************************/
/*! exports provided: EntriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntriesComponent", function() { return EntriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_saloon_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/saloon/orders/orders.service */ "./src/services/saloon/orders/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntriesComponent = /** @class */ (function () {
    function EntriesComponent(order) {
        this.order = order;
        this.pageTitle = 'entries';
    }
    EntriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get all orders belongs to saloon
        setTimeout(function () {
            _this.getSaloonOrders();
        }, this.order.vars.onInt_request_delay_in_ms);
    };
    /**
     * Request to get list of all saloon orders
     *
     * @param number page
     *
     * @return void
     */
    EntriesComponent.prototype.getSaloonOrders = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        // show loader
        this.order.vars.displayLoader(true);
        this.order.getSaloonOrders(page, this.saloonId).subscribe(function (res) {
            _this.barberEntries = res.data.data;
            _this.currentPage = res.data.current_page;
            _this.totalItems = res.data.total;
            // show loader
            _this.order.vars.displayLoader(false);
            // show error
            _this.order.vars.showNotification(res.message, 'Orders', 'success');
        }, function (err) {
            // show loader
            _this.order.vars.displayLoader(false);
            // show error
            _this.order.vars.showNotification(_this.order.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Conhverg Array of services into string
     *
     * @param Array
     *
     * @return string
     */
    EntriesComponent.prototype.displayServiceName = function (services) {
        var serviceStr = '';
        if (services.length) {
            for (var _i = 0, services_1 = services; _i < services_1.length; _i++) {
                var service = services_1[_i];
                serviceStr += service.name + ', ';
            }
        }
        // remove last comma from string
        return (serviceStr.trim()).replace(/,\s*$/, '');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EntriesComponent.prototype, "saloonId", void 0);
    EntriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entries',
            template: __webpack_require__(/*! ./entries.component.html */ "./src/modules/saloon/components/sales/entries/entries.component.html"),
            styles: [__webpack_require__(/*! ./entries.component.css */ "./src/modules/saloon/components/sales/entries/entries.component.css")]
        }),
        __metadata("design:paramtypes", [_services_saloon_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]])
    ], EntriesComponent);
    return EntriesComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/components/sales/payment-history/payment-history.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/modules/saloon/components/sales/payment-history/payment-history.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th{\n    color:#8d9aba;\n    font-size:9px;\n    font-weight: bold;\n}\ntd{\n    color:#c7c7cf;\n    font-size:11px;\n    font-weight: bold;\n}\na{\n    color:#c7c7cf;\n    font-size:11px;\n    font-weight: bold;\n}\n.pay_id{\n    color:#757481 !important;\n    font-size:11px !important;\n    font-weight: bold !important;\n}\np{\n    color:#555861 !important;\n    font-weight:bold;\n    font-size:12px;\n}"

/***/ }),

/***/ "./src/modules/saloon/components/sales/payment-history/payment-history.component.html":
/*!********************************************************************************************!*\
  !*** ./src/modules/saloon/components/sales/payment-history/payment-history.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- display payment history -->\n<div class=\"row ml-4 mb-3 mr-4\">\n  <div class=\"col bg-white\">\n    <p class=\"text-capitalize h5 ml-3 mt-4 mb-4\">{{pageTitle}}</p>\n\n    <!-- seperator or line -->\n    <div class=\"line\"></div>\n\n    <div class=\"col\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th scope=\"col\" class=\"text-capitalize\">#</th>\n            <th scope=\"col\" class=\"text-capitalize\">total</th>\n            <th scope=\"col\" class=\"text-capitalize\">admin fee</th>\n            <th scope=\"col\" class=\"text-capitalize\">barber fee <br /> \n              <small>(includes stripe fee)</small></th>\n            <th scope=\"col\" class=\"text-capitalize\">date</th>\n            <th scope=\"col\" class=\"text-capitalize\">view</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"paymentHistory\">\n          <tr *ngFor=\"let payment of paymentHistory\">\n            <th scope=\"row\" class=\"text-capitalize pay_id\">{{payment.id}}</th>\n            <td class=\"text-capitalize\">{{payment.total_amount | currency:'GBP'}}</td>\n            <td class=\"text-capitalize\">{{payment.admin_fee | currency:'GBP'}}</td>\n            <td class=\"text-capitalize\">{{payment.final_amount | currency:'GBP'}}</td>\n            <td class=\"text-capitalize\">{{payment.created_at * 1000 | date:'dd/MM/yy'}}</td>\n            <td class=\"text-capitalize\"><a routerLink=\"/saloon/sales/{{payment.id}}\" class=\"btn btn-link text-capitalize\">link</a></td>\n          </tr>\n        </tbody>\n      </table>\n\n      <!-- display barbers list pagination -->\n      <div class=\"row mt-5\" *ngIf=\"totalItems\">\n        <div class=\"col\">\n          <app-pagination [totalItems]=\"totalItems\" [currentPage]=\"currentPage\" (childEvent)=\"getSaloonPayments ($event)\"></app-pagination>\n        </div>\n      </div>  <!-- display barbers list pagination -->\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/saloon/components/sales/payment-history/payment-history.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/modules/saloon/components/sales/payment-history/payment-history.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PaymentHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHistoryComponent", function() { return PaymentHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_saloon_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/saloon/orders/orders.service */ "./src/services/saloon/orders/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentHistoryComponent = /** @class */ (function () {
    function PaymentHistoryComponent(order) {
        this.order = order;
        this.pageTitle = 'payments history';
    }
    PaymentHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get all orders belongs to saloon
        setTimeout(function () {
            _this.getSaloonPayments();
        }, this.order.vars.onInt_request_delay_in_ms);
    };
    /**
   * Request to get list of all saloon orders
   *
   * @param number page
   *
   * @return void
   */
    PaymentHistoryComponent.prototype.getSaloonPayments = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        // show loader
        this.order.vars.displayLoader(true);
        this.order.getSaloonPayments(page, this.saloonId).subscribe(function (res) {
            _this.paymentHistory = res.data.data;
            _this.currentPage = res.data.current_page;
            _this.totalItems = res.data.total;
            // show loader
            _this.order.vars.displayLoader(false);
            // show error
            _this.order.vars.showNotification('Payment History successfully found.', res.message, 'success');
        }, function (err) {
            // show loader
            _this.order.vars.displayLoader(false);
            // show error
            _this.order.vars.showNotification(_this.order.vars.convertObjectToString(err.errors), err.message);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaymentHistoryComponent.prototype, "saloonId", void 0);
    PaymentHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-history',
            template: __webpack_require__(/*! ./payment-history.component.html */ "./src/modules/saloon/components/sales/payment-history/payment-history.component.html"),
            styles: [__webpack_require__(/*! ./payment-history.component.css */ "./src/modules/saloon/components/sales/payment-history/payment-history.component.css")]
        }),
        __metadata("design:paramtypes", [_services_saloon_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]])
    ], PaymentHistoryComponent);
    return PaymentHistoryComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/components/sales/payment-info/payment-info.component.css":
/*!*************************************************************************************!*\
  !*** ./src/modules/saloon/components/sales/payment-info/payment-info.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: #575a63;\n  font-size: 11px;\n  font-weight: bold;\n}\n.p_text {\n  color: #4c4b51;\n  font-size: 9px;\n  font-weight: 600;\n}\nlabel {\n  font-size: 10px;\n  font-weight: bold;\n  color: #78797c;\n}\nbutton {\n  background-color: #15234a;\n  color: #fff;\n  cursor: pointer;\n  border-radius: 0.25rem;\n}\n"

/***/ }),

/***/ "./src/modules/saloon/components/sales/payment-info/payment-info.component.html":
/*!**************************************************************************************!*\
  !*** ./src/modules/saloon/components/sales/payment-info/payment-info.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- display payment-info change screen -->\n<div class=\"row ml-4 pb-5 mr-4\">\n  <div class=\"col bg-white\">\n    <div class=\"col-12 pb-4\">\n    <p class=\"text-capitalize mt-4 mb-4\">{{pageTitle}}</p>\n    <div class=\"line\"></div>\n    </div>\n    <div *ngIf=\"stripeId\" class=\"col-5 pb-4\">\n    <p class=\"text-capitalize mt-4 mb-4\">Account Id</p>\n    <p style=\"color: #c7c7cf;font-size: 11px;font-weight: bold;\">{{stripeId}}</p>\n  </div>\n    <div *ngIf=\"stripeId\"  class=\"line\"></div>\n    <div class=\"col-5 pb-4\" *ngIf=\"stripeErrorMessage\">\n      <p class=\"mt-4 p_text\">{{stripeErrorMessage}}</p>\n      <button (click)=\"newStripeAccount()\">Stripe Link</button>\n    </div>\n    <div *ngIf=\"stripeId\" class=\"line\"></div>\n    <div class=\"col-5 pb-4\" *ngIf=\"stripeSuccesMessage\" >\n      <p class=\"text-capitalize mt-4 mb-4\">Status</p>\n      <p style=\"color: #c7c7cf;font-size: 11px;font-weight: bold;\">{{stripeSuccesMessage}}</p>\n    </div>\n    <div *ngIf=\"stripeId\" class=\"line\"></div>\n    <div class=\"col-5 pb-4\">\n      <p class=\"text-capitalize mt-4 mb-4\">Provide your keys</p>\n      <form [formGroup]=\"paymentInfoForm\" novalidate>\n        <div class=\"form-group\">\n          <label class=\"h6 required text-capitalize\">stripe key</label>\n          <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"stripe_key\" maxlength=\"255\" autocomplete=\"off\">\n          <show-errors [control]=\"paymentInfoForm.controls.stripe_key\"></show-errors>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"h6 required text-capitalize\">stripe secret</label>\n          <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"stripe_secret\" maxlength=\"255\" autocomplete=\"off\">\n          <show-errors [control]=\"paymentInfoForm.controls.stripe_secret\"></show-errors>\n        </div>\n        <button [disabled]=\"!paymentInfoForm.valid\" (click)=\"saveStripeAccount (paymentInfoForm)\">Save</button>\n      </form>\n      </div>\n        \n  \n    <!-- seperator or line -->\n    <!-- <div class=\"line\"></div> -->\n    <div class=\"col-5 pb-4\" *ngIf=\"!stripeId\">\n    <p class=\"mt-4 p_text\">To connect payment account with shokuni</p>\n      <button (click)=\"submitPaymentURL()\">Click here</button>\n    </div>\n    <!-- <div *ngIf=\"stripeAccount\">\n      <form [formGroup]=\"paymentInfoForm\" novalidate>\n        <label class=\"h6 required text-capitalize\">Enter stripe Id</label>\n        <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"stripeCode\" maxlength=\"255\" autocomplete=\"off\">\n        <show-errors [control]=\"paymentInfoForm.controls.stripeCode\"></show-errors>\n        <button [disabled]=\"!paymentInfoForm.valid\" (click)=\"saveStripeAccount (paymentInfoForm)\">Save</button>\n      </form>\n    </div> -->\n  <!-- <div *ngIf=\"cancelBtn\">\n    <button (click)=\"stripeCancel()\" style=\"background-color: red;color: white;\">Cancel</button> \n  </div> -->\n  \n    <!-- <div class=\"col-5 pb-4\"> -->\n      <!-- design payment information HTML code -->\n      <!-- <form [formGroup]=\"paymentInfoForm\" novalidate>\n        <div class=\"form-group\">\n          <label class=\"h6 required text-capitalize\">account number</label>\n          <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"account_number\" maxlength=\"255\" autocomplete=\"off\">\n          <show-errors [control]=\"paymentInfoForm.controls.account_number\"></show-errors>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"h6 required text-capitalize\">enter short code</label>\n          <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"code\" maxlength=\"255\" autocomplete=\"off\">\n          <show-errors [control]=\"paymentInfoForm.controls.code\"></show-errors>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"h6 required text-capitalize\">name on account</label>\n          <input type=\"text\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"name_on_account\" maxlength=\"255\" autocomplete=\"off\">\n          <show-errors [control]=\"paymentInfoForm.controls.name_on_account\"></show-errors>\n        </div> -->\n\n        <!-- seperator or line -->\n        <!-- <div class=\"line mt-4 mb-4\"></div>\n\n        <small><span class=\"required\"></span> indicates required</small>\n        <div class=\"text-left mt-2\">\n          <button [disabled]=\"!paymentInfoForm.valid\" (click)=\"submitPaymentInfoForm (paymentInfoForm)\" class=\"btn btn-shokuni text-capitalize mr-3\">save</button>\n          <button type=\"reset\" class=\"btn btn-transparent text-capitalize\">cancel</button>\n        </div>\n      </form>\n    </div> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/saloon/components/sales/payment-info/payment-info.component.ts":
/*!************************************************************************************!*\
  !*** ./src/modules/saloon/components/sales/payment-info/payment-info.component.ts ***!
  \************************************************************************************/
/*! exports provided: PaymentInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInfoComponent", function() { return PaymentInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_saloon_saloon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/saloon/saloon.service */ "./src/services/saloon/saloon.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentInfoComponent = /** @class */ (function () {
    function PaymentInfoComponent(saloon, router) {
        this.saloon = saloon;
        this.router = router;
        this.pageTitle = 'change payment info';
        // private stripeAccount: boolean = false ;
        this.stripeURL = false;
        this.barberDetail = JSON.parse(localStorage.getItem('user_detail'));
    }
    PaymentInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paymentInfoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            // name_on_account: new FormControl (null, [Validators.required, Validators.maxLength(255)]),
            // account_number: new FormControl (null, [Validators.required, Validators.maxLength(255)]),
            // code: new FormControl (null, [Validators.required, Validators.maxLength(10)]),
            // stripeCode:new FormControl (null, [Validators.required, Validators.maxLength(10)]),
            stripe_key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]),
            stripe_secret: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]),
        });
        setTimeout(function () {
            // this.getSaloonPaymentDetail ();
            _this.getUserStripeDetails();
        }, this.saloon.vars.onInt_request_delay_in_ms);
    };
    /**
     * Request for payment detail of the saloon
     */
    PaymentInfoComponent.prototype.getUserStripeDetails = function () {
        var _this = this;
        this.saloon.vars.displayLoader(true);
        this.saloon.getUserStripeDetails(this.barberDetail.id).subscribe(function (res) {
            _this.stripeId = res.stripeid;
            _this.getStripeAccountDetails(res.stripeid);
            if (_this.stripeURL) {
                _this.getStripeAccountDetails(res.stripeid);
            }
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification('Barber', res.message, 'success');
        }, function (err) {
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(err.message), err.message);
        });
    };
    // getSaloonPaymentDetail () {
    // show loader
    // this.saloon.vars.displayLoader (true);
    // this.saloon.getSaloonPaymentDetail (this.saloonId).subscribe (res => {
    // update form value
    // this.paymentInfoForm.controls['account_number'].setValue (res.data.account_number || null);
    // show loader
    // this.saloon.vars.displayLoader (false);
    // show error
    // this.saloon.vars.showNotification('Payment History successfully found.', res.message, 'success');
    // }, err => {
    // show loader
    // this.saloon.vars.displayLoader (false);
    // show error
    // this.saloon.vars.showNotification(this.saloon.vars.convertObjectToString (err.errors), err.message);
    //   })
    // }
    /**
     * method to submit payment information of the saloon
     *
     * @param NgForm
     *
     * @return void
     */
    PaymentInfoComponent.prototype.submitPaymentInfoForm = function (form) {
        var _this = this;
        var values = form.value;
        Object.keys(values).forEach(function (key) { return (values[key] == null) && delete values[key]; });
        // show loader
        this.saloon.vars.displayLoader(true);
        this.saloon.updateSaloonPaymentDetail(values, this.saloonId).subscribe(function (res) {
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification('Payment History successfully updated.', res.message, 'success');
        }, function (err) {
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(err.errors), err.message);
        });
    };
    PaymentInfoComponent.prototype.submitPaymentURL = function () {
        var _this = this;
        this.saloon.vars.displayLoader(true);
        this.saloon.getStripeURL(this.barberDetail.id).subscribe(function (res) {
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            // this.saloon.vars.showNotification('', res.message, 'success');
            window.open(res.url, '_blank');
            _this.getUserStripeDetails();
            _this.stripeURL = true;
        }, function (err) {
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(err.errors), err.message);
        });
    };
    PaymentInfoComponent.prototype.getStripeStatus = function () {
        var _this = this;
        this.saloon.vars.displayLoader(true);
        this.saloon.getStripeStatus(this.stripeId).subscribe(function (res) {
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            // this.saloon.vars.showNotification('', res.message, 'success');
            window.open(res.url, '_blank');
            setTimeout(function () {
                _this.router.navigate(['barber/dashboard']);
            }, 1000);
        }, function (err) {
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(err.errors), err.message);
        });
    };
    PaymentInfoComponent.prototype.getStripeAccountDetails = function (stripeId) {
        var _this = this;
        this.saloon.vars.displayLoader(true);
        this.saloon.getStripeAccountDetails(stripeId).subscribe(function (res) {
            _this.saloon.vars.displayLoader(false);
            _this.stripeSuccesMessage = res.message;
        }, function (err) {
            _this.stripeErrorMessage = err.message;
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(err.errors), err.message);
        });
    };
    PaymentInfoComponent.prototype.newStripeAccount = function () {
        this.getStripeStatus();
    };
    PaymentInfoComponent.prototype.saveStripeAccount = function (form) {
        var _this = this;
        var values = form.value;
        Object.keys(values).forEach(function (key) { return (values[key] == null) && delete values[key]; });
        // show loader
        this.saloon.vars.displayLoader(true);
        this.saloon.saveStripeAccount(values, this.barberDetail.id).subscribe(function (res) {
            // show loader
            _this.saloon.vars.displayLoader(false);
            if (res.status == true) {
                _this.saloon.vars.showNotification('Stripe keys successfully saved.', res.message, 'success');
                // setTimeout(() => {
                _this.router.navigate(['saloon/sales']);
                // }, 3000);
            }
            else {
                _this.saloon.vars.showNotification('Check entered details', res.message);
            }
            // show error
        }, function (err) {
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(err.errors), err.message);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaymentInfoComponent.prototype, "saloonId", void 0);
    PaymentInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-info',
            template: __webpack_require__(/*! ./payment-info.component.html */ "./src/modules/saloon/components/sales/payment-info/payment-info.component.html"),
            styles: [__webpack_require__(/*! ./payment-info.component.css */ "./src/modules/saloon/components/sales/payment-info/payment-info.component.css")]
        }),
        __metadata("design:paramtypes", [_services_saloon_saloon_service__WEBPACK_IMPORTED_MODULE_3__["SaloonService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PaymentInfoComponent);
    return PaymentInfoComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/components/sales/sales-summary/sales-summary.component.css":
/*!***************************************************************************************!*\
  !*** ./src/modules/saloon/components/sales/sales-summary/sales-summary.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".horizontal-divider-right {\n    border-right: 1px solid #cccccc;\n}\n\n.progress-height-5 {\n    height: 5px;\n}\n\n.text-sm {\n    font-size: 12px;\n}\n\n.font-weight-500 {\n    font-weight: 500;\n}\n\n.font-size-14 {\n    font-size:14px;\n}\n\np{\n    font-weight: bold;\n    color:#132149;\n    font-size:16px;\n}"

/***/ }),

/***/ "./src/modules/saloon/components/sales/sales-summary/sales-summary.component.html":
/*!****************************************************************************************!*\
  !*** ./src/modules/saloon/components/sales/sales-summary/sales-summary.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row ml-4 mt-4 mb-3 mr-2\">\n  <!-- display the right section -->\n  <div class=\"col-sm-12 col-xs-12 col-md-7 col-xl-7 col-lg-7\">\n    <!-- Display Total Revenue/ Fee paid -->\n    <div class=\"row\">\n      <!-- Display Total Revenue -->\n      <div class=\"col-sm-6 bg-white pt-5 pl-4 pr-4 pb-5 horizontal-divider-right\">\n        <div class=\"d-flex justify-content-between\">\n          <div class=\"p-2 text-capitalize font-weight-500 text-secondary font-size-14\">total revenue <br/><small>to date</small></div>\n          <div class=\"p-2 text-capitalize color-shokuni font-weight-bold\"><p>{{ salesSummary?.total_payouts  | currency:'GBP' }}</p></div>\n        </div>\n      </div>\n      <!-- Display Fee paid -->\n      <div class=\"col-sm-6 bg-white pt-5 pl-4 pr-4 pb-5\">\n        <div class=\"d-flex justify-content-between\">\n          <div class=\"p-2 text-capitalize font-weight-500 text-secondary font-size-14\">admin fees  <br/><small>to date</small></div>\n          <div class=\"p-2 text-capitalize color-shokuni font-weight-bold\"><p>{{ salesSummary?.admin_fee | currency:'GBP' }}</p></div>\n        </div>\n      </div>\n    </div><!-- End of Display Total Revenue/ Fee paid -->\n\n\n    <div class=\"row mt-3\">\n      <!-- Display Total Revenue -->\n      <div class=\"col-sm-6 bg-white pt-5 pl-4 pr-4 pb-5 horizontal-divider-right\">\n        <div class=\"d-flex justify-content-between\">\n          <div class=\"p-2 text-capitalize font-weight-500 text-secondary font-size-14\">total card revenue<br/><small>(Includes Stripe fee)</small><br /><small>to date</small><br/></div>\n          <div class=\"p-2 text-capitalize color-shokuni font-weight-bold\"><p>{{ salesSummary?.card_revenue | currency:'GBP' }}</p></div>\n        </div>\n      </div>\n      <!-- Display Fee paid -->\n      <div class=\"col-sm-6 bg-white pt-5 pl-4 pr-4 pb-5\">\n        <div class=\"d-flex justify-content-between\">\n          <div class=\"p-2 text-capitalize font-weight-500 text-secondary font-size-14\">total cash revenue <br/><small>to date</small></div>\n          <div class=\"p-2 text-capitalize color-shokuni font-weight-bold\"><p>{{ salesSummary?.cash_revenue | currency:'GBP' }}</p></div>\n        </div>\n      </div>\n    </div><!-- End of Display Total Revenue/ Fee paid -->\n  </div>\n\n  <!-- display the left section -->\n  <div class=\"col\">\n    <div class=\"bg-white p-3\">\n      <div class=\"d-flex justify-content-between\">\n        <div class=\"p-2 text-capitalize font-weight-500 text-secondary font-size-14\">card <br/><small>to date</small></div>\n        <div class=\"p-2 text-capitalize color-shokuni font-weight-bold\"><p>{{ salesSummary?.total_card_request }}</p></div>\n      </div>\n\n      <div class=\"progress progress-height-5 mt-4\">\n        <div class=\"progress-bar bg-danger\" role=\"progressbar\" [style.width.%]=\"calculateSalesSummaryPercentage (salesSummary?.total_card_request, salesSummary?.total_cash_request + salesSummary?.total_card_request)\" aria-valuenow=\"(salesSummary?.total_card_request, salesSummary?.total_cash_request + salesSummary?.total_card_request)}}\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n      </div>\n      <div class=\"d-flex justify-content-between\">\n        <div class=\"p-2 text-capitalize text-muted font-weight-light text-sm\">total</div>\n        <div class=\"p-2 text-muted font-weight-light text-sm\">{{calculateSalesSummaryPercentage (salesSummary?.total_card_request, salesSummary?.total_cash_request + salesSummary?.total_card_request)}}%</div>\n      </div>\n    </div>\n    \n    <div class=\"bg-white p-3 mt-3\">\n      <div class=\"d-flex justify-content-between\">\n        <div class=\"p-2 text-capitalize font-weight-500 text-secondary font-size-14\">cash<br/><small>to date</small></div>\n        <div class=\"p-2 text-capitalize color-shokuni font-weight-bold\">{{ salesSummary?.total_cash_request }}</div>\n      </div>\n\n      <div class=\"progress progress-height-5 mt-4\">\n        <div class=\"progress-bar bg-danger\" role=\"progressbar\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]=\"calculateSalesSummaryPercentage (salesSummary?.total_cash_request, salesSummary?.total_cash_request + salesSummary?.total_card_request)\"></div>\n      </div>\n      <div class=\"d-flex justify-content-between\">\n        <div class=\"p-2 text-capitalize text-muted font-weight-light text-sm\">total</div>\n        <div class=\"p-2 text-muted font-weight-light text-sm\">{{calculateSalesSummaryPercentage (salesSummary?.total_cash_request, salesSummary?.total_cash_request + salesSummary?.total_card_request)}}%</div>\n      </div>\n    </div>\n  </div>\n\n</div>  <!-- End of Row Class---->"

/***/ }),

/***/ "./src/modules/saloon/components/sales/sales-summary/sales-summary.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/modules/saloon/components/sales/sales-summary/sales-summary.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SalesSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesSummaryComponent", function() { return SalesSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_saloon_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/saloon/orders/orders.service */ "./src/services/saloon/orders/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalesSummaryComponent = /** @class */ (function () {
    function SalesSummaryComponent(order) {
        this.order = order;
    }
    SalesSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get all orders belongs to saloon
        setTimeout(function () {
            _this.getSalesSummary();
        }, this.order.vars.onInt_request_delay_in_ms);
    };
    /**
     * Request to get list of all saloon orders
     *
     * @param number page
     *
     * @return void
     */
    SalesSummaryComponent.prototype.getSalesSummary = function () {
        var _this = this;
        // show loader
        this.order.vars.displayLoader(true);
        this.order.getSalesSummary(this.saloonId).subscribe(function (res) {
            _this.salesSummary = res.data;
            console.log('----------->' + _this.salesSummary);
            // show loader
            _this.order.vars.displayLoader(false);
            // show error
            _this.order.vars.showNotification('Sales Summary successfully found', res.message, 'success');
        }, function (err) {
            // show loader
            _this.order.vars.displayLoader(false);
            // show error
            _this.order.vars.showNotification(_this.order.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Method to calculate percentage
     *
     * @param upval
     * @param baseVal
     *
     * @return number
     */
    SalesSummaryComponent.prototype.calculateSalesSummaryPercentage = function (upVal, baseval) {
        return Math.floor((upVal / baseval) * 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SalesSummaryComponent.prototype, "saloonId", void 0);
    SalesSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-summary',
            template: __webpack_require__(/*! ./sales-summary.component.html */ "./src/modules/saloon/components/sales/sales-summary/sales-summary.component.html"),
            styles: [__webpack_require__(/*! ./sales-summary.component.css */ "./src/modules/saloon/components/sales/sales-summary/sales-summary.component.css")]
        }),
        __metadata("design:paramtypes", [_services_saloon_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]])
    ], SalesSummaryComponent);
    return SalesSummaryComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/components/sales/sales.component.css":
/*!*****************************************************************!*\
  !*** ./src/modules/saloon/components/sales/sales.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/saloon/components/sales/sales.component.html":
/*!******************************************************************!*\
  !*** ./src/modules/saloon/components/sales/sales.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n  <!-- display page title -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <p class=\"text-capitalize h3 ml-4\">{{pageTitle}}</p>\n    </div>\n  </div>  <!-- End of Row Class---->\n  \n  <!-- display sales summary report -->\n  <app-sales-summary [saloonId]=\"saloonId\"></app-sales-summary>\n\n  <!-- display number of ordes entries -->\n  <app-entries [saloonId]=\"saloonId\"></app-entries>\n\n  <!-- display payment history -->\n  <app-payment-history [saloonId]=\"saloonId\"></app-payment-history>\n\n  <!-- display payment information change screen -->\n  <app-payment-info [saloonId]=\"saloonId\"></app-payment-info>\n\n</div>  <!--End of container-fluid--->"

/***/ }),

/***/ "./src/modules/saloon/components/sales/sales.component.ts":
/*!****************************************************************!*\
  !*** ./src/modules/saloon/components/sales/sales.component.ts ***!
  \****************************************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalesComponent = /** @class */ (function () {
    function SalesComponent(activeRoute) {
        this.activeRoute = activeRoute;
        this.pageTitle = 'sales';
    }
    SalesComponent.prototype.ngOnInit = function () {
        this.saloonId = this.activeRoute.snapshot.params["saloonId"] || null;
        //alert(this.saloonId);
    };
    SalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales',
            template: __webpack_require__(/*! ./sales.component.html */ "./src/modules/saloon/components/sales/sales.component.html"),
            styles: [__webpack_require__(/*! ./sales.component.css */ "./src/modules/saloon/components/sales/sales.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/components/saloon/saloon.component.css":
/*!*******************************************************************!*\
  !*** ./src/modules/saloon/components/saloon/saloon.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar {\n    width: 6rem;\n}\n\n.btn-bs-file{\n    position:relative;\n}\n\n.btn-bs-file input[type=\"file\"]{\n    position: absolute;\n    top: -9999999;\n    filter: alpha(opacity=0);\n    opacity: 0;\n    width:0;\n    height:0;\n    outline: none;\n    cursor: inherit;\n}\n\n.h6{\n    color:#47484d !important;\n    font-size:11px !important;\n}\n\n.map agm-map {\n    height: 6rem;\n    width: 8rem;\n}\n\n.modal-body agm-map {\n    height: 20rem;\n    width: 100%;\n}\n\n.list-group-flush li:first-child {\n    border: none;\n}\n\n.list-group-flush li {\n    border-style: dashed; \n}\n\n.height-15 {\n    max-height: 15rem;\n}\n\n.form-control {\n    display: block;\n    width: 100%;\n     height: calc(2.25rem + 2px); \n   /*   height: 23px; */\n    padding: .375rem .75rem;\n    font-size: 12px;\n     line-height: 1.5; \n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: .25rem;\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}\n\n.img_src{\n    width: 20px;\n    height: 25px;\n    margin: 43px 7px 5px 43px;\n    fill:#b9b8c0 !important;\n}\n\n.quick_action_item{\n    color:#b9b8c0 !important;\n    font-size:10px !important;\n    font-weight:500 !important;\n}\n\n.svg {\n    -webkit-filter: invert(.5);\n            filter: invert(.5);\n  }\n\n.dashboard-icon {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 19.1.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 viewBox%3D%220 0 489.4 489.4%22 style%3D%22enable-background%3Anew 0 0 489.4 489.4%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%09%3Cg%3E%09%09%3Cpath d%3D%22M347.7%2C263.75h-66.5c-18.2%2C0-33%2C14.8-33%2C33v51c0%2C18.2%2C14.8%2C33%2C33%2C33h66.5c18.2%2C0%2C33-14.8%2C33-33v-51%09%09%09C380.7%2C278.55%2C365.9%2C263.75%2C347.7%2C263.75z M356.7%2C347.75c0%2C5-4.1%2C9-9%2C9h-66.5c-5%2C0-9-4.1-9-9v-51c0-5%2C4.1-9%2C9-9h66.5%09%09%09c5%2C0%2C9%2C4.1%2C9%2C9V347.75z%22%2F%3E%09%09%3Cpath d%3D%22M489.4%2C171.05c0-2.1-0.5-4.1-1.6-5.9l-72.8-128c-2.1-3.7-6.1-6.1-10.4-6.1H84.7c-4.3%2C0-8.3%2C2.3-10.4%2C6.1l-72.7%2C128%09%09%09c-1%2C1.8-1.6%2C3.8-1.6%2C5.9c0%2C28.7%2C17.3%2C53.3%2C42%2C64.2v211.1c0%2C6.6%2C5.4%2C12%2C12%2C12h66.3c0.1%2C0%2C0.2%2C0%2C0.3%2C0h93c0.1%2C0%2C0.2%2C0%2C0.3%2C0h221.4%09%09%09c6.6%2C0%2C12-5.4%2C12-12v-209.6c0-0.5%2C0-0.9-0.1-1.3C472%2C224.55%2C489.4%2C199.85%2C489.4%2C171.05z M91.7%2C55.15h305.9l56.9%2C100.1H34.9%09%09%09L91.7%2C55.15z M348.3%2C179.15c-3.8%2C21.6-22.7%2C38-45.4%2C38c-22.7%2C0-41.6-16.4-45.4-38H348.3z M232%2C179.15c-3.8%2C21.6-22.7%2C38-45.4%2C38%09%09%09s-41.6-16.4-45.5-38H232z M24.8%2C179.15h90.9c-3.8%2C21.6-22.8%2C38-45.5%2C38C47.5%2C217.25%2C28.6%2C200.75%2C24.8%2C179.15z M201.6%2C434.35h-69%09%09%09v-129.5c0-9.4%2C7.6-17.1%2C17.1-17.1h34.9c9.4%2C0%2C17.1%2C7.6%2C17.1%2C17.1v129.5H201.6z M423.3%2C434.35H225.6v-129.5%09%09%09c0-22.6-18.4-41.1-41.1-41.1h-34.9c-22.6%2C0-41.1%2C18.4-41.1%2C41.1v129.6H66v-193.3c1.4%2C0.1%2C2.8%2C0.1%2C4.2%2C0.1%09%09%09c24.2%2C0%2C45.6-12.3%2C58.2-31c12.6%2C18.7%2C34%2C31%2C58.2%2C31s45.5-12.3%2C58.2-31c12.6%2C18.7%2C34%2C31%2C58.1%2C31c24.2%2C0%2C45.5-12.3%2C58.1-31%09%09%09c12.6%2C18.7%2C34%2C31%2C58.2%2C31c1.4%2C0%2C2.7-0.1%2C4.1-0.1L423.3%2C434.35L423.3%2C434.35z M419.2%2C217.25c-22.7%2C0-41.6-16.4-45.4-38h90.9%09%09%09C460.8%2C200.75%2C441.9%2C217.25%2C419.2%2C217.25z%22%2F%3E%09%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n    background-position: center;\n}\n\n.manage-barber-icon {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 18.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 viewBox%3D%220 0 349.158 349.158%22 style%3D%22enable-background%3Anew 0 0 349.158 349.158%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%09%3Cg%3E%09%09%3Cpath d%3D%22M341.658%2C6.227H83.455c-4.143%2C0-7.5%2C3.357-7.5%2C7.5V162.83H7.5c-4.143%2C0-7.5%2C3.357-7.5%2C7.5v127.123%09%09%09c0%2C25.076%2C20.4%2C45.479%2C45.477%2C45.479c0.646%2C0%2C258.203%2C0%2C258.203%2C0c25.076%2C0%2C45.479-20.402%2C45.479-45.479V13.727%09%09%09C349.158%2C9.584%2C345.801%2C6.227%2C341.658%2C6.227z M15%2C297.453V177.83h60.955v119.623c0%2C16.805-13.672%2C30.479-30.479%2C30.479%09%09%09C28.672%2C327.932%2C15%2C314.258%2C15%2C297.453z M334.158%2C297.453c0%2C16.805-13.672%2C30.479-30.479%2C30.479H79.203%09%09%09c7.299-8.07%2C11.752-18.766%2C11.752-30.479V21.227h243.203V297.453z%22%2F%3E%09%09%3Cpath d%3D%22M202.023%2C92.855h96.127c4.143%2C0%2C7.5-3.357%2C7.5-7.5c0-4.143-3.357-7.5-7.5-7.5h-96.127c-4.143%2C0-7.5%2C3.357-7.5%2C7.5%09%09%09C194.523%2C89.498%2C197.881%2C92.855%2C202.023%2C92.855z%22%2F%3E%09%09%3Cpath d%3D%22M202.023%2C175.248h96.127c4.143%2C0%2C7.5-3.357%2C7.5-7.5c0-4.143-3.357-7.5-7.5-7.5h-96.127c-4.143%2C0-7.5%2C3.357-7.5%2C7.5%09%09%09C194.523%2C171.891%2C197.881%2C175.248%2C202.023%2C175.248z%22%2F%3E%09%09%3Cpath d%3D%22M202.023%2C257.643h96.127c4.143%2C0%2C7.5-3.357%2C7.5-7.5c0-4.143-3.357-7.5-7.5-7.5h-96.127c-4.143%2C0-7.5%2C3.357-7.5%2C7.5%09%09%09C194.523%2C254.285%2C197.881%2C257.643%2C202.023%2C257.643z%22%2F%3E%09%09%3Cpath d%3D%22M132.814%2C101.295c1.418%2C1.5%2C3.391%2C2.35%2C5.453%2C2.35c0.02%2C0%2C0.041%2C0%2C0.063%2C0c2.086-0.018%2C4.07-0.902%2C5.477-2.443%09%09%09l41.197-45.121c2.793-3.059%2C2.576-7.803-0.482-10.596c-3.059-2.791-7.803-2.576-10.596%2C0.482l-35.752%2C39.156l-11.129-11.785%09%09%09c-2.846-3.012-7.594-3.146-10.604-0.303c-3.012%2C2.844-3.146%2C7.59-0.303%2C10.602L132.814%2C101.295z%22%2F%3E%09%09%3Cpath d%3D%22M173.926%2C131.941l-35.752%2C39.154l-11.131-11.783c-2.844-3.014-7.592-3.148-10.602-0.303%09%09%09c-3.012%2C2.844-3.146%2C7.59-0.303%2C10.602l16.676%2C17.656c1.418%2C1.5%2C3.391%2C2.35%2C5.453%2C2.35c0.02%2C0%2C0.041%2C0%2C0.063%2C0%09%09%09c2.086-0.018%2C4.07-0.902%2C5.477-2.443l41.197-45.119c2.791-3.059%2C2.576-7.803-0.482-10.596S176.719%2C128.881%2C173.926%2C131.941z%22%2F%3E%09%09%3Cpath d%3D%22M173.926%2C217.914l-35.752%2C39.154l-11.131-11.783c-2.844-3.014-7.592-3.149-10.602-0.303%09%09%09c-3.012%2C2.844-3.146%2C7.59-0.303%2C10.602l16.676%2C17.656c1.418%2C1.5%2C3.391%2C2.35%2C5.453%2C2.35c0.02%2C0%2C0.041%2C0%2C0.063%2C0%09%09%09c2.086-0.018%2C4.07-0.902%2C5.477-2.443l41.197-45.119c2.791-3.059%2C2.576-7.803-0.482-10.596%09%09%09C181.463%2C214.639%2C176.719%2C214.855%2C173.926%2C217.914z%22%2F%3E%09%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n    background-position: center;\n}\n\n.no-repeat-img {\n    background-repeat: no-repeat;\n}\n\n.icon {\n    fill:#b9b8c0 !important;\n    -webkit-filter: invert(.5);\n            filter: invert(.5);\n}\n\n.products-icon {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 19.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 viewBox%3D%220 0 511.999 511.999%22 style%3D%22enable-background%3Anew 0 0 511.999 511.999%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%09%3Cg%3E%09%09%3Cpath d%3D%22M392.852%2C1.829c-6.925-3.668-15.159-1.681-19.648%2C4.716L224.746%2C207.69L75.152%2C7.326%09%09%09c-4.523-6.373-12.767-8.315-19.67-4.612c-6.955%2C3.731-9.889%2C11.764-6.975%2C19.099c0.098%2C0.247%2C0.207%2C0.489%2C0.328%2C0.727%09%09%09l43.71%2C85.477c2.122%2C4.149%2C7.204%2C5.79%2C11.351%2C3.67c4.148-2.121%2C5.791-7.203%2C3.67-11.351L72.848%2C32.442l242.785%2C325.18%09%09%09c1.657%2C2.219%2C4.194%2C3.39%2C6.767%2C3.39c1.756%2C0%2C3.526-0.546%2C5.04-1.677c3.733-2.787%2C4.5-8.073%2C1.713-11.807l-56.117-75.162%09%09%09L399.6%2C21.618c0.119-0.237%2C0.228-0.48%2C0.325-0.727C402.801%2C13.54%2C399.826%2C5.524%2C392.852%2C1.829z M261.758%2C257.264l-26.469-35.451%09%09%09L375.627%2C31.672L261.758%2C257.264z%22%2F%3E%09%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%09%3Cg%3E%09%09%3Cpath d%3D%22M393.617%2C412.922c-5.592-8.061-13.99-13.46-23.643-15.206c-9.654-1.747-19.41%2C0.373-27.47%2C5.967%09%09%09c-16.638%2C11.546-20.782%2C34.475-9.238%2C51.113c7.125%2C10.269%2C18.585%2C15.778%2C30.228%2C15.778c7.222%2C0%2C14.515-2.12%2C20.884-6.539%09%09%09C401.018%2C452.49%2C405.161%2C429.562%2C393.617%2C412.922z M374.762%2C450.175c-8.998%2C6.242-21.394%2C4.001-27.634-4.994%09%09%09c-6.242-8.997-4.002-21.394%2C4.994-27.635c3.363-2.333%2C7.27-3.547%2C11.278-3.547c1.187%2C0%2C2.382%2C0.107%2C3.573%2C0.322%09%09%09c5.22%2C0.944%2C9.76%2C3.862%2C12.783%2C8.221C385.998%2C431.537%2C383.757%2C443.934%2C374.762%2C450.175z%22%2F%3E%09%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%09%3Cg%3E%09%09%3Cpath d%3D%22M123.416%2C427.863c-1.796-9.645-7.239-18.013-15.329-23.564c-8.089-5.549-17.854-7.618-27.501-5.822%09%09%09c-9.645%2C1.796-18.013%2C7.239-23.564%2C15.329c-11.457%2C16.7-7.193%2C39.607%2C9.508%2C51.064c6.187%2C4.245%2C13.356%2C6.453%2C20.701%2C6.453%09%09%09c2.257%2C0%2C4.533-0.208%2C6.8-0.631c9.645-1.796%2C18.013-7.239%2C23.563-15.329C123.144%2C447.274%2C125.211%2C437.508%2C123.416%2C427.863z%09%09%09 M103.681%2C445.819c-3%2C4.374-7.525%2C7.317-12.739%2C8.288c-5.214%2C0.971-10.495-0.147-14.868-3.148%09%09%09c-9.028-6.194-11.334-18.579-5.14-27.607c3.843-5.604%2C10.072-8.617%2C16.402-8.617c3.87%2C0%2C7.779%2C1.126%2C11.205%2C3.477%09%09%09c4.374%2C3.001%2C7.317%2C7.526%2C8.288%2C12.74C107.8%2C436.165%2C106.683%2C441.446%2C103.681%2C445.819z%22%2F%3E%09%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%09%3Cg%3E%09%09%3Cpath d%3D%22M486.314%2C472.931c-4.381-5.749-11.048-9.251-18.295-9.609c-11.17-0.551-26.778-2.135-42.109-6.357%09%09%09c1.332-3.624%2C2.375-7.382%2C3.077-11.259c3.165-17.508-0.678-35.2-10.821-49.819c-17.548-25.291-49.879-35.219-78.619-24.146%09%09%09c-4.347%2C1.675-6.515%2C6.557-4.839%2C10.904c1.675%2C4.348%2C6.558%2C6.512%2C10.904%2C4.839c21.459-8.269%2C45.594-0.857%2C58.693%2C18.021%09%09%09c7.573%2C10.916%2C10.443%2C24.126%2C8.08%2C37.2c-0.94%2C5.204-2.677%2C10.131-5.102%2C14.663c-0.315%2C0.457-0.586%2C0.949-0.811%2C1.477%09%09%09c-3.614%2C6.232-8.583%2C11.648-14.678%2C15.877c-10.916%2C7.574-24.126%2C10.443-37.2%2C8.08c-13.074-2.363-24.443-9.675-32.017-20.59%09%09%09c-12.813-18.466-11.588-43.341%2C2.977-60.492c2.71-3.191%2C2.67-7.887-0.094-11.03l-91.945-104.576%09%09%09c-1.71-1.946-4.214-2.993-6.806-2.852l-2.537%2C0.142c-1.306-0.235-2.649-0.16-3.919%2C0.219l-18.432%2C1.03l-78.82-154.138%09%09%09c-2.121-4.148-7.205-5.79-11.351-3.67c-4.148%2C2.121-5.791%2C7.203-3.67%2C11.351l68.783%2C134.508l-72.06%2C97.63%09%09%09c-27.131-7.408-56.14%2C2.985-72.32%2C26.568c-20.778%2C30.285-13.044%2C71.828%2C17.242%2C92.607c11.492%2C7.885%2C24.601%2C11.664%2C37.585%2C11.663%09%09%09c21.234-0.001%2C42.128-10.11%2C55.022-28.904c15.634-22.789%2C15.392-52.725%2C0.071-75.173l82.655-95.165l83.289%2C94.733%09%09%09c-15.201%2C22.527-15.284%2C52.462%2C0.469%2C75.167c10.143%2C14.617%2C25.37%2C24.411%2C42.878%2C27.576c4%2C0.722%2C8.007%2C1.08%2C11.988%2C1.08%09%09%09c11.021%2C0%2C21.819-2.744%2C31.567-8.045c8.82%2C7.725%2C29.239%2C19.516%2C71.771%2C19.56c0.008%2C0%2C0.017%2C0%2C0.025%2C0%09%09%09c11.299%2C0%2C21.284-8.014%2C23.75-19.088C492.254%2C485.913%2C490.657%2C478.631%2C486.314%2C472.931z M125.058%2C391.222%09%09%09c-2.743%2C3.158-2.757%2C7.851-0.031%2C11.026c14.654%2C17.075%2C16.01%2C41.942%2C3.294%2C60.476c-15.516%2C22.613-46.537%2C28.39-69.15%2C12.874%09%09%09c-22.614-15.515-28.39-46.537-12.875-69.15c13-18.948%2C37.095-26.483%2C58.597-18.329c3.537%2C1.34%2C7.532%2C0.164%2C9.779-2.878%09%09%09l70.673-95.754l3.956%2C7.736c1.52%2C2.973%2C4.651%2C4.767%2C7.981%2C4.582l5.716-0.319L125.058%2C391.222z M474.222%2C489.266%09%09%09c-0.757%2C3.398-3.817%2C5.861-7.277%2C5.861c-0.002%2C0-0.006%2C0-0.008%2C0c-32.794-0.034-49.715-7.706-57.531-13.054%09%09%09c3.175-3.014%2C6.023-6.312%2C8.519-9.853c17.942%2C5.389%2C36.366%2C7.315%2C49.263%2C7.952c2.267%2C0.112%2C4.348%2C1.199%2C5.707%2C2.983%09%09%09C473.672%2C484.176%2C474.878%2C486.322%2C474.222%2C489.266z%22%2F%3E%09%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n    background-position: center;\n}\n\n.sales-icon {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 19.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 viewBox%3D%220 0 512.001 512.001%22 style%3D%22enable-background%3Anew 0 0 512.001 512.001%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%09%3Cg%3E%09%09%3Cpath d%3D%22M457.637%2C134.681c-29.976%2C0-54.363%2C24.387-54.363%2C54.363c0%2C10.933%2C3.255%2C21.114%2C8.831%2C29.647l-58.733%2C58.733%09%09%09c-8.534-5.576-18.715-8.831-29.648-8.831c-11.329%2C0-21.858%2C3.488-30.576%2C9.441l-59.338-59.347%09%09%09c5.575-8.533%2C8.828-18.713%2C8.828-29.644c0-29.976-24.387-54.363-54.363-54.363c-29.976%2C0-54.363%2C24.387-54.363%2C54.363%09%09%09c0%2C10.931%2C3.254%2C21.108%2C8.827%2C29.641L84.004%2C277.42c-8.532-5.574-18.711-8.827-29.641-8.827C24.387%2C268.593%2C0%2C292.981%2C0%2C322.957%09%09%09s24.387%2C54.363%2C54.363%2C54.363c29.976%2C0%2C54.363-24.387%2C54.363-54.363c0-10.933-3.255-21.114-8.831-29.648l58.733-58.733%09%09%09c8.534%2C5.576%2C18.715%2C8.831%2C29.648%2C8.831c10.932%2C0%2C21.113-3.255%2C29.646-8.831l59.666%2C59.674%09%09%09c-5.206%2C8.338-8.226%2C18.174-8.226%2C28.706c0%2C29.976%2C24.387%2C54.363%2C54.363%2C54.363s54.363-24.387%2C54.363-54.363%09%09%09c0-10.931-3.254-21.109-8.827-29.641l58.736-58.736c8.533%2C5.574%2C18.712%2C8.827%2C29.641%2C8.827c29.976%2C0%2C54.363-24.387%2C54.363-54.363%09%09%09C512.001%2C159.066%2C487.613%2C134.681%2C457.637%2C134.681z M54.363%2C354.849c-17.586%2C0-31.893-14.307-31.893-31.892%09%09%09c0-17.586%2C14.307-31.893%2C31.893-31.893c17.585%2C0%2C31.893%2C14.307%2C31.893%2C31.893C86.256%2C340.542%2C71.949%2C354.849%2C54.363%2C354.849z%09%09%09 M188.276%2C220.936c-17.585%2C0-31.893-14.307-31.893-31.893c0-17.585%2C14.307-31.893%2C31.893-31.893%09%09%09c17.586%2C0%2C31.893%2C14.307%2C31.893%2C31.893C220.169%2C206.629%2C205.862%2C220.936%2C188.276%2C220.936z M323.724%2C354.849%09%09%09c-17.585%2C0-31.893-14.307-31.893-31.893s14.307-31.893%2C31.893-31.893c17.585%2C0%2C31.893%2C14.307%2C31.893%2C31.893%09%09%09C355.616%2C340.542%2C341.309%2C354.849%2C323.724%2C354.849z M457.637%2C220.936c-17.585%2C0-31.893-14.307-31.893-31.893%09%09%09c0-17.585%2C14.307-31.893%2C31.893-31.893c17.585%2C0%2C31.893%2C14.307%2C31.893%2C31.893C489.53%2C206.629%2C475.222%2C220.936%2C457.637%2C220.936z%22%2F%3E%09%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%09%3Cg%3E%09%09%3Cpath d%3D%22M176.774%2C272.717c-4.388-4.387-11.501-4.387-15.889%2C0l-22.854%2C22.854c-4.387%2C4.387-4.387%2C11.501%2C0.001%2C15.889%09%09%09c2.194%2C2.194%2C5.069%2C3.291%2C7.944%2C3.291s5.751-1.098%2C7.944-3.291l22.854-22.854C181.163%2C284.219%2C181.163%2C277.104%2C176.774%2C272.717z%22%09%09%09%2F%3E%09%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%09%3Cg%3E%09%09%3Cpath d%3D%22M373.962%2C200.939c-4.388-4.387-11.5-4.387-15.89%2C0.001l-22.854%2C22.854c-4.387%2C4.387-4.387%2C11.501%2C0%2C15.889%09%09%09c2.195%2C2.193%2C5.07%2C3.29%2C7.945%2C3.29c2.876%2C0%2C5.75-1.098%2C7.944-3.291l22.854-22.854C378.349%2C212.44%2C378.349%2C205.326%2C373.962%2C200.939%09%09%09z%22%2F%3E%09%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n    background-position: center;\n}\n\n.ml-5 {\n    margin-left: 3.8rem!important;\n}"

/***/ }),

/***/ "./src/modules/saloon/components/saloon/saloon.component.html":
/*!********************************************************************!*\
  !*** ./src/modules/saloon/components/saloon/saloon.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- display page title -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <p class=\"text-capitalize h3 ml-4\">{{pageTitle}}</p>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-xs-12 col-md-7 col-xl-7 col-lg-7 bg-white ml-5 mb-5 mt-4 pb-5\">\n      <p class=\"text-capitalize h5 ml-3 mt-4 mb-4\">{{subTitle}}</p>\n\n      <!-- seperator or line -->\n      <div class=\"line\"></div>\n\n      <div class=\"col-xs-12 col-sm-12 col-lg-8 col-xl-8 col-md-8 m-3\">\n\n        <!-- Design Saloon update form -->\n        <form [formGroup]=\"saloonForm\" novalidate>\n          <div class=\"form-group\">\n            <label class=\"h6 required text-capitalize\">name:</label>\n            <input type=\"text\" class=\"form-control\" appTrimInput required formControlName=\"name\" maxlength=\"255\"\n              autocomplete=\"off\" />\n            <show-errors [control]=\"saloonForm.controls.name\"></show-errors>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"h6 text-uppercase\">gb-vat #:</label>\n            <input type=\"text\" class=\"form-control\" appTrimInput formControlName=\"vat_number\" maxlength=\"255\"\n              autocomplete=\"off\" />\n            <show-errors [control]=\"saloonForm.controls.vat_number\"></show-errors>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"h6 required text-capitalize\">company #</label>\n            <input type=\"text\" class=\"form-control\" appTrimInput required formControlName=\"company_number\"\n              maxlength=\"255\" autocomplete=\"off\" />\n            <show-errors [control]=\"saloonForm.controls.company_number\"></show-errors>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"h6 text-capitalize\">website:</label>\n            <input type=\"text\" class=\"form-control\" appTrimInput formControlName=\"website_url\" maxlength=\"255\"\n              autocomplete=\"off\" />\n            <show-errors [control]=\"saloonForm.controls.website_url\"></show-errors>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"h6 required text-capitalize\">phone number:</label>\n            <input type=\"text\" class=\"form-control\" appTrimInput appNumberOnly required formControlName=\"contact_number\"\n              maxlength=\"15\" autocomplete=\"off\" />\n            <show-errors [control]=\"saloonForm.controls.contact_number\"></show-errors>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"h6 required text-capitalize\">Latitude:</label>\n            <input type=\"number\" class=\"form-control\" appTrimInput required formControlName=\"lat\" maxlength=\"15\"\n              autocomplete=\"off\" />\n            <show-errors [control]=\"saloonForm.controls.lat\"></show-errors>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"h6 required text-capitalize\">Longitude:</label>\n            <input type=\"number\" class=\"form-control\" appTrimInput required formControlName=\"lng\" maxlength=\"15\"\n              autocomplete=\"off\" />\n            <show-errors [control]=\"saloonForm.controls.lng\"></show-errors>\n          </div>\n\n          <!-- display saloon address in google-map format -->\n          <div *ngIf=\"!updateAddress\" class=\"form-group\">\n            <label class=\"h6 required text-capitalize\">address:</label>\n            <div class=\"media\">\n              <div class=\"map mr-3\">\n                <agm-map *ngIf=\"lat && lng\" data-toggle=\"modal\" data-target=\"#googleMapAddressModal\" [latitude]=\"lat\"\n                  [longitude]=\"lng\" [disableDoubleClickZoom]=\"true\" [mapDraggable]=\"false\" [usePanning]=\"true\"\n                  [panControl]=\"true\" [zoomControl]=\"false\" [streetViewControl]=\"false\">\n                  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n                </agm-map>\n              </div>\n              <div class=\"media-body\">\n                {{saloonDetail?.address + ', ' + saloonDetail?.postal_code}}\n                <span class=\"btn btn-shokuni text-capitalize ml-2\" (click)=\"toggleAddressFields()\">change</span>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"updateAddress\" class=\"form-group\">\n            <label class=\"h6 required text-capitalize\">address:</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"address\" maxlength=\"255\" autocomplete=\"off\"\n              appTrimInput required />\n            <show-errors [control]=\"saloonForm.controls.address\"></show-errors>\n          </div>\n\n          <div *ngIf=\"updateAddress\" class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <label class=\"h6 required text-capitalize\">postcode:</label>\n                <input type=\"text\" class=\"form-control\" appTrimInput required formControlName=\"postal_code\"\n                  maxlength=\"255\" autocomplete=\"off\" />\n                <show-errors [control]=\"saloonForm.controls.postal_code\"></show-errors>\n\n                <!-- fields belongs to Saloon address lat/lng -->\n                <input type=\"hidden\" class=\"form-control\" formControlName=\"lat\" />\n                <input type=\"hidden\" class=\"form-control\" formControlName=\"lng\" />\n                <show-errors [control]=\"saloonForm.controls.lat\"></show-errors>\n                <show-errors [control]=\"saloonForm.controls.lng\"></show-errors>\n              </div>\n              <div class=\"col\">\n                <label class=\"h6 required text-capitalize\">country:</label>\n                <select class=\"form-control\" formControlName=\"country_id\" *ngIf=\"countries\">\n                  <!-- <option [selected]=\"true\" disabled>Select Country</option> -->\n                  <option *ngFor=\"let country of countries\" [value]=\"country.id\" class=\"text-capitalize\"\n                    [selected]=\"checkSaloonCountry (country.id)\">{{country.name}}</option>\n                </select>\n                <show-errors [control]=\"saloonForm.controls.country_id\"></show-errors>\n              </div>\n            </div>\n          </div>\n\n          <!-- display saloon logo -->\n          <div class=\"form-group\">\n            <label class=\"h6 text-capitalize\">shop logo</label>\n            <input type=\"hidden\" formControlName=\"logo\" />\n            <div class=\"media\">\n              <img [src]=\"saloonLogo\" class=\"avatar mr-4\" />\n              <div class=\"media-body\">\n                <div class=\"text-capitalize mt-4\">upload new logo</div>\n                <label class=\"btn-bs-file btn btn-shokuni mt-2\">\n                  Upload\n                  <input type=\"file\" (change)=\"uploadImg ($event)\" />\n                </label>\n              </div>\n            </div>\n            <show-errors [control]=\"saloonForm.controls.logo\"></show-errors>\n          </div>\n\n          <!-- design for opening times -->\n          <div class=\"form-group\">\n            <label class=\"h6 required text-capitalize\">opening times:</label>\n            <ul class=\"list-group list-group-flush\" formGroupName=\"schedule\">\n              <li class=\"list-group-item no-border\">\n                <div class=\"row\">\n                  <div class=\"col h6 text-capitalize\">day</div>\n                  <div class=\"col h6 text-capitalize text-right\">open</div>\n                </div>\n              </li>\n\n              <!-- Design dynamic timing forms -->\n              <li *ngFor=\"let schedule of saloonForm?.controls?.schedule?.controls;let i = index\" [attr.data-index]=\"i\"\n                class=\"list-group-item\" [formGroupName]=\"i\">\n                <div class=\"row\">\n                  <div class=\"col h6 text-capitalize text-left\">{{schedule?.value?.day}}</div>\n                  <div class=\"col h6 text-capitalize text-right\">\n                    <input type=\"checkbox\"\n                      [checked]=\"(schedule.value.start_time && schedule.value.end_time) ? true : false\"\n                      data-toggle=\"collapse\" [attr.data-target]=\"getDataTarget(schedule?.value?.day)\"\n                      [attr.aria-expanded]=\"true\" [attr.aria-controls]=\"getDataTarget(schedule.value.day, false)\" />\n                  </div>\n                </div>\n\n                <!-- display time input fields -->\n                <div class=\"collapse\" [ngClass]=\"(schedule.value.start_time && schedule.value.end_time) ? 'show' : ''\"\n                  id=\"data-target{{schedule.value.day}}\">\n                  <div class=\"form-row\">\n                    <div class=\"col\">\n                      <!-- <input type=\"time\" formControlName=\"start_time\" class=\"form-control text-left\" placeholder=\"Opening Time\" maxlength=\"8\"/> -->\n                      <input atp-time-picker formControlName=\"start_time\" readonly class=\"form-control text-left\"\n                        placeholder=\"Opening Time\" maxlength=\"8\" />\n                      <show-errors [control]=\"start_time\"></show-errors>\n                    </div>\n                    <div class=\"col-1 mt-2 text-center\">\n                      <i class=\"fa fa-arrow-right\"></i>\n                    </div>\n                    <div class=\"col\">\n                      <!-- <input type=\"time\" formControlName=\"end_time\" class=\"form-control\" placeholder=\"Closing Time\" autocomplete=\"off\" maxlength=\"8\"/> -->\n                      <input atp-time-picker formControlName=\"end_time\" readonly class=\"form-control text-left\"\n                        placeholder=\"Closing Time\" maxlength=\"8\" />\n                      <show-errors [control]=\"end_time\"></show-errors>\n                    </div>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n\n          <small><span class=\"required\"></span> indicates required</small>\n          <!-- Submit Saloon form -->\n          <div class=\"text-left mt-2\">\n            <button [disabled]=\"!saloonForm.valid\" (click)=\"submitSaloon (saloonForm)\"\n              class=\"btn btn-shokuni text-capitalize mr-3\">save</button>\n            <button type=\"button\" class=\"btn btn-transparent text-capitalize\" (click)=\"redirect()\">cancel</button>\n          </div>\n        </form>\n      </div>\n    </div>\n\n    <!-- Right Sidebar links -->\n    <div class=\"col bg-white ml-3 mb-5 mr-3 mt-4 pb-5 height-15\">\n      <p class=\"text-capitalize h5 ml-3 mt-4 mb-4\">quick actions</p>\n\n      <!-- seperator or line -->\n      <div class=\"line\"></div>\n\n      <div class=\"row\">\n        <div class=\"col border-right text-center\">\n          <a routerLink=\"/saloon/{{ saloonDetail?.id }}/dashboard\">\n            <div class=\"dashboard-icon no-repeat-img p-3 mt-4 icon\"></div>\n            <span class=\"quick_action_item text-capitalize\">dashboard</span>\n          </a>\n        </div>\n        <div class=\"col border-right text-center\">\n          <a routerLink=\"/saloon/{{ saloonDetail?.id }}/barbers\">\n            <div class=\"manage-barber-icon no-repeat-img p-3 mt-4 icon\"></div>\n            <span class=\"quick_action_item text-capitalize\">Manage Barber</span>\n          </a>\n        </div>\n        <div class=\"col border-right text-center\">\n          <a routerLink=\"/admin/sales/{{ saloonDetail?.id }}\">\n            <div class=\"sales-icon no-repeat-img p-3 mt-4 icon\"></div>\n            <span class=\"quick_action_item text-capitalize\">Manage Sales</span>\n          </a>\n        </div>\n        <div class=\"col text-center\">\n          <a routerLink=\"/saloon/{{ saloonDetail?.id }}/products\">\n            <div class=\"products-icon no-repeat-img p-3 mt-4 icon\"></div>\n            <span class=\"quick_action_item text-capitalize\">products</span>\n          </a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n<!-- modal to display  -->\n<div class=\"modal fade\" id=\"googleMapAddressModal\" tabindex=\"-1\" role=\"dialog\"\n  aria-labelledby=\"googleMapAddressModalTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"googleMapAddressModalTitle\">{{saloonDetail?.address + ', ' +\n          saloonDetail?.postal_code}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"16\">\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        </agm-map>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/saloon/components/saloon/saloon.component.ts":
/*!******************************************************************!*\
  !*** ./src/modules/saloon/components/saloon/saloon.component.ts ***!
  \******************************************************************/
/*! exports provided: SaloonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaloonComponent", function() { return SaloonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_saloon_saloon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/saloon/saloon.service */ "./src/services/saloon/saloon.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/common/common.service */ "./src/services/common/common.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _agm_core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core/services */ "./node_modules/@agm/core/services.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SaloonComponent = /** @class */ (function () {
    function SaloonComponent(saloon, common, formBuilder, activeRoute, mapsApiLoader, wrapper, router) {
        this.saloon = saloon;
        this.common = common;
        this.formBuilder = formBuilder;
        this.activeRoute = activeRoute;
        this.mapsApiLoader = mapsApiLoader;
        this.wrapper = wrapper;
        this.router = router;
        this.pageTitle = 'manage shop';
        this.subTitle = 'edit shop';
        this.MIN_FILE_SIZE_IN_BYTE = 1024;
        this.MAX_FILE_SIZE_IN_BYTE = 102400;
        this.ALLOW_FILE_EXT = ['jpg', 'jpeg', 'png'];
        this.IMG_DIR = 'saloon';
        this.updateAddress = false;
        this.lat = 10.2492747;
        this.lng = 164.5409872;
    }
    SaloonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.saloonForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]),
            logo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]),
            vat_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]),
            company_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]),
            contact_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2000)]),
            postal_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
            lat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.lat, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            lng: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.lng, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            country_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)]),
            website_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]),
            schedule: this.formBuilder.array([this.createItem()])
        });
        // get saloon detail
        setTimeout(function () {
            _this.getSaloon(_this.activeRoute.snapshot.params["saloonId"] || null);
            _this.getCountries();
        }, this.saloon.vars.onInt_request_delay_in_ms);
        // add number of days in schedule saloon-form field
        this.addSaloonScheduleValues();
        this.mapsApiLoader.load().then(function () {
            // @ts-ignore
            _this.geocoder = new google.maps.Geocoder();
        });
    };
    SaloonComponent.prototype.createItem = function () {
        return this.formBuilder.group({
            day: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            start_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8)]),
            end_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8)])
        });
    };
    SaloonComponent.prototype.addSaloonScheduleValues = function () {
        var _this = this;
        var control = this.saloonForm.controls.schedule;
        // delete first item from formBuilder
        control.removeAt(0);
        Object(this.designOpeningTime()).forEach(function (day) {
            // add day in saloon-schdule
            control.push(_this.formBuilder.group({
                day: day,
                start_time: null,
                end_time: null
            }));
        });
    };
    /**
     * Method to get Saloon Detail
     */
    SaloonComponent.prototype.getSaloon = function (saloonId) {
        var _this = this;
        // show loader
        this.saloon.vars.displayLoader(true);
        // get saloon detail
        this.saloon.getSaloon(saloonId).subscribe(function (res) {
            // update saloon-detail
            _this.saloonDetail = res.data;
            // set saloon-form values
            _this.setSaloonvarmValues();
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification('Saloon detail successfully found', res.message, 'success');
        }, function (err) {
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(err.errors), err.message);
        });
    };
    SaloonComponent.prototype.getCountries = function () {
        var _this = this;
        // show loader
        this.common.vars.displayLoader(true);
        this.common.getCountries({ select: 'id,name,phonecode', paginate: 0 }).subscribe(function (res) {
            // hide loader
            _this.common.vars.displayLoader(false);
            // // update countries list
            _this.countries = res.data.data;
        }, function (err) {
            // hide loader
            _this.common.vars.displayLoader(false);
        });
    };
    /**
     * Method to show/hide address fields
     */
    SaloonComponent.prototype.toggleAddressFields = function () {
        this.updateAddress = !this.updateAddress;
    };
    /**
     * Method to set saloon form values
     *
     * @return void
     */
    SaloonComponent.prototype.setSaloonvarmValues = function () {
        var _this = this;
        // console.log (this.saloonDetail)
        Object.keys(this.saloonForm.controls).forEach(function (key) {
            // excludes saloon-schdule or other fields
            if (!['schedule'].includes(key)) {
                var value = (_this.saloonDetail[key]) ? _this.saloonDetail[key] : null;
                // check items from saloon detail
                if (_this.saloonDetail.saloon_detail && ['website_url', 'company_number', 'vat_number'].includes(key) && _this.saloonDetail.saloon_detail[key]) {
                    // get value from saloon_detail
                    value = _this.saloonDetail.saloon_detail[key];
                }
                // set value of each form field
                _this.saloonForm.controls[key].setValue(value);
            }
        });
        // set saloonLogo value
        this.saloonLogo = this.saloonDetail.logo_url;
        // update lat/lng of saloon address
        this.lat = this.saloonDetail.lat;
        this.lng = this.saloonDetail.lng;
        // check if saloon-schedule values exists
        if (this.saloonDetail && this.saloonDetail.saloon_schedule && this.saloonDetail.saloon_schedule['schedule']) {
            var control_1 = this.saloonForm.controls.schedule;
            Object(this.saloonDetail.saloon_schedule['schedule']).forEach(function (day) {
                // check for Saloon-schdule from SaloonForm
                (control_1.value).forEach(function (val, index) {
                    // check for form-control day value and compar with saloon-detail
                    if (val.day === day.day) {
                        // update saloon-schedule form value
                        control_1.at(index).patchValue(day);
                        return false;
                    }
                });
            });
        }
    };
    /**
     * Method to upload image
     */
    SaloonComponent.prototype.uploadImg = function (event) {
        var _this = this;
        var file = event.target.files[0];
        // check if file is not empty 
        if (!file || !file.size) {
            return false;
        }
        // check for file size
        if ((file.size < this.MIN_FILE_SIZE_IN_BYTE) && (file.size > this.MAX_FILE_SIZE_IN_BYTE)) {
            return this.saloon.vars.showNotification("Image size must be between " + this.MIN_FILE_SIZE_IN_BYTE / 1024 + " KB and " + this.MAX_FILE_SIZE_IN_BYTE / 1024 + " KB", 'Image');
        }
        var ext = /(?:\.([^.]+))?$/.exec(file.name)[1];
        // check for file extension
        if (!(this.ALLOW_FILE_EXT).includes(ext)) {
            var allowExt = (this.ALLOW_FILE_EXT).join(', ');
            return this.saloon.vars.showNotification("Allow image extension: " + allowExt, 'Image');
        }
        // check for allow extension
        var reader = new FileReader();
        reader.onload = function (e) {
            // show loader
            _this.saloon.vars.displayLoader(true);
            // upload avatar img on server
            _this.common.uploadImg(file, _this.IMG_DIR).subscribe(function (res) {
                // hide loader
                _this.saloon.vars.displayLoader(false);
                // update avatar response
                // set file avatar value
                _this.saloonLogo = e.target.result;
                // this.profileForm.setValue ({image:res.data[0]})
                _this.saloonForm.controls['logo'].setValue(res.data[0]);
                // show success notification
                _this.saloon.vars.showNotification('Image successfully uploaded.', res.message, 'success');
            }, function (err) {
                // hide loader
                _this.saloon.vars.displayLoader(false);
                // show login error
                _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(err.errors), err.message);
            });
        };
        reader.readAsDataURL(file);
    };
    /**
     * Check if saloon country is same as list
     */
    SaloonComponent.prototype.checkSaloonCountry = function (countryId) {
        return countryId == this.saloonForm.controls['country_id'].value;
    };
    /**
     * Method to design Opening Times table
     */
    SaloonComponent.prototype.designOpeningTime = function () {
        return ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    };
    /**
     * Set dynamic Id for Checkbox in opening times HTL code
     *
     * @param day
     * @param dataTraget
     */
    SaloonComponent.prototype.getDataTarget = function (day, dataTraget) {
        if (dataTraget === void 0) { dataTraget = true; }
        if (dataTraget) {
            return '#data-target' + day;
        }
        return 'data-target' + day;
    };
    /**
     * Method to submit Saloon detail
     *
     * @param form
     *
     * @returns void
     */
    SaloonComponent.prototype.submitSaloon = function (form) {
        var values = form.value;
        // remove empty/null keys from object
        Object.keys(values).forEach(function (key) { return (values[key] == null) && delete values[key]; });
        // check if logo exists
        if (values['logo']) {
            values['header'] = values['logo'];
            values['standard_price'] = 0.00;
        }
        // chec if address updated by user
        // if (this.updateAddress) {
        //   let address = this.saloonForm.controls['address'].value + ',' + this.saloonForm.controls['postal_code'].value;
        //   this.findLocation(address).catch(reject => {
        //     // display error
        //     this.saloon.vars.showNotification(reject, 'Saloon');
        //     console.log("catch lat and lon", reject);
        //   }).then(resolve => {
        //     console.log("lat and lon", resolve);
        //     // set lat/lng of saloon
        //     this.saloonForm.controls['lat'].setValue(resolve.lat);
        //     this.saloonForm.controls['lng'].setValue(resolve.lng);
        //     values['lat'] = resolve.lat;
        //     values['lng'] = resolve.lng;
        //     // values['lat'] = this.saloonForm.controls['lat'];
        //     // values['lng'] = this.saloonForm.controls['lng'];
        //     // submit saloon update form
        //     this.submitSaloonForm(values);
        //   })
        // } else {
        this.submitSaloonForm(values);
        // }
    };
    /**
     * Method to submit saloon form after lat-lng find
     *
     * @param Object values
     *
     * @return void
     */
    SaloonComponent.prototype.submitSaloonForm = function (values) {
        var _this = this;
        // show loader
        this.saloon.vars.displayLoader(true);
        var mySaloon = null;
        // check if user wish to register saloon or update
        if (this.saloonDetail) {
            mySaloon = this.saloon.updateSaloon(values, this.activeRoute.snapshot.params["saloonId"] || null);
        }
        else {
            mySaloon = this.saloon.createSaloon(values);
        }
        // request to update saloon detail
        mySaloon.subscribe(function (res) {
            // hide loader
            _this.saloon.vars.displayLoader(false);
            if (!_this.saloonDetail) {
                location.reload();
            }
            // show error
            _this.saloon.vars.showNotification('Saloon detail successfully updated', res.message, 'success');
        }, function (err) {
            // hide loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(err.errors), err.message);
        });
    };
    SaloonComponent.prototype.findLocation = function (address) {
        var _this = this;
        // find saloon geo-location and wait untill response
        return new Promise(function (resolve, reject) {
            _this.geocoder.geocode({
                'address': address
            }, function (results, status) {
                // @ts-ignore
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0].geometry.location.lat && results[0].geometry.location.lng)
                        return resolve({ lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() });
                    return reject('Unable to find lat/lng of saloon address');
                }
                else {
                    return reject('Unable to find lat/lng of saloon address');
                }
            });
        });
    };
    SaloonComponent.prototype.redirect = function () {
        if (this.router.url == '/barber/add-saloon') {
            this.router.navigateByUrl('/barber/dashboard');
        }
        else {
            this.router.navigateByUrl('admin/saloons');
        }
        console.log("url", this.router.url);
    };
    SaloonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-saloon',
            template: __webpack_require__(/*! ./saloon.component.html */ "./src/modules/saloon/components/saloon/saloon.component.html"),
            styles: [__webpack_require__(/*! ./saloon.component.css */ "./src/modules/saloon/components/saloon/saloon.component.css")],
            providers: [_agm_core_services__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsAPIWrapper"]]
        }),
        __metadata("design:paramtypes", [_services_saloon_saloon_service__WEBPACK_IMPORTED_MODULE_3__["SaloonService"],
            _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"],
            _agm_core_services__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsAPIWrapper"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SaloonComponent);
    return SaloonComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/orders/components/order-invoice/order-invoice.component.css":
/*!****************************************************************************************!*\
  !*** ./src/modules/saloon/orders/components/order-invoice/order-invoice.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".saloon-logo {\n    width: 6rem;\n}\n\n.text-sm {\n    font-size: 12px;\n}\n\n.bg-gray {\n    background-color: #f6f7f9;\n}\n\np{\n    color:#4f5158;\n    font-size:11px;\n    font-weight:bold;\n}\n\nth{\n    font-weight:bold;\n    font-size:10px !important;\n    color:#a3a3ab !important;\n}\n\ntd{\n    font-weight:bold !important;\n    font-size:11px !important;\n    color:#7d7f88 ;\n\n}\n\n.font_text{\n    font-size:17px !important;\n}\n\n.bg_color{\n    color:#f6f7f9 !important;\n}"

/***/ }),

/***/ "./src/modules/saloon/orders/components/order-invoice/order-invoice.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/modules/saloon/orders/components/order-invoice/order-invoice.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n    <!-- display page title -->\n    <div class=\"row m-2\">\n        <div class=\"col\">\n            <h6 class=\"text-capitalize h3\">{{pageTitle}}</h6>\n        </div>\n        <div class=\"col text-right\">\n            <span class=\"btn btn-transparent btn-sm pl-4 pr-4\" (click)=\"downloadInvoice ()\">Export To PDF</span>\n        </div>\n    </div>  <!-- End of Row Class---->\n\n    <!-- this div is only to make PDF. Do not add any class or property over it -->\n    <div id=\"contentToConvert\">\n        <!-- display Invoice Detail -->\n    <div class=\"row mt-3 mr-3 ml-3 border-right border-left border-top shadow\">\n            <div class=\"col p-5 bg-white\">\n                <!-- display header of the invoice -->\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <span class=\"h4 text-uppercase\"><b>{{pageTitle}}</b></span>\n                    </div>\n                    <div class=\"col text-right\">\n                        <img [src]=\"invoiceDetail?.saloon?.logo_url\" [alt]=\"invoiceDetail?.saloon?.name\" class=\"saloon-logo\"/>\n                        <div class=\"d-flex p-2 text-muted justify-content-end\">{{ invoiceDetail?.saloon?.address }}, {{ invoiceDetail?.saloon?.postal_code }}</div>\n                    </div>\n                </div>  <!-- end of display header of the invoice -->\n    \n                <!-- seperator or line -->\n                <div class=\"line mt-5 mb-5\"></div>\n    \n                <!-- display Invoice short detail -->\n                <div class=\"row mb-5\">\n                    <div class=\"col\">\n                        <div class=\"font-weight-bold text-uppercase text-sm\"><p>date</p></div>\n                        <!-- display date of invoice -->\n                        <div class=\"font-weight-bold text-secondary text-sm\">{{ invoiceDetail?.created_at * 1000 | date: 'MMM dd, y' }}</div>\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"font-weight-bold text-uppercase text-sm\"><p>invoice no</p></div>\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"font-weight-bold text-uppercase text-sm\"><p>invoice to</p></div>\n                    </div>\n                </div>\n    \n                <!-- display the services detail belongs to invoices -->\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th scope=\"col\" class=\"text-sm text-uppercase text-secondary\">service/product</th>\n                                        <th scope=\"col\" class=\"text-sm text-uppercase text-secondary\">time <small>(in minuits)</small></th>\n                                        <th scope=\"col\" class=\"text-sm text-uppercase text-secondary\">type</th>\n                                        <th scope=\"col\" class=\"text-sm text-uppercase text-secondary\">amount</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <!-- display all services detail -->\n                                    <tr *ngFor=\"let service of invoiceDetail?.services\">\n                                        <td class=\"text-sm text-capitalize font-weight-bold\">{{ service?.name }}</td>\n                                        <td class=\"text-sm  text-capitalize font-weight-bold\">{{ service?.time }}</td>\n                                        <td class=\"text-sm text-capitalize font-weight-bold\">{{ service?.service_type }}</td>\n                                        <td class=\"text-sm text-capitalize font-weight-bold text-danger\">{{ service?.amount | currency:'GBP' }}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    \n        <!-- display bank detail of the invoice -->\n        <div class=\"row mb-3 ml-3 mr-3 border-right border-left border-bottom\">\n            <div class=\"col p-5 bg-gray\">\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\" class=\"text-sm text-uppercase text-secondary\">bank</th>\n                                <!-- <th scope=\"col\" class=\"text-sm text-uppercase text-secondary\">acc no.</th> -->\n                                <th scope=\"col\" class=\"text-sm text-uppercase text-secondary\">due date</th>\n                                <th scope=\"col\" class=\"text-sm text-uppercase text-secondary\">total amount</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <!-- display all services detail -->\n                            <tr>\n                                <td class=\"text-sm  text-capitalize font-weight-bold\">barkley bank</td>\n                                <!-- <td class=\"text-sm  text-capitalize font-weight-bold\">123456789</td> -->\n                                <td class=\"text-sm  text-capitalize font-weight-bold\">{{ invoiceDetail?.created_at * 1000 | date: 'MMM dd, y' }}</td>\n                                <td class=\"font_text text-capitalize font-weight-bold text-danger\">{{ invoiceDetail?.final_amount | currency:'GBP' }}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/modules/saloon/orders/components/order-invoice/order-invoice.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/modules/saloon/orders/components/order-invoice/order-invoice.component.ts ***!
  \***************************************************************************************/
/*! exports provided: OrderInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderInvoiceComponent", function() { return OrderInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_saloon_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/saloon/orders/orders.service */ "./src/services/saloon/orders/orders.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderInvoiceComponent = /** @class */ (function () {
    function OrderInvoiceComponent(order, activeRoute) {
        this.order = order;
        this.activeRoute = activeRoute;
        this.pageTitle = 'invoice';
    }
    OrderInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        var transactionId = this.activeRoute.snapshot.params["transactionId"];
        // get invoice detail
        setTimeout(function () {
            _this.getPaymentDetail(transactionId);
        }, this.order.vars.onInt_request_delay_in_ms);
    };
    /**
     * Request to get list of all saloon orders
     *
     * @param number page
     *
     * @return void
     */
    OrderInvoiceComponent.prototype.getPaymentDetail = function (transactionId) {
        var _this = this;
        if (transactionId === void 0) { transactionId = 1; }
        // show loader
        this.order.vars.displayLoader(true);
        this.order.getPaymentDetail(transactionId).subscribe(function (res) {
            _this.invoiceDetail = res.data;
            // show loader
            _this.order.vars.displayLoader(false);
            // show error
            _this.order.vars.showNotification('Invoice detail successfully found.', res.message, 'success');
        }, function (err) {
            // show loader
            _this.order.vars.displayLoader(false);
            // show error
            _this.order.vars.showNotification(_this.order.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Download the invoice information into PDF format
     */
    OrderInvoiceComponent.prototype.downloadInvoice = function () {
        var data = document.getElementById('contentToConvert');
        html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(data).then(function (canvas) {
            // Few necessary setting options  
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_3__('p', 'mm', 'a4'); // A4 size page of PDF  
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('Invoice.pdf'); // Generated PDF   
        });
    };
    OrderInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-invoice',
            template: __webpack_require__(/*! ./order-invoice.component.html */ "./src/modules/saloon/orders/components/order-invoice/order-invoice.component.html"),
            styles: [__webpack_require__(/*! ./order-invoice.component.css */ "./src/modules/saloon/orders/components/order-invoice/order-invoice.component.css")]
        }),
        __metadata("design:paramtypes", [_services_saloon_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OrderInvoiceComponent);
    return OrderInvoiceComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/orders/components/orders/orders.component.css":
/*!**************************************************************************!*\
  !*** ./src/modules/saloon/orders/components/orders/orders.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/modules/saloon/orders/components/orders/orders.component.html":
/*!***************************************************************************!*\
  !*** ./src/modules/saloon/orders/components/orders/orders.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  orders works!\n</p>\n"

/***/ }),

/***/ "./src/modules/saloon/orders/components/orders/orders.component.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/saloon/orders/components/orders/orders.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/modules/saloon/orders/components/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/modules/saloon/orders/components/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/orders/components/sales/sales.component.css":
/*!************************************************************************!*\
  !*** ./src/modules/saloon/orders/components/sales/sales.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".p_tag{\n    float:left;\n    /* padding-left: 10px; */\n    color:rgb(170,170,170);\n    font-weight:700;\n}\n.serch_inpt{\n    float:right;\n     margin-top: 10px; \n     padding-right: 5px;\n     margin-right: 5px;\n   /*  border:none; */\n}\n/* Search Buttons Classes */\n.img_resp{\n  width:35px;\n  height:35px;\n  border-radius:50px;\n}\n.required::after {\n  color: #fff;\n  font-size: none;\n  content: '';\n}\n.aster{\n    color:#c3777b;\n    padding-left:5px;\n    \n}\n.card_listt{\n   /*  width:79%;\n    margin:0 auto; */\n    border:none;\n    background:#fff;\n    height: 121px !important;\n}\n.card_list{\n   /*  width:79%;\n   margin:0 auto; */\n   border:none;\n   width: 99%;\n   background:#fff;\n\n}\n.save_btn{\n    background-color: #132149;\n    border-radius: 4px;\n    color: #fff;\n    font-size: 10px;\n    width: 63px;\n    margin: 10px;\n    border: none !important;\n    height: 29px;\n    font-weight: 400;\n}\n.p_tag{\n    margin: 15px;\n    font-size: 12px;\n    color: #565962;\n    font-weight: bold;\n}\n.h4_tag{\n  /*  text-align: left; */\n       margin-left: 3px;\n       font-weight: bold;\n       font-size: 22px;\n       margin-top: -30px;\n     padding-top: 12px;\n     font-family:odudo;\n   \n }\n.col_pss{\n    color:#656669;\n    font-size:9px;\n    margin-left: 16px;\n}\n.cancl_butn{\n    background: #fff !important;\n    border: 0.1px solid #c2c2c2 !important;\n    width: 63px;\n    height: 27px;\n    margin: -3px;\n    font-weight: 400;\n    font-size: 10px;\n    border-radius: 4px;\n}\n.input_box{\n  height: 22px;\n  margin-left: 16px;\n  width: 38%;\n}\n.inpt_bx{\n    width:60% !important;\n    height:28px;\n    border:0.9px solid #f1f2f5;\n    font-size: 10px;\n    border-radius: 2px;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #132149;\n  border-color: #132149;\n}\n.upload_btn  input[type=file] {\n    background-color: #132149;\n    border-radius: 3px;\n    color: #fff;\n    font-size: 10px;\n    width: 30px;\n    margin: 0px;\n    border: none !important;\n     height: 25px;\n    font-weight: 400;\n    filter: alpha(opacity=0);\n    opacity: 0;\n    /* outline: none;   \n    cursor: inherit;\n    display: block; */\n}\n.close_btn{\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n  font-size: 10px;\n  width: 46px;\n  /* margin: 10px; */\n /*  border: none !important; */\n  height: 29px;\n  font-weight: 400;\n}\n.modaldelte_btn{\n  background:#bf6d71;\n  border-radius: 4px;\n  color: #fff;\n  font-size: 10px;\n  width: 76px;\n  /* margin: 10px; */\n  border: none !important;\n  height: 29px;\n  font-weight: 400;\n\n}\n.dropbtn {\n  /* background-color: #3498DB; */\n /*  color: white;\n  padding: 16px;\n  font-size: 16px; */\n  border: none;\n  cursor: pointer;\n}\n.dropbtn:hover, .dropbtn:focus {\n /*  background-color: #2980B9; */\n}\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n.pro_bar{\n  width: 75% !important;\n  margin: 0 auto !important;\n  height: 5px !important;\n  margin-bottom: 20px !important;\n  /* background:#bf6d71 !important; */\n}\n.prog_bar{\n  background-color:#bf6d71 !important;\n  width:80%;\n}\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n.dropdown a:hover {background-color: #ddd;}\n.show {display: block;}\n.pagination>li>a, .pagination>li>span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  margin-left: -1px;\n  line-height: 1.42857143;\n  color: #337ab7;\n  /* text-decoration: none; */\n  /* background-color: #fff; */\n  border: 0px solid #ddd; \n}\n.page-link {\n  background-color: transparent !important;\n}\n.row_revenue{\n  padding: 37px 0 5px 25px;\n}\n.total_revenue{\n  color:rgb(104, 103, 116);\n  font-size:11px;\n  font-weight:bold;\n}\n.total_amnt{\n  color:#132149;\n  font-weight: bolder;\n  padding-left: 55px;\n}\n.to_date{\n  color:#cfd0d6;\n  font-size:9px;\n}\n.row_cardrevenue{\n  padding: 23px 5px 5px 26px;\n}\n.card_revenue{\n  color:rgb(104, 103, 116);\n  font-size:12px;\n  font-weight:bold;\n}\n.span_todate{\n  color:#cfd0d6;\n  font-size:9px;\n}\n.money{\n  color:#132149;\n  font-weight: bolder;\n  padding-left:76px;\n}\n.progress_total{\n  font-size:9px;\n  color:#d4d5da;\n  margin-left: 43px;\n  margin-top: -15px;\n}\n.percent{\n  font-size:9px;\n  float: right;\n  margin-right: 40px;\n  margin-top:-16px;\n  color:#d4d5da;\n}\n.euwo_money{\n  color:#132149;\n  font-weight: bolder;\n  padding-left: 55px;\n}\n.fees_card{\n  color:rgb(104, 103, 116);\n  font-size:11px;\n  font-weight:bold;\n}\n.upto_date{\n  color:#cfd0d6;\n  font-size:9px;\n}\n.p_euro{\n  color:#132149;\n  font-weight: bolder;\n  padding-left: 55px;\n}\n.p_progress_total{\n  font-size:9px;\n  color:#d4d5da;\n  margin-left: 43px;\n  margin-top: -15px;\n}\n.p_progress_percent{\n  font-size:9px;\n  float: right;\n  margin-right: 40px\n  ;margin-top:-16px;\n  color:#d4d5da;\n}\n.barber_item{\n  color:#8f9bbb;\n  font-size:9px;\n  font-weight:bold;\n  margin: 19px 0px 9px 0px;\n  padding-left: 43px;\n}\n.barber_all_items{\n  color:#8f9bbb;\n  font-size:9px;\n  font-weight:bold;\n  margin: 19px 0px 9px 0px;\n}\n.p_entries_name{\n  color:#7b7a86;\n  font-size:10px;\n  font-weight:bolder;\n  margin-left: 14px;\n}\n.entries_list_names{\n  color:#b2b2bc;\n  font-weight:bold;\n  font-size:11px;\n  padding-top: 9px;\n}\n.span_items{\n  font-size:7px;\n  color:#b2b2bc;\n}\n.padding_row{\n  padding-left:66px;\n}\n.payment_list{\n  color:#8f9bbb;font-size:9px;font-weight:bold;\n}\n.row_padding_list{\n  padding: 6px 0px 11px 66px;\n}\n.payment_col_list{\n  color:#807f8a;font-size:10px;font-weight:bold;\n}\n.payments_col_lists{\n  color:#b0b0bc;font-size:10px;font-weight:900;\n}\n.margin_right{\n  margin-right:13px;\n}\n.payment_text_desc{\n  color:#58585d;font-size:9px;font-weight:bold;margin-left:16px;\n}\n.input_padding{\n  padding-left:5px;\n}"

/***/ }),

/***/ "./src/modules/saloon/orders/components/sales/sales.component.html":
/*!*************************************************************************!*\
  !*** ./src/modules/saloon/orders/components/sales/sales.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <div class=\"sub-header\">\n        <h4 class=\"h4_tag\">Sales</h4>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n         \n              <div class=\"card card-block card_listt\">\n                \n                    <div class=\"card card-block card_listt\">\n                      <div class=\"row row_revenue\">\n                          <div class=\"col-md-6\">\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <p class=\"total_revenue\">Total Revenue<br><span class=\"to_date\">To Date</span></p>\n                                </div>\n                                <div class=\"col-md-6\">\n                                  <p class=\"total_amnt\">£28,523</p>\n                                </div> \n                             </div>\n\n                        </div>\n\n                        <div class=\"col-md-6\">\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <p class=\"total_revenue\">Fees Paid<br><span class=\"to_date\">To Date</span></p>\n                                </div>\n                                <div class=\"col-md-6\">\n                                  <p class=\"total_amnt\">£18,523</p>\n                                </div> \n                             </div>\n\n                        </div>\n\n                        </div>\n                    </div>\n              </div>\n\n              \n           \n      </div>\n      \n      <div class=\"col-md-4\">\n          <div class=\"card card-block card_listt margin_right\">\n            <div class=\"row row_cardrevenue\">\n                <div class=\"col-md-6\">\n                    <p class=\"card_revenue\">Card Revenue<br><span class=\"to_date\">To Date</span></p>\n                </div>\n                 <div class=\"col-md-6\">\n                    <p class=\"money\">276</p>\n                </div>\n            </div>\n            \n            <div class=\"progress pro_bar\">\n                <div class=\"progress-bar prog_bar\"></div>\n                \n              </div>\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <p class=\"progress_total\">Total</p>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <p class=\"percent\">87%</p>\n                  </div>\n                </div>\n\n          </div>\n      </div>\n    </div>\n    <br>\n    <!-- Second start here -->\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n           \n                <div class=\"card card-block card_listt\">\n                  \n                    <div class=\"card card-block card_listt\">\n                        <div class=\"row row_revenue\">\n                            <div class=\"col-md-6\">\n\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                      <p class=\"total_revenue\">Total Revenue<br><span class=\"to_date\">To Date</span></p>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                      <p class=\"total_amnt\">£28,523</p>\n                                    </div> \n                                 </div>\n    \n                            </div>\n    \n                            <div class=\"col-md-6\">\n    \n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                      <p class=\"total_revenue\">Fees Paid<br><span class=\"to_date\">To Date</span></p>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                      <p class=\"total_amnt\">£18,523</p>\n                                    </div> \n                                 </div>\n    \n                            </div>\n                          </div>\n                    </div>\n                   \n                </div>\n\n                \n             \n        </div>\n       \n        <div class=\"col-md-4\">\n            <div class=\"card card-block card_listt margin_right\">\n              <div class=\"row row_cardrevenue\">\n                  <div class=\"col-md-6\">\n                      <p class=\"fees_card\">Card Revenue<br><span class=\"upto_date\">To Date</span></p>\n                  </div>\n                   <div class=\"col-md-6\">\n                      <p class=\"money\">276</p>\n                  </div>\n              </div>\n              \n              <div class=\"progress pro_bar\">\n                  <div class=\"progress-bar prog_bar\"></div>\n                  \n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <p class=\"p_progress_total\">Total</p>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <p class=\"p_progress_percent\">87%</p>\n                    </div>\n                  </div>\n\n            </div>\n        </div>\n      </div>\n\n    <!-- Ends here -->\n    <br>\n       \n        <div class=\"row\">\n          <div class=\"col-md-12\">\n\n            <div class=\"card card-block card_list\">\n              <p class=\"p_tag\">Enteries</p><hr>\n              <div class=\"card card-block card_list\">\n\n                  <div class=\"row\">\n                      <div class=\"col-md-2 barber_item\">Barber</div>\n                      <div class=\"col-md-2 barber_all_items\">Products</div>\n                      <div class=\"col-md-2 barber_all_items\">Cut Time</div>\n                      <div class=\"col-md-2 barber_all_items\">Payment</div>\n                      <div class=\"col-md-1 barber_all_items\">Time</div>\n                      <div class=\"col-md-2 barber_all_items\">Date</div>\n                      <div class=\"col-md-1 barber_all_items\">Total</div>                       \n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-2\">\n                        <p class=\"p_entries_name\"><img class=\"img_resp\" src=\"assets/images/background.png\"> Melenia Trump</p>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <p class=\"entries_list_names\">Dry Cut,Beard Trim</p>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <p class=\"entries_list_names\">14<span class=\"span_items\">min</span></p>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <p class=\"entries_list_names\">Card</p>\n                      </div>\n                      <div class=\"col-md-1\">\n                        <p class=\"entries_list_names\">4:25<span class=\"span_items\">pm</span></p>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <p class=\"entries_list_names\">22/2/2018</p>\n                      </div>\n                      <div class=\"col-md-1\">\n                        <p class=\"entries_list_names\">£67</p>\n                      </div>\n                    </div>\n                    <!-- Second List -->\n                    <div class=\"row\">\n                      <div class=\"col-md-2\">\n                        <p class=\"p_entries_name\"><img class=\"img_resp\" src=\"assets/images/background.png\"> Melenia Trump</p>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <p class=\"entries_list_names\">Dry Cut,Beard Trim</p>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <p class=\"entries_list_names\">14<span class=\"span_items\">min</span></p>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <p class=\"entries_list_names\">Card</p>\n                      </div>\n                      <div class=\"col-md-1\">\n                        <p class=\"entries_list_names\">4:25<span class=\"span_items\">pm</span></p>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <p class=\"entries_list_names\">22/2/2018</p>\n                      </div>\n                      <div class=\"col-md-1\">\n                        <p class=\"entries_list_names\">£67</p>\n                      </div>\n                    </div>\n                    <!-- Ends here -->\n\n                    <!-- Third list -->\n                    <div class=\"row\">\n                      <div class=\"col-md-2\">\n                        <p class=\"p_entries_name\"><img class=\"img_resp\" src=\"assets/images/background.png\"> Melenia Trump</p>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <p class=\"entries_list_names\">Dry Cut,Beard Trim</p>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <p class=\"entries_list_names\">14<span class=\"span_items\">min</span></p>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <p class=\"entries_list_names\">Card</p>\n                      </div>\n                      <div class=\"col-md-1\">\n                        <p class=\"entries_list_names\">4:25<span class=\"span_items\">pm</span></p>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <p class=\"entries_list_names\">22/2/2018</p>\n                      </div>\n                      <div class=\"col-md-1\">\n                        <p class=\"entries_list_names\">£67</p>\n                      </div>\n                    </div>\n\n                    <!-- Ends here -->\n                    <nav aria-label=\"Page navigation example\" style=\"text-align:left!important;margin-left: 20px;\">\n                      <ul class=\"pagination\" style=\"border:0px;background:none;\">\n                       <!--  <li class=\" disabled\">\n                        <a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a> \n                        </li> -->\n                        <li ><a href=\"\" class=\"rounded-circle\" style=\"background:#6a61e9;color:#fff;font-size:9px;height: 24px;\">1</a></li>\n                        <li ><a class=\"page-link\"  style=\"color:#cbdeff;font-size:9px;\">2</a></li>\n                        <li><a class=\"page-link\"  style=\"color:#cbdeff;font-size:9px;\">3</a></li>\n                        <li><a class=\"page-link\"  style=\"color:#cbdeff;font-size:9px;\">4</a></li>\n                        <li><a class=\"page-link\" style=\"color:#cbdeff;font-size:9px;\">5</a></li>\n                        <li><a class=\"page-link\" style=\"color:#cbdeff;font-size:9px;\">6</a></li>\n                       <!--  <li class=\"page-item\">\n                          <a class=\"page-link\" href=\"#\">Next</a>\n                        </li> -->\n                      </ul>\n                    </nav>\n              </div>      \n            </div>\n\n\n          </div>\n        </div>\n       <br>\n<!-- Payments history --> \n\n <div class=\"row\">\n  <div class=\"col-md-12\">\n\n  \n      <div class=\"card card-block card_list\">\n        <p class=\"p_tag\">Payments History</p><hr>\n          <div class=\"card card-block card_list\">\n              <div class=\"row padding_row\">\n                  <div class=\"col-md-3\">\n                    <p class=\"payment_list\">#</p>\n                  </div>\n                <div class=\"col-md-3\">\n                    <p class=\"payment_list\">Total</p>\n                </div>\n                <div class=\"col-md-3\">\n                    <p class=\"payment_list\">Date</p>\n                </div>\n                <div class=\"col-md-3\">\n                    <p class=\"payment_list\">View</p>\n                </div>\n              </div>\n          <div class=\"row row_padding_list\">\n              <div class=\"col-md-3\">\n                <p class=\"payment_col_list\">13542</p>\n              </div>\n              <div class=\"col-md-3\">\n                  <p class=\"payments_col_lists\">£22.50</p>\n\n              </div>\n              <div class=\"col-md-3\">\n                  <p class=\"payments_col_lists\">22/02/2018</p>\n\n              </div>\n              <div class=\"col-md-3\">\n                  <p class=\"payments_col_lists\">Link</p>\n\n              </div>\n          </div>\n          <div class=\"row row_padding_list\">\n              <div class=\"col-md-3\">\n                  <p class=\"payment_col_list\">13542</p>\n                  \n              </div>\n              <div class=\"col-md-3\">\n                  <p class=\"payments_col_lists\">£22.50</p>\n\n              </div>\n              <div class=\"col-md-3\">\n                  <p class=\"payments_col_lists\">22/02/2018</p>\n\n              </div>\n              <div class=\"col-md-3\">\n                  <p class=\"payments_col_lists\">Link</p>\n\n              </div>\n              </div>\n\n              <div class=\"row row_padding_list\">\n                  <div class=\"col-md-3\">\n                <p class=\"payment_col_list\">13542</p>\n               \n                  </div>\n                  <div class=\"col-md-3\">\n                      <p class=\"payments_col_lists\">£22.50</p>\n\n                  </div>\n                  <div class=\"col-md-3\">\n                      <p class=\"payments_col_lists\">22/02/2018</p>\n\n                  </div>\n                  <div class=\"col-md-3\">\n                      <p class=\"payments_col_lists\">Link</p>\n\n                  </div>\n                  </div>\n\n                  <div class=\"row row_padding_list\">\n                      <div class=\"col-md-3\">\n                <p class=\"payment_col_list\">13542</p>\n                \n                      </div>\n                      <div class=\"col-md-3\">\n                          <p class=\"payments_col_lists\">£22.50</p>\n        \n                      </div>\n                      <div class=\"col-md-3\">\n                          <p class=\"payments_col_lists\">22/02/2018</p>\n        \n                      </div>\n                      <div class=\"col-md-3\">\n                          <p class=\"payments_col_lists\">Link</p>\n        \n                      </div>\n                      </div>\n                      <nav aria-label=\"Page navigation example\" style=\"text-align:left!important;margin-left: 20px;\">\n                          <ul class=\"pagination\" style=\"border:0px;background:none;\">\n                          <!--  <li class=\" disabled\">\n                            <a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a> \n                            </li> -->\n                            <li ><a href=\"\" class=\"rounded-circle\" style=\"background:#6a61e9;color:#fff;font-size:9px;height: 24px;\">1</a></li>\n                            <li ><a class=\"page-link\"  style=\"color:#cbdeff;font-size:9px;\">2</a></li>\n                            <li><a class=\"page-link\"  style=\"color:#cbdeff;font-size:9px;\">3</a></li>\n                            <li><a class=\"page-link\"  style=\"color:#cbdeff;font-size:9px;\">4</a></li>\n                            <li><a class=\"page-link\" style=\"color:#cbdeff;font-size:9px;\">5</a></li>\n                            <li><a class=\"page-link\" style=\"color:#cbdeff;font-size:9px;\">6</a></li>\n                          <!--  <li class=\"page-item\">\n                              <a class=\"page-link\" href=\"#\">Next</a>\n                            </li> -->\n                          </ul>\n                        </nav> \n        \n      </div>  \n      </div>\n</div>\n\n</div>\n<br>\n<!-- Ends here -->\n    <!-- Payments start -->\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"card card-block card_list\">\n                  <p class=\"p_tag\">Change Payment Info</p><hr>\n                    <div class=\"card card-block card_list\">\n                        <p class=\"payment_text_desc\">To change your payment information,enter your new account number below.</p>\n                        <form (submit)=\"Submitlogin(login_form)\" class=\"bak form-horizontal\" novalidate>\n                              <div class=\"form-row input_padding\">\n                                    <div class=\"form-group required col-md-12\">\n                                    <label for=\"amount\" class=\"col_pss col-form-label col-form-label-sm\">Account Number: <span class=\"aster\"> *</span></label> \n              \n                                    <input type=\"text\" formControlName=\"cnumber\" name=\"din\" appNumberOnly class=\"form-control input_box\" maxlength=\"19\">\n              \n                                    </div>\n                                  <hr>\n                              </div>\n                        </form> \n\n                    </div>    \n                </div>\n              </div>        \n          </div>   \n          <br> \n    <!-- Ends here -->\n      \n      <!-- Entries ends here -->\n\n</div>"

/***/ }),

/***/ "./src/modules/saloon/orders/components/sales/sales.component.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/saloon/orders/components/sales/sales.component.ts ***!
  \***********************************************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SalesComponent = /** @class */ (function () {
    function SalesComponent() {
    }
    SalesComponent.prototype.ngOnInit = function () {
    };
    SalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales',
            template: __webpack_require__(/*! ./sales.component.html */ "./src/modules/saloon/orders/components/sales/sales.component.html"),
            styles: [__webpack_require__(/*! ./sales.component.css */ "./src/modules/saloon/orders/components/sales/sales.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/orders/orders.module.ts":
/*!****************************************************!*\
  !*** ./src/modules/saloon/orders/orders.module.ts ***!
  \****************************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/orders/orders.component */ "./src/modules/saloon/orders/components/orders/orders.component.ts");
/* harmony import */ var _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sales/sales.component */ "./src/modules/saloon/orders/components/sales/sales.component.ts");
/* harmony import */ var _components_order_invoice_order_invoice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/order-invoice/order-invoice.component */ "./src/modules/saloon/orders/components/order-invoice/order-invoice.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_barber_admin_barber_admin_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../guards/barber-admin/barber-admin.guard */ "./src/guards/barber-admin/barber-admin.guard.ts");
/* harmony import */ var _guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../guards/auth/auth.guard */ "./src/guards/auth/auth.guard.ts");
/* harmony import */ var _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../guards/role/role-access.guard */ "./src/guards/role/role-access.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [{
        path: 'saloon/sales/:transactionId',
        component: _components_order_invoice_order_invoice_component__WEBPACK_IMPORTED_MODULE_4__["OrderInvoiceComponent"],
        //  canActivate: [ AuthGuard, RoleAccessGuard, BarberAdminGuard ],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_8__["RoleAccessGuard"]],
        data: { roles: ['barber', 'admin'] }
    },
    {
        path: 'orders/sales',
        component: _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_3__["SalesComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_8__["RoleAccessGuard"], _guards_barber_admin_barber_admin_guard__WEBPACK_IMPORTED_MODULE_6__["BarberAdminGuard"]],
        data: { roles: ['barber'] }
    }
];
var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_components_orders_orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"], _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_3__["SalesComponent"], _components_order_invoice_order_invoice_component__WEBPACK_IMPORTED_MODULE_4__["OrderInvoiceComponent"]],
            exports: [
                _components_order_invoice_order_invoice_component__WEBPACK_IMPORTED_MODULE_4__["OrderInvoiceComponent"], _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_3__["SalesComponent"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ]
        })
    ], OrdersModule);
    return OrdersModule;
}());



/***/ }),

/***/ "./src/modules/saloon/saloon.module.ts":
/*!*********************************************!*\
  !*** ./src/modules/saloon/saloon.module.ts ***!
  \*********************************************/
/*! exports provided: SaloonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaloonModule", function() { return SaloonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_saloon_saloon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/saloon/saloon.component */ "./src/modules/saloon/components/saloon/saloon.component.ts");
/* harmony import */ var _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sales/sales.component */ "./src/modules/saloon/components/sales/sales.component.ts");
/* harmony import */ var _barbers_barbers_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./barbers/barbers.module */ "./src/modules/saloon/barbers/barbers.module.ts");
/* harmony import */ var _orders_orders_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orders/orders.module */ "./src/modules/saloon/orders/orders.module.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/services.module */ "./src/modules/saloon/services/services.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/modules/shared/shared.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../guards/auth/auth.guard */ "./src/guards/auth/auth.guard.ts");
/* harmony import */ var _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../guards/role/role-access.guard */ "./src/guards/role/role-access.guard.ts");
/* harmony import */ var _guards_barber_admin_barber_admin_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../guards/barber-admin/barber-admin.guard */ "./src/guards/barber-admin/barber-admin.guard.ts");
/* harmony import */ var _components_sales_entries_entries_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sales/entries/entries.component */ "./src/modules/saloon/components/sales/entries/entries.component.ts");
/* harmony import */ var _components_sales_payment_history_payment_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/sales/payment-history/payment-history.component */ "./src/modules/saloon/components/sales/payment-history/payment-history.component.ts");
/* harmony import */ var _components_sales_sales_summary_sales_summary_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sales/sales-summary/sales-summary.component */ "./src/modules/saloon/components/sales/sales-summary/sales-summary.component.ts");
/* harmony import */ var _components_sales_payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sales/payment-info/payment-info.component */ "./src/modules/saloon/components/sales/payment-info/payment-info.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/modules/saloon/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_dashboard_progress_progress_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/dashboard/progress/progress.component */ "./src/modules/saloon/components/dashboard/progress/progress.component.ts");
/* harmony import */ var _components_dashboard_cut_detail_cut_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/dashboard/cut-detail/cut-detail.component */ "./src/modules/saloon/components/dashboard/cut-detail/cut-detail.component.ts");
/* harmony import */ var _components_dashboard_cut_history_cut_history_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/dashboard/cut-history/cut-history.component */ "./src/modules/saloon/components/dashboard/cut-history/cut-history.component.ts");
/* harmony import */ var _components_pay_admin_pay_admin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/pay-admin/pay-admin.component */ "./src/modules/saloon/components/pay-admin/pay-admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import directe components


// imports nested custom modules



// import other modules














// import { AppSaloon } from '../saloon/components/saloon/saloon.component';
var routes = [
    {
        path: 'saloon/pay-admin',
        component: _components_pay_admin_pay_admin_component__WEBPACK_IMPORTED_MODULE_22__["PayAdminComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_12__["RoleAccessGuard"]],
        data: { roles: ['barber'] }
    },
    {
        path: 'saloon',
        component: _components_saloon_saloon_component__WEBPACK_IMPORTED_MODULE_4__["SaloonComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_12__["RoleAccessGuard"]],
        data: { roles: ['barber'] }
    }, {
        path: 'admin/saloon/:saloonId',
        component: _components_saloon_saloon_component__WEBPACK_IMPORTED_MODULE_4__["SaloonComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_12__["RoleAccessGuard"]],
        data: { roles: ['admin'] }
    }, {
        path: 'saloon/sales',
        component: _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_5__["SalesComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_12__["RoleAccessGuard"], _guards_barber_admin_barber_admin_guard__WEBPACK_IMPORTED_MODULE_13__["BarberAdminGuard"]],
        data: { roles: ['barber'] }
    }, {
        path: 'admin/saloon/:saloonId/sales',
        component: _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_5__["SalesComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_12__["RoleAccessGuard"]],
        data: { roles: ['admin'] }
    }, {
        path: 'barber/dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_12__["RoleAccessGuard"]],
        data: { roles: ['barber'] }
    },
    {
        path: 'barber/add-saloon',
        component: _components_saloon_saloon_component__WEBPACK_IMPORTED_MODULE_4__["SaloonComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_12__["RoleAccessGuard"]],
        data: { roles: ['barber'] }
    },
    {
        path: 'saloon/:saloonId/dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_12__["RoleAccessGuard"]],
        data: { roles: ['barber', 'admin'] }
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    }
];
var SaloonModule = /** @class */ (function () {
    function SaloonModule() {
    }
    SaloonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _barbers_barbers_module__WEBPACK_IMPORTED_MODULE_6__["BarbersModule"], _orders_orders_module__WEBPACK_IMPORTED_MODULE_7__["OrdersModule"], _services_services_module__WEBPACK_IMPORTED_MODULE_8__["ServicesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBqMLU0HiPa-yiuVP6RnDB-yWeTFcSCXt0' //Google API key for maps
                })
            ],
            declarations: [
                _components_saloon_saloon_component__WEBPACK_IMPORTED_MODULE_4__["SaloonComponent"], _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_5__["SalesComponent"], _components_sales_entries_entries_component__WEBPACK_IMPORTED_MODULE_14__["EntriesComponent"],
                _components_sales_payment_history_payment_history_component__WEBPACK_IMPORTED_MODULE_15__["PaymentHistoryComponent"], _components_sales_sales_summary_sales_summary_component__WEBPACK_IMPORTED_MODULE_16__["SalesSummaryComponent"],
                _components_sales_payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_17__["PaymentInfoComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
                _components_dashboard_progress_progress_component__WEBPACK_IMPORTED_MODULE_19__["ProgressComponent"],
                _components_dashboard_cut_detail_cut_detail_component__WEBPACK_IMPORTED_MODULE_20__["CutDetailComponent"],
                _components_dashboard_cut_history_cut_history_component__WEBPACK_IMPORTED_MODULE_21__["CutHistoryComponent"],
                _components_pay_admin_pay_admin_component__WEBPACK_IMPORTED_MODULE_22__["PayAdminComponent"]
            ],
            exports: [
                _barbers_barbers_module__WEBPACK_IMPORTED_MODULE_6__["BarbersModule"], _orders_orders_module__WEBPACK_IMPORTED_MODULE_7__["OrdersModule"], _services_services_module__WEBPACK_IMPORTED_MODULE_8__["ServicesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], SaloonModule);
    return SaloonModule;
}());



/***/ }),

/***/ "./src/modules/saloon/services/components/services/services.component.css":
/*!********************************************************************************!*\
  !*** ./src/modules/saloon/services/components/services/services.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".width-3 {\n    width:3rem;\n}\n\n.page-link {\n    color: #D7D8DD;\n    border:none;\n    border-radius: 50%;\n    padding: .5rem 0.9rem;\n    background-color: #E6E6E6;\n}\n\n.page-item:first-child .page-link {\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n}\n\n.page-item:last-child .page-link {\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n}\n\n.table thead th {\n    border-bottom: none;\n    border-top: none;\n    color:#8895b7;\n    font-size:0.8rem;\n}\n\n.table td {\n    border-top: none;\n    font-size:11px;\n    font-weight: bold;\n    color:#b3b3bf;\n}\n\n.service_name{\n    color:#676674 !important;\n    font-size:11px !important;\n    font-weight:700 !important;\n}\n\n.border-dashed-bottom {\n    border-bottom: 1px dashed #E6E6E6;\n}\n\n.product_name_class{\n    color:#adafb9;\n    font-size:0.8rem;\n    font-weight:500;\n}\n\n.product_amount_class{\n    color:#6963c5;\n    font-size:0.8rem;\n    font-weight:700;\n}\n\n.text-order-total {\n    color:#8e9abb;\n    font-size:10px;\n    font-weight:800;\n}\n\n.padding_total_amount{\n    padding-top:15px;\n}\n\n.color-saloon-name{\n    color: #696875 !important;\n}\n\n.bg-pagination-select {\n    background-color: #6D6CC9 !important;\n}\n\n.btn-transpert {\n    border: 1px solid #c2c2c2;\n    font-size: 0.8rem;\n    color: grey;\n    background-color: #FFF;\n}\n\n.modal-footer {\n    justify-content: end;\n}\n\n.cursor-pointer {\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/modules/saloon/services/components/services/services.component.html":
/*!*********************************************************************************!*\
  !*** ./src/modules/saloon/services/components/services/services.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- display page title -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <p class=\"text-capitalize h3 ml-4\">{{pageTitle}}</p>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col bg-white ml-5 mb-5 mr-5 mt-4 pb-1\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <p class=\"text-capitalize h5 ml-3 mt-4 mb-4\">{{subTitle}}</p>\n        </div>\n        <div class=\"col text-right mt-3\">\n          <span class=\"btn text-capitalize btn-transpert\" data-toggle=\"modal\" data-target=\"#addService\">add\n            product</span>\n        </div>\n      </div>\n\n      <!-- seperator or line -->\n      <div class=\"line\"></div>\n\n\n      <!-- <Design table to display barbers information under the saloon -->\n      <table class=\"table text-center\">\n        <thead>\n          <tr>\n            <th scope=\"col\" class=\"text-capitalize\">product</th>\n            <th scope=\"col\" class=\"text-capitalize\">price</th>\n            <th scope=\"col\" class=\"text-capitalize\">type</th>\n            <th scope=\"col\" class=\"text-capitalize\">average time</th>\n            <th scope=\"col\" class=\"text-capitalize\"></th>\n            <!-- <th scope=\"col\" class=\"text-capitalize\">sales</th> -->\n          </tr>\n        </thead>\n        <tbody *ngIf=\"serviceList\">\n          <tr *ngFor=\"let service of serviceList;\">\n            <td class=\"service_name\">{{ service.name }}</td>\n            <td>{{ service.amount | currency:'GBP' }}</td>\n            <td class=\"text-capitalize\">{{ service.service_type }}</td>\n            <td>{{ service.time }}<small>min</small></td>\n            <td class=\"font-weight-bold cursor-pointer\" (click)=\"selectService(service)\" data-toggle=\"modal\"\n              data-target=\"#editService\">...</td>\n            <!-- <td>40</td> -->\n          </tr>\n        </tbody>\n      </table>\n      <!--End of table to display barber list---->\n\n      <!-- seperator or line -->\n      <div class=\"line\"></div>\n\n      <!-- display barbers list pagination -->\n      <div class=\"row mt-5\" *ngIf=\"totalItems\">\n        <div class=\"col\">\n          <!--Pagination -->\n          <app-pagination [totalItems]=\"totalItems\" [currentPage]=\"currentPage\"\n            (childEvent)=\"getSaloonServices ($event)\"></app-pagination>\n        </div>\n      </div> <!-- display barbers list pagination -->\n\n    </div>\n  </div>\n\n</div>\n\n<!-- Invite barber Modal -->\n<div class=\"modal fade\" id=\"addService\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addServiceLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title text-capitalize\" id=\"addServiceLabel\">add product</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form [formGroup]=\"serviceForm\" novalidate>\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label class=\"h6 text-capitalize\">product name:</label>\n            <input type=\"text\" class=\"form-control\" appTrimInput required formControlName=\"name\" maxlength=\"255\"\n              autocomplete=\"off\" />\n            <show-errors [control]=\"serviceForm.controls.name\"></show-errors>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"h6 text-capitalize\">type:</label>\n            <select class=\"form-control text-capitalize\" formControlName=\"service_type\">\n              <option value=\"extra\" class=\"text-capitalize\" [selected]=\"true\">extras</option>\n              <option value=\"main\" class=\"text-capitalize\">main</option>\n            </select>\n            <show-errors [control]=\"serviceForm.controls.type\"></show-errors>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"h6 text-capitalize\">cost:</label>\n            <div class=\"input-group mb-2\">\n              <div class=\"input-group-prepend bg-white\">\n                <div class=\"input-group-text\">&#xa3;</div>\n              </div>\n              <input type=\"number\" class=\"form-control\" appTrimInput required formControlName=\"amount\" maxlength=\"255\"\n                autocomplete=\"off\" />\n            </div>\n            <show-errors [control]=\"serviceForm.controls.amount\"></show-errors>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"h6 text-capitalize\">time (minutes):</label>\n            <div class=\"input-group mb-2\">\n              <div class=\"input-group-prepend bg-white\">\n                <div class=\"input-group-text\">\n                  <i class=\"fa fa-play-circle-o\" aria-hidden=\"true\"></i>\n                </div>\n              </div>\n              <input type=\"text\" class=\"form-control\" appTrimInput appNumberOnly required formControlName=\"time\"\n                maxlength=\"255\" autocomplete=\"off\" />\n            </div>\n            <show-errors [control]=\"serviceForm.controls.time\"></show-errors>\n          </div>\n        </div>\n        <div class=\"modal-footer text-left\">\n          <button type=\"button\" [disabled]=\"!serviceForm.valid\" class=\"btn btn-shokuni text-capitalize\"\n            (click)=\"submitProductForm (serviceForm)\" data-dismiss=\"modal\">save</button>\n          <button type=\"button\" class=\"btn btn-transpert text-capitalize\" data-dismiss=\"modal\">cancel</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n<!-- modal to update service information -->\n<div class=\"modal fade\" id=\"editService\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editServiceLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title text-capitalize\" id=\"editServiceLabel\">Edit product</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form [formGroup]=\"editServiceForm\" novalidate>\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label class=\"h6 text-capitalize\">product name:</label>\n            <input type=\"text\" class=\"form-control\" appTrimInput required formControlName=\"name\" maxlength=\"255\"\n              autocomplete=\"off\" />\n            <show-errors [control]=\"editServiceForm.controls.name\"></show-errors>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"h6 text-capitalize\">type:</label>\n            <select class=\"form-control text-capitalize\" formControlName=\"service_type\">\n              <option value=\"extra\" class=\"text-capitalize\" [selected]=\"true\">extras</option>\n              <option value=\"main\" class=\"text-capitalize\">main</option>\n            </select>\n            <show-errors [control]=\"editServiceForm.controls.type\"></show-errors>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"h6 text-capitalize\">cost:</label>\n            <div class=\"input-group mb-2\">\n              <div class=\"input-group-prepend bg-white\">\n                <div class=\"input-group-text\">&#xa3;</div>\n              </div>\n              <input type=\"text\" class=\"form-control\" appTrimInput appNumberOnly required formControlName=\"amount\"\n                maxlength=\"255\" autocomplete=\"off\" />\n            </div>\n            <show-errors [control]=\"editServiceForm.controls.amount\"></show-errors>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"h6 text-capitalize\">time (minutes):</label>\n            <div class=\"input-group mb-2\">\n              <div class=\"input-group-prepend bg-white\">\n                <div class=\"input-group-text\">\n                  <i class=\"fa fa-play-circle-o\" aria-hidden=\"true\"></i>\n                </div>\n              </div>\n              <input type=\"text\" class=\"form-control\" appTrimInput appNumberOnly required formControlName=\"time\"\n                maxlength=\"255\" autocomplete=\"off\" />\n            </div>\n            <show-errors [control]=\"editServiceForm.controls.time\"></show-errors>\n          </div>\n        </div>\n        <div class=\"modal-footer text-left\">\n          <button type=\"button\" [disabled]=\"!editServiceForm.valid\" class=\"btn btn-shokuni text-capitalize\"\n            (click)=\"submitEditProductForm (editServiceForm)\" data-dismiss=\"modal\">save</button>\n          <button type=\"button\" class=\"btn btn-transpert text-capitalize\" data-dismiss=\"modal\">cancel</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/saloon/services/components/services/services.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/modules/saloon/services/components/services/services.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_saloon_services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/saloon/services/services.service */ "./src/services/saloon/services/services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(service, activeRoute) {
        this.service = service;
        this.activeRoute = activeRoute;
        this.pageTitle = 'products';
        this.subTitle = 'manage products';
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]),
            service_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('extra', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)]),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(2)]),
        });
        this.editServiceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]),
            service_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('extra', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)]),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(2)]),
        });
        setTimeout(function () {
            _this.getSaloonServices();
        }, this.service.vars.onInt_request_delay_in_ms);
    };
    /**
     * method to get list of saloon barbers
     *
     * @param number page
     *
     * @returns void
     */
    ServicesComponent.prototype.getSaloonServices = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        // show loader
        this.service.vars.displayLoader(true);
        this.service.getSaloonServices(page, this.activeRoute.snapshot.params["saloonId"] || null).subscribe(function (res) {
            // hide loader
            _this.service.vars.displayLoader(false);
            // assign service orders
            _this.serviceList = res.data.data;
            _this.currentPage = res.data.current_page;
            _this.totalItems = res.data.total;
        }, function (err) {
            // hide loader
            _this.service.vars.displayLoader(false);
            // display errors notification
            _this.service.vars.showNotification(_this.service.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * method to genertae page counter to design dynamic pagination
     *
     * @param counter
     *
     * @returns array
     */
    ServicesComponent.prototype.generatePageCounter = function (counter) {
        return Array(counter).fill(0).map(function (x, i) { return i; });
    };
    /**
     * Request for create new service under the saloon
     *
     * @param NgForm
     *
     * @return void
     */
    ServicesComponent.prototype.submitProductForm = function (form) {
        var _this = this;
        var values = form.value;
        Object.keys(values).forEach(function (key) { return (values[key] == null) && delete values[key]; });
        this.service.vars.displayLoader(true);
        this.service.addService(form.value, this.activeRoute.snapshot.params["saloonId"] || null).subscribe(function (res) {
            _this.service.vars.displayLoader(false);
            _this.service.vars.showNotification(_this.service.vars.convertObjectToString(res.data), res.message, 'success');
            // request to load the services again
            _this.getSaloonServices();
        }, function (err) {
            _this.service.vars.displayLoader(false);
            _this.service.vars.showNotification(_this.service.vars.convertObjectToString(err.errors), err.message);
        });
    };
    ServicesComponent.prototype.selectService = function (service) {
        this.selectedService = service;
        this.editServiceForm.controls['name'].setValue(service['name']);
        this.editServiceForm.controls['service_type'].setValue(service['service_type']);
        this.editServiceForm.controls['time'].setValue(service['time']);
        this.editServiceForm.controls['amount'].setValue(service['amount']);
    };
    /**
     * Request for update service under the saloon
     *
     * @param NgForm
     *
     * @return void
     */
    ServicesComponent.prototype.submitEditProductForm = function (form) {
        var _this = this;
        var values = form.value;
        Object.keys(values).forEach(function (key) { return (values[key] == null) && delete values[key]; });
        this.service.vars.displayLoader(true);
        this.service.editService(form.value, this.selectedService['id']).subscribe(function (res) {
            _this.service.vars.displayLoader(false);
            _this.service.vars.showNotification(_this.service.vars.convertObjectToString(res.data), res.message, 'success');
            // request to load the services again
            _this.getSaloonServices();
        }, function (err) {
            _this.service.vars.displayLoader(false);
            _this.service.vars.showNotification(_this.service.vars.convertObjectToString(err.errors), err.message);
        });
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/modules/saloon/services/components/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/modules/saloon/services/components/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [_services_saloon_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/modules/saloon/services/services.module.ts":
/*!********************************************************!*\
  !*** ./src/modules/saloon/services/services.module.ts ***!
  \********************************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/services/services.component */ "./src/modules/saloon/services/components/services/services.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/modules/shared/shared.module.ts");
/* harmony import */ var _guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../guards/auth/auth.guard */ "./src/guards/auth/auth.guard.ts");
/* harmony import */ var _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../guards/role/role-access.guard */ "./src/guards/role/role-access.guard.ts");
/* harmony import */ var _guards_barber_admin_barber_admin_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../guards/barber-admin/barber-admin.guard */ "./src/guards/barber-admin/barber-admin.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [{
        path: 'saloon/services',
        component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_2__["ServicesComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_7__["RoleAccessGuard"], _guards_barber_admin_barber_admin_guard__WEBPACK_IMPORTED_MODULE_8__["BarberAdminGuard"]],
        data: { roles: ['barber'] }
    }, {
        path: 'saloon/:saloonId/products',
        component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_2__["ServicesComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_7__["RoleAccessGuard"]],
        data: { roles: ['admin', 'barber'] }
    }];
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_components_services_services_component__WEBPACK_IMPORTED_MODULE_2__["ServicesComponent"]],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/modules/shared/shared.module.ts":
/*!*********************************************!*\
  !*** ./src/modules/shared/shared.module.ts ***!
  \*********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _directives_trim_input_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/trim-input.directive */ "./src/directives/trim-input.directive.ts");
/* harmony import */ var _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/numbers-only.directive */ "./src/directives/numbers-only.directive.ts");
/* harmony import */ var _components_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/show-errors/show-errors.component */ "./src/components/show-errors/show-errors.component.ts");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/pagination/pagination.component */ "./src/components/pagination/pagination.component.ts");
/* harmony import */ var _pipes_seconds_to_minuits_seconds_to_minuits_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/seconds-to-minuits/seconds-to-minuits.pipe */ "./src/pipes/seconds-to-minuits/seconds-to-minuits.pipe.ts");
/* harmony import */ var _components_saloon_short_detail_saloon_short_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/saloon-short-detail/saloon-short-detail.component */ "./src/components/saloon-short-detail/saloon-short-detail.component.ts");
/* harmony import */ var _components_barber_join_discussion_barber_join_discussion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/barber-join-discussion/barber-join-discussion.component */ "./src/components/barber-join-discussion/barber-join-discussion.component.ts");
/* harmony import */ var amazing_time_picker_angular6__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! amazing-time-picker-angular6 */ "./node_modules/amazing-time-picker-angular6/amazing-time-picker-angular6.es5.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import directives

// import directives

// import required components







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_10__["MyDatePickerModule"],
                amazing_time_picker_angular6__WEBPACK_IMPORTED_MODULE_9__["AmazingTimePickerModule"]
            ],
            declarations: [
                _components_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_4__["ShowErrorsComponent"],
                _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"],
                _components_saloon_short_detail_saloon_short_detail_component__WEBPACK_IMPORTED_MODULE_7__["SaloonShortDetailComponent"],
                _components_barber_join_discussion_barber_join_discussion_component__WEBPACK_IMPORTED_MODULE_8__["BarberJoinDiscussionComponent"],
                _directives_trim_input_directive__WEBPACK_IMPORTED_MODULE_2__["TrimInputDirective"],
                _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_3__["NumberDirective"],
                _pipes_seconds_to_minuits_seconds_to_minuits_pipe__WEBPACK_IMPORTED_MODULE_6__["SecondsToMinuitsPipe"]
            ],
            exports: [
                _components_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_4__["ShowErrorsComponent"],
                _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"],
                _components_saloon_short_detail_saloon_short_detail_component__WEBPACK_IMPORTED_MODULE_7__["SaloonShortDetailComponent"],
                _components_barber_join_discussion_barber_join_discussion_component__WEBPACK_IMPORTED_MODULE_8__["BarberJoinDiscussionComponent"],
                _directives_trim_input_directive__WEBPACK_IMPORTED_MODULE_2__["TrimInputDirective"],
                _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_3__["NumberDirective"],
                _pipes_seconds_to_minuits_seconds_to_minuits_pipe__WEBPACK_IMPORTED_MODULE_6__["SecondsToMinuitsPipe"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_10__["MyDatePickerModule"],
                amazing_time_picker_angular6__WEBPACK_IMPORTED_MODULE_9__["AmazingTimePickerModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/modules/users/barber/barber.module.ts":
/*!***************************************************!*\
  !*** ./src/modules/users/barber/barber.module.ts ***!
  \***************************************************/
/*! exports provided: BarberModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarberModule", function() { return BarberModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/modules/users/barber/components/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../guards/auth/auth.guard */ "./src/guards/auth/auth.guard.ts");
/* harmony import */ var _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../guards/role/role-access.guard */ "./src/guards/role/role-access.guard.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import guards to veryfy routing request



var routes = [{
        path: 'barber/dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_5__["RoleAccessGuard"]],
        data: { roles: ['barber'] }
    }, {
        path: 'admin/saloons/:saloonId/barber/:barberId/dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_5__["RoleAccessGuard"]],
        data: { roles: ['admin'] }
    }];
var BarberModule = /** @class */ (function () {
    function BarberModule() {
    }
    BarberModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            declarations: [_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
        })
    ], BarberModule);
    return BarberModule;
}());



/***/ }),

/***/ "./src/modules/users/barber/components/dashboard/dashboard.component.css":
/*!*******************************************************************************!*\
  !*** ./src/modules/users/barber/components/dashboard/dashboard.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Ends here */\n\n\n.dropicon {\n    float: right;\n    margin-right: 2px;\n    height: 35px;\n    width: 35px;\n    line-height: 0;\n    padding-left: 11px;\n    margin-top: -31px;\n}\n\n\n.datetex {\n    width: 105px;\n    color: #abacb8;\n    font-size: 10px;\n    padding-left: 10px;\n    text-align: left;\n    background: white;\n    border-radius: 15px;\n    line-height: 30px;\n    float: right;\n    margin-right: 14px;\n}\n\n\n.width-3 {\n    width: 3rem;\n}\n\n\n.btn-transpert {\n    border: 1px solid #c2c2c2;\n    font-size: 0.8rem;\n    color: grey;\n    background-color: #FFF;\n}"

/***/ }),

/***/ "./src/modules/users/barber/components/dashboard/dashboard.component.html":
/*!********************************************************************************!*\
  !*** ./src/modules/users/barber/components/dashboard/dashboard.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"sub-header\">\n    <div class=\"row\">\n      <div class=\"col-md-3 col-sm-3 col-xs-3\">\n        <h4 class=\"h4_tag\">Dashboard</h4>\n      </div>\n   \n      <div class=\"col-md-9 col-sm-9 col-xs-9\" style=\"margin-left: -1%;\">\n        <div class=\"d-flex flex-row justify-content-end\">\n          <div class=\"bg-white px-5 py-2\" *ngIf=\"displayAddSaloon\">\n            <h5>Do you want to add Saloon?</h5>\n            <a class=\"col text-right mt-3\" (click)=\"redirect()\">\n              <span class=\"btn text-capitalize btn-transpert\">Yes</span>\n            </a>\n          </div>&nbsp;&nbsp;&nbsp;\n          <div>\n            <p class=\"datetex\">Today: <span class=\"dd\">{{ selectedDate | date:'MMM dd' }}</span>\n              <my-date-picker class=\"dropicon\" [options]=\"myDatePickerOptions\" (dateChanged)=\"onDateChanged($event)\">\n              </my-date-picker>\n            </p>\n          </div>\n        </div>\n      </div> \n    </div>\n  </div>\n\n  <app-saloon-short-detail [saloonId]=\"saloonId\"></app-saloon-short-detail>\n\n  <div class=\"row shadow m-3 bg-white\">\n    <div class=\"col\">\n      <div class=\"row p-4\">\n        <div class=\"col\">\n          <p class=\"text-dark text-capitalize\">Total Takings</p>\n          <p class=\"text-black-50 text-capitalize\">All Customs Value</p>\n        </div>\n        <div class=\"col\">\n          <p class=\"text-danger font-weight-bold mt-3\">{{ barberPerformanceData?.total_collection | currency:'GBP' }}\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"row p-4\">\n        <div class=\"col\">\n          <p class=\"text-dark text-capitalize\">Cuts</p>\n          <p class=\"text-black-50 text-capitalize\">Total Number of Cuts</p>\n        </div>\n        <div class=\"col\">\n          <p class=\"text-danger font-weight-bold mt-3\">{{ barberPerformanceData?.total_cuts }}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"row p-4\">\n        <div class=\"col\">\n          <p class=\"text-dark text-capitalize\">Average Cut Time</p>\n          <p class=\"text-black-50 text-capitalize\">Time Spent On Cuts</p>\n        </div>\n        <div class=\"col\">\n          <p class=\"text-danger font-weight-bold mt-3\">{{ calculateAvgCutTime\n            (barberPerformanceData?.total_activity_time_in_sec,barberPerformanceData?.total_cuts) }}<sub>m</sub></p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- display forumn screen -->\n  <app-barber-join-discussion></app-barber-join-discussion>\n</div>"

/***/ }),

/***/ "./src/modules/users/barber/components/dashboard/dashboard.component.ts":
/*!******************************************************************************!*\
  !*** ./src/modules/users/barber/components/dashboard/dashboard.component.ts ***!
  \******************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_barber_barber_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/users/barber/barber.service */ "./src/services/users/barber/barber.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_saloon_saloon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/saloon/saloon.service */ "./src/services/saloon/saloon.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(barber, activeRoute, router, saloon) {
        this.barber = barber;
        this.activeRoute = activeRoute;
        this.router = router;
        this.saloon = saloon;
        this.pageTitle = 'dashboard';
        this.barberPerformanceData = [];
        this.displayAddSaloon = false;
        this.myDatePickerOptions = {
            sunHighlight: true,
            satHighlight: true,
            markCurrentDay: true,
            markCurrentMonth: true,
            markCurrentYear: true,
            showClearDateBtn: false,
            alignSelectorRight: true,
            componentDisabled: false,
            firstDayOfWeek: 'su',
            // disableUntil: this.setToday(),
            disableSince: this.setToday(),
            showInputField: false,
            openSelectorOnInputClick: true,
            inline: false,
            editableDateField: false,
            indicateInvalidDate: true,
            // dateFormat: 'yyyy-mm-dd',
            openSelectorTopOfInput: false
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var today = new Date();
        this.selectedDate = today.getTime();
        this.saloonId = this.activeRoute.snapshot.params["saloonId"] || null;
        this.getSaloon();
        // get information of barber performance
        setTimeout(function () {
            _this.getbarberPerformanceReview();
        }, this.barber.vars.onInt_request_delay_in_ms);
    };
    DashboardComponent.prototype.getSaloon = function () {
        var _this = this;
        // show loader
        this.saloon.vars.displayLoader(true);
        //alert(this.saloonId);
        // get saloon detail
        this.saloon.getSaloon(this.saloonId).subscribe(function (res) {
            // update saloon-detail
            // show loader
            _this.saloon.vars.displayLoader(false);
            // show error
            _this.saloon.vars.showNotification('Saloon detail successfully found', res.message, 'success');
        }, function (err) {
            // show loader
            _this.saloon.vars.displayLoader(false);
            _this.displayAddSaloon = true;
            // show error
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(err.errors), err.message);
        });
    };
    DashboardComponent.prototype.setToday = function () {
        var today = new Date();
        return { year: today.getFullYear(), month: (today.getMonth() + 1), day: (today.getDate() + 1) };
    };
    /**
     * Request to get barber performace by specific date
     *
     * @param Date:string
     *
     * @return void
     */
    DashboardComponent.prototype.getbarberPerformanceReview = function () {
        var _this = this;
        var date = new Date(this.selectedDate);
        var performanceDate = date.getFullYear() + '-' + (('0' + (date.getMonth() + 1)).toString()).slice(-2) + '-' + date.getDate();
        this.barber.vars.displayLoader(true);
        // console.log("1");
        // this.activeRoute.snapshot.params["barberId"]
        this.barber.getbarberPerformanceReview(performanceDate, this.activeRoute.snapshot.params["barberId"] || null).subscribe(function (res) {
            _this.barber.vars.displayLoader(false);
            // console.log("2");
            _this.barber.vars.showNotification('Barber performance information success found.', res.message, 'success');
            _this.barberPerformanceData = res.data;
        }, function (err) {
            _this.barber.vars.displayLoader(false);
            _this.barber.vars.showNotification(_this.barber.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Method to calculate average cut time
     *
     * @primitive method
     *
     * @param time
     * @param number
     *
     * @return number
     */
    DashboardComponent.prototype.calculateAvgCutTime = function (time, cut) {
        return Math.floor(time / cut);
    };
    DashboardComponent.prototype.redirect = function () {
        this.router.navigate(['/profile']);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/modules/users/barber/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/modules/users/barber/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_barber_barber_service__WEBPACK_IMPORTED_MODULE_1__["BarberService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_services_saloon_saloon_service__WEBPACK_IMPORTED_MODULE_3__["SaloonService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/modules/users/components/change-password/change-password.component.css":
/*!************************************************************************************!*\
  !*** ./src/modules/users/components/change-password/change-password.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sub_title{\n    color:#565962;\n    font-size:14px;\n    font-weight:bold\n}\nlabel{\n    color:#6c6d70;\n    font-size:10px;\n    font-weight:500;\n}\n.required::after {\n    color: #EF615F;\n    font-size: 11px;\n    content: ' *';\n}"

/***/ }),

/***/ "./src/modules/users/components/change-password/change-password.component.html":
/*!*************************************************************************************!*\
  !*** ./src/modules/users/components/change-password/change-password.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- display page title -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <p class=\"text-capitalize h3 ml-4\">{{pageTitle}}</p>\n    </div>\n  </div>\n\n\n  <div class=\"row bg-white mb-5 ml-4 mr-5\">\n    <div class=\"col\">\n      <p class=\"text-capitalize h5 ml-5 mt-5 mb-4 sub_title\">{{subTitle}}</p>\n\n      <!-- seperator or line -->\n      <div class=\"line ml-5 mr-5\"></div>\n\n      <div class=\"col-xs-12 col-sm-12 col-lg-5 col-xl-5 col-md-5 m-4\">\n        <!-- change-password form -->\n        <form [formGroup]=\"passwordForm\" novalidate>\n            <div class=\"form-group\">\n              <label class=\"h6 required\">Old Password</label>\n              <input type=\"password\" class=\"form-control no-side-border\" appTrimInput required formControlName=\"old_password\" maxlength=\"20\" autocomplete=\"off\">\n              <show-errors [control]=\"passwordForm.controls.old_password\"></show-errors>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"h6 required\">New Password</label>\n              <input type=\"password\" class=\"form-control no-border\" appTrimInput required formControlName=\"password\" autocomplete=\"off\" maxlength=\"20\">\n              <show-errors [control]=\"passwordForm.controls.password\"></show-errors>\n            </div>\n            <div class=\"form-group mb-5\">\n              <label class=\"h6 required\">Confirm New Password</label>\n              <input type=\"password\" class=\"form-control no-border\" appTrimInput required formControlName=\"rePassword\" autocomplete=\"off\" maxlength=\"20\">\n              <show-errors [control]=\"passwordForm.controls.password\"></show-errors>\n            </div>\n            <small><span class=\"required\"></span> indicates required</small>\n            <div class=\"text-left mt-2\">\n              <button [disabled]=\"!passwordForm.valid\" (click)=\"submitChangePassword (passwordForm)\" class=\"btn btn-shokuni text-capitalize mr-3\">save</button>\n              <button type=\"reset\" class=\"btn btn-transparent text-capitalize\">cancel</button>\n            </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/users/components/change-password/change-password.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/modules/users/components/change-password/change-password.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/users/user.service */ "./src/services/users/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(user) {
        this.user = user;
        this.pageTitle = 'password';
        this.subTitle = 'change password';
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            old_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]),
            rePassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]),
        });
    };
    /**
     * Method to send request to update password
     *
     * @param NgForm form
     *
     * @return void
     */
    ChangePasswordComponent.prototype.submitChangePassword = function (form) {
        var _this = this;
        // show loader
        this.user.vars.displayLoader(true);
        // send request to change password
        this.user.changePassword(form.value).subscribe(function (res) {
            // show success
            _this.user.vars.showNotification(_this.user.vars.convertObjectToString(res.data), res.message, 'success');
            // hide loader
            _this.user.vars.displayLoader(false);
        }, function (err) {
            // hide loader
            _this.user.vars.displayLoader(false);
            // show errors
            _this.user.vars.showNotification(_this.user.vars.convertObjectToString(err.errors), err.message);
        });
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/modules/users/components/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/modules/users/components/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/modules/users/components/profile/delete-customer-account/delete-customer-account.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/modules/users/components/profile/delete-customer-account/delete-customer-account.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delet_accnt{\n    color:#54565d;\n    font-size:14px;\n    font-weight: bold;\n}\np{\n    font-size:11px;\n    font-weight: bold;\n    color:#898993;\n}\n.delete_buttn{\n    font-size:10px;\n}"

/***/ }),

/***/ "./src/modules/users/components/profile/delete-customer-account/delete-customer-account.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/modules/users/components/profile/delete-customer-account/delete-customer-account.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row bg-white mb-5 ml-4 mr-5\">\n    <div class=\"col\">\n        <p class=\"text-capitalize h5 ml-5 mt-5 mb-4 delet_accnt\">delete account </p>\n    \n        <!-- seperator or line -->\n        <div class=\"line\"></div>\n        <p class=\"ml-5 mt-5 mb-4\">Please type your password below to confirm that it is the owner who is deleting the account.</p>\n\n        <div class=\"col-xs-12 col-sm-12 col-lg-5 col-xl-5 col-md-5 m-4\">\n            <form [formGroup]=\"deleteForm\" novalidate>\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control\" appTrimInput required formControlName=\"password\" maxlength=\"20\" autocomplete=\"off\" placeholder=\"Enter Password\">\n                    <show-errors [control]=\"deleteForm.controls.password\"></show-errors>\n                </div>\n    \n                <div class=\"text-left mt-5\">\n                    <button [disabled]=\"!deleteForm.valid\" class=\"btn btn-danger text-capitalize mr-3 delete_buttn\" data-toggle=\"modal\" data-target=\"#deleteAccount\">delete</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n      \n\n<!-- Display modal on account delete -->\n<div class=\"modal fade\" id=\"deleteAccount\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteAccount\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h5 class=\"modal-title text-capitalize\">delete account</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <p>Confirming that you're sure you want to delete your account by entering 'delete' below</p>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Type 'delete'\" autocomplete=\"off\" maxlength=\"6\" [(ngModel)]=\"deleteText\"/>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary text-capitalize\" data-dismiss=\"modal\">close</button>\n            <button type=\"button\" class=\"btn btn-danger text-capitalize\" (click)=\"checkDelAccPer()\" data-dismiss=\"modal\">delete</button>\n        </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/modules/users/components/profile/delete-customer-account/delete-customer-account.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/modules/users/components/profile/delete-customer-account/delete-customer-account.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DeleteCustomerAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCustomerAccountComponent", function() { return DeleteCustomerAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/users/user.service */ "./src/services/users/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteCustomerAccountComponent = /** @class */ (function () {
    function DeleteCustomerAccountComponent(user) {
        this.user = user;
    }
    DeleteCustomerAccountComponent.prototype.ngOnInit = function () {
        this.deleteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)])
        });
    };
    /**
     * method to delete account
     */
    DeleteCustomerAccountComponent.prototype.submitAccountDelete = function () {
        var _this = this;
        // show loader
        this.user.vars.displayLoader(true);
        // get password field value
        // seumit password to delete account
        this.user.deleteAccount(this.deleteForm.value).subscribe(function (res) {
            _this.user.vars.displayLoader(false);
            _this.user.vars.showNotification(_this.user.vars.convertObjectToString(res.data), res.message, 'success');
            // check if user is barber and customer
            if (['barber', 'consumer'].includes(_this.user.vars.getUserRole())) {
                if (res.message !== 'Saloon-admin') {
                    // logout the user
                    setTimeout(function () {
                        _this.user.vars.logoutUser();
                    }, 2000);
                }
            }
        }, function (err) {
            _this.user.vars.displayLoader(false);
            _this.user.vars.showNotification(_this.user.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * method to check if user really want to delete the account
     */
    DeleteCustomerAccountComponent.prototype.checkDelAccPer = function () {
        if (this.deleteText && ((this.deleteText).trim()).toLowerCase() === 'delete') {
            this.submitAccountDelete();
        }
    };
    DeleteCustomerAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-customer-account',
            template: __webpack_require__(/*! ./delete-customer-account.component.html */ "./src/modules/users/components/profile/delete-customer-account/delete-customer-account.component.html"),
            styles: [__webpack_require__(/*! ./delete-customer-account.component.css */ "./src/modules/users/components/profile/delete-customer-account/delete-customer-account.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], DeleteCustomerAccountComponent);
    return DeleteCustomerAccountComponent;
}());



/***/ }),

/***/ "./src/modules/users/components/profile/edit-profile/edit-profile.component.css":
/*!**************************************************************************************!*\
  !*** ./src/modules/users/components/profile/edit-profile/edit-profile.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar {\n    width: 6rem;\n}\n\n.btn-bs-file{\n    position:relative;\n}\n\n.btn-bs-file input[type=\"file\"]{\n    position: absolute;\n    top: -9999999;\n    filter: alpha(opacity=0);\n    opacity: 0;\n    width:0;\n    height:0;\n    outline: none;\n    cursor: inherit;\n}\n\n.no-right-border {\n    border-right: none;\n}\n\n.no-left-border {\n    border-left: none;\n}\n\n.edit_profile{\n    color: #5e6069;\n    font-size:14px;\n    font-weight:bold;\n\n}\n\nlabel{\n    font-size:10px;\n    font-weight: 600;\n    color: #48494e;\n}\n\n.required::after {\n    color: #EF615F;\n    font-size: 11px;\n    content: ' *';\n}\n\n.text-shokuni{\n    font-weight:bold !important;\n    font-size:9px !important;\n    color:#4b5573 !important;\n}\n\n.email_verfid{\n    font-weight:bold;\n    font-size:8px;\n}\n\n.btn-shokuni{\n    color:#fff !important;\n}\n\n.upload_img{\n    color:#a7aab0 !important;\n    font-size:8px !important;\n    font-weight: bold !important;\n}\n\n.indicates_req{\n    color:#a7aab0 !important;\n    font-size:11px !important;\n    font-weight: bold !important; \n}\n\n.save_btn{\n    font-size: 11px !important;\n}\n\n.form-control{\nfont-size: 0.7rem !important;\nfont-weight: 600 !important;\n}"

/***/ }),

/***/ "./src/modules/users/components/profile/edit-profile/edit-profile.component.html":
/*!***************************************************************************************!*\
  !*** ./src/modules/users/components/profile/edit-profile/edit-profile.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- profile div -->\n<div class=\"row bg-white mb-5 ml-4 mr-5\">\n    <div class=\"col\">\n        <div class=\"d-flex flex-row\">\n            <p class=\"text-capitalize h5 ml-5 my-4 edit_profile\"\n                [ngClass]=\"userType ? 'btn btn-primary text-white' : 'pt-2'\" (click)=\"changeUser('profile')\">edit\n                profile</p> &nbsp;&nbsp;&nbsp;\n            <p class=\"text-capitalize h5 ml-5 my-4 edit_profile \"\n                [ngClass]=\"!userType ? 'btn btn-primary text-white' : 'pt-2'\" (click)=\"changeUser('saloon')\"\n                *ngIf=\"!hideAgent\">add saloon\n            </p>\n        </div>\n        <!-- seperator or line -->\n        <div class=\"line\"></div>\n\n        <div class=\"col-xs-12 col-sm-12 col-lg-5 col-xl-5 col-md-5 m-4\" *ngIf=\"userType\">\n            <!-- profile-update form -->\n            <form [formGroup]=\"profileForm\" novalidate>\n                <div class=\"form-group\">\n                    <label class=\"h6 required text-capitalize\">first name</label>\n                    <input type=\"text\" class=\"form-control\" appTrimInput required formControlName=\"first_name\"\n                        maxlength=\"75\" autocomplete=\"off\">\n                    <show-errors [control]=\"profileForm.controls.first_name\"></show-errors>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"h6 required text-capitalize\">last name</label>\n                    <input type=\"text\" class=\"form-control\" appTrimInput required formControlName=\"last_name\"\n                        autocomplete=\"off\" maxlength=\"75\">\n                    <show-errors [control]=\"profileForm.controls.last_name\"></show-errors>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"h6 required text-capitalize\">email</label>\n                    <input type=\"text\" class=\"form-control\" appTrimInput required formControlName=\"email\"\n                        autocomplete=\"off\" maxlength=\"255\">\n                    <show-errors [control]=\"profileForm.controls.email\"></show-errors>\n\n                    <small class=\"form-text text-muted\"><span class=\"text-warning mr-2 email_verfid\">Your email has\n                            not\n                            been yet verified!</span><span class=\"text-shokuni text-capitalize\">resend\n                            verification</span></small>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"h6 text-capitalize\">profile photo</label>\n                    <input type=\"hidden\" formControlName=\"image\" />\n                    <div class=\"media\">\n                        <img [src]=\"avatar\" class=\"avatar mr-4\" />\n                        <div class=\"media-body\">\n                            <div class=\"text-capitalize mt-4 upload_img\">upload new profile picture</div>\n                            <label class=\"btn-bs-file btn btn-shokuni mt-2\">\n                                Upload\n                                <input type=\"file\" (change)=\"uploadImg ($event)\" />\n                            </label>\n                        </div>\n                    </div>\n                    <show-errors [control]=\"profileForm.controls.image\"></show-errors>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"h6 required text-capitalize\">Country</label>\n                    <select class=\"form-control\" *ngIf=\"countries\" formControlName=\"country_id\"\n                        (change)=\"updateCountry($event.target)\">\n                        <option *ngFor=\"let country of countries\" [value]=\"country.id\" class=\"text-capitalize\"\n                            [attr.phonecode]=\"country.phonecode\" [selected]=\"selectUserCountry(country.id)\">\n                            {{country.name}}</option>\n                    </select>\n                    <show-errors [control]=\"profileForm.controls.country_id\"></show-errors>\n                </div>\n                <div class=\"form-group mb-5\">\n                    <label class=\"h6 required text-capitalize\">Mobile Number</label>\n                    <div class=\"input-group mb-3\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text bg-white no-right-border\">{{countryPhoneCode}}</span>\n                        </div>\n                        <input type=\"text\" class=\"form-control no-left-border\" appTrimInput appNumberOnly required\n                            formControlName=\"number\" autocomplete=\"off\" maxlength=\"15\" aria-describedby=\"basic-addon3\">\n                    </div>\n                    <show-errors [control]=\"profileForm.controls.number\"></show-errors>\n\n                    <small class=\"form-text text-muted\"><span class=\"text-warning mr-2 email_verfid\">Your mobile has\n                            not\n                            been yet verified!</span><span class=\"text-shokuni text-capitalize\">Resend\n                            verification</span></small>\n                </div>\n                <small class=\"indicates_req\"><span class=\"required\"></span> indicates required</small>\n                <div class=\"text-left mt-2\">\n                    <button [disabled]=\"!profileForm.valid\" (click)=\"submitProfileUpdate (profileForm)\"\n                        class=\"btn btn-shokuni text-capitalize mr-3 save_btn\">save</button>\n                    <button type=\"reset\" class=\"btn btn-transparent text-capitalize save_btn\">cancel</button>\n                </div>\n            </form>\n\n        </div>\n        <app-add-saloons *ngIf=\"!userType && !hideAgent\"></app-add-saloons>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/modules/users/components/profile/edit-profile/edit-profile.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/modules/users/components/profile/edit-profile/edit-profile.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/users/user.service */ "./src/services/users/user.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/common/common.service */ "./src/services/common/common.service.ts");
/* harmony import */ var _services_saloon_saloon_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/saloon/saloon.service */ "./src/services/saloon/saloon.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/auth/auth.service */ "./src/services/auth/auth.service.ts");
/* harmony import */ var _services_global_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/global/global.service */ "./src/services/global/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(user, common, form, saloon, http, auth, href, $changeDetector) {
        this.user = user;
        this.common = common;
        this.form = form;
        this.saloon = saloon;
        this.http = http;
        this.auth = auth;
        this.href = href;
        this.$changeDetector = $changeDetector;
        this.MIN_FILE_SIZE_IN_BYTE = 1024;
        this.MAX_FILE_SIZE_IN_BYTE = 102400;
        this.ALLOW_FILE_EXT = ['jpg', 'jpeg', 'png'];
        this.IMG_DIR = 'avatar';
        this.saloonForm = {};
        this.userType = false;
        this.hideAgent = false;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.getAdminDetails();
        this.url = this.href.backend_url;
        if (JSON.parse(localStorage.getItem('admin_detail'))) {
            this.userType = true;
        }
        this.user_id = String(JSON.parse(localStorage.getItem('user_detail')).id);
        this.access_token = localStorage.getItem('access_token');
        var search = new URLSearchParams();
        var user_detail = JSON.parse(localStorage.getItem('user_detail'));
        this.profileForm = this.form.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user_detail.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user_detail.first_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(75)]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user_detail.last_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(75)]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user_detail.number, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{10,15}$')]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]),
            country_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user_detail.country_id || 91, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{1,3}$')])
        });
        if (this.countries) {
            // set default phone code 
            this.setPhoneCode();
            console.log('country code', this.countries);
        }
        // set avatar
        this.getUserAvatar();
        var url = new URL(window.location.href);
        // check if token param found in url-route
        this.invitationToken = (url.searchParams.has('token') && (url.searchParams.get('token')).trim()) ? (url.searchParams.get('token')).trim() : null;
    };
    EditProfileComponent.prototype.getAdminDetails = function () {
        var _this = this;
        this.saloon.getSaloon(JSON.parse(localStorage.getItem('user_detail')).id).subscribe(function (saloonres) {
            localStorage.setItem('admin_detail', JSON.stringify(saloonres.data));
            _this.hideAgent = true;
            // let admin_details = JSON.parse(localStorage.getItem('admin_detail'));
            // console.log("admin details", admin_details)
            // this.saloonForm = this.form.group({
            //   first_name: new FormControl(admin_details.first_name, [Validators.required, Validators.maxLength(75)]),
            //   last_name: new FormControl(admin_details.last_name, [Validators.required, Validators.maxLength(75)]),
            //   name: new FormControl(admin_details.name, [Validators.required, Validators.maxLength(75)]),
            //   standard_price: new FormControl(admin_details.standard_price, [Validators.required]),
            //   postal_code: new FormControl(admin_details.postal_code, [Validators.required]),
            //   lat: new FormControl(admin_details.lat, [Validators.required]),
            //   lng: new FormControl(admin_details.lng, [Validators.required]),
            //   vat_number: new FormControl(admin_details.saloon_detail.vat_number, [Validators.required]),
            //   company_number: new FormControl(admin_details.saloon_detail.company_number, [Validators.required]),
            //   address: new FormControl(admin_details.address, [Validators.required]),
            //   country_id: new FormControl(admin_details.country_id || 74, [Validators.required]),
            //   contact_number: new FormControl(admin_details.contact_number, [Validators.required]),
            //   logo_url: new FormControl(admin_details.logo_url, [Validators.required]),
            //   header_url: new FormControl(admin_details.header, [Validators.required]),
            //   email: new FormControl(admin_details.email, [Validators.required]),
            //   // password: new FormControl(admin_details.password, [Validators.required, Validators.maxLength(20)]),
            //   // rePassword: new FormControl(admin_details.rePassword, [Validators.required, Validators.maxLength(20)])
            // });
        });
    };
    EditProfileComponent.prototype.changeUser = function (type) {
        if (type == 'saloon') {
            this.userType = false;
        }
        else {
            this.userType = true;
        }
    };
    EditProfileComponent.prototype.typecheck = function (type) {
        console.log("type", type);
        if (type == "admin") {
            this.type = true;
            console.log("if", this.type);
        }
        else {
            this.type = false;
            console.log("else", this.type);
        }
        this.$changeDetector.detectChanges();
    };
    EditProfileComponent.prototype.submitAddSaloon = function (form) {
        var _this = this;
        console.log("form", form);
        var values = form.value;
        // append optional parameters on signup
        values['invitationToken'] = this.invitationToken;
        values['role'] = 'barber';
        values['logo'] = this.logoName;
        values['header'] = this.logoheaderName;
        values['number'] = form.value.contact_number;
        Object.keys(values).forEach(function (key) { return (values[key] == null) && delete values[key]; });
        this.auth.vars.displayLoader(true);
        values.id = JSON.parse(localStorage.getItem('user_detail')).id;
        console.log("form values", values);
        /*alert(userId);*/
        /*==================================================*/
        this.saloon.createSaloon(values).subscribe(function (saloonres) {
            _this.saloon.vars.displayLoader(false);
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(saloonres.data), saloonres.message, 'success');
            localStorage.setItem('admin_detail', JSON.stringify(saloonres.data));
        }, function (saloonerr) {
            _this.saloon.vars.displayLoader(false);
            _this.saloon.vars.showNotification(_this.saloon.vars.convertObjectToString(saloonerr.errors), saloonerr.message);
        });
        /*==================================================*/
    };
    EditProfileComponent.prototype.logoUpload = function (event) {
        var _this = this;
        this.saloon.vars.displayLoader(true);
        this.files = event.target.files[0];
        var uploadData = new FormData();
        uploadData.append("image[]", this.files, this.files.name);
        uploadData.append("directory", "saloon");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ Authorization: 'Bearer ' + this.access_token });
        //'http://10.10.10.145/shokuni_new/public/v2/image'
        this.http.post(this.url + '/image', uploadData, { headers: headers }).subscribe(function (res) {
            _this.logoName = res["data"][0];
            _this.saloon.vars.displayLoader(false);
        }, function (err) {
            if (!err.ok && err.status == 422) {
                console.log(err);
            }
            else if (!err.ok && err.status == 500) {
                console.log('500 error');
            }
            else {
                console.log('Else part');
            }
            _this.saloon.vars.displayLoader(false);
        });
    };
    EditProfileComponent.prototype.logoheaderUpload = function (event) {
        var _this = this;
        this.saloon.vars.displayLoader(true);
        this.files = event.target.files[0];
        var uploadData = new FormData();
        uploadData.append("image[]", this.files, this.files.name);
        uploadData.append("directory", "saloon-header");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ Authorization: 'Bearer ' + this.access_token });
        //'http://10.10.10.145/shokuni_new/public/v2/image'
        this.http.post(this.url + '/image', uploadData, { headers: headers }).subscribe(function (res) {
            _this.logoheaderName = res["data"][0];
            _this.saloon.vars.displayLoader(false);
        }, function (err) {
            if (!err.ok && err.status == 422) {
                console.log(err);
            }
            else if (!err.ok && err.status == 500) {
                console.log('500 error');
            }
            else {
                console.log('Else part');
            }
            _this.saloon.vars.displayLoader(false);
        });
    };
    /**
     * method to set default phone code
     */
    EditProfileComponent.prototype.setPhoneCode = function () {
        var _this = this;
        this.countryPhoneCode = this.countries.filter(function (temp) { return temp.phonecode == _this.profileForm.controls['country_id'].value; });
        this.countryPhoneCode = '(' + this.countryPhoneCode[0].id + ')';
    };
    /**
     * method to get user profile image
     *
     * @returns string
     */
    EditProfileComponent.prototype.getUserAvatar = function () {
        this.avatar = JSON.parse(localStorage.getItem('user_detail')).image_url;
    };
    /**
     * Method to upload image
     */
    EditProfileComponent.prototype.uploadImg = function (event) {
        var _this = this;
        var file = event.target.files[0];
        // check if file is not empty 
        if (!file || !file.size) {
            return false;
        }
        // check for file size
        if ((file.size < this.MIN_FILE_SIZE_IN_BYTE) && (file.size > this.MAX_FILE_SIZE_IN_BYTE)) {
            return this.user.vars.showNotification("Image size must be between " + this.MIN_FILE_SIZE_IN_BYTE / 1024 + " KB and " + this.MAX_FILE_SIZE_IN_BYTE / 1024 + " KB", 'Image');
        }
        var ext = /(?:\.([^.]+))?$/.exec(file.name)[1];
        // check for file extension
        if (!(this.ALLOW_FILE_EXT).includes(ext)) {
            var allowExt = (this.ALLOW_FILE_EXT).join(', ');
            return this.user.vars.showNotification("Allow image extension: " + allowExt, 'Image');
        }
        // check for allow extension
        var reader = new FileReader();
        reader.onload = function (e) {
            // show loader
            _this.user.vars.displayLoader(true);
            // upload avatar img on server
            _this.common.uploadImg(file, _this.IMG_DIR).subscribe(function (res) {
                // hide loader
                _this.user.vars.displayLoader(false);
                // update avatar response
                // set file avatar value
                _this.avatar = e.target.result;
                // this.profileForm.setValue ({image:res.data[0]})
                _this.profileForm.controls['image'].setValue(res.data[0]);
                // show success notification
                _this.user.vars.showNotification('Image successfully uploaded.', res.message, 'success');
            }, function (err) {
                // hide loader
                _this.user.vars.displayLoader(false);
                // show login error
                _this.user.vars.showNotification(_this.user.vars.convertObjectToString(err.errors), err.message);
            });
        };
        reader.readAsDataURL(file);
    };
    /**
     * Method to update country code
     *
     * @param country
     *
     * @return void
     */
    EditProfileComponent.prototype.updateCountry = function (target) {
        this.countryPhoneCode = '(' + target.options[target.selectedIndex].getAttribute('phonecode') + ')';
        console.log("country code", this.countryPhoneCode, target);
    };
    /**
     * Method to update profile information of the user
     *
     * @param NgForm
     */
    EditProfileComponent.prototype.submitProfileUpdate = function (form) {
        var _this = this;
        var values = form.value;
        // /remove all null or empty values
        Object.keys(values).forEach(function (key) { return (values[key] == null || !(String(values[key]).trim()).length) && delete values[key]; });
        // show loader
        this.user.vars.displayLoader(true);
        // update user profile information
        this.user.updateProfile(values).subscribe(function (res) {
            // hide loader
            _this.user.vars.displayLoader(false);
            // update storage fields
            _this.updateUserProfileStorageAfterUpdate();
            // show success notification
            _this.user.vars.showNotification(_this.user.vars.convertObjectToString(res.data), res.message, 'success');
        }, function (err) {
            // hide loader
            _this.user.vars.displayLoader(false);
            // show login error
            _this.user.vars.showNotification(_this.user.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * method to update user profile information after update
     */
    EditProfileComponent.prototype.updateUserProfileStorageAfterUpdate = function () {
        var _this = this;
        // show loader
        this.user.vars.displayLoader(true);
        this.user.getUserDetail().subscribe(function (res) {
            // update localstorage values
            localStorage.setItem('user_detail', JSON.stringify(res.data));
            // hide loader
            _this.user.vars.displayLoader(false);
        }, function (err) {
            // hide loader
            _this.user.vars.displayLoader(false);
            // show login error
            _this.user.vars.showNotification(_this.user.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Method to selete user country id in dropdown
     */
    EditProfileComponent.prototype.selectUserCountry = function (countryId) {
        if (countryId) {
            var userCountry = parseInt(JSON.parse(localStorage.getItem('user_detail'))['country_id']);
            return userCountry === userCountry;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditProfileComponent.prototype, "countries", void 0);
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/modules/users/components/profile/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/modules/users/components/profile/edit-profile/edit-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_saloon_saloon_service__WEBPACK_IMPORTED_MODULE_4__["SaloonService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services_global_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/modules/users/components/profile/profile.component.css":
/*!********************************************************************!*\
  !*** ./src/modules/users/components/profile/profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".request_data{\n    color:#54565d;\n    font-size:14px;\n    font-weight: bold;\n}\np{\n    font-size:11px;\n    font-weight: bold;\n    color:#898993;\n}\nspan{\n    font-size:10px !important;\n}\n.page_title{\n    font-size:21px !important;\n    color:#3b3a40 !important;\n}"

/***/ }),

/***/ "./src/modules/users/components/profile/profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/modules/users/components/profile/profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- display page title -->\n    <div class=\"row\">\n        <div class=\"col\">\n        <p class=\"text-capitalize h3 ml-4 page_title\">{{pageTitle}}</p>\n        </div>\n    </div>\n\n\n    <!-- profile div -->\n    <div *ngIf=\"countries.length\">\n        <app-edit-profile [countries]=\"countries\"></app-edit-profile>\n    </div>\n\n\n \n    <!-- Request data div -->\n    <div class=\"row bg-white mb-5 ml-4 mr-5\">\n        <div class=\"col\">\n            <p class=\"text-capitalize h5 ml-5 mt-5 mb-4 request_data\">request data</p>\n\n            <!-- seperator or line -->\n            <div class=\"line\"></div>\n            <p class=\"ml-5 mt-5 mb-4\">Download a CSV file containing all the personal data that we store for your profile.</p>\n\n            <span class=\"btn btn-shokuni mb-5 text-capitalize ml-5\" (click)=\"downloadCSVProfile()\">request</span>\n        </div>\n    </div>\n\n    <!-- display delete account mesage -->\n    <app-delete-customer-account></app-delete-customer-account>\n</div>\n\n"

/***/ }),

/***/ "./src/modules/users/components/profile/profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/users/components/profile/profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular5_csv_Angular5_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular5-csv/Angular5-csv */ "./node_modules/angular5-csv/Angular5-csv.js");
/* harmony import */ var angular5_csv_Angular5_csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular5_csv_Angular5_csv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/common/common.service */ "./src/services/common/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(common) {
        this.common = common;
        this.pageTitle = 'edit profile';
        this.countries = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get list of countries
        setTimeout(function () {
            _this.getCountries();
        }, this.common.vars.onInt_request_delay_in_ms);
    };
    ProfileComponent.prototype.getCountries = function () {
        var _this = this;
        // show loader
        this.common.vars.displayLoader(true);
        this.common.getCountries({ select: 'id,name,phonecode', paginate: 0 }).subscribe(function (res) {
            // hide loader
            _this.common.vars.displayLoader(false);
            // // update countries list
            _this.countries = res.data.data;
        }, function (err) {
            // hide loader
            _this.common.vars.displayLoader(false);
        });
    };
    /**
     * method to get country name by ID
     *
     * @param int countryId
     *
     * @returns string
     */
    ProfileComponent.prototype.getCountryName = function (countryId) {
        for (var _i = 0, _a = this.countries; _i < _a.length; _i++) {
            var country = _a[_i];
            if (country['id'] == countryId) {
                return country['name'];
            }
        }
    };
    /**
     * Method to get phone neumber with country code
     *
     * @param country_id
     * @param number
     *
     * @returns string
     */
    ProfileComponent.prototype.getPhoneNum = function (country_id, number) {
        // /search for user phon-country id
        for (var _i = 0, _a = this.countries; _i < _a.length; _i++) {
            var country = _a[_i];
            if (country['id'] == country_id) {
                return '(' + country['phonecode'] + ') ' + number;
            }
        }
        return String(number);
    };
    /**
     * Method to download user profile in CSV format
     */
    ProfileComponent.prototype.downloadCSVProfile = function () {
        // fetch user prfile data from localstorage
        var userDetail = JSON.parse(localStorage.getItem('user_detail'));
        var options = {
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
        var filename = userDetail.first_name + ' ' + userDetail.last_name;
        var data = [{
                first_name: userDetail.first_name,
                last_name: userDetail.last_name,
                email: userDetail.email,
                role: userDetail.role,
                number: this.getPhoneNum(userDetail.country_id, userDetail.number),
                status: userDetail.status,
                country_id: this.getCountryName(userDetail.country_id),
                image_url: userDetail.image_url,
            }];
        new angular5_csv_Angular5_csv__WEBPACK_IMPORTED_MODULE_1__["Angular5Csv"](data, filename, options);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/modules/users/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/modules/users/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/modules/users/customer/components/dashboard/dashboard.component.css":
/*!*********************************************************************************!*\
  !*** ./src/modules/users/customer/components/dashboard/dashboard.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-pagination-select {\n    background-color: #6D6CC9 !important;\n}\n\n.page-link {\n    color: #D7D8DD;\n    border:none;\n    border-radius: 50%;\n    padding: .5rem 0.9rem;\n    /* background-color: #E6E6E6; */\n}\n\n.page-item:first-child .page-link {\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n}\n\n.page-item:last-child .page-link {\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n}\n\n.saloon-logo {\n    max-width: 6rem;\n}\n\n.table thead th {\n    border-bottom: none;\n    border-top: none;\n    color:#8895b7;\n    font-size:0.7rem;\n}\n\n.table td {\n    border-top: none;\n}\n\n.border-dashed-bottom {\n    border-bottom: 1px dashed #E6E6E6;\n}\n\n@media (min-width: 1200px) {\n    .col-xl-4 {\n        flex: 0 0 31.333333%;\n    }\n}\n\n.product_name_class{\n    color:#adafb9;\n    font-size:0.6rem;\n    font-weight:500;\n}\n\n.product_amount_class{\n    color:#847fcf;\n    font-size:0.6rem;\n    font-weight:700;\n}\n\n.text-order-total {\n    color:#8e9abb;\n    font-size:10px;\n    font-weight:800;\n}\n\n.btn-export {\n    border: 0.7px solid #c2c2c2;\n    border-radius: 20px;\n    font-size: 0.6rem;\n    color: #908f99;\n    font-weight:800;\n}\n\n.padding_total_amount{\n    padding-top:15px;\n}\n\n.color-saloon-name{\n    color: #63626f !important;\n    font-size:15px !important;\n    font-weight: bold !important;\n}"

/***/ }),

/***/ "./src/modules/users/customer/components/dashboard/dashboard.component.html":
/*!**********************************************************************************!*\
  !*** ./src/modules/users/customer/components/dashboard/dashboard.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- display page title -->\n  <div class=\"row mb-4\">\n      <div class=\"col\">\n      <p class=\"text-capitalize h3 ml-4\">{{pageTitle}}</p>\n      </div>\n  </div>\n\n  <div class=\"row ml-4\">\n    <!-- display order of the customer -->\n    <div *ngFor=\"let order of customerOrders;\" class=\"card col-sm-12 col-xs-12 col-md-6 col-lg-4 col-xl-4 mb-4 mr-4\">\n      <div class=\"card-body\">\n        <!-- display saloon name and it's logo -->\n        <div class=\"media mb-5\">\n          <img class=\"mr-3 saloon-logo\" [src]=\"order.saloon_logo_url\" [alt]=\"order.saloon_name\">\n          <div class=\"media-body\">\n            <h5 class=\"color-saloon-name text-capitalize card-title\">{{order.saloon_name}}</h5>\n          </div>\n        </div>\n        <div class=\"card-text\">\n          xxxxxxxxxxxxxxxxx\n          <!-- Display order detail -->\n          <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead class=\"mb-5\">\n                  <tr>\n                    <th scope=\"col\" class=\"text-left text-capitalize\">product</th>\n                    <th scope=\"col\" class=\"text-capitalize text-right\">amount</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <!-- get main service name -->\n                  <tr class=\"border-dashed-bottom\">\n                    <td class=\"text-capitalize product_name_class\">{{order.service.name}}</td>\n                    <td class=\"text-capitalize text-right product_amount_class\">{{order.service.amount | currency:'GBP'}}</td>\n                  </tr>\n      \n                  <!-- dislay additional services if taken -->\n                  <tr *ngFor=\"let ES of order.additional_extras;\" class=\"border-dashed-bottom\">\n                    <td class=\"text-capitalize product_name_class\">{{ES.name}}</td>\n                    <td class=\"text-capitalize text-right product_amount_class\">{{ES.amount | currency:'GBP'}}</td>\n                  </tr>\n      \n                  <!-- display export button and total amount paid -->\n                  <tr>\n                    <td class=\"text-capitalize\" (click)=\"exportOrder(order)\">\n                      <span class=\"btn btn-default text-capitalize btn-export\">export</span>\n                    </td>\n                    <td class=\"text-capitalize text-right padding_total_amount\">\n                      <span class=\"text-capitalize text-order-total mr-4\">total</span>\n                      <span class=\"product_amount_class\">{{order.transaction.final_amount | currency:'GBP'}}</span>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row mt-5\" *ngIf=\"totalItems\">\n    <div class=\"col\">\n      <!--Pagination -->\n      <app-pagination [totalItems]=\"totalItems\" [currentPage]=\"currentPage\" (childEvent)=\"getCustomerOrders ($event)\"></app-pagination>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/modules/users/customer/components/dashboard/dashboard.component.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/users/customer/components/dashboard/dashboard.component.ts ***!
  \********************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_customer_customers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/users/customer/customers.service */ "./src/services/users/customer/customers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(customer, activeRoute) {
        this.customer = customer;
        this.activeRoute = activeRoute;
        this.pageTitle = 'history';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set it as 0.1 second after DOM initialization
        setTimeout(function () {
            _this.getCustomerOrders();
        }, this.customer.vars.onInt_request_delay_in_ms);
    };
    /**
     * method to genertae page counter to design dynamic pagination
     *
     * @param counter
     *
     * @returns array
     */
    DashboardComponent.prototype.generatePageCounter = function (counter) {
        return Array(counter).fill(0).map(function (x, i) { return i; });
    };
    /**
     * get list of all customer orders
     */
    DashboardComponent.prototype.getCustomerOrders = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        // show loader
        this.customer.vars.displayLoader(true);
        this.customer.getCustomerOrders(page, this.activeRoute.snapshot.params["customerId"] || null).subscribe(function (res) {
            // hide loader
            _this.customer.vars.displayLoader(false);
            // assign customer orders
            _this.customerOrders = res.data.data;
            _this.currentPage = res.data.current_page;
            _this.totalItems = res.data.total;
        }, function (err) {
            // hide loader
            _this.customer.vars.displayLoader(false);
            // display errors notification
            _this.customer.vars.showNotification(_this.customer.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Method to export Order in CSV format
     *
     * @param CustomerOrder:Order
     *
     * @return void
     */
    DashboardComponent.prototype.exportOrder = function (order) {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/modules/users/customer/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/modules/users/customer/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_customer_customers_service__WEBPACK_IMPORTED_MODULE_1__["CustomersService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/modules/users/customer/components/payment/payment.component.css":
/*!*****************************************************************************!*\
  !*** ./src/modules/users/customer/components/payment/payment.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".line {\n  height: 1px;\n  border-bottom: 1px solid #ddd;\n}\n\n.btn-shokuni {\n  background-color: #15234A;\n  color: #FFF;\n}\n\n.btn-transparent {\n  background-color: #FFF;\n  border-color: #ddd;\n}\n\n.required::after {\n  color: #EF615F;\n  font-size: 11px; \n  content: ' *';\n}\n\n.title_name{\n  color:#565962;\n  font-size:16px;\n  font-weight:700;\n}\n\n.payment_text{\ncolor:#8e8d90;\nfont-size:11px;\nfont-weight:500;\n}\n\nlabel{\n  font-size:10px;\n  color:#535458;\n  font-weight:600;\n}"

/***/ }),

/***/ "./src/modules/users/customer/components/payment/payment.component.html":
/*!******************************************************************************!*\
  !*** ./src/modules/users/customer/components/payment/payment.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- display page title -->\n    <div class=\"row\">\n        <div class=\"col\">\n        <p class=\"text-capitalize h3 ml-4\">{{pageTitle}}</p>\n        </div>\n    </div>\n\n    <div class=\"row bg-white mb-5 ml-4 mr-5\">\n        <div class=\"col\">\n            <p class=\"text-capitalize h5 ml-5 mt-5 mb-4 title_name\">change payment info</p>\n        \n            <!-- seperator or line -->\n            <div class=\"line\"></div>\n            <p class=\"ml-5 mt-5 mb-4 payment_text\">To change your payment information, enter your new card number below.</p>\n    \n            <div class=\"col-xs-12 col-sm-12 col-lg-5 col-xl-5 col-md-5 m-4\">\n                <form [formGroup]=\"paymentForm\" novalidate>\n                    <div class=\"form-group\">\n                        <label class=\"required text-capitalize\">card number</label>\n                        <input type=\"text\" class=\"form-control\" appTrimInput appNumberOnly required formControlName=\"card_number\" maxlength=\"20\" autocomplete=\"off\" placeholder=\"Card umber: Must be a number\"/>\n                        <show-errors [control]=\"paymentForm.controls.card_number\"></show-errors>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"required text-capitalize\">expiry date</label>\n                        <my-date-picker formControlName=\"expiry_date\" [options]=\"myDatePickerOptions\" [placeholder]=\"placeholder\" ></my-date-picker>\n                        <show-errors [control]=\"paymentForm.controls.expiry_date\"></show-errors>\n                    </div>\n                    <div class=\"form-group mb-5\">\n                        <label class=\"required text-uppercase\">cvv</label>\n                        <input type=\"text\" class=\"form-control\" appTrimInput required appNumberOnly formControlName=\"cvv\" maxlength=\"4\" autocomplete=\"off\" placeholder=\"Card umber: Must be a number\"/>\n                        <show-errors [control]=\"paymentForm.controls.cvv\"></show-errors>\n                    </div>\n                    <small><span class=\"required\"></span> indicates required</small>\n                    <div class=\"text-left mt-2\">\n                        <button [disabled]=\"!paymentForm.valid\" class=\"btn btn-shokuni text-capitalize mr-3\" (click)=\"submitpaymentForm(paymentForm)\">save</button>\n                        <button type=\"reset\" class=\"btn btn-transparent text-capitalize\" data-toggle=\"modal\">cancel</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n  </div>  \n\n  </div>"

/***/ }),

/***/ "./src/modules/users/customer/components/payment/payment.component.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/users/customer/components/payment/payment.component.ts ***!
  \****************************************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_users_customer_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/users/customer/customers.service */ "./src/services/users/customer/customers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(customer) {
        this.customer = customer;
        this.pageTitle = 'payment';
        this.myDatePickerOptions = {
            sunHighlight: true,
            satHighlight: true,
            markCurrentDay: true,
            markCurrentMonth: true,
            markCurrentYear: true,
            showClearDateBtn: false,
            alignSelectorRight: true,
            componentDisabled: false,
            firstDayOfWeek: 'su',
            disableUntil: this.setToday(),
            showInputField: true,
            openSelectorOnInputClick: true,
            inline: false,
            editableDateField: false,
            indicateInvalidDate: true,
            dateFormat: 'mm/yyyy',
        };
        this.placeholder = 'Select a date (month/year)';
    }
    PaymentComponent.prototype.setToday = function () {
        var today = new Date();
        return { year: today.getFullYear(), month: (today.getMonth() + 1), day: (today.getDate() - 1) };
    };
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paymentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            card_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]),
            expiry_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            cvv: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4)])
        });
        setTimeout(function () {
            _this.getCustomerPaymentCard();
        }, 100);
    };
    /**
     * Method to save payment form values on submit
     *
     * @param NgForm form
     *
     * @returns void
     */
    PaymentComponent.prototype.submitpaymentForm = function (form) {
        /**
         * Request to save customer cards into BrainTree
         */
        this.customer.vars.displayLoader(true);
        var values = form.value;
        values.expiry_date = (this.paymentForm.controls['expiry_date'].value).formatted;
        // check if card already exists or not
        if (this.card) {
            // card already exists and need to update card detail
            this.updatePaumentCard(values);
        }
        else {
            // save new card
            this.savecard(values);
        }
    };
    /**
     * Method to updated saved user card
     *
     * @param values
     *
     * @return void
     */
    PaymentComponent.prototype.updatePaumentCard = function (values) {
        var _this = this;
        // get card token
        this.customer.updatePaumentCard(this.card.token, values).subscribe(function (res) {
            _this.customer.vars.displayLoader(false);
            _this.customer.vars.showNotification("Card successfully updated.", res.message, 'success');
            // update edit card detail in card object
            _this.card.maskedNumber = values['card_number'];
            _this.card.expirationDate = values['expiry_date'];
        }, function (err) {
            _this.customer.vars.displayLoader(false);
            _this.customer.vars.showNotification(_this.customer.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Method to save new Payment card of user
     *
     * @param Object values
     *
     * @returns void
     */
    PaymentComponent.prototype.savecard = function (values) {
        var _this = this;
        this.customer.savepaymentCards(values).subscribe(function (res) {
            _this.customer.vars.displayLoader(false);
            // set card detail
            _this.card = res.data;
            _this.customer.vars.showNotification("Card successfully saved.", res.message, 'success');
        }, function (err) {
            _this.customer.vars.displayLoader(false);
            _this.customer.vars.showNotification(_this.customer.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Method to check if user card exists
     * then received it's card detail
     *
     * @return void
     */
    PaymentComponent.prototype.getCustomerPaymentCard = function () {
        var _this = this;
        this.customer.getCustomerPaymentCard().subscribe(function (res) {
            _this.card = res.data[0];
            // set saved card number
            _this.paymentForm.controls['card_number'].setValue((_this.card.maskedNumber).replace(/.(?=.{4})/g, "*"));
            // set saved card expiry date
            _this.paymentForm.controls['expiry_date'].setValue({ date: { year: _this.card.expirationYear, month: _this.card.expirationMonth }, formatted: _this.card.expirationMonth + '/' + _this.card.expirationYear });
            _this.customer.vars.showNotification("Card successfully found", res.message, 'success');
        }, function (err) {
            _this.customer.vars.showNotification(_this.customer.vars.convertObjectToString(err.errors), err.message);
        });
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/modules/users/customer/components/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/modules/users/customer/components/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_customer_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/modules/users/customer/components/support/support.component.css":
/*!*****************************************************************************!*\
  !*** ./src/modules/users/customer/components/support/support.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submit_ticket{\n    color:#4c4f56;\n    font-size:14px;\n    font-weight:700;\n}\n.need_extra{\n    color:#3b3a40;\n    font-size:12px;\n    font-weight:bold;\n}\n.text_descr{\n    font-size:10px;\n    font-weight: 500;\n    color:#4c4f56;\n}\nlabel{\n    color:#97979a;\n    font-size:10px;\n    font-weight:bold;\n}"

/***/ }),

/***/ "./src/modules/users/customer/components/support/support.component.html":
/*!******************************************************************************!*\
  !*** ./src/modules/users/customer/components/support/support.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- display page title -->\n  <div class=\"row mb-4\">\n    <div class=\"col\">\n      <p class=\"text-capitalize h3 ml-4\">{{pageTitle}}</p>\n    </div>\n  </div>\n\n  <div class=\"row bg-white mb-5 ml-4 mr-5\">\n    <div class=\"col\">\n      <p class=\"text-capitalize h5 ml-2 mt-5 mb-4 submit_ticket\">submit a ticket</p>\n  \n      <!-- seperator or line -->\n      <div class=\"line\"></div>\n    </div>\n\n    <div class=\"row ml-2 mt-5 mb-5\">\n      <div class=\"col-xs-12 col-sm-12 col-lg-6 col-xl-6 col-md-6 mr-5\">\n        <p class=\"text-capitalize h5 mb-2 need_extra\">need extra help?</p>\n        <p class=\"text-justify mb-4 text_descr\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc urna, condimentum nec vulputate a, vulputate et orci. Donec faucibus dictum ligula, sed condimentum tortor venenatis eu. Phasellus ac elit at dolor fermentum vestibulum vitae sed nisl. Praesent pellentesque vulputate dolor, quis molestie massa luctus eu. Aenean ipsum ante, facilisis bibendum leo at, suscipit dapibus tortor. Aliquam vitae ornare libero. Duis commodo semper nisl eget luctus. Duis sed interdum ex, nec mollis ex. Donec rhoncus facilisis odio, et egestas dolor imperdiet ac. Cras et ipsum leo. Pellentesque ac elementum mauris, nec laoreet nisi.</p>\n      </div>\n    \n      <div class=\"col-xs-12 col-sm-12 col-lg-5 col-xl-5 col-md-5\">\n        <!-- change-password form -->\n        <form [formGroup]=\"supportForm\" novalidate>\n          <div class=\"form-group\">\n            <label class=\"h6\">Issue Type</label>\n            <select class=\"form-control\" formControlName=\"type\">\n              <option [selected]=\"true\" disabled>Select Type</option>\n              <option value=\"1\">First Issue type</option>\n              <option value=\"2\">Second Issue type</option>\n              <option value=\"3\">Third Issue type</option>\n              <option value=\"4\">Fourth Issue type</option>\n              <option value=\"5\">Fifth Issue type</option>\n              <option value=\"6\">Sixth Issue type</option>\n            </select>\n            <show-errors [control]=\"supportForm.controls.type\"></show-errors>\n          </div>\n              \n          <div class=\"form-group\">\n            <label class=\"h6\">Detailed Description</label>\n            <textarea class=\"form-control\" appTrimInput required formControlName=\"description\" placeholder=\"Describe the issue that you're having\" rows=\"3\"></textarea>\n            <show-errors [control]=\"supportForm.controls.description\"></show-errors>\n          </div>\n    \n          <div class=\"form-group\">\n            <label class=\"h6\">Detailed Description</label>\n            <input type=\"hidden\" formControlName=\"file\" />\n            <div class=\"input-group\">\n              <div class=\"custom-file\">\n                <input type=\"file\" class=\"custom-file-input\" (change)=\"uploadFile ($event)\">\n                <label class=\"custom-file-label text-capitalize\">{{fileLabel}}</label>\n              </div>\n            </div>\n            <show-errors [control]=\"supportForm.controls.file\"></show-errors>\n          </div>\n              \n          <div class=\"text-left mt-2\">\n            <button [disabled]=\"!supportForm.valid\" (click)=\"submitSupportForm (supportForm)\" class=\"btn btn-shokuni text-capitalize mr-3\">submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/modules/users/customer/components/support/support.component.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/users/customer/components/support/support.component.ts ***!
  \****************************************************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/common/common.service */ "./src/services/common/common.service.ts");
/* harmony import */ var _services_users_customer_customers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/users/customer/customers.service */ "./src/services/users/customer/customers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SupportComponent = /** @class */ (function () {
    function SupportComponent(common, customer) {
        this.common = common;
        this.customer = customer;
        this.pageTitle = 'support';
        this.fileLabel = 'choose file';
        this.MIN_FILE_SIZE_IN_BYTE = 1024;
        this.MAX_FILE_SIZE_IN_BYTE = 102400;
        this.ALLOW_FILE_EXT = ['csv', 'xlsx', 'xls'];
    }
    SupportComponent.prototype.ngOnInit = function () {
        this.supportForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(2)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(2000)]),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]),
        });
    };
    /**
     * Method to submit support form
     *
     * @param form:NgForm
     */
    SupportComponent.prototype.submitSupportForm = function (form) {
        var _this = this;
        // show loader
        this.common.vars.displayLoader(true);
        var values = form.value;
        // remove empty/null keys from object
        Object.keys(values).forEach(function (key) { return (values[key] == null) && delete values[key]; });
        // request to save support information
        this.customer.saveCustomerSupport(values).subscribe(function (res) {
            // hide loader
            _this.common.vars.displayLoader(false);
            // show success notification
            _this.common.vars.showNotification('Request successfuly saved.', res.message, 'success');
        }, function (err) {
            // hide loader
            _this.common.vars.displayLoader(false);
            // show login error
            _this.common.vars.showNotification(_this.common.vars.convertObjectToString(err.errors), err.message);
        });
    };
    /**
     * Method to upload file
     */
    SupportComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        // check if file is not empty 
        if (!file || !file.size) {
            return false;
        }
        // check for file size
        if ((file.size < this.MIN_FILE_SIZE_IN_BYTE) && (file.size > this.MAX_FILE_SIZE_IN_BYTE)) {
            return this.common.vars.showNotification("File size must be between " + this.MIN_FILE_SIZE_IN_BYTE / 1024 + " KB and " + this.MAX_FILE_SIZE_IN_BYTE / 1024 + " KB", 'file');
        }
        var ext = /(?:\.([^.]+))?$/.exec(file.name)[1];
        // check for file extension
        if (!(this.ALLOW_FILE_EXT).includes(ext)) {
            var allowExt = (this.ALLOW_FILE_EXT).join(', ');
            return this.common.vars.showNotification("Allow file extension: " + allowExt, 'file');
        }
        // check for allow extension
        var reader = new FileReader();
        reader.onload = function (e) {
            // show loader
            _this.common.vars.displayLoader(true);
            // upload avatar img on server
            _this.common.uploadFile(file, 'support').subscribe(function (res) {
                // hide loader
                _this.common.vars.displayLoader(false);
                // this.profileForm.setValue ({file:res.data[0]})
                _this.supportForm.controls['file'].setValue(res.data[0]);
                _this.fileLabel = file.name;
                // show success notification
                _this.common.vars.showNotification('file successfully uploaded.', res.message, 'success');
            }, function (err) {
                // hide loader
                _this.common.vars.displayLoader(false);
                // show login error
                _this.common.vars.showNotification(_this.common.vars.convertObjectToString(err.errors), err.message);
            });
        };
        reader.readAsDataURL(file);
    };
    SupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/modules/users/customer/components/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.css */ "./src/modules/users/customer/components/support/support.component.css")]
        }),
        __metadata("design:paramtypes", [_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _services_users_customer_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"]])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/modules/users/customer/customer.module.ts":
/*!*******************************************************!*\
  !*** ./src/modules/users/customer/customer.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/modules/users/customer/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/payment/payment.component */ "./src/modules/users/customer/components/payment/payment.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../guards/auth/auth.guard */ "./src/guards/auth/auth.guard.ts");
/* harmony import */ var _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../guards/role/role-access.guard */ "./src/guards/role/role-access.guard.ts");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/modules/shared/shared.module.ts");
/* harmony import */ var _components_support_support_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/support/support.component */ "./src/modules/users/customer/components/support/support.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import guards to veryfy routing request



// Import all custome directives and components use for each module


var routes = [{
        path: 'customer/dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_7__["RoleAccessGuard"]],
        data: { roles: ['consumer'] }
    }, {
        path: 'admin/customer/:customerId/dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_7__["RoleAccessGuard"]],
        data: { roles: ['admin'] }
    }, {
        path: 'payment',
        component: _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_3__["PaymentComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_7__["RoleAccessGuard"]],
        data: { roles: ['consumer'] }
    }, {
        path: 'support',
        component: _components_support_support_component__WEBPACK_IMPORTED_MODULE_10__["SupportComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_role_role_access_guard__WEBPACK_IMPORTED_MODULE_7__["RoleAccessGuard"]],
        data: { roles: ['consumer'] }
    }];
var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                mydatepicker__WEBPACK_IMPORTED_MODULE_8__["MyDatePickerModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            declarations: [
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
                _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_3__["PaymentComponent"], _components_support_support_component__WEBPACK_IMPORTED_MODULE_10__["SupportComponent"]
            ]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/modules/users/users.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/users/users.module.ts ***!
  \*******************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "./src/modules/users/components/change-password/change-password.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/modules/users/components/profile/profile.component.ts");
/* harmony import */ var _components_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/edit-profile/edit-profile.component */ "./src/modules/users/components/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_profile_delete_customer_account_delete_customer_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/delete-customer-account/delete-customer-account.component */ "./src/modules/users/components/profile/delete-customer-account/delete-customer-account.component.ts");
/* harmony import */ var _barber_barber_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./barber/barber.module */ "./src/modules/users/barber/barber.module.ts");
/* harmony import */ var _customer_customer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer/customer.module */ "./src/modules/users/customer/customer.module.ts");
/* harmony import */ var _guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../guards/auth/auth.guard */ "./src/guards/auth/auth.guard.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/modules/shared/shared.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../admin/admin.module */ "./src/modules/admin/admin.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import components under module


// import { ResetPasswrdComponent } from './components/reset-passwrd/reset-passwrd.component';





// Import all custome directives and components use for each module


var routes = [{
        path: 'change-password',
        component: _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    }, {
        path: 'profile',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    }
];
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _barber_barber_module__WEBPACK_IMPORTED_MODULE_8__["BarberModule"],
                _customer_customer_module__WEBPACK_IMPORTED_MODULE_9__["CustomerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                // AddSaloonsComponent,
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_12__["AdminModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _barber_barber_module__WEBPACK_IMPORTED_MODULE_8__["BarberModule"], _customer_customer_module__WEBPACK_IMPORTED_MODULE_9__["CustomerModule"],
            ],
            declarations: [
                _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _components_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"],
                _components_profile_delete_customer_account_delete_customer_account_component__WEBPACK_IMPORTED_MODULE_7__["DeleteCustomerAccountComponent"],
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/pipes/seconds-to-minuits/seconds-to-minuits.pipe.ts":
/*!*****************************************************************!*\
  !*** ./src/pipes/seconds-to-minuits/seconds-to-minuits.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: SecondsToMinuitsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondsToMinuitsPipe", function() { return SecondsToMinuitsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecondsToMinuitsPipe = /** @class */ (function () {
    function SecondsToMinuitsPipe() {
    }
    SecondsToMinuitsPipe.prototype.transform = function (value, args) {
        return Math.ceil(value / 60);
    };
    SecondsToMinuitsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'secondsToMinuits'
        })
    ], SecondsToMinuitsPipe);
    return SecondsToMinuitsPipe;
}());



/***/ }),

/***/ "./src/services/admin/admin.service.ts":
/*!*********************************************!*\
  !*** ./src/services/admin/admin.service.ts ***!
  \*********************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/global.service */ "./src/services/global/global.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminService = /** @class */ (function () {
    function AdminService(vars, _http) {
        this.vars = vars;
        this._http = _http;
    }
    /**
     * Request to get saloon orders
     *
     * @param number page
     *
     * @method GET
     *
     * @return Observable
     */
    AdminService.prototype.getSaloons = function (page, search) {
        var url = new URL(this.vars.backend_url + '/admin/saloons');
        // get default pagination limit
        // append param in url
        url.searchParams.append('paginate', (this.vars.default_pagination_limit).toString());
        // append page number
        url.searchParams.append('page', (page).toString());
        // check if user fields to search by field
        if (search) {
            url.searchParams.append('search', (search).toString());
        }
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.get(url.href, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
    * Request to get list of all barbers
    *
    * @param number page
    *
    * @method GET
    *
    * @return Observable
    */
    AdminService.prototype.getBarbers = function (page, search) {
        var url = new URL(this.vars.backend_url + '/admin/barbers');
        // get default pagination limit
        // append param in url
        url.searchParams.append('paginate', (this.vars.default_pagination_limit).toString());
        // append page number
        url.searchParams.append('page', (page).toString());
        if (search) {
            url.searchParams.append('search', (search).toString());
        }
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.get(url.href, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Request to get list of all customers
     *
     * @param number page
     *
     * @method GET
     *
     * @return Observable
     */
    AdminService.prototype.getCustomers = function (page, search) {
        var url = new URL(this.vars.backend_url + '/admin/customers');
        // get default pagination limit
        // append param in url
        url.searchParams.append('paginate', (this.vars.default_pagination_limit).toString());
        // append page number
        url.searchParams.append('page', (page).toString());
        if (search) {
            url.searchParams.append('search', (search).toString());
        }
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.get(url.href, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Request to get list of all users
     *
     * @param number page
     *
     * @method GET
     *
     * @return Observable
     */
    AdminService.prototype.getUsers = function (page, search) {
        var url = new URL(this.vars.backend_url + '/admin/users');
        // get default pagination limit
        // append param in url
        url.searchParams.append('paginate', (this.vars.default_pagination_limit).toString());
        // append page number
        url.searchParams.append('page', (page).toString());
        if (search) {
            url.searchParams.append('search', (search).toString());
        }
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.get(url.href, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Request to get saloon orders
     *
     * @param number page
     *
     * @method GET
     *
     * @return Observable
     */
    AdminService.prototype.getSaloonsSummary = function (page) {
        var url = new URL(this.vars.backend_url + '/admin/saloons/summary');
        // get default pagination limit
        // append param in url
        url.searchParams.append('paginate', (this.vars.default_pagination_limit).toString());
        // append page number
        url.searchParams.append('page', (page).toString());
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.get(url.href, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Request to get dashboard data for Admin
     *
     * @return Observable
     */
    AdminService.prototype.getDashboard = function (date) {
        var url = new URL(this.vars.backend_url + '/admin/dashboard');
        url.searchParams.append('date', date);
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.get(url.href, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Request to get dashboard data for Admin
     *
     * @return Observable
     */
    AdminService.prototype.getDashboardSummary = function (date) {
        var url = new URL(this.vars.backend_url + '/admin/dashboard/summary');
        url.searchParams.append('date', date);
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.get(url.href, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * method to update saloon-s status
     *
     * @param Object values
     *
     * @return
     */
    AdminService.prototype.updateSaloonStatus = function (values) {
        var url = this.vars.backend_url + '/admin/saloons/update-status';
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.put(url, values, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Request to update user email by admin
     *
     * @param userId
     * @param values
     *
     * @return Observable
     */
    AdminService.prototype.changeUserEmail = function (userId, values) {
        var url = this.vars.backend_url + '/users/' + userId + '/change-email';
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.put(url, values, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Request to update user password
     *
     * @param userId
     * @param values
     *
     * @return Observable
     */
    AdminService.prototype.changeUserPassword = function (userId, values) {
        var url = this.vars.backend_url + '/users/' + userId + '/change-password';
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.put(url, values, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Request to update user password
     *
     * @param userId
     * @param values
     *
     * @return Observable
     */
    AdminService.prototype.deleteUser = function (userId) {
        var url = this.vars.backend_url + '/users/' + userId;
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/services/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/services/auth/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/global.service */ "./src/services/global/global.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(vars, _http) {
        this.vars = vars;
        this._http = _http;
    }
    /**
     * Method to loging user
     *
     * @param values {username: "barber@email.com", password: "123456", remember: null}
     */
    AuthService.prototype.loginUser = function (values) {
        var url = this.vars.backend_url + '/users/login';
        // append required parameters for login
        // values['role'] = this.vars.user_role;
        values['client_id'] = this.vars.client_id;
        values['client_secret'] = this.vars.client_secret;
        values['grant_type'] = this.vars.grant_type;
        // request for login
        return this._http.post(url, values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Method to register user
     *
     * @param Object {first_name: "Test", last_name: "Dev", email: "barber@email.com", password: "123456", number: "1234567890"}
     *
     * @returns Observable
     */
    AuthService.prototype.registerUser = function (values) {
        var url = this.vars.backend_url + '/users/register';
        // append required parameters for login
        // values['role'] = this.vars.user_role;
        // request for login
        return this._http.post(url, values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
  *	Send request for invite-barber
  */
    AuthService.prototype.inviteBarber = function (values) {
        var url = this.vars.backend_url + '/inviteemail';
        // request for login
        return this._http.post(url, values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
   * Method to register user
   *
   * @param Object { "barbar_id":1,  "pay_out_balance": 10 }
   *
   * @returns Observable
   */
    AuthService.prototype.payBarber = function (values) {
        var url = this.vars.backend_url + '/queue/payout-balance';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        return this._http.post(url, values, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
    *	Send request for forgot-password
    */
    AuthService.prototype.forgotPassword = function (values) {
        var url = this.vars.backend_url + '/user/forgot-password';
        // request for login
        return this._http.post(url, values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Method to save Login information
     *
     * @param string access_token
     * @param string token_type
     *
     * @return void
     */
    AuthService.prototype.saveLoginInfo = function (access_token, token_type) {
        // save token type and access token in memory
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('token_type', token_type);
    };
    /**
     * Method to check if user is logged in or not
     *
     * @return boolean
     */
    AuthService.prototype.isLoggedIn = function () {
        // check if localstorage has access-token
        if (localStorage.getItem('access_token') && localStorage.getItem('token_type')) {
            return true;
        }
        return false;
    };
    /**
     * Method to logout user and redirect to login page
     *
     * @return void
     */
    AuthService.prototype.logoutUser = function () {
        var url = this.vars.backend_url + '/users/logout';
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // logout user from server
        return this._http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Method to check if login barber is admin
     *
     * @return Observable
     */
    AuthService.prototype.checkBarberIsAdmin = function () {
        var url = this.vars.backend_url + '/saloon/is-admin';
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // logout user from server
        return this._http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/services/common/common.service.ts":
/*!***********************************************!*\
  !*** ./src/services/common/common.service.ts ***!
  \***********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/global.service */ "./src/services/global/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommonService = /** @class */ (function () {
    function CommonService(vars, _http) {
        this.vars = vars;
        this._http = _http;
    }
    /**
     * Method to upload avatar
     *
     * @param Object
     * @param string
     *
     * @returns Observable
     */
    CommonService.prototype.uploadImg = function (file, directory) {
        // image upload url
        var url = this.vars.backend_url + '/image';
        // design form to upload image
        var form = new FormData();
        form.append('directory', directory);
        // append file
        form.append('image[]', file);
        // request to update password
        return this._http.post(url, form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.vars.handleError));
    };
    /**
     * Fectch list of countries
     *
     * @param Object
     *
     * @returns Observable
     */
    CommonService.prototype.getCountries = function (values) {
        // image upload url
        // let url = this.vars.backend_url +'/countries';
        if (values === void 0) { values = null; }
        var url = new URL(this.vars.backend_url + '/countries');
        // append parameters in URL
        for (var _i = 0, _a = Object.keys(values); _i < _a.length; _i++) {
            var i = _a[_i];
            url.searchParams.append(i, values[i]);
        }
        // request to update password
        return this._http.get(url.href).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.vars.handleError));
    };
    /**
     * Method to upload avatar
     *
     * @param Object
     * @param string
     *
     * @returns Observable
     */
    CommonService.prototype.uploadFile = function (file, directory) {
        // image upload url
        var url = this.vars.backend_url + '/file';
        // design form to upload file
        var form = new FormData();
        form.append('directory', directory);
        // append file
        form.append('file[]', file);
        // request to update password
        return this._http.post(url, form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.vars.handleError));
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/services/global/global.service.ts":
/*!***********************************************!*\
  !*** ./src/services/global/global.service.ts ***!
  \***********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GlobalService = /** @class */ (function () {
    function GlobalService(snotifyService, router) {
        this.snotifyService = snotifyService;
        this.router = router;
        this.project_title = "shokuni";
        this.project_sub_title = "barber shop";
        // public user_role:String = "consumer";
        this.backend_url = "http://3.82.35.52/v2";
        //public backend_url:String = "http://103.250.84.164/shokuni_new/public/v2";/*http://10.10.10.145*/
        this.client_id = 2;
        this.client_secret = "FHboWXJfzSaM3Y8AH8aWht1XAZ9DqIIHhgt8dmeJ";
        this.grant_type = "password";
        this.baseUrl = window.location.origin; //"https://api.shokunidev.co.uk"; //
        this.onInt_request_delay_in_ms = 100;
        this.default_pagination_limit = 6;
        this.loaderStatus = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    GlobalService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // check if user is unauthorized 
            // or it's response code is 401
            if (error.status === 401) {
                // logout the user as it's token is not valid from browser memory
                localStorage.removeItem('token_type');
                localStorage.removeItem('access_token');
                localStorage.removeItem('user_detail');
            }
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            /*console.error( `Backend returned code ${error.status}, `);
              `body was: ${error.error}`);*/
        }
        // return an observable with a user-facing error message
        return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.error || error);
    };
    GlobalService.prototype.displayLoader = function (value) {
        this.loaderStatus.next(value);
    };
    GlobalService.prototype.showNotification = function (message, title, type) {
        if (title === void 0) { title = null; }
        if (type === void 0) { type = 'error'; }
        var config = {
            timeout: 2000,
            showProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            position: 'rightTop'
        };
        switch (type.toLowerCase()) {
            case 'error':
                return this.snotifyService.error(message, title, config);
            case 'success':
                return this.snotifyService.success(message, title, config);
            case 'warning':
                return this.snotifyService.warning(message, title, config);
            case 'info':
                return this.snotifyService.info(message, title, config);
        }
    };
    /**
     * Method to convert server response error array into string
     *
     * @param Object
     *
     * @returns string
     */
    GlobalService.prototype.convertObjectToString = function (req) {
        var result = '';
        // check if object not empty
        if (Object.keys(req).length) {
            // convert Onject into string
            for (var str in req) {
                result += req[str] + '\n';
            }
        }
        // remove last break from result
        return result.slice(0, -5);
    };
    /**
     * Method to logout user from localstorage
     * and redirect user to login page
     *
     * @return void
     */
    GlobalService.prototype.logoutUser = function () {
        localStorage.removeItem('token_type');
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_detail');
        localStorage.removeItem('admin_detail');
        // redirect user to login page
        //this.router.navigateByUrl('/login');
    };
    /**
     * Method to get default page url
     *
     * @return string
     */
    GlobalService.prototype.getDefaultpage = function () {
        if (localStorage.getItem('user_detail')) {
            // check for user role
            var user_role = String(JSON.parse(localStorage.getItem('user_detail')).role).toUpperCase();
            switch (user_role) {
                case 'CONSUMER':
                    return 'customer/dashboard';
                case 'BARBER':
                    return 'barber/dashboard';
                case 'ADMIN':
                    return 'admin';
            }
        }
    };
    /**
     * Method to get Auth token
     */
    GlobalService.prototype.getAuthToken = function () {
        return (localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token')).trim();
    };
    /**
     * method to get user role
     *
     * @return string
     */
    GlobalService.prototype.getUserRole = function () {
        return localStorage.getItem('user_detail') ? JSON.parse(localStorage.getItem('user_detail')).role : null;
    };
    GlobalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/services/saloon/barber/barber.service.ts":
/*!******************************************************!*\
  !*** ./src/services/saloon/barber/barber.service.ts ***!
  \******************************************************/
/*! exports provided: BarberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarberService", function() { return BarberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/global.service */ "./src/services/global/global.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BarberService = /** @class */ (function () {
    function BarberService(vars, _http) {
        this.vars = vars;
        this._http = _http;
    }
    /**
     * Method to get list of all barbers
     *
     * @param number page
     *
     * @return Observable
     */
    BarberService.prototype.getSaloonBarbers = function (page, saloonId) {
        var url = new URL(this.vars.backend_url + '/saloon/barbers');
        // check for user role 
        if (this.vars.getUserRole() === 'admin') {
            url = new URL(this.vars.backend_url + '/admin/saloons/' + saloonId + '/barbers');
        }
        // get default pagination limit
        // append param in url
        url.searchParams.append('paginate', (this.vars.default_pagination_limit).toString());
        // append page number
        url.searchParams.append('page', (page).toString());
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.get(url.href, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Method to invite barber by Saloon-admin
     *
     * @access: saloon-admin
     *
     * @param Object values
     *
     * @return Observable
     */
    BarberService.prototype.inviteBarber = function (values, saloonId) {
        var url = this.vars.backend_url + '/saloon/barbers/invite';
        if (this.vars.getUserRole() === 'admin') {
            url = this.vars.backend_url + '/admin/saloons/' + saloonId + '/barbers/invite';
        }
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // append baseUrl for invitation registration link
        values['requestUrl'] = this.vars.baseUrl + "/signup";
        // request to update card detail
        return this._http.post(url, values, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * request to get saloon barber detail by barber admin
     *
     * @method GET
     * @param number barberId
     *
     * @return Observable
     */
    BarberService.prototype.getSaloonBarberDetail = function (barberId) {
        var url = this.vars.backend_url + '/saloon/barbers/' + barberId;
        // check for user role 
        if (this.vars.getUserRole() === 'admin') {
            url = this.vars.backend_url + '/admin/barbers/' + barberId;
        }
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * request to get saloon barber detail by barber admin
     *
     * @method GET
     * @param number barberId
     *
     * @return Observable
     */
    BarberService.prototype.updateSaloonBarberDetail = function (barberId, values) {
        var url = this.vars.backend_url + '/saloon/barbers/' + barberId;
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.put(url, values, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * request to get saloon barber detail by barber admin
     *
     * @method POST
     * @param name, standard_price, logo, address,postal_code, contact_number, lat, lng, user_id, header, country_id, vat_number, company_number
     *
     * @return Observable
     */
    BarberService.prototype.addSaloonBarberDetail = function (values) {
        var url = this.vars.backend_url + '/saloon';
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update password
        return this._http.post(url, values, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    BarberService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BarberService);
    return BarberService;
}());



/***/ }),

/***/ "./src/services/saloon/orders/orders.service.ts":
/*!******************************************************!*\
  !*** ./src/services/saloon/orders/orders.service.ts ***!
  \******************************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/global.service */ "./src/services/global/global.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersService = /** @class */ (function () {
    function OrdersService(vars, _http) {
        this.vars = vars;
        this._http = _http;
    }
    /**
     * Request to get saloon orders
     *
     * @param number page
     *
     * @method GET
     *
     * @return Observable
     */
    OrdersService.prototype.getSaloonOrders = function (page, saloonId) {
        var url = new URL(this.vars.backend_url + '/saloon/orders');
        // check for role
        if (this.vars.getUserRole() === 'admin') {
            url = new URL(this.vars.backend_url + '/admin/saloons/' + saloonId + '/orders');
        }
        // get default pagination limit
        // append param in url
        url.searchParams.append('paginate', (this.vars.default_pagination_limit).toString());
        // append page number
        url.searchParams.append('page', (page).toString());
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.get(url.href, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Method to get list of all payment list belongs to saloon
     *
     * @param number page
     *
     * @method GET
     *
     * @return Observable
     */
    OrdersService.prototype.getSaloonPayments = function (page, saloonId) {
        var url = new URL(this.vars.backend_url + '/saloon/payments');
        // check for role
        if (this.vars.getUserRole() === 'admin') {
            url = new URL(this.vars.backend_url + '/admin/saloons/' + saloonId + '/payments');
        }
        // get default pagination limit
        // append param in url
        url.searchParams.append('paginate', (this.vars.default_pagination_limit).toString());
        // append page number
        url.searchParams.append('page', (page).toString());
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.get(url.href, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Method to get list of all payment list belongs to saloon
     *
     * @param number page
     *
     * @method GET
     *
     * @return Observable
     */
    OrdersService.prototype.getSalesSummary = function (saloonId) {
        var url = this.vars.backend_url + '/saloon/sales-summary';
        // check for role
        if (this.vars.getUserRole() === 'admin') {
            url = this.vars.backend_url + '/admin/saloons/' + saloonId + '/sales-summary';
        }
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Request to get complete invoice detail of an order by transaction-id
     *
     * @param number transactionId
     *
     * @return Observable
     */
    OrdersService.prototype.getPaymentDetail = function (transactionId) {
        var url = this.vars.backend_url + '/saloon/transactions/' + transactionId;
        // check for role
        if (this.vars.getUserRole() === 'admin') {
            url = this.vars.backend_url + '/admin/transactions/' + transactionId;
        }
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Request to get saloon orders cut history
     *
     * @param number page
     * @param number saloonId
     *
     * @return Observable
     */
    OrdersService.prototype.getSaloonOrdersCutHistory = function (page, saloonId) {
        if (saloonId === void 0) { saloonId = null; }
        var url = new URL(this.vars.backend_url + '/saloon/orders/cut-history');
        // check for the role
        if (this.vars.getUserRole() === 'admin') {
            url = new URL(this.vars.backend_url + '/admin/saloons/' + saloonId + '/orders/cut-history');
        }
        // get default pagination limit
        // append param in url
        url.searchParams.append('paginate', (this.vars.default_pagination_limit).toString());
        // append page number
        url.searchParams.append('page', (page).toString());
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.get(url.href, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    OrdersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/services/saloon/saloon.service.ts":
/*!***********************************************!*\
  !*** ./src/services/saloon/saloon.service.ts ***!
  \***********************************************/
/*! exports provided: SaloonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaloonService", function() { return SaloonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/global.service */ "./src/services/global/global.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SaloonService = /** @class */ (function () {
    function SaloonService(vars, _http) {
        this.vars = vars;
        this._http = _http;
    }
    /**
     * Method to get saloon information
     *
     * @param number saloonId
     *
     * @return Observable
     */
    SaloonService.prototype.getSaloon = function (saloonId) {
        if (saloonId === void 0) { saloonId = null; }
        var url = this.vars.backend_url + '/saloon';
        // check for user role
        if (this.vars.getUserRole() === 'admin') {
            url = this.vars.backend_url + '/admin/saloons/' + saloonId;
        }
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update password
        return this._http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Method to register ndew saloon
     *
     * @param values
     *
     * @return Observable
     */
    SaloonService.prototype.createSaloon = function (values) {
        var url = this.vars.backend_url + '/saloon';
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update password
        return this._http.post(url, values, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Method to update saloon information
     *
     * @param Object vales
     *
     * @returns Observable
     */
    SaloonService.prototype.updateSaloon = function (values, saloonId) {
        if (saloonId === void 0) { saloonId = null; }
        var url = this.vars.backend_url + '/saloon';
        // check for user role
        if (this.vars.getUserRole() === 'admin') {
            url = this.vars.backend_url + '/admin/saloons/' + saloonId;
        }
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update password
        return this._http.put(url, values, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Method to fetch user detail from
     */
    SaloonService.prototype.getUserDetail = function () {
        var url = this.vars.backend_url + '/users/detail';
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request for user detail
        return this._http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Request to get payment detail of the saloon
     *
     * @return Observable
     */
    SaloonService.prototype.getSaloonPaymentDetail = function (saloonId) {
        var url = this.vars.backend_url + '/saloon/account';
        // check for role
        if (this.vars.getUserRole() === 'admin') {
            url = this.vars.backend_url + '/admin/saloons/' + saloonId + '/account';
        }
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update password
        return this._http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    SaloonService.prototype.getUserStripeDetails = function (barberId) {
        var url = 'http://3.82.35.52/v2/getstripeid/' + barberId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Request to update payment detail of the saloon
     *
     * @return Observable
     */
    SaloonService.prototype.updateSaloonPaymentDetail = function (values, saloonId) {
        var url = this.vars.backend_url + '/saloon/account';
        // check for role
        if (this.vars.getUserRole() === 'admin') {
            url = this.vars.backend_url + '/admin/saloons/' + saloonId + '/account';
        }
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update password
        return this._http.put(url, values, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    //stripe
    SaloonService.prototype.saveStripeAccount = function (values, barberId) {
        var url = 'http://3.82.35.52/v2/storeStripeKeys';
        var params = {
            "userid": barberId,
            "accountid": values.stripeCode,
            "stripe_secret": values.stripe_secret,
            "stripe_key": values.stripe_key
        };
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update password
        return this._http.post(url, params, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    SaloonService.prototype.getStripeURL = function (barberId) {
        var url = 'http://3.82.35.52/v2/createStripeAccount';
        var params = {
            "userid": barberId
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        return this._http.post(url, params, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    SaloonService.prototype.getStripeAccountDetails = function (stripeId) {
        var url = 'http://3.82.35.52/v2/getStripeAccount/' + stripeId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        return this._http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    SaloonService.prototype.getStripeStatus = function (stripeId) {
        var url = 'http://3.82.35.52/v2/getStripeAccountLink/' + stripeId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        return this._http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Method to get saloon dashboard information
     *
     * @return Observable
     */
    SaloonService.prototype.getSaloonDashboard = function (date, saloonId) {
        if (saloonId === void 0) { saloonId = null; }
        var url = new URL(this.vars.backend_url + '/saloon/dashboard');
        // check for the role
        if (this.vars.getUserRole() === 'admin') {
            url = new URL(this.vars.backend_url + '/admin/saloons/' + saloonId + '/dashboard');
        }
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        url.searchParams.append('date', date);
        // request to update password
        return this._http.get(url.href, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Method to get saloon dashboard information
     *
     * @return Observable
     */
    SaloonService.prototype.getSaloonPaymentBreakDown = function (date, saloonId) {
        if (saloonId === void 0) { saloonId = null; }
        var url = new URL(this.vars.backend_url + '/saloon/payments/cut-breakdown');
        // check for the role
        if (this.vars.getUserRole() === 'admin') {
            url = new URL(this.vars.backend_url + '/admin/saloons/' + saloonId + '/cut-breakdown');
        }
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        url.searchParams.append('date', date);
        // request to update password
        return this._http.get(url.href, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    SaloonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SaloonService);
    return SaloonService;
}());



/***/ }),

/***/ "./src/services/saloon/services/services.service.ts":
/*!**********************************************************!*\
  !*** ./src/services/saloon/services/services.service.ts ***!
  \**********************************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/global.service */ "./src/services/global/global.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicesService = /** @class */ (function () {
    function ServicesService(vars, _http) {
        this.vars = vars;
        this._http = _http;
    }
    /**
     * Request for get all services of the saloon
     *
     * @param number page
     *
     * @returns Observable
     */
    ServicesService.prototype.getSaloonServices = function (page, saloonId) {
        if (saloonId === void 0) { saloonId = null; }
        var url = new URL(this.vars.backend_url + '/saloon/services');
        // check for role
        if (this.vars.getUserRole() === 'admin') {
            url = new URL(this.vars.backend_url + '/admin/saloons/' + saloonId + '/services');
        }
        // get default pagination limit
        // append param in url
        url.searchParams.append('paginate', (this.vars.default_pagination_limit).toString());
        // append page number
        url.searchParams.append('page', (page).toString());
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.get(url.href, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Request to create new service under a saloon
     *
     * @param Object values
     *
     * @return Observable
     */
    ServicesService.prototype.addService = function (values, saloonId) {
        if (saloonId === void 0) { saloonId = null; }
        var url = this.vars.backend_url + '/saloon/services';
        // check for role
        if (this.vars.getUserRole() === 'admin') {
            url = this.vars.backend_url + '/admin/saloons/' + saloonId + '/services';
        }
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.post(url, values, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    /**
     * Request to create new service under a saloon
     *
     * @param Object values
     *
     * @return Observable
     */
    ServicesService.prototype.editService = function (values, serviceId) {
        var url = this.vars.backend_url + '/saloon/services/' + serviceId;
        // check for role
        if (this.vars.getUserRole() === 'admin') {
            url = this.vars.backend_url + '/admin/saloons/services/' + serviceId;
        }
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.put(url, values, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    ServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServicesService);
    return ServicesService;
}());



/***/ }),

/***/ "./src/services/users/barber/barber.service.ts":
/*!*****************************************************!*\
  !*** ./src/services/users/barber/barber.service.ts ***!
  \*****************************************************/
/*! exports provided: BarberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarberService", function() { return BarberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/global.service */ "./src/services/global/global.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BarberService = /** @class */ (function () {
    function BarberService(vars, _http) {
        this.vars = vars;
        this._http = _http;
    }
    /**
     * Request to get login barber performance review
     * @param string date
     * @param number barberId
     *
     * @return Observable
     */
    BarberService.prototype.getbarberPerformanceReview = function (date, barberId) {
        if (date === void 0) { date = null; }
        if (barberId === void 0) { barberId = null; }
        var url = new URL(this.vars.backend_url + '/saloon/barber/dashboard');
        if (this.vars.getUserRole() === 'admin') {
            url = new URL(this.vars.backend_url + '/admin/barbers/' + barberId + '/dashboard');
        }
        // append date if exists
        if (date) {
            url.searchParams.append('date', date);
        }
        // get login user auth tojen from localstorage
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        return this._http.get(url.href, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.vars.handleError));
    };
    BarberService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BarberService);
    return BarberService;
}());



/***/ }),

/***/ "./src/services/users/customer/customers.service.ts":
/*!**********************************************************!*\
  !*** ./src/services/users/customer/customers.service.ts ***!
  \**********************************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/global.service */ "./src/services/global/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomersService = /** @class */ (function () {
    function CustomersService(vars, _http) {
        this.vars = vars;
        this._http = _http;
    }
    /**
     * Method to save user payment card
     *
     * @param Object
     *
     * @returns Observable
     */
    CustomersService.prototype.savepaymentCards = function (values) {
        var url = this.vars.backend_url + '/payment/cards';
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update password
        return this._http.post(url, values, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.vars.handleError));
    };
    /**
     * Method to get customer card detail
     *
     * @return void
     */
    CustomersService.prototype.getCustomerPaymentCard = function () {
        var url = this.vars.backend_url + '/payment/cards';
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update password
        return this._http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.vars.handleError));
    };
    /**
     * Method to updated saved card details
     *
     * @param token
     * @param values
     *
     * @returns Observable
     */
    CustomersService.prototype.updatePaumentCard = function (token, values) {
        var url = this.vars.backend_url + '/payment/cards/' + token;
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.put(url, values, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.vars.handleError));
    };
    /**
     * Methof to get list of customer orders
     *
     * @returns Observable
     */
    CustomersService.prototype.getCustomerOrders = function (page, customerId) {
        if (page === void 0) { page = 1; }
        var url = new URL(this.vars.backend_url + '/customer/orders');
        // check for role
        if (this.vars.getUserRole() === 'admin') {
            url = new URL(this.vars.backend_url + '/admin/customers/' + customerId + '/orders');
        }
        // get default pagination limit
        // append param in url
        url.searchParams.append('paginate', (this.vars.default_pagination_limit).toString());
        // append page number
        url.searchParams.append('page', (page).toString());
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.get(url.href, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.vars.handleError));
    };
    /**
     * Method to save customer support request
     *
     * @param Object values
     *
     * @returns Observable
     */
    CustomersService.prototype.saveCustomerSupport = function (values) {
        var url = this.vars.backend_url + '/customer/support';
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update card detail
        return this._http.post(url, values, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.vars.handleError));
    };
    CustomersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomersService);
    return CustomersService;
}());



/***/ }),

/***/ "./src/services/users/user.service.ts":
/*!********************************************!*\
  !*** ./src/services/users/user.service.ts ***!
  \********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/global.service */ "./src/services/global/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(vars, _http) {
        this.vars = vars;
        this._http = _http;
    }
    /**
     * Method to fetch user detail from
     */
    UserService.prototype.getUserDetail = function () {
        var url = this.vars.backend_url + '/users/detail';
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request for user detail
        return this._http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.vars.handleError));
    };
    UserService.prototype.getAdmindetails = function (values) {
        var url = this.vars.backend_url + '/saloon';
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update password
        return this._http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.vars.handleError));
    };
    /**
     * Method to updae user password
     *
     * @param Object values
     *
     * @returns Observable
     */
    UserService.prototype.changePassword = function (values) {
        var url = this.vars.backend_url + '/users/change-password';
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request to update password
        return this._http.put(url, values, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.vars.handleError));
    };
    /**
     * method to update user profile
     *
     * {email: "barber@email.com", first_name: "Test", last_name: "User", number: "1234567890", image: "avatar/a80b5278509a5288e7a6606700ea8c0f.jpg", "last_name":"User", "number":"1234567890"}
     *
     * @param Object
     */
    UserService.prototype.updateProfile = function (values) {
        var url = this.vars.backend_url + '/users/detail';
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request for user detail
        return this._http.put(url, values, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.vars.handleError));
    };
    /**
     * method to delete user account
     *
     * @param string password
     *
     * @returns
     */
    UserService.prototype.deleteAccount = function (values) {
        var url = this.vars.backend_url + '/users';
        // get request header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: this.vars.getAuthToken() });
        // request for user detail
        return this._http.put(url, values, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.vars.handleError));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\soukoni\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map