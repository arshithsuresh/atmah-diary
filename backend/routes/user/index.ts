import { Router } from "express";
import dashboardRoutes from "./dashboard";
import diaryRoutes from "./diary";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Working User Routes");
});

routes.use("/dashboard", dashboardRoutes);
routes.use("/diary", diaryRoutes);

export default routes;
