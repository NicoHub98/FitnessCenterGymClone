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
exports.loginUser = void 0;
const relations_1 = require("../../models/relations");
const bcrypt_1 = require("../../helper/bcrypt");
const JWToken_1 = require("../../helper/JWToken");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = req.body;
    try {
        const existUser = yield relations_1.Admin.findOne({
            where: {
                email: usuario.email
            }
        });
        if (!existUser) {
            return res.status(401).json({ msg: "Esta cuenta no esta registrada" });
        }
        const passwordEncriptado = yield existUser.password;
        const compararPassword = yield (0, bcrypt_1.passwordCorrecto)(usuario.password, passwordEncriptado);
        if (compararPassword) {
            const token = yield (0, JWToken_1.generarToken)(existUser.email);
            const data = {
                user: existUser,
                token,
            };
            return res.status(200).json({ msg: "Session y token valido", data });
        }
        else {
            return res.status(403).json({ msg: "Clave invalida" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.loginUser = loginUser;
