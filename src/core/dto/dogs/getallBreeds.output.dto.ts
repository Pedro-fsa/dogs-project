import { ApiProperty } from "@nestjs/swagger";

export class GetAllBreedsOutputDto {
    @ApiProperty({ description: 'Status of the petition' })
    breeds: string[];
    
    @ApiProperty({ description: 'List of all the available dog breeds' })
    total: number
}