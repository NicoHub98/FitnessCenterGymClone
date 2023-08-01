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
exports.registerUser = void 0;
const relations_1 = require("../../models/relations");
const bcrypt_1 = require("../../helper/bcrypt");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = req.body;
    try {
        if (!usuario.user || !usuario.password || !usuario.email)
            return res.status(400).json({ msg: "Todos los campos son requeridos" });
        const existUser = yield relations_1.Admin.findOne({
            where: { email: usuario.email },
        });
        if (existUser) {
            return res.status(400).json({ msg: "El usuario ya existe", existUser });
        }
        const encriptado = yield (0, bcrypt_1.passwordHashado)(usuario.password);
        const newUser = yield relations_1.Admin.create({
            user: usuario.user,
            email: usuario.email,
            password: encriptado,
        });
        if (newUser) {
            return res.status(200).json({ msg: "Usuario creado", newUser });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.registerUser = registerUser;
