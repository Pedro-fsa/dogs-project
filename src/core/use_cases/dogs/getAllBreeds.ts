import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { DogBreedsResponse } from 'src/core/dto/dogs/GetDogBreedsResponse.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllBreeds {
    constructor(private httpService: HttpService) {}

    call(): Observable<AxiosResponse<DogBreedsResponse>> {
        return this.httpService.get('https://dog.ceo/api/breeds/list/all', {
            headers: {
                'Accept': 'application/json'
            }
        }).pipe(
            map(response => {
                console.log(response.data)
                return response.data
            }),
        );
    }
}