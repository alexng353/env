import "reflect-metadata";
import "@total-typescript/ts-reset";

import { env } from "@lib/env";
import { logger } from "@lib/logger";
import app from "@app/_app";

const port = env.PORT;

app.listen(port, () => {
  logger.info(`Server started on http://localhost:${port}`);
});
