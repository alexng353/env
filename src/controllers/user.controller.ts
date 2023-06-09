import { ErrorForbidden } from "@app/common/error/forbidden.error";
import { Ok } from "@app/common/ok";
import { prisma } from "@app/common/prisma";
import { Body, Post, Send } from "@reflet/express";
import { randomBytes, createHash } from "node:crypto";

export class UserController {
  @Send({ json: true })
  @Post("/user")
  async createUser(
    @Body body: { name?: string; email?: string; password?: string }
  ) {
    if (!body.email) throw new ErrorForbidden("Email is required");
    if (!body.password) throw new ErrorForbidden("Password is required");

    const salt = randomBytes(16).toString("hex");
    const hash = createHash("sha512")
      .update(body.password + salt)
      .digest("hex");

    const token = randomBytes(2048).toString("hex");

    await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hash,
        salt,
      },
    });

    return new Ok({ email: body.email, hash, salt });
  }
}
