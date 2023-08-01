import { Request, Response } from "express";
import { Expense } from "../../models/relations";
import { IExpense } from "interfaces/IExpense";

export const deleteExpensesGym = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    let resta = 0;

    const info = await Expense.findAll();
    const menos = info.find((el: IExpense) => el.id === id);

    if (!menos) {
      throw Error(`El gastos no existe`);
    } else {
      info.map((el: IExpense) => {
        return resta += Number(el.expense);
      });
      resta -= Number(menos?.expense);

      await Expense.destroy({
        where: {
          id
        }
      });

      return res.status(200).json({
        message: `El gasto: ${menos?.name.toUpperCase()}, ha sido eliminado`,
        deleteValue: Number(menos?.expense),
        currentValue: resta,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en deleteExpensesGym por:" + error });
  }
}