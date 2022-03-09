import { ApiProperty } from "@nestjs/swagger";

export class GetAllBreedsOutputDto {
    @ApiProperty({ description: 'Status of the petition' })
    status: string;
    
    @ApiProperty({ description: 'List of all the available dog breeds' })
    message: {
        [breed: string]: string
    }
}