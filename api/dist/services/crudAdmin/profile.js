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
exports.perfil = void 0;
const relations_1 = require("../../models/relations");
const perfil = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarioRegistado = yield relations_1.Admin.findOne(req.usuarioId);
        if (!usuarioRegistado)
            return res.status(404).json({ message: "No se encontro el pefil" });
        return res.status(200).json({ message: "Perfil del usuario", usuarioRegistado });
    }
    catch (error) {
        console.log(error);
    }
});
exports.perfil = perfil;
