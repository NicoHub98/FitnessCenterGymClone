import { Request, Response } from "express"
import { IProvider } from "../../interfaces/IProviders"
import { Provider } from "../../models/relations"

export const putProvider = async (req: Request, res: Response) => {

  const provider = req.body as IProvider
  const { id } = req.params

  try {
    const proveedor = await Provider.update(provider, { where: { id } })
    return res.status(200).json({ msg: "Proveedor actualizado", proveedor })

  } catch (error) {
    console.log(error)
  }
}