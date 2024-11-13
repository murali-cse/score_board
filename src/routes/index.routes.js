import { Router } from "express";
import { HomeController } from "../controller/home_controller.js";

const HomeRouter = Router();

HomeRouter.post("/", HomeController.add.add);
HomeRouter.get("/", HomeController.add.list);
HomeRouter.put("/", HomeController.add.update);

export default HomeRouter;
