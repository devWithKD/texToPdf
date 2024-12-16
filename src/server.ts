import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import konarkRoute from "./routes/konark.route";
import { loggerMiddleware } from "./middlewares/logger.middleware";
import path from "path";
import { HttpError } from "http-errors";

const app: Application = express();
const PORT = process.env.PORT || 5000;

const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(err.status).send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
};

// Middlewares
app.use(express.json());
// app.use(loggerMiddleware);
app.use(cors());

// Routes
app.use("/api/v1/konark/", konarkRoute);

app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
