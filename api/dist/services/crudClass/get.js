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
exports.getClassGroupGym = void 0;
const relations_1 = require("../../models/relations");
const getClassGroupGym = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const classGroup = yield relations_1.ClassGroup.findAll({
            include: {
                model: relations_1.Admin,
                attributes: ["user"],
            },
        });
        if (!classGroup.length) {
            return res.status(400).json({ msg: "De momento no se han añadido clases grupales" });
        }
        return res.status(200).json(classGroup);
    }
    catch (error) {
        return res.status(400).json({ error: "Error en getElementsGym por:" + error, });
    }
});
exports.getClassGroupGym = getClassGroupGym;
