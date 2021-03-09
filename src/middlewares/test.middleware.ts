import { Request, Response } from "express";

const TestMiddleware = (_: Request, __: Response, next: () => void) => {
  console.log("Test Middleware");
  next();
}

export default TestMiddleware;