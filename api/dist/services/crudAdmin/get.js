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
exports.getAllUsers = void 0;
const relations_1 = require("../../models/relations");
const getAllUsers = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield relations_1.Admin.findAll({
            include: [{
                    model: relations_1.Elements,
                    attributes: ["name"],
                    include: [{
                            model: relations_1.Provider,
                            attributes: ["name"],
                        }],
                }, {
                    model: relations_1.ClassGroup,
                    attributes: ["name"]
                }, {
                    model: relations_1.Provider,
                    attributes: ["name"],
                    include: [{
                            model: relations_1.Elements,
                            attributes: ["name"],
                        }],
                }, {
                    model: relations_1.Expense,
                    attributes: ["name"]
                }],
            attributes: ["id", "user", "email"],
        });
        if (!allUsers.length) {
            throw new Error("No hay usuarios registrados");
        }
        else {
            return res.status(200).json(allUsers);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(404).json({ error: error.message, });
        }
        return res.status(400).json({ error: "Error en getElementsGym por:" + error, });
    }
});
exports.getAllUsers = getAllUsers;
