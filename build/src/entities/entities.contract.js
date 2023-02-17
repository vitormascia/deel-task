import { DataTypes, Model } from "sequelize";
import { db } from "../app/databases/index.js";
import { ContractStatus } from "../ts/index.js";
class Contract extends Model {
}
Contract.init({
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
}, {
    sequelize: db,
    modelName: "Contract",
    tableName: "contracts",
});
export default Contract;
//# sourceMappingURL=entities.contract.js.map