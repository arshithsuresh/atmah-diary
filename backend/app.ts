import router from "./routes/routes";
import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config({});

const myRoute = router;

const app: Express = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api", myRoute);

app.listen(PORT, (error?: Error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
