"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employees = void 0;
const db_1 = require("../db");
const sequelize_1 = require("sequelize");
class Employees extends sequelize_1.Model {
}
exports.Employees = Employees;
Employees.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    contact: {
        type: sequelize_1.DataTypes.STRING,
    },
    occupation: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: db_1.db,
    modelName: "employee",
    timestamps: false,
});
