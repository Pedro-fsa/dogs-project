import { Controller, Get } from '@nestjs/common';
import {
    ApiOkResponse,
    ApiOperation,
    ApiTags,
    ApiBadRequestResponse,
  } from '@nestjs/swagger';
import { GetAllBreeds } from 'src/core/use_cases/dogs/get.breeds';
import { GetAllBreedsOutputDto } from '../../core/dto/dogs/getallBreeds.output.dto'

@ApiTags('dogs')
@Controller('dogs')
export class DogsController {
    constructor(private getAllBreeds: GetAllBreeds) {}

    @Get()
    getAll() {
        return 'Getting all dogs';
    }

    @Get('/breeds')
    @ApiOperation({
        description: 'Get list of all dog breeds'
    })
    @ApiOkResponse({
        description: 'Successful operation',
        type: GetAllBreedsOutputDto
    })
    getallBreeds() {
        return this.getAllBreeds.call()
    }
}