"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const sequelize_1 = require("sequelize");
class Client extends sequelize_1.Model {
}
Client.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    plan: {
        type: sequelize_1.DataTypes.STRING,
    },
    contact: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    dateIn: {
        type: sequelize_1.DataTypes.STRING,
    },
    dateOut: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: db_1.db,
    modelName: "client",
    timestamps: false,
});
exports.default = Client;
