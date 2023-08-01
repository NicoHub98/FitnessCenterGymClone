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
exports.postRelationElements = void 0;
const relations_1 = require("../../models/relations");
// RELACION ELEMENTO VS PROVEEDOR VS ADMIN
const postRelationElements = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const element = req.body;
    const errorName = typeof element.name !== "string" || element.name.length === 0;
    // const errorType = typeof element.type !== "string" || !Object.values(Types).includes(element.type)
    // const errorType = typeof element.type !== "string"
    // const errorDescription = typeof element.description !== "string" || element.description.length <= 11
    // const errorDescription = typeof element.description !== "string"
    const errorPrice = typeof element.price !== "string";
    const errorDate = typeof element.date !== "string" || !Boolean(Date.parse(element.date)) || element.date.length < 10;
    // const errorState = typeof element.state !== "string" || !Object.values(State).includes(element.state)
    const errorState = typeof element.state !== "string";
    try {
        // if (errorName && errorType && errorDescription && errorPrice && errorDate && errorState) {
        if (errorName && errorPrice && errorDate && errorState) {
            throw new Error(`Faltan todas las propiedades`);
        }
        if (errorName)
            throw new Error(`Incorrecto o falta el nombre`);
        // if (errorType) throw new Error(`Incorrecto o falta el tipo`);
        // if (errorDescription) throw new Error(`Incorrecto o falta la description`);
        if (errorPrice)
            throw new Error(`Incorrecto o falta el precio`);
        if (errorDate)
            throw new Error(`Incorrecto o falta la fecha`);
        if (errorState)
            throw new Error(`Incorrecto o falta el estado`);
        else {
            let postElement = yield relations_1.Elements.create(element);
            return res.status(200).json({ message: `Ah sido agregado un nuevo elemento`, postElement });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message, });
        }
        return res.status(400).json({ error: "Error en postRelationElements por:" + error, });
    }
});
exports.postRelationElements = postRelationElements;
