import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";

import { db } from "../app/databases/index.js";
import Contract from "./entities.contract.js";

class Job extends Model<InferAttributes<Job>, InferCreationAttributes<Job>> {
    declare id: CreationOptional<number>;
    declare description: string;
    declare price: number;
    declare paid: CreationOptional<boolean>;
    declare paymentDate: CreationOptional<string>;
    declare ContractId: ForeignKey<Contract["id"]>;
}

Job.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
            type: new DataTypes.STRING(20),
            allowNull: false,
        },
        price: {
            type: new DataTypes.DECIMAL(12, 2),
            allowNull: false,
        },
        paid: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        paymentDate: {
            type: DataTypes.DATE,
        },
    },
    {
        sequelize: db,
        modelName: "Job",
        tableName: "jobs",
    },
);

export default Job;
