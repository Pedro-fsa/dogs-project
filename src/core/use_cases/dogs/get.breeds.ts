import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { DogBreedsResponse } from './getAllBreeds.interface';
import { Injectable } from '@nestjs/common';
import { DogsAPIClient } from '../../../services/dogs.client' 
import { GetAllBreedsOutputDto } from 'src/core/dto/dogs/getallBreeds.output.dto';


@Injectable()
export class GetAllBreeds {
    constructor(private readonly dogsAPIClient: DogsAPIClient) {}

    async call(): Promise<GetAllBreedsOutputDto> {
        const uri = 'breeds/list/all';
        const res: GetAllBreedsOutputDto = await this.dogsAPIClient.get(uri);
        return res
    }
}