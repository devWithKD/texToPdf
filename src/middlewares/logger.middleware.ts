import { Request, Response, NextFunction } from "express";

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};
