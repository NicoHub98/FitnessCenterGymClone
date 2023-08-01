import { Request, Response } from "express";
// import { ClassGroup, Elements, Expense, Provider, User } from "../../models/relations";
import Client from "../../models/Clientes";

export const getClients = async (_: Request, res: Response) => {
  console.log("Me llego algo")
  try {
    const allClient = await Client.findAll();

    if (!allClient.length) {
      throw new Error("No hay Clientes registrados");
    } else {
      return res.status(200).json(allClient);
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en getElementsGym por:" + error, });
  }
}