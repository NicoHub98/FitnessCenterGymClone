import { IClassGroup, InDay, WeekDays } from "../interfaces/IClassGroup";
import { db } from "../db";
import { Model, DataTypes } from "sequelize";

class ClassGroup extends Model<IClassGroup> implements IClassGroup {
  id!: string;
  name!: string;
  trainer!: string;
  duration!: string;
  schedule!: string;// HORARIO
  inDay!: InDay;
  weekDays!: WeekDays;
  img!: string;
}

ClassGroup.init(
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
    trainer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    schedule: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inDay: {
      type: DataTypes.ENUM(InDay.Afternoon, InDay.Morning, InDay.Night),
      allowNull: false,
    },
    weekDays: {
      type: DataTypes.ENUM(
        WeekDays.Friday,
        WeekDays.Monday,
        WeekDays.Saturday,
        WeekDays.Sunday,
        WeekDays.Thursday,
        WeekDays.Tuesday,
        WeekDays.Wednesday
      ),
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize: db,
    modelName: "groupClass",
    timestamps: false,
  }
);

export default ClassGroup;
