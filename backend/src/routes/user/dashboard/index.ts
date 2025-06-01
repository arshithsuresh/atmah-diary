import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Working User Dashboard Routes");
});

export default routes;
