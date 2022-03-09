import { ApiProperty } from "@nestjs/swagger";

export class Dog {
    constructor(breed: string) {
        this.breed = breed;
    }

    @ApiProperty({ required: true })
    breed: string;
}