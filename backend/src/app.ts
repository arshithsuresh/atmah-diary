import router from "./routes/routes";
import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";

const myRoute = router;
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1", myRoute);

export default app;
