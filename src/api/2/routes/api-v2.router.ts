import { Router } from "express";

const ApiV2Router = Router();

ApiV2Router.get("/", (_, res) => {
  res.send("v2");
});

export default ApiV2Router;