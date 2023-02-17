declare enum LogLevelColors {
    DEBUG = "bold green",
    INFO = "bold cyan",
    WARN = "bold yellow",
    ERROR = "bold red"
}
declare enum ProfileType {
    CLIENT = "client",
    CONTRACTOR = "contractor"
}
declare enum ContractStatus {
    NEW = "new",
    IN_PROGRESS = "in_progress",
    TERMINATED = "terminated"
}
export { ContractStatus, LogLevelColors, ProfileType };
