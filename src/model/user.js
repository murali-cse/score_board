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

export default User;
