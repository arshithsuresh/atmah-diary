import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Working Auth Routes");
});

export default routes;
