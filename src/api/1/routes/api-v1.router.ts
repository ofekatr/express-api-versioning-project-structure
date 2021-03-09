import { Router } from "express";

const apiV1Router = Router();

apiV1Router.get("/", (_, res) => {
  res.send("v1");
});

export default apiV1Router;