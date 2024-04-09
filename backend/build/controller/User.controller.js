"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_service_1 = require("../service/User.service");
class UserController {
    constructor(users = new User_service_1.default()) {
        this.users = users;
    }
    async createUser(req, res) {
        const user = req.body;
        const resp = await this.users.createUser(user);
        return res.status(200).json(resp);
    }
    async loginUser(req, res) {
        const { email, password } = req.body;
        if (!email) {
            return res.status(200).json({ message: 'Email is required' });
        }
        const resp = await this.users.LoginUser(email, +password);
        return res.status(200).json(resp);
    }
    async getAllUsers(req, res) {
        const resp = await this.users.getAllUsers();
        return res.status(200).json(resp);
    }
    async getUserById(req, res) {
        const id = req.params.id;
        const resp = await this.users.getUserById(+id);
        return res.status(200).json(resp);
    }
    async getUserByEmail(req, res) {
        const email = req.params.email;
        const resp = await this.users.getUserByEmail(email);
        return res.status(200).json(resp);
    }
    async updateUser(req, res) {
        const id = req.params.id;
        const user = req.body;
        const resp = await this.users.updateUser(+id, user);
        return res.status(200).json(resp);
    }
    async deleteUser(req, res) {
        const id = req.params.id;
        const resp = await this.users.deleteUser(+id);
        return res.status(200).json(resp);
    }
}
exports.default = UserController;
//# sourceMappingURL=User.controller.js.map