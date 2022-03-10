import { ApiProperty } from "@nestjs/swagger";
import { Dog } from "src/core/entities/dog.entity";

export class GetAllBreedsOutputDto {
    constructor(private readonly dogsList: Dog[]) {
        this.breeds = dogsList.map(dog => dog.breed);
        this.total = dogsList.length;
    }

    @ApiProperty({ description: 'Status of the petition' })
    readonly breeds: string[];
    
    @ApiProperty({ description: 'List of all the available dog breeds' })
    readonly total: number

    getOutput() {
        return {
            breeds: this.breeds,
            total: this.total
        } 
    }
}