import { Router } from "express";

import ApiRouter from "@api/api.router";
import AuthRouter from "./auth.router";

const AppRouter = Router();

AppRouter.use("/api", ApiRouter);
AppRouter.use("/auth", AuthRouter);

export default AppRouter;