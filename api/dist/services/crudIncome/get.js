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
exports.getIncomeGym = void 0;
const relations_1 = require("../../models/relations");
const getIncomeGym = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const incomes = yield relations_1.Income.findAll({
            include: {
                model: relations_1.Admin,
                attributes: ["user"],
            },
        });
        if (!incomes.length) {
            return res.status(400).json({ msg: "De momento no se han añadido las ganancias mensuales" });
        }
        return res.status(200).json(incomes);
    }
    catch (error) {
        return res.status(400).json({ error: "Error en getIncomeGym por:" + error, });
    }
});
exports.getIncomeGym = getIncomeGym;
