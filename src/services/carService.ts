import {apiService} from "./apiService";
import {urls} from "../constans/urls";
import {ICar} from "../interfaces/carInterface";
import {IResp} from "../types/responseType";

const carService = {
    getAll:():IResp<ICar[]> => apiService.get(urls.cars.base),
    create: (data: ICar): IResp<ICar> => apiService.post(urls.cars.base, data),
    updateById:(id:number, data:ICar): IResp<ICar> => apiService.put(urls.cars.byId(id), data),
    deleteById: (id:number) :IResp<void> => apiService.delete(urls.cars.byId(id))
}

export {carService}