import { DataTypes, Model } from "sequelize";
import { db } from "../app/databases/index.js";
import { ProfileType } from "../ts/index.js";
class Profile extends Model {
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
Profile.init({
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
}, {
    sequelize: db,
    modelName: "Profile",
    tableName: "profiles",
});
export default Profile;
//# sourceMappingURL=entities.profile.js.map