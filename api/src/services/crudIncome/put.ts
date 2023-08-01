import { Request, Response } from "express";
import { Income } from "../../models/relations";
import { I_Income } from "../../interfaces/I_Income";

export const putIncomeGym = async (req: Request, res: Response) => {
  const { id } = req.params;
  const current = req.body as I_Income;

  try {
    if (id.length < 36) {
      throw Error(`El ingreso económico no existe`);
    } else {
      await Income.update(current, {
        where: {
          id,
        }
      });
    
      return res.status(200).json({ change: "Los datos del ingreso económico se actualizaron", current });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en putIncomeGym por:" + error });
  }
}