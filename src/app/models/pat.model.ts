export interface Pat {
    id: number,
    name: string,
    breed: string,
    gender: 'Male' | 'Female',
    animalType: 'Cat' | 'Dog',
    age: number,
    imageUrl: string,
    description: string,
    medicalNotes: string,
    additionImages: string[],
    adopted: boolean
}