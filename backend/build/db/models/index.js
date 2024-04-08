"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config = require("../config/config");
const db = new sequelize_1.Sequelize(config);
exports.default = db;
//# sourceMappingURL=index.js.map