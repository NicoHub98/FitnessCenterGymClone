import { Request, Response } from "express";
import { I_Income } from "../../interfaces/I_Income";
import { Income } from "../../models/relations";

export const postIncomeGym = async (req: Request, res: Response) => {
  const ganancias = req.body as I_Income;

  const errorName = typeof ganancias.name !== "string" || ganancias.name.length === 0
  const errorIncome = typeof ganancias.income !== "string" || ganancias.income.length === 0
  
  try {
    if (errorName && errorIncome) {
      throw new Error(`Faltan todas las propiedades`);
    }
    if (errorName) throw new Error(`Incorrecto o falta el nombre de la ganancia mensual`);
    if (errorIncome) throw new Error(`Incorrecto o falta la cantidad de la ganancia mensual`);
    else {
      let createGanancias = await Income.create(ganancias);
      // createClass = JSON.parse(JSON.stringify(createClass))
      // console.log("CREATE:", createClass)

      return res.status(200).json({ message: `Ah sido agregado una nueva ganancia`, createGanancias });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en postIncomeGym por:" + error, });
  }
}