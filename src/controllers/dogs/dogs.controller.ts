import { Controller, Get } from '@nestjs/common';
import { GetAllBreeds } from 'src/core/use_cases/dogs/getAllBreeds';


@Controller('dogs')
export class DogsController {
    constructor(private getAllBreeds: GetAllBreeds) {}

    @Get()
    getAll() {
        return 'Getting all dogs';
    }

    @Get('/breeds')
    getallBreeds() {
        return this.getAllBreeds.call()
    }
}