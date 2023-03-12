"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminEntity = void 0;
const agent_entity_1 = require("../agent/agent.entity");
const tourist_entity_1 = require("../tourist/tourist.entity");
const typeorm_1 = require("typeorm");
let AdminEntity = class AdminEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AdminEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdminEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdminEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdminEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdminEntity.prototype, "tourism", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => agent_entity_1.AgentEntity, (agent) => agent.admin),
    __metadata("design:type", Array)
], AdminEntity.prototype, "agents", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tourist_entity_1.TouristEntity, (tourist) => tourist.admin),
    __metadata("design:type", Array)
], AdminEntity.prototype, "tourists", void 0);
AdminEntity = __decorate([
    (0, typeorm_1.Entity)("admin")
], AdminEntity);
exports.AdminEntity = AdminEntity;
//# sourceMappingURL=adminentity.entity.js.map