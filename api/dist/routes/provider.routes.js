"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerRoutes = void 0;
const express_1 = require("express");
const authToken_1 = require("../middlewares/authToken");
const get_1 = require("../services/crudProvider/get");
const post_1 = require("../services/crudProvider/post");
const put_1 = require("../services/crudProvider/put");
const delete_1 = require("../services/crudProvider/delete");
exports.providerRoutes = (0, express_1.Router)();
// ─── Proveedor ───────────────────────────────────────────────────────────────
exports.providerRoutes.get("/api/providers", get_1.getProvider);
exports.providerRoutes.post("/api/provider", authToken_1.authToken, post_1.postProvider);
exports.providerRoutes.put("/api/provider/:id", authToken_1.authToken, put_1.putProvider);
exports.providerRoutes.delete("/api/provider/:id", authToken_1.authToken, delete_1.deleteProvider);
