import { Request, Response } from "express"
import { Elements, Provider, Admin, } from "../../models/relations"

export const getProvider = async (req: Request, res: Response) => {
  try {
    const proveedores = await Provider.findAll({
      include: {
        model: Elements,
        attributes: ["name"],
        include: [{
          model: Admin,
          attributes: ["user"],
        }],
      }
    })
    if (!proveedores.length) {
      return res.status(400).json({ msg: "No hay proveedores disponibles" });
    } else {
      return res.status(200).json(proveedores)
    }
  } catch (error) {
    console.log(error)
  }
}