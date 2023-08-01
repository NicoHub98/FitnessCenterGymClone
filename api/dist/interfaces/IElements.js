"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.Types = void 0;
var Types;
(function (Types) {
    Types["Machine"] = "Maquina";
    Types["Element"] = "Elemento";
    Types["Office"] = "Oficina";
})(Types || (exports.Types = Types = {}));
var State;
(function (State) {
    State["Nuevo"] = "Nuevo";
    State["Usado"] = "Usado";
    State["En_reparacion"] = "En reparacion";
})(State || (exports.State = State = {}));
