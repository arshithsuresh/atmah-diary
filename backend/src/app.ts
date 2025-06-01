import router from "./routes/routes";
import express, { Express } from "express";

const myRoute = router;
const app: Express = express();

app.use(express.json());
app.use("/api/v1", myRoute);

export default app;
