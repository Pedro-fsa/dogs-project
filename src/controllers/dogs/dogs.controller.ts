import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import {
    ApiOkResponse,
    ApiOperation,
    ApiTags
  } from '@nestjs/swagger';
import { GetAllBreeds } from 'src/core/use_cases/dogs/get.breeds';
import { GetAllBreedsOutputDto } from '../../core/dto/dogs/getallBreeds.output.dto'

@ApiTags('dogs')
@Controller('dogs')
export class DogsController {
    constructor(private readonly getAllBreeds: GetAllBreeds) {}

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
    @HttpCode(HttpStatus.OK)
    getallBreeds(): Promise<GetAllBreedsOutputDto> {
        return this.getAllBreeds.call()
    }
}