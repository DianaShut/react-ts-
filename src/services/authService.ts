import {IAuth, ITokens, IUser} from "../interfaces";
import {IRes} from "../types";
import {apiService} from "./apiService";
import {urls} from "../constans";

const accessTokenKey = 'access'
const refreshTokenKey = 'refresh'

const authService = {
    setTokens({access, refresh}:ITokens): void{
        localStorage.setItem(accessTokenKey, access)
        localStorage.setItem(refreshTokenKey, refresh)
    },
    getAccessToken():string{
        return localStorage.getItem(accessTokenKey)
    },
    getRefreshToken():string{
        return localStorage.getItem(refreshTokenKey)
    },
    deleteTokens():void{
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    },
    register(user:IAuth): IRes<IUser>{
        return apiService.post(urls.auth.register, user)
    },
    me(): IRes<IUser>{
        return apiService.get(urls.auth.me)
    },
    async login(user:IAuth): Promise<IUser>{
        const {data} = await apiService.post(urls.auth.login, user)
        this.setTokens(data)
        const {data: me} = await this.me()
        return me
    },
    async refresh(): Promise<void>{
        const refreshToken = this.getRefreshToken()
        const {data} = await apiService.post(urls.auth.refresh, {refresh: refreshToken}) //отримуємо нові токени
        this.setTokens(data)
    }
}

export {authService}