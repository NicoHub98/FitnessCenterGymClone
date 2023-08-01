import { Request, Response } from "express";
import { IEmployees } from "../../interfaces/IEmployees";
import {Employees} from "../../models/Employees";

export const postEmployees = async (req: Request, res: Response) => {
  const usuario = req.body as IEmployees;

  try {
    if (!usuario.name || !usuario.contact || !usuario.email) {
      return res.status(400).json({ msg: "Todos los campos son requeridos" });
    }

    const existUser = await Employees.findOne({
      where: { email: usuario.email },
    });

    if (existUser) {
      return res.status(400).json({ msg: "El empleado ya existe", existUser });
    }

    const newUser = await Employees.create(usuario);

    if (newUser) {
      return res.status(200).json({ msg: "Empleado creado", newUser });
    }
  } catch (error) {
    console.log(error);
  }
};
