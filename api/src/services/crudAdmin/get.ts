import { Request, Response } from "express";
import { ClassGroup, Elements, Expense, Provider, Admin } from "../../models/relations";

export const getAllUsers = async (_: Request, res: Response) => {
  try {
    const allUsers = await Admin.findAll({
      include: [{
        model: Elements,
        attributes: ["name"],
        include: [{
          model: Provider,
          attributes: ["name"],
        }],
      }, {
        model: ClassGroup,
        attributes: ["name"]
      }, {
        model: Provider,
        attributes: ["name"],
        include: [{
          model: Elements,
          attributes: ["name"],
        }],
      }, {
        model: Expense,
        attributes: ["name"]
      }],
      attributes: ["id", "user", "email"],
    });

    if (!allUsers.length) {
      throw new Error("No hay usuarios registrados");
    } else {
      return res.status(200).json(allUsers);
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en getElementsGym por:" + error, });
  }
}