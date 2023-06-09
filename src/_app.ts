import "dotenv/config";
import "@lib/env";

import { register } from "@reflet/express";
import express from "express";

//#region middleware
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { limiter } from "./middleware/rate-limit";
import { errorMiddleware } from "./middleware/hanldle-error";
//#endregion

import { RootController } from "./_router";

const app = express();

const origin = ["*"];

const corsOptions = { origin, credentials: true };

app.use(cors(corsOptions));
app.use(cookieParser());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(limiter);

register(app, [RootController]);

app.use(errorMiddleware);

export default app;
