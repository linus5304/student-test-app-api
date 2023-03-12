import "dotenv/config";
import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import { studentRoute } from "./routes/student";


const app = express();
const PORT = 3000;

export const routes = express.Router();

const main = async () => {
  await connect(
    "mongodb+srv://linusbayere:8Su2Mzi6CF2frJ31@cluster0.cm72cin.mongodb.net/?retryWrites=true&w=majority"
  );

  app.use(cors())
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  routes.use("/students", studentRoute);

  app.use('/', routes);

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
};

main();
