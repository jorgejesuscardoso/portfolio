"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_routes_1 = require("./users.routes");
const router = (0, express_1.Router)();
router.use('/', users_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map