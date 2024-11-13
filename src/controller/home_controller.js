import config from "../database/config.js";
import { User } from "../model/user.js";

export class HomeController {}

HomeController.add = {
  add: async (req, res) => {
    try {
      let data = await User.create({
        name: "arun",
      });

      res.json({
        status: true,
        message: "user added successfully",
      });
    } catch (e) {
      res.status(500).json({
        status: false,
        message: "something went wrong",
      });
    }
  },
  list: async (req, res) => {
    try {
      let data = await User.findAll({
        attributes: {
          exclude: ["name"],
        },
      });

      res.json({
        status: true,
        message: data,
      });
    } catch (e) {
      res.status(500).json({
        status: false,
        message: "something went wrong",
      });
    }
  },
  update: async (req, res) => {
    try {
      let data = await User.update(
        { name: "murali" },
        {
          where: {
            id: 1,
          },
        }
      );

      res.json({
        status: true,
        message: "Updated successfully",
      });
    } catch (e) {
      res.status(500).json({
        status: false,
        message: "something went wrong",
      });
    }
  },
};
