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
exports.createClient = void 0;
const Clientes_1 = __importDefault(require("../../models/Clientes"));
const createClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = req.body;
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.email);
    try {
        if (!usuario.name || !usuario.email)
            return res.status(400).json({ msg: "Todos los campos son requeridos" });
        const existClient = yield Clientes_1.default.findOne({
            where: { email: usuario.email },
        });
        if (existClient) {
            return res.status(400).json({ msg: "El cliente ya existe", existClient });
        }
        // const encriptado = await passwordHashado(usuario.password);
        const newClient = yield Clientes_1.default.create({
            name: usuario.name,
            email: usuario.email,
            plan: usuario.plan,
            dateIn: usuario.dateIn,
            dateOut: usuario.dateOut,
            contact: usuario.contact
        });
        if (newClient) {
            return res.status(200).json({ msg: "Cliente creado", newClient });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.createClient = createClient;
