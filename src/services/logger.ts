import { createLogger, format, transports } from "winston";

const logsFolder: string = process.env.NODE_ENV === "production " ? "logs/production" : "logs/development";

export const Logger = createLogger({
    level: "info",
    format: format.json(),
    transports: [
        new transports.File({ filename: `${logsFolder}/error.log`, level: "error" }),
        new transports.File({ filename: `${logsFolder}/warn.log`, level: "warn" }),
        new transports.File({ filename: `${logsFolder}/combined.log` }),
    ],
});

if (process.env.NODE_ENV !== "production") {
    Logger.add(
        new transports.Console({
            format: format.simple(),
        })
    );
}
