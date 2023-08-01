"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRoutes = void 0;
const express_1 = require("express");
const delete_1 = require("../services/crudEmployees/delete");
const put_1 = require("../services/crudEmployees/put");
const get_1 = require("../services/crudEmployees/get");
const post_1 = require("../services/crudEmployees/post");
const authToken_1 = require("../middlewares/authToken");
exports.employeeRoutes = (0, express_1.Router)();
// ─── Clientes ─────────────────────────────────────────────────────────────────
exports.employeeRoutes.get("/api/employees", get_1.getAllEmployees);
exports.employeeRoutes.post("/api/employee", authToken_1.authToken, post_1.postEmployees);
exports.employeeRoutes.put("/api/employee/:id", authToken_1.authToken, put_1.upDateEmployees);
exports.employeeRoutes.delete("/api/employee/:id", authToken_1.authToken, delete_1.deleteEmployesGym);
