import { Response } from "express"
import { Admin } from "../../models/relations"

export const perfil = async (req: any, res: Response) => {
  try {
    const usuarioRegistado = await Admin.findOne(req.usuarioId)

    if (!usuarioRegistado) return res.status(404).json({ message: "No se encontro el pefil" })

    return res.status(200).json({ message: "Perfil del usuario", usuarioRegistado })

  } catch (error) {
    console.log(error)
  }
}