import { Router } from "express";

import ApiRouter from "@api/api.router";
import AuthRouter from "./auth.router";

const appRouter = Router();

appRouter.use("/api", ApiRouter);
appRouter.use("/auth", AuthRouter);

export default appRouter;