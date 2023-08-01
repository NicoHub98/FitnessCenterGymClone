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
exports.deleteProvider = void 0;
const relations_1 = require("../../models/relations");
const deleteProvider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const employee = yield relations_1.Provider.findAll();
        const deleted = employee.find((el) => el.id === id);
        yield relations_1.Provider.destroy({
            where: {
                id: id
            }
        });
        return res.status(200).json({ msg: "El Proveedor esta eliminado", deleted });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteProvider = deleteProvider;
