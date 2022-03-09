import { Injectable } from '@nestjs/common';
import { GetAllBreedsOutputDto } from 'src/core/dto/dogs/getallBreeds.output.dto';
import { DogsService } from 'src/services/dogs.service';


@Injectable()
export class GetAllBreeds {
    constructor(private readonly dogsService: DogsService) {}

    async call(): Promise<GetAllBreedsOutputDto> {
        return this.dogsService.getAllBreeds()
    }
}