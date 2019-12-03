import { User } from '../site/User/user';
import { Vendor } from '../site/Vendor/vendor';

export interface Bill {

        id: number;
        consumer_id: string;
        amt: number;
        user:User;
       vendor:Vendor;
}


