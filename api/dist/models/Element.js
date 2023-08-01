"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const sequelize_1 = require("sequelize");
class Elements extends sequelize_1.Model {
}
Elements.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    state: {
        // type: DataTypes.ENUM(
        //   State.En_reparacion,
        //   State.Nuevo,
        //   State.Usado,
        // ),
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    // description: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    stock: {
        // type: DataTypes.ENUM(
        //   Types.Element,
        //   Types.Machine,
        //   Types.Office,
        // ),
        // defaultValue: "Elemento",
        type: sequelize_1.DataTypes.STRING,
        // allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    // MAQUINAS OH ELEMENTOS - MOBILIARIO
    date: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_1.db,
    modelName: "elements",
    timestamps: false,
});
exports.default = Elements;
