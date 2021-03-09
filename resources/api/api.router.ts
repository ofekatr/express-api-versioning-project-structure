import { Router } from "express";
import apiV1Router from "./1/routes/api-v1.router";
import apiV2Router from "./2/routes/api-v2.router";

const apiRoutersMap = new Map([
  ["v1", { enabled: true, router: apiV1Router }],
  ["v2", { enabled: true, router: apiV2Router }],
]);

const ApiRouter = Router();
apiRoutersMap.forEach(({ enabled, router }, key) => {
  if (enabled) {
    ApiRouter.use(`/${key}`, router);
  }
});

export default ApiRouter;