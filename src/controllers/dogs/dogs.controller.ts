import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios'
import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DogBreedsResponse } from 'src/core/dto/dogs/GetDogBreedsResponse.dto';

@Controller('dogs')
export class DogsController {
    constructor(private httpService: HttpService) {}

    @Get()
    getAll() {
        return 'Getting all dogs';
    }

    @Get('/breeds')
    getBreeds(): Observable<AxiosResponse<DogBreedsResponse>> {
        return this.httpService.get('https://dog.ceo/api/breeds/list/all', {
            headers: {
                'Accept': 'application/json'
            }
        }).pipe(
            map(response => response.data),
        );
    }
}