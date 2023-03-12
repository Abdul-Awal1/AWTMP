import { AdminEntity } from 'src/admin/adminentity.entity';
export declare class AgentEntity {
    id: number;
    username: string;
    email: string;
    password: string;
    contact: string;
    packagename: string;
    admin: AdminEntity;
}
