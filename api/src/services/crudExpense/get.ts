import { Request, Response } from "express";
import { Expense, Admin } from "../../models/relations";
import { IExpense } from "interfaces/IExpense";

export const getExpensesGym = async (_: Request, res: Response) => {
  try {
    let total = 0;

    const expenses = await Expense.findAll({
      include: {
        model: Admin,
        attributes: ["user"],
      },
    });

    expenses.map((el: IExpense) => {
      return total += Number(el.expense);
    });
    
    if (!expenses.length) {
      return res.status(400).json({ msg: "De momento no se han añadido gastos mensuales" });
    }
    return res.status(200).json({ gastos: total, expenses });
  } catch (error) {
    return res.status(400).json({ error: "Error en getExpensesGym por:" + error, });    
  }
}