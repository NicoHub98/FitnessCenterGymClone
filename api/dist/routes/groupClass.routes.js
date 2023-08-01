"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupClassRoutes = void 0;
const express_1 = require("express");
const authToken_1 = require("../middlewares/authToken");
const delete_1 = require("../services/crudClass/delete");
const get_1 = require("../services/crudClass/get");
const post_1 = require("../services/crudClass/post");
const put_1 = require("../services/crudClass/put");
exports.groupClassRoutes = (0, express_1.Router)();
// ─── Clases Grupales ───────────────────────────────────────────────────────────────
exports.groupClassRoutes.get("/api/class-group", get_1.getClassGroupGym);
exports.groupClassRoutes.post("/api/class-group", authToken_1.authToken, post_1.postClassGym);
exports.groupClassRoutes.delete("/api/class-group/:id", authToken_1.authToken, delete_1.deleteClassGroupGym);
exports.groupClassRoutes.put("/api/class-group/:id", authToken_1.authToken, put_1.putClassGroupGym);
