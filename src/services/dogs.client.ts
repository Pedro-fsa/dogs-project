import { Injectable } from "@nestjs/common";
import Axios from 'axios';
import { DogBreedsResponse } from '../core/use_cases/dogs/getAllBreeds.interface'

@Injectable()
export class DogsAPIClient {
    private readonly url: string = 'https://dog.ceo/api/'

    public async get(uri: string): Promise<DogBreedsResponse> {
        const request: DogBreedsResponse = await Axios.get(this.url + uri)
            .then(res => res.data)
            .catch(err => console.error('handle error'))
        return request
    }
}