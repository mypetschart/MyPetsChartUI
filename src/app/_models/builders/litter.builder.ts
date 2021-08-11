import { Litter } from '../interfaces';

export class LitterBuilder {
    private readonly _litter: Litter;

    constructor() {
      this._litter = {
        id: 0,
        name: '',
        dam: 0,
        sire: 0,
        breed: '',
        generation: '',
        dob: new Date(),
        photos: [],
        namingScheme: '',
        notes: '',
      };
    }

    id(id: number): LitterBuilder {
      this._litter.id = id;
      return this;
    }

    name(name: string): LitterBuilder {
      this._litter.name = name;
      return this;
    }
    
    dam(dam: number): LitterBuilder {
      this._litter.dam = dam;
      return this;
    }

    sire(sire: number): LitterBuilder {
      this._litter.sire = sire;
      return this;
    }

    breed(breed: string): LitterBuilder {
      this._litter.breed = breed;
      return this;
    }

    generation(generation: string): LitterBuilder {
      this._litter.generation = generation;
      return this;
    }

    dob(dob: Date): LitterBuilder {
      this._litter.dob = dob;
      return this;
    }

    photos(photos: string[]): LitterBuilder {
      this._litter.photos = photos;
      return this;
    }

    namingScheme(namingScheme: string): LitterBuilder {
      this._litter.namingScheme = namingScheme;
      return this;
    }

    notes(notes: string): LitterBuilder {
      this._litter.notes = notes;
      return this;
    }

    build(): Litter {
      return this._litter;
    }
}
