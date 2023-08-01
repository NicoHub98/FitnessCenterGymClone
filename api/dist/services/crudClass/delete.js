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
exports.deleteClassGroupGym = void 0;
const relations_1 = require("../../models/relations");
const deleteClassGroupGym = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const info = yield relations_1.ClassGroup.findByPk(id);
        if (!info) {
            throw Error(`La clase grupal no existe`);
        }
        else {
            yield relations_1.ClassGroup.destroy({
                where: {
                    id
                }
            });
            return res.status(200).json({ message: "La clase grupal ha sido eliminada", info });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(404).json({ error: error.message, });
        }
        return res.status(400).json({ error: "Error en deleteClassGroupGym por:" + error });
    }
});
exports.deleteClassGroupGym = deleteClassGroupGym;
