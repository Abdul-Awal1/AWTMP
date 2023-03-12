import { Repository } from 'typeorm';
import { TouristForm } from "./tourist.dto";
import { TouristEntity } from "./tourist.entity";
export declare class TouristService {
    private touristRepo;
    constructor(touristRepo: Repository<TouristEntity>);
    insertTourist(admindto: TouristForm): any;
    getAdminByTouristID(id: any): any;
}
