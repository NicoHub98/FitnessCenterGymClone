import { Request, Response } from "express";
import { Income } from "../../models/relations";

export const deleteIncomeGym = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    
    if (id.length < 36) {
      throw Error(`El ingreso económico no existe`);
    } else {
      await Income.destroy({
        where: {
          id
        }
      });
      return res.status(200).json({ message: "El ingreso económico ha sido eliminado", });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en deleteIncomeGym por:" + error });
  }
}