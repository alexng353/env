import { ErrorWithCode } from "@lib/error";
import { logger } from "@lib/logger";
import type { Request, Response, NextFunction } from "express";
import { env } from "@lib/env";

export function errorMiddleware(
  error: unknown,
  _: Request,
  response: Response,
  _n: NextFunction
) {
  if (error instanceof ErrorWithCode) {
    return response.status(error.status_code).json({
      status: error.status_code,
      error: { message: error.message, name: error.name },
    });
  }

  logger.error(error);

  if (env.NODE_ENV === "development") {
    return response.status(500).json({
      success: false,
      error: error ?? "INTERNAL SERVER ERROR",
    });
  }

  return response.status(500).json({
    success: false,
    error: "INTERNAL SERVER ERROR",
  });
}
