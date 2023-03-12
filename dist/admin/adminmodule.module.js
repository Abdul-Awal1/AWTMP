"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_controller_1 = require("./admin.controller");
const adminservice_service_1 = require("./adminservice.service");
const adminentity_entity_1 = require("./adminentity.entity");
const OpenAccount_Entity_1 = require("./OpenAccount.Entity");
const mailer_1 = require("@nestjs-modules/mailer");
const agent_entity_1 = require("../agent/agent.entity");
const agent_service_1 = require("../agent/agent.service");
const tourist_service_1 = require("../tourist/tourist.service");
const tourist_entity_1 = require("../tourist/tourist.entity");
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 465,
                    ignoreTLS: true,
                    secure: true,
                    auth: {
                        user: 'awalabdul.aiub@gmail.com',
                        pass: 'olxzskqxnzbnkhho'
                    },
                }
            }),
            typeorm_1.TypeOrmModule.forFeature([adminentity_entity_1.AdminEntity, agent_entity_1.AgentEntity, tourist_entity_1.TouristEntity, OpenAccount_Entity_1.OpenAccountEntity])
        ],
        controllers: [admin_controller_1.AdminController],
        providers: [adminservice_service_1.AdminService, agent_service_1.AgentService, tourist_service_1.TouristService],
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=adminmodule.module.js.map