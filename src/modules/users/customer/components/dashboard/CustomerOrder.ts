export class CustomerOrder {
    id: number;
    total_time: number;
    additional_extras: Array<{amount:number, name:string, time:number}>;
    created_at: number;
    saloon_logo_url:string;
    service: Array <{name:string, amount:number, time:number}>;
    saloon_name: string;
    transaction: Array<{
        payment_mode: string,
        payment_id: number,
        discount: number,
        total_amount: number,
        final_amount: number,
        discount_type: string
    }>;
}