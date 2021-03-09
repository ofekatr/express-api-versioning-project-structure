import { Router } from "express";

import ApiV1Router from "./1/routes/api-v1.router";
import ApiV2Router from "./2/routes/api-v2.router";
import ServerConfig from "@configs/server.json";

const apiRoutersMap = new Map([
  ["v1", { router: ApiV1Router }],
  ["v2", { router: ApiV2Router }],
]);

const ApiRouter = Router();

ServerConfig["api"].versions.forEach((version) => {
  const key = `v${version}`;
  const router = apiRoutersMap.get(key)?.router;
  if (router) {
    ApiRouter.use(`/${key}`, router);
  }
})


export default ApiRouter;