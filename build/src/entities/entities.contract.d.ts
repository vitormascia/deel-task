import { CreationOptional, ForeignKey, InferAttributes, InferCreationAttributes, Model, NonAttribute } from "sequelize";
import { ContractStatus } from "../ts/index.js";
import Job from "./entities.job.js";
import Profile from "./entities.profile.js";
declare class Contract extends Model<InferAttributes<Contract>, InferCreationAttributes<Contract>> {
    id: CreationOptional<number>;
    terms: string;
    status: ContractStatus;
    ContractorId: ForeignKey<Profile["id"]>;
    ClientId: ForeignKey<Profile["id"]>;
    Jobs: NonAttribute<Job[]>;
    Contractor: NonAttribute<Profile>;
    Client: NonAttribute<Profile>;
    createdAt: CreationOptional<Date>;
    updatedAt: CreationOptional<Date>;
}
export default Contract;
