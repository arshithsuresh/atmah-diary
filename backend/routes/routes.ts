import * as controllers from "../contollers/controller";
import { Router } from "express";

const myController = controllers;

const router = Router();

router.get("/", myController.method1);
router.post("/", myController.method2);

export default router;
