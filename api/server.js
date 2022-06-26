import "dotenv/config";

import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { mongoConnect } from "./src/config/dbConfig.js";
import cors from "cors";

const app = express();

//connect to db
mongoConnect();

//use the middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());

//apis
import registerLogin from "./src/routers/registerLogin.js";
app.use("/api/v1/register-login", registerLogin);

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({
    message: "you reach e-commerce api",
  });
});

//this is global error
app.use((error, req, res, next) => {
  console.log(error.message);

  const status = error.status || 404;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
