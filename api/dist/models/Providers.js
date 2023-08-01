"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const sequelize_1 = require("sequelize");
class Provider extends sequelize_1.Model {
}
Provider.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    product: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    contact: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    // description: {
    //   type: DataTypes.STRING,
    // },
    provider: {
        type: sequelize_1.DataTypes.STRING,
    },
    // date: {
    //   type: DataTypes.DATEONLY,
    //   allowNull: false,
    // },
}, {
    sequelize: db_1.db,
    modelName: "provider",
    timestamps: false,
});
exports.default = Provider;
