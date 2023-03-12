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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const pipes_1 = require("@nestjs/common/pipes");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const adminform_dto_1 = require("./adminform.dto");
const adminformupdate_dto_1 = require("./adminformupdate.dto");
const adminservice_service_1 = require("./adminservice.service");
const openform_dto_1 = require("./openform.dto");
const agent_service_1 = require("../agent/agent.service");
const agent_dto_1 = require("../agent/agent.dto");
const tourist_dto_1 = require("../tourist/tourist.dto");
const tourist_service_1 = require("../tourist/tourist.service");
let AdminController = class AdminController {
    constructor(adminService, agentService, touristService) {
        this.adminService = adminService;
        this.agentService = agentService;
        this.touristService = touristService;
    }
    AdminView() {
        return this.adminService.getAdmin();
    }
    AccountView() {
        return this.adminService.getAccount();
    }
    getUserByID(id) {
        return this.adminService.AdminId(id);
    }
    getAccountByID(id) {
        return this.adminService.AccountId(id);
    }
    getAdminByIDName(qry) {
        return this.adminService.getAdminByIDName(qry);
    }
    getAccountByIDName(qry) {
        return this.adminService.getAccountByIDName(qry);
    }
    insertUser(admindto) {
        return this.adminService.insertUser(admindto);
    }
    OpenAccount(opendto) {
        return this.adminService.OpenAccount(opendto);
    }
    updateUser(name, id) {
        return this.adminService.updateUser(name, id);
    }
    updateTouristbyid(admindto, id) {
        return this.adminService.updateTouristbyid(admindto, id);
    }
    updateAccountbyid(opendto, id) {
        return this.adminService.updateAccountbyid(opendto, id);
    }
    deleteTouristbyid(id) {
        return this.adminService.deleteTouristbyid(id);
    }
    deleteAccountbyid(id) {
        return this.adminService.deleteAccountbyid(id);
    }
    signup(admindto, file) {
        admindto.tourism = file.filename;
        return this.adminService.signup(admindto);
        console.log(file);
    }
    async signin(session, admindto) {
        if (await this.adminService.signin(admindto)) {
            session.email = admindto.email;
            console.log(session.email);
            return { message: "success" };
        }
        else {
            return { message: "invalid credentials" };
        }
    }
    signout(session) {
        if (session.destroy()) {
            return { message: "you are logged out" };
        }
        else {
            throw new common_1.UnauthorizedException("invalid actions");
        }
    }
    async sendEmail(to, subject, body) {
        await this.adminService.sendEmail(to, subject, body);
    }
    insertAgent(agentdto) {
        return this.agentService.insertAgent(agentdto);
    }
    getAgentByAdminID(id) {
        return this.agentService.getAdminByAgentID(id);
    }
    getAdminByAgentID(id) {
        return this.agentService.getAdminByAgentID(id);
    }
    insertTourist(touristdto) {
        return this.touristService.insertTourist(touristdto);
    }
    findTouristsbyadmin(id) {
        return this.touristService.getAdminByTouristID(id);
    }
    getAdminByTouristID(id) {
        return this.touristService.getAdminByTouristID(id);
    }
};
__decorate([
    (0, common_1.Get)('/AdminView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AdminController.prototype, "AdminView", null);
__decorate([
    (0, common_1.Get)('/AccountView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AdminController.prototype, "AccountView", null);
__decorate([
    (0, common_1.Get)('/SearchEmployee/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getUserByID", null);
__decorate([
    (0, common_1.Get)('/SearchAccount/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getAccountByID", null);
__decorate([
    (0, common_1.Get)('/findTourist'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getAdminByIDName", null);
__decorate([
    (0, common_1.Get)('/findAccount'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getAccountByIDName", null);
__decorate([
    (0, common_1.Post)('/insertTourist'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [adminform_dto_1.AdminForm]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "insertUser", null);
__decorate([
    (0, common_1.Post)('/OpenAccount'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [openform_dto_1.OpenForm]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "OpenAccount", null);
__decorate([
    (0, common_1.Put)('/updateTourist/'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Put)('/updateTourist/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [adminformupdate_dto_1.AdminFormUpdate, Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "updateTouristbyid", null);
__decorate([
    (0, common_1.Put)('/updateAccount/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [openform_dto_1.OpenForm, Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "updateAccountbyid", null);
__decorate([
    (0, common_1.Delete)('/deleteTourist/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "deleteTouristbyid", null);
__decorate([
    (0, common_1.Delete)('/deleteAccount/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "deleteAccountbyid", null);
__decorate([
    (0, common_1.Post)('/signup'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('tourism', { storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        })
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.UploadedFile)(new pipes_1.ParseFilePipe({
        validators: [
            new pipes_1.MaxFileSizeValidator({ maxSize: 20000 }),
            new pipes_1.FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [adminform_dto_1.AdminForm, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "signup", null);
__decorate([
    (0, common_1.Get)('/signin'),
    __param(0, (0, decorators_1.Session)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, adminform_dto_1.AdminForm]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "signin", null);
__decorate([
    (0, common_1.Get)('/signout'),
    __param(0, (0, decorators_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "signout", null);
__decorate([
    (0, common_1.Post)("/sendemail"),
    __param(0, (0, common_1.Body)('to')),
    __param(1, (0, common_1.Body)('subject')),
    __param(2, (0, common_1.Body)('body')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "sendEmail", null);
__decorate([
    (0, common_1.Post)('/insertAgent'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agent_dto_1.AgentForm]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "insertAgent", null);
__decorate([
    (0, common_1.Get)('/findagentsbyadmin/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getAgentByAdminID", null);
__decorate([
    (0, common_1.Get)('/findadminbyagent/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getAdminByAgentID", null);
__decorate([
    (0, common_1.Post)('/insertTourist'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tourist_dto_1.TouristForm]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "insertTourist", null);
__decorate([
    (0, common_1.Get)('/findTouristsbyadmin/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "findTouristsbyadmin", null);
__decorate([
    (0, common_1.Get)('/findadminbymanager/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getAdminByTouristID", null);
AdminController = __decorate([
    (0, common_1.Controller)('/admin'),
    __metadata("design:paramtypes", [adminservice_service_1.AdminService,
        agent_service_1.AgentService,
        tourist_service_1.TouristService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map