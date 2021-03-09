import { Router } from "express";

import AuthController from "@controllers/auth.controller";

const AuthRouter = Router();
AuthRouter.get("/me", AuthController.me);

export default AuthRouter;