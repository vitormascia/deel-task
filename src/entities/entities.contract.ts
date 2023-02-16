import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model, NonAttribute } from "sequelize";

import { db } from "../app/databases/index.js";
import { ContractStatus } from "../ts/index.js";
import Job from "./entities.job.js";
import Profile from "./entities.profile.js";

class Contract extends Model<InferAttributes<Contract>, InferCreationAttributes<Contract>> {
    declare id: CreationOptional<number>;
    declare terms: string;
    declare status: ContractStatus;
    declare ContractorId: ForeignKey<Profile["id"]>;
    declare ClientId: ForeignKey<Profile["id"]>;
    declare Jobs: NonAttribute<Job[]>;
    declare Contractor: NonAttribute<Profile>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Contract.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        terms: {
            type: new DataTypes.STRING(20),
            allowNull: false,
        },
        status: {
            type: new DataTypes.ENUM(...Object.values(ContractStatus)),
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize: db,
        modelName: "Contract",
        tableName: "contracts",
    },
);

export default Contract;
