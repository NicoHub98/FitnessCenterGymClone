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
exports.getElementsGym = void 0;
const relations_1 = require("../../models/relations");
const getElementsGym = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const infoElements = yield relations_1.Elements.findAll({
            include: {
                model: relations_1.Provider,
                attributes: ["name"],
                include: [{
                        model: relations_1.Admin,
                        attributes: ["user"],
                    }],
            },
        });
        if (!infoElements.length) {
            return res.status(400).json({ msg: "No hay nada" });
        }
        return res.status(200).json(infoElements);
    }
    catch (error) {
        return res.status(400).json({ error: "Error en getElementsGym por:" + error, });
    }
});
exports.getElementsGym = getElementsGym;
