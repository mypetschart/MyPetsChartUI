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

export interface Dam {
    dog: Dog;
    heats: Heat[];
    temps: TempReading[];
}

export interface Puppy {
    dog: Dog;
    litter: Litter;
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
    tasks: Task[];
}

// Task is the overarching task structure that determines when something is due
// The regularity determines when the nextDate should be, and the nextDate is updated whenever it passes
export interface Task {
    id: number;
    dogID: number;
    title: string;
    type: string;
    recur: RecurringDate;
    notes: string;
}

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

export interface Heat extends Task {
    predicatedDate: Date;
    actualDate: Date;
    estFutureDate: Date;
    lengthInDays: number;
}
