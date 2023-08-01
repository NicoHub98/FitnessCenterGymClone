import { Request, Response } from "express";
import { Income, Admin } from "../../models/relations";

export const getIncomeGym = async (_: Request, res: Response) => {
  try {
    const incomes = await Income.findAll({
      include: {
        model: Admin,
        attributes: ["user"],
      },
    });
    if (!incomes.length) {
      return res.status(400).json({ msg: "De momento no se han añadido las ganancias mensuales" });
    }
    return res.status(200).json(incomes);
  } catch (error) {
    return res.status(400).json({ error: "Error en getIncomeGym por:" + error, });
  }
}