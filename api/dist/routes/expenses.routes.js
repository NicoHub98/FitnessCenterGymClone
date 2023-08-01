"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expensesRoutes = void 0;
const express_1 = require("express");
const authToken_1 = require("../middlewares/authToken");
const delete_1 = require("../services/crudExpense/delete");
const get_1 = require("../services/crudExpense/get");
const post_1 = require("../services/crudExpense/post");
const put_1 = require("../services/crudExpense/put");
exports.expensesRoutes = (0, express_1.Router)();
// ─── Gastos Mensuales ───────────────────────────────────────────────────────────────
exports.expensesRoutes.get("/api/expenses", get_1.getExpensesGym);
exports.expensesRoutes.post("/api/expense", authToken_1.authToken, post_1.postExpenseGym);
exports.expensesRoutes.delete("/api/expense/:id", authToken_1.authToken, delete_1.deleteExpensesGym);
exports.expensesRoutes.put("/api/expense/:id", authToken_1.authToken, put_1.putExpensesGym);
