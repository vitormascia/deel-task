import "dotenv/config";

import { IConfig } from "../../ts/index.js";

const EMPTY_STRING = "";
const DEFAULT_APP_PORT = "3001";

function setConfig(value?: string, defaultValue: string = EMPTY_STRING): string {
    return value ? value : defaultValue;
}

const config: IConfig = Object.freeze({
    APP: {
        PORT: parseInt(setConfig(process.env.APP_PORT, DEFAULT_APP_PORT)),
        NAME: setConfig(process.env.APP_NAME),
        ENVIRONMENT: setConfig(process.env.NODE_ENV),
    },
});

export default config;
