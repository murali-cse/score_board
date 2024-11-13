import { DataTypes, Model } from "sequelize";
import config from "../database/config.js";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { config, freezeTableName: true }
);

export default User;
