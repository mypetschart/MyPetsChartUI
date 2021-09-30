import { Time } from "@angular/common";

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

/*
*   Dog related interfaces
*/
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
    // studAppointments: Date[];
}

export interface Puppy extends Dog {
    identifier: string;
    sex: string;
    litter: number; // litter id
}

/*
*   Litter interface
*/
export interface Litter {
    id: number;
    name: string;
    dam: number; // dam id
    sire: number; // sire id
    breed: string;
    generation: string;
    dob: Date;
    photos: string[];
    identificationMethod: string;
    notes: string;
}

/*
*   Task related interfaces
*/
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

export interface Medication extends Task {
    medType: string;
    date: Date;
    administeredBy: string;
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

export interface Feeding extends Task {
    litter: number;
    time: Time;
}

export interface Delivery extends Task {
    contact: number; // the id of the associated delivery contact
    date: Date;
    time: Time;
    address: string;
    miles: number;
    cost: number; // in cents
}

export interface DeliveryRoute {
    deliveries: Delivery[];
}

export interface StudAppointment extends Task {
    breeder: number;
    dam: number;
    cost: number; // in cents
    time: string;
    location: string;
    success: boolean; // TODO auto remind to mark as success or failure at some point
}

/*
*   Notification related interfaces
*/
export interface Notification {
    id: number;
    dateCreated: Date;
    title: string;
    body: string;
}

/*
*   Contact related interfaces
*/
export interface Contact {
    id: number;
    handle: string;
    fullName: string;
    email: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    outstandingPayments: number;
}

export interface WaitList {
    contacts: Contact[];
}
