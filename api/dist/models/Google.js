"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const sequelize_1 = require("sequelize");
class Google extends sequelize_1.Model {
}
Google.init({
    googleId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    photo: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
}, {
    sequelize: db_1.db,
    modelName: "google",
    timestamps: false,
});
exports.default = Google;
