import { Request, Response } from "express";
import { IAdmin } from "../../interfaces/IAdmin";
import { Admin } from "../../models/relations";
import { passwordHashado } from "../../helper/bcrypt";

export const registerUser = async (req: Request, res: Response) => {
  const usuario = req.body as IAdmin;

  try {
    if (!usuario.user || !usuario.password || !usuario.email)
      return res.status(400).json({ msg: "Todos los campos son requeridos" });

    const existUser = await Admin.findOne({
      where: { email: usuario.email },
    });

    if (existUser) {
      return res.status(400).json({ msg: "El usuario ya existe", existUser });
    }

    const encriptado = await passwordHashado(usuario.password);

    const newUser = await Admin.create({
      user: usuario.user,
      email: usuario.email,
      password: encriptado,
    });

    if (newUser) {
      return res.status(200).json({ msg: "Usuario creado", newUser });
    }
  } catch (error) {
    console.log(error);
  }
};
