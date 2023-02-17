import { CreationOptional, InferAttributes, InferCreationAttributes, Model, NonAttribute } from "sequelize";
import { ProfileType } from "../ts/index.js";
import Contract from "./entities.contract.js";
declare class Profile extends Model<InferAttributes<Profile>, InferCreationAttributes<Profile>> {
    id: CreationOptional<number>;
    firstName: string;
    lastName: string;
    profession: string;
    balance: number;
    type: ProfileType;
    Client: NonAttribute<Contract[]>;
    createdAt: CreationOptional<Date>;
    updatedAt: CreationOptional<Date>;
    get fullName(): NonAttribute<string>;
}
export default Profile;
