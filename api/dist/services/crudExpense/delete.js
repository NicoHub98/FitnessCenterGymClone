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
exports.deleteExpensesGym = void 0;
const relations_1 = require("../../models/relations");
const deleteExpensesGym = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        let resta = 0;
        const info = yield relations_1.Expense.findAll();
        const menos = info.find((el) => el.id === id);
        if (!menos) {
            throw Error(`El gastos no existe`);
        }
        else {
            info.map((el) => {
                return resta += Number(el.expense);
            });
            resta -= Number(menos === null || menos === void 0 ? void 0 : menos.expense);
            yield relations_1.Expense.destroy({
                where: {
                    id
                }
            });
            return res.status(200).json({
                message: `El gasto: ${menos === null || menos === void 0 ? void 0 : menos.name.toUpperCase()}, ha sido eliminado`,
                deleteValue: Number(menos === null || menos === void 0 ? void 0 : menos.expense),
                currentValue: resta,
            });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(404).json({ error: error.message, });
        }
        return res.status(400).json({ error: "Error en deleteExpensesGym por:" + error });
    }
});
exports.deleteExpensesGym = deleteExpensesGym;
