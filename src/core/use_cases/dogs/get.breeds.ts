import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { DogBreedsResponse } from './getAllBreeds.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllBreeds {
    constructor(private httpService: HttpService) {}

    async call(): Promise<Observable<AxiosResponse<DogBreedsResponse>>> {
        return await this.httpService.get('https://dog.ceo/api/breeds/list/all', {
            headers: {
                'Accept': 'application/json'
            }
        }).pipe(
            map(response => response.data),
        );
    }
}