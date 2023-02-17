import Contract from "./entities.contract.js";
import Job from "./entities.job.js";
import Profile from "./entities.profile.js";
Profile.hasMany(Contract, { as: "Contractor", foreignKey: "ContractorId" });
Contract.belongsTo(Profile, { as: "Contractor" });
Profile.hasMany(Contract, { as: "Client", foreignKey: "ClientId" });
Contract.belongsTo(Profile, { as: "Client" });
Contract.hasMany(Job, { foreignKey: "ContractId" });
Job.belongsTo(Contract);
export { Contract, Job, Profile };
//# sourceMappingURL=index.js.map