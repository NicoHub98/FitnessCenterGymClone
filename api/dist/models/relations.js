"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Income = exports.Expense = exports.ClassGroup = exports.Provider = exports.Elements = exports.Admin = void 0;
const Admin_1 = require("./Admin");
Object.defineProperty(exports, "Admin", { enumerable: true, get: function () { return Admin_1.Admin; } });
const Element_1 = __importDefault(require("./Element"));
exports.Elements = Element_1.default;
const ClassGroup_1 = __importDefault(require("./ClassGroup"));
exports.ClassGroup = ClassGroup_1.default;
const Providers_1 = __importDefault(require("./Providers"));
exports.Provider = Providers_1.default;
const Expense_1 = __importDefault(require("./Expense"));
exports.Expense = Expense_1.default;
const Income_1 = __importDefault(require("./Income"));
exports.Income = Income_1.default;
// RELACION USER VS PRODUCT
Admin_1.Admin.hasMany(Element_1.default);
Element_1.default.belongsTo(Admin_1.Admin);
// RELACION USER VS GROUP_CLASS
Admin_1.Admin.hasMany(ClassGroup_1.default);
ClassGroup_1.default.belongsTo(Admin_1.Admin);
// RELACION USER VS PROVIDER
Admin_1.Admin.hasMany(Providers_1.default);
Providers_1.default.belongsTo(Admin_1.Admin);
// RELACION USER VS EXPENSE
Admin_1.Admin.hasMany(Expense_1.default);
Expense_1.default.belongsTo(Admin_1.Admin);
// RELACION USER VS INCOME
Admin_1.Admin.hasMany(Income_1.default);
Income_1.default.belongsTo(Admin_1.Admin);
// RELACION PROVIDER VS PRODUCTS VS ADMIN
Providers_1.default.hasMany(Element_1.default);
Element_1.default.belongsTo(Providers_1.default);
