"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementRoutes = void 0;
const express_1 = require("express");
const authToken_1 = require("../middlewares/authToken");
const delete_1 = require("../services/crudElements/delete");
const get_1 = require("../services/crudElements/get");
const post_1 = require("../services/crudElements/post");
const put_1 = require("../services/crudElements/put");
exports.elementRoutes = (0, express_1.Router)();
// ─── Productos ───────────────────────────────────────────────────────────────
exports.elementRoutes.get("/api/elements", get_1.getElementsGym);
// RELACION ELEMENTO VS PROVEEDOR VS ADMIN
exports.elementRoutes.post("/api/element-client", authToken_1.authToken, post_1.postRelationElements);
exports.elementRoutes.put("/api/elements/:id", authToken_1.authToken, put_1.putElemetsGym);
exports.elementRoutes.delete("/api/elements/:id", authToken_1.authToken, delete_1.deleteElementsGym);
