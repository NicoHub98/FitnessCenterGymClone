import { db } from "../db";
import { IProvider } from "../interfaces/IProviders"
import { Model, DataTypes } from "sequelize";


class Provider extends Model<IProvider> implements IProvider {
  id!: string;
  name!: string;
  product!: string;
  contact!: string;
  email!: string;
  // description!: string;
  provider!: string;
  // date!: string;
}

Provider.init(
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
    product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // description: {
    //   type: DataTypes.STRING,
    // },
    provider: {
      type: DataTypes.STRING,
    },
    // date: {
    //   type: DataTypes.DATEONLY,
    //   allowNull: false,
    // },
  },
  {
    sequelize: db,
    modelName: "provider",
    timestamps: false,
  }
);


export default Provider;
