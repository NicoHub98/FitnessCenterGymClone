import { Request, Response } from "express";
import { ClassGroup, Admin } from "../../models/relations";

export const getClassGroupGym = async (_: Request, res: Response) => {
  try {
    const classGroup = await ClassGroup.findAll({
      include: {
        model: Admin,
        attributes: ["user"],
      },
    });
    if (!classGroup.length) {
      return res.status(400).json({ msg: "De momento no se han añadido clases grupales" });
    }
    return res.status(200).json(classGroup);
  } catch (error) {
    return res.status(400).json({ error: "Error en getElementsGym por:" + error, });
  }
}