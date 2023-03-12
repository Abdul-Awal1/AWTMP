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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const adminentity_entity_1 = require("./adminentity.entity");
const OpenAccount_Entity_1 = require("./OpenAccount.Entity");
const bcrypt = require("bcrypt");
const mailer_1 = require("@nestjs-modules/mailer");
let AdminService = class AdminService {
    getAdminByTouristID(id) {
        throw new Error('Method not implemented.');
    }
    constructor(adminRepo, AccountRepo, mailerService) {
        this.adminRepo = adminRepo;
        this.AccountRepo = AccountRepo;
        this.mailerService = mailerService;
    }
    getAdmin() {
        return this.adminRepo.find();
    }
    getAccount() {
        return this.AccountRepo.find();
    }
    AdminId(id) {
        return this.adminRepo.findOneBy({ id });
    }
    AccountId(id) {
        return this.AccountRepo.findOneBy({ id });
    }
    getAdminByIDName(qry) {
        return this.adminRepo.findOneBy({ id: qry.id, name: qry.name });
    }
    getAccountByIDName(qry) {
        return this.AccountRepo.findOneBy({ id: qry.id, username: qry.name });
    }
    OpenAccount(opendto) {
        const openaccount = new OpenAccount_Entity_1.OpenAccountEntity();
        openaccount.username = opendto.username;
        openaccount.pass = opendto.pass;
        return this.AccountRepo.save(openaccount);
    }
    insertUser(admindto) {
        const adminaccount = new adminentity_entity_1.AdminEntity();
        adminaccount.name = admindto.name;
        adminaccount.email = admindto.email;
        adminaccount.password = admindto.password;
        return this.adminRepo.save(adminaccount);
    }
    updateTouristId(name, id) {
        console.log(name + id);
        return this.adminRepo.update(id, { name: name });
    }
    updateUser(name, id) {
        console.log(name + id);
        return this.adminRepo.update(id, { name: name });
    }
    updateTouristbyid(admindto, id) {
        return this.adminRepo.update(id, admindto);
    }
    updateAccountbyid(opendto, id) {
        return this.AccountRepo.update(id, opendto);
    }
    deleteTouristbyid(id) {
        return this.adminRepo.delete(id);
    }
    deleteAccountbyid(id) {
        return this.AccountRepo.delete(id);
    }
    async signup(admindto) {
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(admindto.password, salt);
        admindto.password = hassedpassed;
        return this.adminRepo.save(admindto);
    }
    async signin(admindto) {
        console.log(admindto.password);
        const tdata = await this.adminRepo.findOneBy({ email: admindto.email });
        const isMatch = await bcrypt.compare(admindto.password, tdata.password);
        if (isMatch) {
            return 1;
        }
        else {
            return 0;
        }
    }
    async sendEmail(to, subject, body) {
        await this.mailerService.sendMail({
            to: to,
            subject: subject,
            html: body,
        });
    }
    getAgentsByAdminID(id) {
        return this.adminRepo.find({
            where: { id: id },
            relations: {
                agents: true,
            },
        });
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(adminentity_entity_1.AdminEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(OpenAccount_Entity_1.OpenAccountEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        mailer_1.MailerService])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=adminservice.service.js.map