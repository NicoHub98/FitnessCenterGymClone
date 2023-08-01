import { Request, Response } from "express";
import { IProvider } from "../../interfaces/IProviders";
import { Provider } from "../../models/relations";

export const postProvider = async (req: Request, res: Response) => {
  const proveedor = req.body as IProvider;

  try {
    if (
      !proveedor.name ||
      !proveedor.product ||
      !proveedor.contact ||
      !proveedor.email ||
      !proveedor.provider
    )
      return res.status(400).json({ msg: "Todos los campos son requeridos" });

    const existProveedor = await Provider.findOne({
      where: { email: proveedor.email },
    });

    if (existProveedor) {
      return res.status(400).json({ msg: "El proveedor ya existe" });
    }

    const newProveedor = await Provider.create(req.body);

    if (newProveedor) {
      return res.status(200).json({ msg: "Se registro el proveedor con exito", newProveedor });
    }
  } catch (error) {
    console.log(error);
  }
};
