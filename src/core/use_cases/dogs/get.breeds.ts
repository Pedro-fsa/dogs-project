import { Injectable } from '@nestjs/common';
import { DogsAPIClient } from '../../../services/dogs.client' 
import { GetAllBreedsOutputDto } from 'src/core/dto/dogs/getallBreeds.output.dto';
import { DogBreedsResponse } from './getAllBreeds.interface'
const SUCCESS = 'success'

@Injectable()
export class GetAllBreeds {
    constructor(private readonly dogsAPIClient: DogsAPIClient) {}

    async call(): Promise<GetAllBreedsOutputDto> {
        const uri = 'breeds/list/all';
        const res: DogBreedsResponse = await this.dogsAPIClient.get(uri);
        
        // TODO: Check if successful
        
        const allBreeds = []
        if (res.status === SUCCESS) {
            Object.keys(res.message).forEach(breed => {
                allBreeds.push(breed);
                if (res.message[breed].length) {
                    res.message[breed].forEach(subBreed => {
                        allBreeds.push(`${subBreed} ${breed}`);
                    })
                }
            })
        }
        const result: GetAllBreedsOutputDto = {
            breeds: allBreeds,
            total: allBreeds.length
        }
        return result;
    }
}