import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, NonAttribute } from "sequelize";

import { db } from "../app/databases/index.js";
import { ProfileType } from "../ts/index.js";
import Contract from "./entities.contract.js";

class Profile extends Model<InferAttributes<Profile>, InferCreationAttributes<Profile>> {
    declare id: CreationOptional<number>;
    declare firstName: string;
    declare lastName: string;
    declare profession: string;
    declare balance: number;
    declare type: ProfileType;
    declare Client: NonAttribute<Contract[]>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    get fullName(): NonAttribute<string> {
        return `${this.firstName} ${this.lastName}`;
    }
}

Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: new DataTypes.STRING(20),
            allowNull: false,
        },
        lastName: {
            type: new DataTypes.STRING(20),
            allowNull: false,
        },
        profession: {
            type: new DataTypes.STRING(40),
            allowNull: false,
        },
        balance: {
            type: new DataTypes.DECIMAL(12, 2),
        },
        type: {
            type: new DataTypes.ENUM(...Object.values(ProfileType)),
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize: db,
        modelName: "Profile",
        tableName: "profiles",
    },
);

export default Profile;
