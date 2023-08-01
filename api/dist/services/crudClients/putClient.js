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
exports.updateClient = void 0;
const Clientes_1 = __importDefault(require("../../models/Clientes"));
const updateClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cliente = req.body;
    try {
        const info = yield Clientes_1.default.findAll();
        const client = info.find((el) => el.id === id);
        if (!client) {
            return res.json({ msg: "El cliente no existe" });
        }
        else {
            yield Clientes_1.default.update(cliente, { where: { id } });
            return res.status(200).json({ msg: "Cliente actualizado", client });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateClient = updateClient;
