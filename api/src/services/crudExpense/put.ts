import { Request, Response } from "express";
import { Expense } from "../../models/relations";
import { IExpense } from "../../interfaces/IExpense";

export const putExpensesGym = async (req: Request, res: Response) => {
  const { id } = req.params;
  const current = req.body as IExpense;

  try {
    if (id.length < 36) {
      throw Error(`El gasto no existe`);
    } else {
      await Expense.update(current, {
        where: {
          id,
        }
      });
    
      return res.status(200).json({ change: "Los datos del gasto se actualizaron", current });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en putExpensesGym por:" + error });
  }
}