var LogLevelColors;
(function (LogLevelColors) {
    LogLevelColors["DEBUG"] = "bold green";
    LogLevelColors["INFO"] = "bold cyan";
    LogLevelColors["WARN"] = "bold yellow";
    LogLevelColors["ERROR"] = "bold red";
})(LogLevelColors || (LogLevelColors = {}));
var ProfileType;
(function (ProfileType) {
    ProfileType["CLIENT"] = "client";
    ProfileType["CONTRACTOR"] = "contractor";
})(ProfileType || (ProfileType = {}));
var ContractStatus;
(function (ContractStatus) {
    ContractStatus["NEW"] = "new";
    ContractStatus["IN_PROGRESS"] = "in_progress";
    ContractStatus["TERMINATED"] = "terminated";
})(ContractStatus || (ContractStatus = {}));
export { ContractStatus, LogLevelColors, ProfileType };
//# sourceMappingURL=enums.js.map