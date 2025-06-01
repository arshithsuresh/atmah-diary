import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Working User Diary Routes");
});

export default routes;
