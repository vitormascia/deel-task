/// <reference types="node" resolution-mode="require"/>
import { ParamsDictionary, Query } from "express-serve-static-core";
import { IncomingHttpHeaders } from "http";
import { StatusCodes } from "http-status-codes";
import Joi from "joi";
import { Sequelize } from "sequelize";
import { Contract, Job, Profile } from "../entities/index.js";
import { TAnyObject, TContractRepository, TEmptyObject, TJobRepository, TModify, TProfileRepository } from "./types.js";
interface IConfig {
    APP: {
        PORT: number;
        NAME: string;
        ENVIRONMENT: string;
    };
}
interface IDatabase<TDatabase, TConnectReturn> {
    db: TDatabase;
    connect(): Promise<TConnectReturn>;
}
interface ILogger<TLogger, TCreateReturn> {
    logger: TLogger;
    create(): TCreateReturn;
}
interface IJoiBaseSchema {
    body: Joi.ObjectSchema;
    path: Joi.ObjectSchema;
    query: Joi.ObjectSchema;
}
interface IRequestParams {
    body: any;
    path: ParamsDictionary;
    query: Query;
}
interface IHttpRequest extends IRequestParams {
    method: string;
    url: {
        protocol: string;
        host: string;
        endpoint: string;
    };
    source: {
        ip: string;
        userAgent: string;
    };
    headers: IncomingHttpHeaders;
}
interface IHttpResponse {
    statusCode: StatusCodes;
    data: TAnyObject | TEmptyObject;
}
interface IGetContractsRequest extends TModify<IHttpRequest, {
    body: TEmptyObject;
}> {
}
interface IGetContractsResponse extends TModify<IHttpResponse, {
    data: {
        contracts: Contract[];
    };
}> {
}
interface IBuildGetContracts {
    contractRepository: TContractRepository;
}
interface IGetContractRequest extends TModify<IHttpRequest, {
    body: TEmptyObject;
}> {
}
interface IGetContractResponse extends TModify<IHttpResponse, {
    data: {
        contract: Contract;
    };
}> {
}
interface IBuildGetContract {
    contractRepository: TContractRepository;
}
interface IGetUnpaidJobsRequest extends TModify<IHttpRequest, {
    body: TEmptyObject;
}> {
}
interface IGetUnpaidJobsResponse extends TModify<IHttpResponse, {
    data: Job[];
}> {
}
interface IBuildGetUnpaidJobs {
    contractRepository: TContractRepository;
}
interface IPayJobRequest extends TModify<IHttpRequest, {
    body: TEmptyObject;
}> {
}
interface IPayJobResponse extends TModify<IHttpResponse, {
    data: {
        client: Profile;
        contractor: Profile;
        contract: Contract;
        job: Job;
    };
}> {
}
interface IBuildPayJob {
    profileRepository: TProfileRepository;
    jobRepository: TJobRepository;
    contractRepository: TContractRepository;
    db: Sequelize;
}
interface IDepositMoneyRequestBody {
    deposit: number;
}
interface IDepositMoneyRequest extends TModify<IHttpRequest, {
    body: IDepositMoneyRequestBody;
}> {
}
interface IDepositMoneyResponse extends TModify<IHttpResponse, {
    data: {
        clientDepositor: Profile;
        clientReceiver: Profile;
        deposit: number;
    };
}> {
}
interface IBuildDepositMoney {
    profileRepository: TProfileRepository;
    jobRepository: TJobRepository;
    contractRepository: TContractRepository;
    db: Sequelize;
}
interface IGetBestProfessionRequest extends TModify<IHttpRequest, {
    body: TEmptyObject;
}> {
}
interface IGetBestProfessionResponse extends TModify<IHttpResponse, {
    data: {
        name: string;
        earns: number;
    };
}> {
}
interface IBuildGetBestProfession {
    profileRepository: TProfileRepository;
    jobRepository: TJobRepository;
    contractRepository: TContractRepository;
}
interface IGetBestClientsRequest extends TModify<IHttpRequest, {
    body: TEmptyObject;
}> {
}
interface IGetBestClientsResponse extends TModify<IHttpResponse, {
    data: TAnyObject;
}> {
}
interface IBuildGetBestClients {
    profileRepository: TProfileRepository;
    jobRepository: TJobRepository;
    contractRepository: TContractRepository;
}
export { IBuildDepositMoney, IBuildGetBestClients, IBuildGetBestProfession, IBuildGetContract, IBuildGetContracts, IBuildGetUnpaidJobs, IBuildPayJob, IConfig, IDatabase, IDepositMoneyRequest, IDepositMoneyResponse, IGetBestClientsRequest, IGetBestClientsResponse, IGetBestProfessionRequest, IGetBestProfessionResponse, IGetContractRequest, IGetContractResponse, IGetContractsRequest, IGetContractsResponse, IGetUnpaidJobsRequest, IGetUnpaidJobsResponse, IHttpRequest, IHttpResponse, IJoiBaseSchema, ILogger, IPayJobRequest, IPayJobResponse, IRequestParams, };
