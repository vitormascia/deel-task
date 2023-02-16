import { ParamsDictionary, Query } from "express-serve-static-core";
import { IncomingHttpHeaders } from "http";
import { StatusCodes } from "http-status-codes";
import Joi from "joi";

import { Contract } from "../entities/index.js";
import { TAnyObject, TContractRepository, TEmptyObject, TModify } from "./types.js";

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

interface IGetContractRequestPath {
    [id: string]: string;
}

interface IGetContractRequest extends TModify<IHttpRequest, {
    path: IGetContractRequestPath;
}> { }

interface IGetContractResponse extends TModify<IHttpResponse, {
    data: {
        contract: Contract;
    };
}> { }

interface IBuildGetContract {
    contractRepository: TContractRepository;
}

export {
    IBuildGetContract,
    IConfig,
    IDatabase,
    IGetContractRequest,
    IGetContractResponse,
    IHttpRequest,
    IHttpResponse,
    IJoiBaseSchema,
    ILogger,
    IRequestParams,
};
