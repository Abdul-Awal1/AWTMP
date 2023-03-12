import { AdminEntity } from 'src/admin/adminentity.entity';
export declare class TouristEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    contact: string;
    age: number;
    admin: AdminEntity;
}
