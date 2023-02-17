import { CreationOptional, ForeignKey, InferAttributes, InferCreationAttributes, Model, NonAttribute } from "sequelize";
import Contract from "./entities.contract.js";
declare class Job extends Model<InferAttributes<Job>, InferCreationAttributes<Job>> {
    id: CreationOptional<number>;
    description: string;
    price: number;
    paid: CreationOptional<boolean>;
    paymentDate: CreationOptional<string>;
    ContractId: ForeignKey<Contract["id"]>;
    Contract?: NonAttribute<Contract>;
    createdAt: CreationOptional<Date>;
    updatedAt: CreationOptional<Date>;
}
export default Job;
