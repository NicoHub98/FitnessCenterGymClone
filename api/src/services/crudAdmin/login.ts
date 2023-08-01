import { Request, Response } from "express"
import { IAdmin } from "../../interfaces/IAdmin"
import { Admin } from "../../models/relations"
import { passwordCorrecto } from "../../helper/bcrypt"
import { generarToken } from "../../helper/JWToken"

export const loginUser = async (req: Request, res: Response) => {
  const usuario = req.body as IAdmin

  try {
    const existUser = await Admin.findOne({
      where: {
        email: usuario.email
      }
    })

    if (!existUser) {
      return res.status(401).json({ msg: "Esta cuenta no esta registrada" })
    }

    const passwordEncriptado = await existUser.password

    const compararPassword = await passwordCorrecto(usuario.password, passwordEncriptado)

    if (compararPassword) {
      const token = await generarToken(existUser.email)

      const data = {
        user: existUser,
        token,
      }

      return res.status(200).json({ msg: "Session y token valido", data })
    } else {
      return res.status(403).json({ msg: "Clave invalida" })
    }
  } catch (error) {
    console.log(error)
  }
}