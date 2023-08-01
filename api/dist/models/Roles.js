"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
class Roles extends sequelize_1.Model {
}
Roles.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: true,
    },
}, {
    sequelize: db_1.db,
    modelName: "role",
    timestamps: false,
});
exports.default = Roles;
