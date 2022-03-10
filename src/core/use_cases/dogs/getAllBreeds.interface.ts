export interface DogBreedsResponse {
    status: string,
    message: DogBreedsList
}

interface DogBreedsList {
    [breed: string]: string[]
}