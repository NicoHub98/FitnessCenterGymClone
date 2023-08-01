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
exports.putProvider = void 0;
const relations_1 = require("../../models/relations");
const putProvider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const provider = req.body;
    const { id } = req.params;
    try {
        const proveedor = yield relations_1.Provider.update(provider, { where: { id } });
        return res.status(200).json({ msg: "Proveedor actualizado", proveedor });
    }
    catch (error) {
        console.log(error);
    }
});
exports.putProvider = putProvider;
