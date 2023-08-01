"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IClassGroup_1 = require("../interfaces/IClassGroup");
const db_1 = require("../db");
const sequelize_1 = require("sequelize");
class ClassGroup extends sequelize_1.Model {
}
ClassGroup.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    trainer: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    schedule: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    inDay: {
        type: sequelize_1.DataTypes.ENUM(IClassGroup_1.InDay.Afternoon, IClassGroup_1.InDay.Morning, IClassGroup_1.InDay.Night),
        allowNull: false,
    },
    weekDays: {
        type: sequelize_1.DataTypes.ENUM(IClassGroup_1.WeekDays.Friday, IClassGroup_1.WeekDays.Monday, IClassGroup_1.WeekDays.Saturday, IClassGroup_1.WeekDays.Sunday, IClassGroup_1.WeekDays.Thursday, IClassGroup_1.WeekDays.Tuesday, IClassGroup_1.WeekDays.Wednesday),
        allowNull: false,
    },
    img: {
        type: sequelize_1.DataTypes.STRING,
    }
}, {
    sequelize: db_1.db,
    modelName: "groupClass",
    timestamps: false,
});
exports.default = ClassGroup;
