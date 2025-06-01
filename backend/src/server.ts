import dotenv from "dotenv";
import app from "./app";

dotenv.config();
const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    app.listen(PORT, (error?: Error) => {
      if (!error)
        console.log(
          "Server is Successfully Running, and App is listening on port " + PORT
        );
      else console.log("Error occurred, server can't start", error);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
};

startServer();
