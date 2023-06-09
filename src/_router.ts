import { Router } from "@reflet/express";
import { TestController } from "./controllers/test.controller";
import { UserController } from "./controllers/user.controller";

@Router("/api")
@Router.Children(() => [TestController, UserController])
export class RootController {}
