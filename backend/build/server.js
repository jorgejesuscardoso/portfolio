"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3001;
new app_1.App().start(PORT);
//# sourceMappingURL=server.js.map