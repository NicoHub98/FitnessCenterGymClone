import { Request, Response } from "express";
import Elements from "../../models/Element";
import { IElements } from "interfaces/IElements";

export const deleteElementsGym = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const elements = await Elements.findAll();
    let elementId = elements.find((el: IElements) => el.id === id)

    if (elementId?.id !== id) {
      throw Error(`El elemento no existe`);
    } else {
      await Elements.destroy({
        where: {
          id
        }
      });
      return res.status(200).json({ message: "El elemento ha sido eliminado", elementId });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en deleteElementsGym por:" + error });
  }
}