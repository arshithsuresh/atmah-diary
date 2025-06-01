import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Working Dairy Routes");
});

export default routes;
