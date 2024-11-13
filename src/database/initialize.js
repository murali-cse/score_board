import config from "./config.js";
import * as Model from "../model/index.js";

export const db = async () => {
  try {
    // await config.authenticate();

    await config.sync({ force: false });
  } catch (e) {
    throw e;
  }
};
