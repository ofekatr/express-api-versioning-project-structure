import { Request, Response } from "express";

import AuthService from "@services/auth.service";

const me = (_: Request, res: Response) => {
  res.status(200).send(AuthService.me);
}

const AuthController = Object.freeze({
  me,
});

export default AuthController;