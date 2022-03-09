import { Injectable } from "@nestjs/common";
import { GetAllBreedsOutputDto } from "src/core/dto/dogs/getallBreeds.output.dto";
import { DogBreedsResponse } from "src/core/use_cases/dogs/getAllBreeds.interface";
import { DogsAPIClient } from "./dogs.client";

@Injectable()
export class DogsService {
    constructor(private readonly dogsAPIClient: DogsAPIClient) {}
    private SUCCESS = 'success'

    async getAllBreeds(): Promise<GetAllBreedsOutputDto> {
        const uri = 'breeds/list/all';
        const res: DogBreedsResponse = await this.dogsAPIClient.get(uri);
        
        // TODO: Check if successful
        
        const allBreeds = []
        if (res.status === this.SUCCESS) {
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