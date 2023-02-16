import { Options, Sequelize } from "sequelize";
import { Logger as WinstonLogger } from "winston";

import { IDatabase } from "../../ts/index.js";
import { logger } from "../log/index.js";

class SQLite implements IDatabase<Sequelize, Sequelize> {
    private config: Options;
    public db: Sequelize;

    constructor() {
        this.config = {
            dialect: "sqlite",
            storage: "./database.sqlite3",
            logging: (msg): WinstonLogger => logger.debug(msg),
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000,
            },
        };
        this.db = new Sequelize(this.config);
    }

    public async connect(): Promise<Sequelize> {
        try {
            await this.db.authenticate();

            logger.info("DB_CONNECTED", {
                data: {
                    db: this.constructor.name,
                    orm: "Sequelize",
                },
            });

            return this.db;
        } catch (error: any) {
            logger.error("DB_CONNECTION_ERROR", {
                data: {
                    db: this.constructor.name,
                    orm: "Sequelize",
                    error: {
                        message: error.message,
                        stack: error.stack,
                    },
                },
            });

            throw error;
        }
    }
}

const sqlite = new SQLite();
const db = await sqlite.connect();

export default db;
