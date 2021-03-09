import morgan from "morgan";

import TestMiddleware from "./test.middleware";

const DefaultMiddlewares = [
  morgan('dev'),
  TestMiddleware,
]

export default DefaultMiddlewares;