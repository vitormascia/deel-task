import { NextFunction, Request, Response } from "express";
import winston from "winston";

import { Contract, Job, Profile } from "../entities/index.js";
import { IHttpRequest, IHttpResponse } from "./interfaces.js";

type TWinstonLogger = typeof winston;

type TContractRepository = typeof Contract;
type TProfileRepository = typeof Profile;
type TJobRepository = typeof Job;

type TAnyObject = object;
type TEmptyObject = Record<string, never>;
type TModify<T, R> = Omit<T, keyof R> & R;

type TBouncer = (req: Request, _res: Response, next: NextFunction) => Promise<void>;
type TGetProfile = (req: Request, _res: Response, next: NextFunction) => Promise<void>;
type TController = (httpRequest: IHttpRequest) => Promise<IHttpResponse> | IHttpResponse;
type TBuildCallback = (req: Request, res: Response, next: NextFunction) => Promise<void>;

export { TAnyObject, TBouncer, TBuildCallback, TContractRepository, TController, TEmptyObject, TGetProfile, TJobRepository, TModify, TProfileRepository, TWinstonLogger };
