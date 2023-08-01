"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const db_1 = require("./db");
const forceStatus = `${process.env.STATUS}` === "ACTIVE";
const port = process.env.PORT || 3002;
// Modificar el "force" desde la variable de entorno, ACTIVE || IN_ACTIVE
db_1.db.sync({ alter: true }).then(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        app_1.app.listen(port, () => {
            console.log(`Escuchandoo en el puerto: http://localhost:${port}`);
        });
        yield db_1.db.authenticate();
        console.log("Conexion a sequelize");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}));
