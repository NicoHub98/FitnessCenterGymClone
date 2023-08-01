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
exports.postIncomeGym = void 0;
const relations_1 = require("../../models/relations");
const postIncomeGym = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ganancias = req.body;
    const errorName = typeof ganancias.name !== "string" || ganancias.name.length === 0;
    const errorIncome = typeof ganancias.income !== "string" || ganancias.income.length === 0;
    try {
        if (errorName && errorIncome) {
            throw new Error(`Faltan todas las propiedades`);
        }
        if (errorName)
            throw new Error(`Incorrecto o falta el nombre de la ganancia mensual`);
        if (errorIncome)
            throw new Error(`Incorrecto o falta la cantidad de la ganancia mensual`);
        else {
            let createGanancias = yield relations_1.Income.create(ganancias);
            // createClass = JSON.parse(JSON.stringify(createClass))
            // console.log("CREATE:", createClass)
            return res.status(200).json({ message: `Ah sido agregado una nueva ganancia`, createGanancias });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message, });
        }
        return res.status(400).json({ error: "Error en postIncomeGym por:" + error, });
    }
});
exports.postIncomeGym = postIncomeGym;
