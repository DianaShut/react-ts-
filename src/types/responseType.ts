import {AxiosResponse} from "axios";


type IResp<T> =  Promise<AxiosResponse<T>>

export type {IResp}