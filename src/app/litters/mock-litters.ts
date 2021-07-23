import { Litter, Vaccination, Worming } from '../structs';

const date: Date = new Date('2019-01-16');

const mockVaccination: Vaccination[] = [
    {
        type: 'pfizer',
        date: date,
        lot: 'lot?',
        administeredBy: 'me!',
        notes: 'no notes'
    }
];

const mockWorming: Worming[] = [
    {
        type: 'pfizer',
        date: date,
        dose: 'dose',
        duration: 'longggg',
        administeredBy: 'me!',
        notes: 'no notes'
    }
];

export const LITTERS: Litter[] = [
    {
        id: 1,
        name: 'Mock litter 1',
        damID: 2,
        sireID: 1,
        breed: 'goldendoodle',
        generation: 'f1',
        dob: date,
        photos: 'photo',
        notes: 'note',
        vaccinations: mockVaccination,
        wormings: mockWorming,
    },
];
