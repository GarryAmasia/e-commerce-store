import "dotenv/config";

import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({
    message: "you reach e-commerce api",
  });
});

app.use((error, req, res) => {
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
