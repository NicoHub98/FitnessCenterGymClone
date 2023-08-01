import { db } from "../db";
import { IGoogle } from "../interfaces/IGoogle";
import { Model, DataTypes } from "sequelize";

class Google extends Model<IGoogle> implements IGoogle {
  googleId!: string;
  name!: string;
  email!: string;
  photo!: string;
}

Google.init(
  {
    googleId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  },
  {
    sequelize: db,
    modelName: "google",
    timestamps: false,
  }
);

export default Google;
