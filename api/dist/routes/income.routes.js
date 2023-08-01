"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incomeRoutes = void 0;
const express_1 = require("express");
const authToken_1 = require("../middlewares/authToken");
const delete_1 = require("../services/crudIncome/delete");
const get_1 = require("../services/crudIncome/get");
const post_1 = require("../services/crudIncome/post");
const put_1 = require("../services/crudIncome/put");
exports.incomeRoutes = (0, express_1.Router)();
// ─── Ingresos Mensuales ───────────────────────────────────────────────────────────────
exports.incomeRoutes.get("/api/income", get_1.getIncomeGym);
exports.incomeRoutes.post("/api/income", authToken_1.authToken, post_1.postIncomeGym);
exports.incomeRoutes.delete("/api/income/:id", authToken_1.authToken, delete_1.deleteIncomeGym);
exports.incomeRoutes.put("/api/income/:id", authToken_1.authToken, put_1.putIncomeGym);
