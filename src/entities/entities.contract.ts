import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";

import { db } from "../app/databases/index.js";
import { ContractStatus } from "../ts/index.js";
import Profile from "./entities.profile.js";

class Contract extends Model<InferAttributes<Contract>, InferCreationAttributes<Contract>> {
    declare id: CreationOptional<number>;
    declare terms: string;
    declare status: ContractStatus;
    declare ContractorId: ForeignKey<Profile["id"]>;
    declare ClientId: ForeignKey<Profile["id"]>;
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
    },
    {
        sequelize: db,
        modelName: "Contract",
        tableName: "contracts",
    },
);

export default Contract;
