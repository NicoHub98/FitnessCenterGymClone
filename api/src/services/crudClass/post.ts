import { Request, Response } from "express";
import { IClassGroup, InDay, WeekDays } from "../../interfaces/IClassGroup";
import { ClassGroup } from "../../models/relations";

export const postClassGym = async (req: Request, res: Response) => {
  const clase = req.body as IClassGroup;

  const errorName = typeof clase.name !== "string" || clase.name.length === 0
  const errorTrainer = typeof clase.trainer !== "string" || clase.trainer.length === 0
  const errorDuration = typeof clase.duration !== "string" || clase.duration.length === 0
  const errorSchedule = typeof clase.schedule !== "string" || clase.schedule.length === 0
  const errorInDay = typeof clase.inDay !== "string" || !Object.values(InDay).includes(clase.inDay)
  const errorWeekDays = typeof clase.weekDays !== "string" || !Object.values(WeekDays).includes(clase.weekDays)
  
  try {
    if (errorName && errorTrainer && errorDuration && errorSchedule && errorInDay) {
      throw new Error(`Faltan todas las propiedades`);
    }
    if (errorName) throw new Error(`Incorrecto o falta el nombre de la clase`);
    if (errorTrainer) throw new Error(`Incorrecto o falta el nombre del trainer`);
    if (errorDuration) throw new Error(`Incorrecto o falta la duración de la clase`);
    if (errorSchedule) throw new Error(`Incorrecto o falta el horario de la clase`);
    if (errorInDay) throw new Error(`Incorrecto o falta la jornada de la clase`);
    if (errorWeekDays) throw new Error(`Incorrecto o falta el día de la clase`);
    else {
      let createClass = await ClassGroup.create({
        name: clase.name,
        trainer: clase.trainer,
        duration: clase.duration,
        schedule: clase.schedule,
        inDay: clase.inDay,
        weekDays: clase.weekDays,
        img: clase.img || "https://pymstatic.com/6843/conversions/spinning-wide.jpg",
      });
      // createClass = JSON.parse(JSON.stringify(createClass))
      // console.log("CREATE:", createClass)

      return res.status(200).json({ message: `Ah sido agregada una nueva clase grupal`, createClass });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en postClassGym por:" + error, });
  }
}