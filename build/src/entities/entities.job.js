import { DataTypes, Model } from "sequelize";
import { db } from "../app/databases/index.js";
class Job extends Model {
}
Job.init({
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
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    sequelize: db,
    modelName: "Job",
    tableName: "jobs",
});
export default Job;
//# sourceMappingURL=entities.job.js.map