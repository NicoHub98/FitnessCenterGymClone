import { Request, Response } from "express";
import { IExpense } from "../../interfaces/IExpense";
import { Expense } from "../../models/relations";

export const postExpenseGym = async (req: Request, res: Response) => {
  const gastos = req.body as IExpense;

  const errorName = typeof gastos.name !== "string" || gastos.name.length === 0
  const errorExpense = typeof gastos.expense !== "string" || gastos.expense.length === 0
  
  try {
    if (errorName && errorExpense) {
      throw new Error(`Faltan todas las propiedades`);
    }
    if (errorName) throw new Error(`Incorrecto o falta el nombre del gasto mensual`);
    if (errorExpense) throw new Error(`Incorrecto o falta la cantidad del gasto mensual`);
    else {
      let createGastos = await Expense.create(gastos);
      // createClass = JSON.parse(JSON.stringify(createClass))
      // console.log("CREATE:", createClass)

      return res.status(200).json({ message: `Ah sido agregado un nuevo gasto`, createGastos });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en postExpenseGym por:" + error, });
  }
}