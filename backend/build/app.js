"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express = require("express");
require("express-async-errors");
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const routes_1 = require("./routes");
class App {
    constructor() {
        this.app = express();
        this.config();
        // Não remover essa rota
        this.app.get('/', (req, res) => res.json({ ok: true }));
        this.routes();
        // Não remova esse middleware de erro, mas fique a vontade para customizá-lo
        // Mantenha ele sempre como o último middleware a ser chamado
        this.app.use(errorMiddleware_1.default);
    }
    routes() {
        this.app.use(routes_1.default);
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express.json());
        this.app.use(accessControl);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Servidor online na porta: ${PORT}`));
    }
}
exports.App = App;
// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
exports.app = new App().app;
//# sourceMappingURL=app.js.map