import pino from "pino";
import pretty from "pino-pretty";

const stream = pretty({
  customPrettifiers: {
    time: () =>
      `${new Date()
        .toLocaleString("en-CA", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "America/Vancouver",
        })
        .replaceAll("/", "-")}`,
  },
  colorize: true,
});

const streams = [{ stream: stream }];

export const logger = pino({}, pino.multistream(streams));
