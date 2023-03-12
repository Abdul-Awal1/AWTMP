import { AgentEntity } from 'src/agent/agent.entity';
export declare class AdminEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    tourism: string;
    agents: AgentEntity[];
    tourists: AgentEntity[];
}
