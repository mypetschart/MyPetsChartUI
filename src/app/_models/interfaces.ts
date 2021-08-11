export interface User {
    id: number;
    role: string;
    handle: string;
    fullName: string;
    businessName: string;
    email: string;
    password: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    profilePhoto: string;
}

export interface Dog {
    id: number;
    type: string;
    name: string;
    breed: string;
    generation: string;
    dob: Date;
    color: string;
    weight: number;
    microchip: string;
    photos: string[];
}

export interface Dam extends Dog {
    heat: {
        predicatedDate: Date;
        actualDate: Date;
        estFutureDate: Date;
        lengthInDays: number;
    };
}

export interface Sire extends Dog {
    studAppointments: Date[];
}

export interface Puppy extends Dog {
    sex: string;
    litter: number; // litter id
}

export interface Litter {
    id: number;
    name: string;
    dam: number; // dam id
    sire: number; // sire id
    breed: string;
    generation: string;
    dob: Date;
    photos: string[];
    namingScheme: string;
    notes: string;
}

// Task is the overarching task structure that determines when something is due
export interface Task {
    id: number;
    name: string;
    refId: number; // the unique id of the referencing entity, be it a dog or litter
    type: string;
    recur: RecurringDate;
    notes: string;
}

// RecurringDate represents dates that happen on a set frequency
// nextDate is set by the backend based on regularity
export interface RecurringDate {
    dateCreated: Date;
    regularity: string;
    nextDate: Date;
}

export interface Vaccination extends Task {
    vacType: string;
    date: Date;
    lot: string;
    administeredBy: string;
}

export interface Worming extends Task {
    wormType: string;
    date: Date;
    dose: string;
    duration: string;
    administeredBy: string;
}

export interface TempReading extends Task {
    date: Date;
    temp: number;
}
