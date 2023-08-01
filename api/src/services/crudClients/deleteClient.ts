import { Request, Response } from "express"
import Clientes from "../../models/Clientes"
import { IClient } from "interfaces/IClient";

export const deleteClient = async (req: Request, res: Response) => {

  const { id } = req.params

  try {
    const employee = await Clientes.findAll();
    const deleted = employee.find((el: IClient) => el.id === id);
    await Clientes.destroy({
      where: {
        id: id
      }
    })
    return res.status(200).json({ msg: "El Cliente esta eliminado", deleted })

  } catch (error) {
    console.log(error)
  }
}