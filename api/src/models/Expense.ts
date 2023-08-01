import { db } from "../db";
import { Model, DataTypes } from "sequelize";
import { IExpense } from "../interfaces/IExpense";
class Expense extends Model<IExpense> implements IExpense {
  id!: string;
  name!: string;
  expense!: string;
}
Expense.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expense: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "expense",
    timestamps: false,
  }
);
export default Expense;