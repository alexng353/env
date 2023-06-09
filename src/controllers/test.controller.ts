import { Get, Send } from "@reflet/express";

export class TestController {
  @Send({ json: true })
  @Get("/test")
  async test() {
    return { message: "Hello world!" };
  }
}
