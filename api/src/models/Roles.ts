import { DataTypes, Model } from "sequelize";
import { db } from "../db";
import { IRoles } from "interfaces/IRoles";


class Roles extends Model<IRoles> implements IRoles {
  name!: string;
  status!: string;
}

Roles.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize: db,
    modelName: "role",
    timestamps: false,
  }
);


export default Roles;
