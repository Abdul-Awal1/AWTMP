import { Repository } from 'typeorm';
import { AgentForm } from "./agent.dto";
import { AgentEntity } from "./agent.entity";
export declare class AgentService {
    private agentRepo;
    constructor(agentRepo: Repository<AgentEntity>);
    insertAgent(admindto: AgentForm): any;
    getAdminByAgentID(id: any): any;
}
