import { Sequelize } from "sequelize";
import "dotenv/config";

// export const db = new Sequelize(
//   `${process.env.DB_NAME}`,
//   `${process.env.DB_USER}`,
//   `${process.env.DB_PASSWORD}`,
//   {
//     host: `${process.env.DB_HOST}`,
//     dialect: "postgres",
//     logging: false,
//   }
// );

export const db = new Sequelize(
  `${process.env.DEPLOY}`,
  {
    host: `${process.env.DB_HOST}`,
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true
      }
    }
  }
);
