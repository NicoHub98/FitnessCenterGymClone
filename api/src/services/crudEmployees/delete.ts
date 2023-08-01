import { Request, Response } from "express";
import { Employees } from "../../models/Employees";
import { IEmployees } from "interfaces/IEmployees";

export const deleteEmployesGym = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const employee = await Employees.findAll();
    const deleted = employee.find((el: IEmployees) => el.id === id);
    if (!deleted) {
      throw Error(`El empleado no existe`);
    } else {
      await Employees.destroy({
        where: {
          id
        }
      });
      return res.status(200).json({ message: "El empleado ha sido eliminado", deleted });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en deleteEmployesGym por:" + error });
  }
}