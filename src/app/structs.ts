export interface Dog {
    id: number;
    type: string;
    name: string;
    sex: string;
    breed: string;
    generation: string;
    dob: Date;
    color: string;
    weight: number;
    microchip: string;
    photos: string;
}

export interface Litter {
    id: number;
    name: string;
    damID: number;
    sireID: number;
    breed: string;
    generation: string;
    dob: Date;
    photos: string;
    notes: string;
    vaccinations: Vaccination[];
    wormings: Worming[];
}

export interface Vaccination {
    type: string;
    date: Date;
    lot: string;
    administeredBy: string;
    notes: string;
}

export interface Worming {
    type: string;
    date: Date;
    dose: string;
    duration: string;
    administeredBy: string;
    notes: string;
}
