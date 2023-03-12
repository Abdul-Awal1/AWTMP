/// <reference types="multer" />
import { AdminForm } from './adminform.dto';
import { AdminFormUpdate } from './adminformupdate.dto';
import { AdminService } from './adminservice.service';
import { OpenForm } from './openform.dto';
import { AgentService } from 'src/agent/agent.service';
import { AgentForm } from 'src/agent/agent.dto';
import { TouristForm } from 'src/tourist/tourist.dto';
import { TouristService } from 'src/tourist/tourist.service';
export declare class AdminController {
    private adminService;
    private agentService;
    private touristService;
    OpneService: any;
    constructor(adminService: AdminService, agentService: AgentService, touristService: TouristService);
    AdminView(): string;
    AccountView(): string;
    getUserByID(id: number): any;
    getAccountByID(id: number): any;
    getAdminByIDName(qry: any): any;
    getAccountByIDName(qry: any): any;
    insertUser(admindto: AdminForm): any;
    OpenAccount(opendto: OpenForm): any;
    updateUser(name: string, id: number): any;
    updateTouristbyid(admindto: AdminFormUpdate, id: number): any;
    updateAccountbyid(opendto: OpenForm, id: number): any;
    deleteTouristbyid(id: number): any;
    deleteAccountbyid(id: number): any;
    signup(admindto: AdminForm, file: Express.Multer.File): Promise<any>;
    signin(session: any, admindto: AdminForm): Promise<{
        message: string;
    }>;
    signout(session: any): {
        message: string;
    };
    sendEmail(to: string, subject: string, body: string): Promise<void>;
    insertAgent(agentdto: AgentForm): any;
    getAgentByAdminID(id: number): any;
    getAdminByAgentID(id: number): any;
    insertTourist(touristdto: TouristForm): any;
    findTouristsbyadmin(id: number): any;
    getAdminByTouristID(id: number): any;
}
