import { Router } from "express";

const ApiV1Router = Router();

ApiV1Router.get("/", (_, res) => {
  res.send("v1");
});

export default ApiV1Router;