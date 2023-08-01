import { Request, Response } from "express"
import { Provider } from "../../models/relations"
import { IProvider } from "interfaces/IProviders";

export const deleteProvider = async (req: Request, res: Response) => {

  const { id } = req.params

  try {
    const employee = await Provider.findAll();
    const deleted = employee.find((el: IProvider) => el.id === id);
    await Provider.destroy({
      where: {
        id: id
      }
    })
    return res.status(200).json({ msg: "El Proveedor esta eliminado", deleted })

  } catch (error) {
    console.log(error)
  }
}