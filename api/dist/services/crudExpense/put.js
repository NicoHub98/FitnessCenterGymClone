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
exports.putExpensesGym = void 0;
const relations_1 = require("../../models/relations");
const putExpensesGym = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const current = req.body;
    try {
        if (id.length < 36) {
            throw Error(`El gasto no existe`);
        }
        else {
            yield relations_1.Expense.update(current, {
                where: {
                    id,
                }
            });
            return res.status(200).json({ change: "Los datos del gasto se actualizaron", current });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(404).json({ error: error.message, });
        }
        return res.status(400).json({ error: "Error en putExpensesGym por:" + error });
    }
});
exports.putExpensesGym = putExpensesGym;
