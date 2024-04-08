"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../model/UserModel");
class UserService {
    constructor(userModel = new UserModel_1.UsersModel()) {
        this.userModel = userModel;
    }
    async getAllUsers() {
        return this.userModel.getAllUsers();
    }
    async getUserById(id) {
        return this.userModel.getUserById(id);
    }
    async getUserByEmail(email) {
        return this.userModel.getUserByEmail(email);
    }
    async createUser(user) {
        return this.userModel.createUser(user);
    }
    async updateUser(id, user) {
        return this.userModel.updateUser(id, user);
    }
    async deleteUser(id) {
        return this.userModel.deleteUser(id);
    }
}
exports.default = UserService;
//# sourceMappingURL=User.service.js.map