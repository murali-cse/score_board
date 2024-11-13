import { DataTypes, Model } from "sequelize";
import config from "../database/config.js";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize: config, freezeTableName: true }
);

export { User };

class Arun extends Model {}

Arun.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  { sequelize: config, freezeTableName: true }
);

export { Arun };
