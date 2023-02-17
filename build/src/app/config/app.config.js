import "dotenv/config";
const EMPTY_STRING = "";
const DEFAULT_APP_PORT = "3001";
function setConfig(value, defaultValue = EMPTY_STRING) {
    return value ? value : defaultValue;
}
const config = Object.freeze({
    APP: {
        PORT: parseInt(setConfig(process.env.APP_PORT, DEFAULT_APP_PORT)),
        NAME: setConfig(process.env.APP_NAME),
        ENVIRONMENT: setConfig(process.env.NODE_ENV),
    },
});
export default config;
//# sourceMappingURL=app.config.js.map