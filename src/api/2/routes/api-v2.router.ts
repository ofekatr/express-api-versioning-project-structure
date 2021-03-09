import { Router } from "express";

const apiV2Router = Router();

apiV2Router.get("/", (_, res) => {
  res.send("v2");
});

export default apiV2Router;