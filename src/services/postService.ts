import {IRes} from "../types";
import {IPost} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constans";

const postService = {
    getAll:():IRes<IPost[]> => apiService.get(urls.users.base),
    getById:(id:number):IRes<IPost> => apiService.get(urls.users.byId(id))
}
export{postService}