"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postClassGym = void 0;
const IClassGroup_1 = require("../../interfaces/IClassGroup");
const relations_1 = require("../../models/relations");
const postClassGym = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clase = req.body;
    const errorName = typeof clase.name !== "string" || clase.name.length === 0;
    const errorTrainer = typeof clase.trainer !== "string" || clase.trainer.length === 0;
    const errorDuration = typeof clase.duration !== "string" || clase.duration.length === 0;
    const errorSchedule = typeof clase.schedule !== "string" || clase.schedule.length === 0;
    const errorInDay = typeof clase.inDay !== "string" || !Object.values(IClassGroup_1.InDay).includes(clase.inDay);
    const errorWeekDays = typeof clase.weekDays !== "string" || !Object.values(IClassGroup_1.WeekDays).includes(clase.weekDays);
    try {
        if (errorName && errorTrainer && errorDuration && errorSchedule && errorInDay) {
            throw new Error(`Faltan todas las propiedades`);
        }
        if (errorName)
            throw new Error(`Incorrecto o falta el nombre de la clase`);
        if (errorTrainer)
            throw new Error(`Incorrecto o falta el nombre del trainer`);
        if (errorDuration)
            throw new Error(`Incorrecto o falta la duración de la clase`);
        if (errorSchedule)
            throw new Error(`Incorrecto o falta el horario de la clase`);
        if (errorInDay)
            throw new Error(`Incorrecto o falta la jornada de la clase`);
        if (errorWeekDays)
            throw new Error(`Incorrecto o falta el día de la clase`);
        else {
            let createClass = yield relations_1.ClassGroup.create({
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
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message, });
        }
        return res.status(400).json({ error: "Error en postClassGym por:" + error, });
    }
});
exports.postClassGym = postClassGym;
