export interface BarberDetail {
    barber_profile:{occupation:string, company_name:string, address:string, city:string, state:string, postcode:string};
    email:string;
    first_name:string;
    id:number;
    image_url:string;
    last_name:string;
    number:number;
    social:[{social_link_name:string, social_link:string}];
    totalOrders:number;
    totalOrdersProfit:number;
}