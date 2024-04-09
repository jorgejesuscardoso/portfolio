"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_controller_1 = require("../controller/User.controller");
const userController = new User_controller_1.default();
const router = (0, express_1.Router)();
router.post('/users', (req, res) => userController.createUser(req, res));
router.get('/users/login', (req, res) => userController.loginUser(req, res));
router.get('/users', (req, res) => userController.getAllUsers(req, res));
router.get('/users/:id', (req, res) => userController.getUserById(req, res));
router.get('/users/email/:email', (req, res) => userController.getUserByEmail(req, res));
router.put('/users/:id', (req, res) => userController.updateUser(req, res));
router.delete('/users/:id', (req, res) => userController.deleteUser(req, res));
exports.default = router;
//# sourceMappingURL=users.routes.js.map