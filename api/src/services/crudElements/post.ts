import { Request, Response } from "express";
import { IElements, State, Types } from "../../interfaces/IElements";
import { Elements } from "../../models/relations";

// RELACION ELEMENTO VS PROVEEDOR VS ADMIN
export const postRelationElements = async (req: Request, res: Response) => {
  const element = req.body as IElements;

  const errorName = typeof element.name !== "string" || element.name.length === 0
  // const errorType = typeof element.type !== "string" || !Object.values(Types).includes(element.type)
  // const errorType = typeof element.type !== "string"
  // const errorDescription = typeof element.description !== "string" || element.description.length <= 11
  // const errorDescription = typeof element.description !== "string"
  const errorPrice = typeof element.price !== "string"
  const errorDate = typeof element.date !== "string" || !Boolean(Date.parse(element.date)) || element.date.length < 10
  // const errorState = typeof element.state !== "string" || !Object.values(State).includes(element.state)
  const errorState = typeof element.state !== "string"
  
  try {
    // if (errorName && errorType && errorDescription && errorPrice && errorDate && errorState) {
    if (errorName && errorPrice && errorDate && errorState) {
      throw new Error(`Faltan todas las propiedades`);
    }
    if (errorName) throw new Error(`Incorrecto o falta el nombre`);
    // if (errorType) throw new Error(`Incorrecto o falta el tipo`);
    // if (errorDescription) throw new Error(`Incorrecto o falta la description`);
    if (errorPrice) throw new Error(`Incorrecto o falta el precio`);
    if (errorDate) throw new Error(`Incorrecto o falta la fecha`);
    if (errorState) throw new Error(`Incorrecto o falta el estado`);
    else {
      let postElement = await Elements.create(element);

      return res.status(200).json({ message: `Ah sido agregado un nuevo elemento`, postElement });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en postRelationElements por:" + error, });
  }
}