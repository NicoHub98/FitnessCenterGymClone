import { Request, Response } from "express";
// import { IUser } from "../../interfaces/IUser";
// import { User } from "../../models/relations";
// import { passwordHashado } from "../../helper/bcrypt";
import { IClient } from '../../interfaces/IClient';
import Client from "../../models/Clientes";

export const createClient = async (req: Request, res: Response) => {
  const usuario = req.body as IClient;

  console.log(req.body)
  console.log(req.body.name)
  console.log(req.body.email)

  try {
    if (!usuario.name || !usuario.email)
      return res.status(400).json({ msg: "Todos los campos son requeridos" });

    const existClient = await Client.findOne({
      where: { email: usuario.email },
    });

    if (existClient) {
      return res.status(400).json({ msg: "El cliente ya existe", existClient });
    }

    // const encriptado = await passwordHashado(usuario.password);

    const newClient = await Client.create({
      name: usuario.name,
      email: usuario.email,
      plan: usuario.plan,
      dateIn: usuario.dateIn,
      dateOut: usuario.dateOut,
      contact: usuario.contact

    });

    if (newClient) {
      return res.status(200).json({ msg: "Cliente creado", newClient });
    }
  } catch (error) {
    console.log(error);
  }
};
