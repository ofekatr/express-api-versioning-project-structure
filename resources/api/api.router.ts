import { Router } from "express";
import apiV1Router from "./1/routes/api-v1.router";
import apiV2Router from "./2/routes/api-v2.router";

const apiRoutersMap = new Map([
  ["v1", apiV1Router],
  ["v2", apiV2Router],
]);

const ApiRouter = Router();
apiRoutersMap.forEach((value, key) => {
  ApiRouter.use(`/${key}`, value);
});

export default ApiRouter;