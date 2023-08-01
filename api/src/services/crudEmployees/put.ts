import { Request, Response } from "express";
import { IEmployees } from "../../interfaces/IEmployees";
import {Employees} from "../../models/Employees";

export const upDateEmployees = async (req: Request, res: Response) => {
  const { id } = req.params;
  const empleados: IEmployees = req.body;

  try {
    if (id.length < 36) {
      throw new Error("El empleado no existe");
    } else {
      await Employees.update(empleados, {
        where: { id, },
      });

      return res.status(200).json({ change: "Actualización del empleado completa", empleados, });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en upDateEmployees por:" + error });
  }
}