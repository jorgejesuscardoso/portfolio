"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModel = void 0;
const User_Model_1 = require("../db/models/User.Model");
class UsersModel {
    constructor() {
        this.model = User_Model_1.default;
    }
    async createUser(user) {
        const rep = await this.model.create(user);
        return rep;
    }
    async getAllUsers() {
        const rep = await this.model.findAll();
        return rep;
    }
    async getUserById(id) {
        const rep = await this.model.findByPk(id);
        return rep;
    }
    async getUserByEmail(email) {
        const rep = await this.model.findOne({ where: { email } });
        return rep;
    }
    async updateUser(id, user) {
        const rep = await this.model.update(user, { where: { id } });
        return rep;
    }
    async deleteUser(id) {
        const resp = await this.model.destroy({ where: { id } });
        const isDeleted = resp === 1 ? true : false;
        return isDeleted;
    }
}
exports.UsersModel = UsersModel;
//# sourceMappingURL=UserModel.js.map