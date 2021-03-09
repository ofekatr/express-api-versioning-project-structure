import 'module-alias/register';
import express from "express";
import dotenv from "dotenv";

import AppRouter from "@routers/index.router";
import AppMiddlewares from "@middlewares/index.middleware";

dotenv.config();

const app = express();

app.use(...AppMiddlewares);

app.use("/", AppRouter);

const PORT = process.env.PORT || 4545;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});