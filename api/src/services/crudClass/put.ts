import { Request, Response } from "express";
import {ClassGroup} from "../../models/relations";
import { IClassGroup } from "../../interfaces/IClassGroup";

export const putClassGroupGym = async (req: Request, res: Response) => {
  const { id } = req.params;
  const current = req.body as IClassGroup;

  try {
    if (id.length < 36) {
      throw Error(`La clase grupal no existe`);
    } else {
      await ClassGroup.update(current, {
        where: {
          id,
        }
      });
    
      return res.status(200).json({ change: "Los datos de la clase grupal se actualizaron", current });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en putClassGroupGym por:" + error });
  }
}