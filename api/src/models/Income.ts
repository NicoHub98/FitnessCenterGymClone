import { db } from "../db";
import { Model, DataTypes } from "sequelize";
import { I_Income } from "../interfaces/I_Income";
class Income extends Model<I_Income> implements I_Income {
  id!: string;
  name!: string;
  income!: string;
}
Income.init(
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
    income: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "income",
    timestamps: false,
  }
);
export default Income;