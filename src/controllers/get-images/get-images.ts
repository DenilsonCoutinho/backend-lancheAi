import { start } from "repl";
import { IgetImageRepository, IgetUsersController } from "./protocols";

export class GetImagesController implements IgetUsersController {
    getImageRepository: IgetImageRepository

    constructor(getImageRepository: IgetImageRepository) {
        this.getImageRepository = getImageRepository;
    }
    async handle() {
        try {
            const image = await this.getImageRepository.getImages()

            return {
                statusCode: 200,
                body: image
            }

        } catch (error) {
            return{
                statusCode:500,
                body:"Alguma coisa deu errado!"
            }
        }
    }
}
