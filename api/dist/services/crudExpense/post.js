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
exports.postExpenseGym = void 0;
const relations_1 = require("../../models/relations");
const postExpenseGym = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gastos = req.body;
    const errorName = typeof gastos.name !== "string" || gastos.name.length === 0;
    const errorExpense = typeof gastos.expense !== "string" || gastos.expense.length === 0;
    try {
        if (errorName && errorExpense) {
            throw new Error(`Faltan todas las propiedades`);
        }
        if (errorName)
            throw new Error(`Incorrecto o falta el nombre del gasto mensual`);
        if (errorExpense)
            throw new Error(`Incorrecto o falta la cantidad del gasto mensual`);
        else {
            let createGastos = yield relations_1.Expense.create(gastos);
            // createClass = JSON.parse(JSON.stringify(createClass))
            // console.log("CREATE:", createClass)
            return res.status(200).json({ message: `Ah sido agregado un nuevo gasto`, createGastos });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message, });
        }
        return res.status(400).json({ error: "Error en postExpenseGym por:" + error, });
    }
});
exports.postExpenseGym = postExpenseGym;
