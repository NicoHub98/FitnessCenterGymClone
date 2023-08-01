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
exports.postProvider = void 0;
const relations_1 = require("../../models/relations");
const postProvider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const proveedor = req.body;
    try {
        if (!proveedor.name ||
            !proveedor.product ||
            !proveedor.contact ||
            !proveedor.email ||
            !proveedor.provider)
            return res.status(400).json({ msg: "Todos los campos son requeridos" });
        const existProveedor = yield relations_1.Provider.findOne({
            where: { email: proveedor.email },
        });
        if (existProveedor) {
            return res.status(400).json({ msg: "El proveedor ya existe" });
        }
        const newProveedor = yield relations_1.Provider.create(req.body);
        if (newProveedor) {
            return res.status(200).json({ msg: "Se registro el proveedor con exito", newProveedor });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.postProvider = postProvider;
