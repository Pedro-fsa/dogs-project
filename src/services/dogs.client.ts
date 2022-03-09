import { Injectable } from "@nestjs/common";
import Axios from 'axios';
import { GetAllBreedsOutputDto } from "src/core/dto/dogs/getallBreeds.output.dto";

@Injectable()
export class DogsAPIClient {
    private readonly url: string = 'https://dog.ceo/api/'

    public async get(uri: string): Promise<GetAllBreedsOutputDto> {
        const request: GetAllBreedsOutputDto = await Axios.get(this.url + uri)
            .then(res => res.data)
            .catch(err => console.error('handle error'))
        return request
    }
}