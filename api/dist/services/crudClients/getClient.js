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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClients = void 0;
// import { ClassGroup, Elements, Expense, Provider, User } from "../../models/relations";
const Clientes_1 = __importDefault(require("../../models/Clientes"));
const getClients = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Me llego algo");
    try {
        const allClient = yield Clientes_1.default.findAll();
        if (!allClient.length) {
            throw new Error("No hay Clientes registrados");
        }
        else {
            return res.status(200).json(allClient);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(404).json({ error: error.message, });
        }
        return res.status(400).json({ error: "Error en getElementsGym por:" + error, });
    }
});
exports.getClients = getClients;
