export interface Saloon {
    address:string;
    company_number:null;
    contact_number:number;
    header:string;
    id:number;
    lat:number;
    lng:number;
    logo_url:string;
    name:string;
    postal_code:string;
    shop_flag:string;
    saloon_detail: {
        standard_price:number;
        vat_number:string;
        website_url:string;
    };
    saloon_schedule: {
        schedule:[{
            day:string,
            start_time:string,
            end_time:string
        }]
    };
}