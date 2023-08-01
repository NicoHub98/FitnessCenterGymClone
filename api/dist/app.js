"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = require("./routes");
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)({
    credentials: true,
    origin: "*",
    methods: ["POST", "GET", "DELETE", "PUT"]
}));
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use((0, morgan_1.default)("dev"));
exports.app.use((_req, res, next) => {
    // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
exports.app.use(passport_1.default.initialize());
exports.app.use((0, express_session_1.default)({
    secret: typeof process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false
}));
exports.app.use(routes_1.router);
