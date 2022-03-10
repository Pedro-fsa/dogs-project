import { Injectable } from '@nestjs/common';
import { GetAllBreedsOutputDto } from 'src/core/dto/dogs/getallBreeds.output.dto';
import { DogsService } from 'src/services/dogs.service';


@Injectable()
export class GetAllBreeds {
    public constructor(private readonly dogsService: DogsService) {}

    async call(): Promise<Partial<GetAllBreedsOutputDto>> {
        const dogList = await this.dogsService.getAllBreeds()
        const result: GetAllBreedsOutputDto = new GetAllBreedsOutputDto(dogList);
        return result.getOutput();
    }
}