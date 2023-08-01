import { db } from "../db";
import { Model, DataTypes } from "sequelize";
import { IEmployees } from "../interfaces/IEmployees";

export class Employees extends Model<IEmployees> implements IEmployees {
  id!: string;
  name!: string;
  email!: string;
  contact!: string;
  occupation!: string;
}

Employees.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contact: {
    type: DataTypes.STRING,
  },
  occupation: {
    type: DataTypes.STRING,
  },
}, {
  sequelize: db,
  modelName: "employee",
  timestamps: false,
});
