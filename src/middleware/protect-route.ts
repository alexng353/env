// import { verify_user } from "@lib/authentication/verify_user";
// import { logger } from "@lib/logger";
// import { ValidRoles } from "@pkg/types";
// import { NextFunction, Request, Response } from "express";

// // Middleware to protect routes using Next auth JWT
// export default async (
//   request: Request,
//   response: Response,
//   next: NextFunction,
//   role?: ValidRoles
// ) => {
//   try {
//     const user = await verify_user(
//       request.cookies as unknown as Record<string, string>
//     );

//     if (role && user.role < role) {
//       return response
//         .status(401)
//         .json({ success: false, reason: "Unauthorized" });
//     }

//     request.user = user;
//     next();
//   } catch (error) {
//     logger.warn(`No user found (rp) ${request.url}\n\t`, error);
//     return response
//       .status(401)
//       .json({ success: false, reason: "No user found (Unauthorized)" });
//   }
// };
export {};
