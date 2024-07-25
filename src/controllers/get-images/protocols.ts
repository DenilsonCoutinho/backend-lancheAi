import { Image } from "../../models/images"

export interface IgetUsersController{
    handle():Promise<HttpResponse<Image>>
}

export interface IgetImageRepository{
    getImages():Promise<Image>
}