import { Request, Response } from "express";
import {Employees} from "../../models/Employees";

export const getAllEmployees = async (_: Request, res: Response) => {
  try {
    const allEmployees = await Employees.findAll();

    if (!allEmployees.length) {
      throw new Error("No hay empleados registrados");
    } else {
      return res.status(200).json(allEmployees);
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en getAllEmployees por:" + error, });
  }
}