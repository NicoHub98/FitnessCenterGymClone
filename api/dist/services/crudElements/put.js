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
exports.putElemetsGym = void 0;
const Element_1 = __importDefault(require("../../models/Element"));
const putElemetsGym = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const current = req.body;
    try {
        const elements = yield Element_1.default.findAll();
        let elementId = elements.find((el) => el.id === id);
        // if (id.length < 36) {
        if ((elementId === null || elementId === void 0 ? void 0 : elementId.id) !== id) {
            throw Error(`El elemento no existe`);
        }
        else {
            yield Element_1.default.update(current, {
                where: {
                    id,
                }
            });
            return res.status(200).json({ change: "Los datos del elemento se actualizaron", elementId });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(404).json({ error: error.message, });
        }
        return res.status(400).json({ error: "Error en putElemetsGym por:" + error });
    }
});
exports.putElemetsGym = putElemetsGym;
