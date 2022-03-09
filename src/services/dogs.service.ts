import { Injectable } from "@nestjs/common";
import { GetAllBreedsOutputDto } from "src/core/dto/dogs/getallBreeds.output.dto";
import { Dog } from "src/core/entities/dog.entity";
import { DogBreedsResponse } from "src/core/use_cases/dogs/getAllBreeds.interface";
import { DogsAPIClient } from "./dogs.client";

@Injectable()
export class DogsService {
    constructor(private readonly dogsAPIClient: DogsAPIClient) {}
    private SUCCESS = 'success'

    async getAllBreeds(): Promise<Dog[]> {
        const uri = 'breeds/list/all';
        const res: DogBreedsResponse = await this.dogsAPIClient.get(uri);
        
        // TODO: Check if successful
        
        const allDogs = []
        if (res.status === this.SUCCESS) {
            Object.keys(res.message).forEach(breed => {
                let newDog = new Dog(breed);
                allDogs.push(newDog);
                if (res.message[breed].length) {
                    res.message[breed].forEach(subBreed => {
                        let newDog = new Dog(`${subBreed} ${breed}`);
                        allDogs.push(newDog);
                    })
                }
            })
        }
        return allDogs;
    }
}