import { Dog } from '../structs';

const date: Date = new Date('2019-01-16');

export const DOGS: Dog[] = [
    {
        id: 1,
        type: 'sire',
        name: 'rockefeller',
        sex: 'male',
        breed: 'goldendoodle',
        generation: 'f1',
        dob: date,
        color: 'white',
        weight: 28,
        microchip: 'hello',
        photos: 'photo'
    },
    {
        id: 2,
        type: 'dam',
        name: 'maggie',
        sex: 'female',
        breed: 'golden retriever',
        generation: 'f1',
        dob: date,
        color: 'red',
        weight: 42,
        microchip: 'hello',
        photos: 'photo'
    },
    {
        id: 3,
        type: 'puppy',
        name: 'felix',
        sex: 'female',
        breed: 'goldendoodle',
        generation: 'f1b',
        dob: date,
        color: 'blue merlee',
        weight: 31,
        microchip: 'hello',
        photos: 'photo'
    },
]