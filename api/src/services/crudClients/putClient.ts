import { Request, Response } from "express"
import Clientes from "../../models/Clientes"
import { IClient } from "../../interfaces/IClient"

export const updateClient = async (req: Request, res: Response) => {
  const { id } = req.params
  const cliente = req.body as IClient

  try {
    const info = await Clientes.findAll();
    const client = info.find((el: IClient) => el.id === id)
    if (!client) {
      return res.json({ msg: "El cliente no existe" })
    } else {
      await Clientes.update(cliente, { where: { id } })
      return res.status(200).json({ msg: "Cliente actualizado", client })
    }
  } catch (error) {
    console.log(error)
  }
}