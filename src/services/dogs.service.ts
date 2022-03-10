import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
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
        const { status, message } = res;

        if (status === this.SUCCESS) {
            const allDogs = Object.keys(message).map(breedName => {
                if (!message[breedName]?.length) {
                    return new Dog(breedName);
                } else {
                    return message[breedName].map(subBreed => {
                        return new Dog(`${subBreed} ${breedName}`)
                    })
                }
            })
            console.log(allDogs.flat())
            return allDogs.flat();
        } else {
            throw new HttpException('Bad data received from Dogs service', HttpStatus.BAD_REQUEST);
        }
    }
}