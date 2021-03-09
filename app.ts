import 'module-alias/register';
import express from "express";
import appRouter from "./src/routes/index.router";

const app = express();

app.use("/", appRouter);

app.listen(4545, () => {
  console.log("Listening on port 4545.");
});