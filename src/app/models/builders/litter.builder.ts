import { Litter, Task } from '../interfaces';

export class LitterBuilder {
    private readonly _litter: Litter;
    private readonly _tasks: Task[] = [];

    constructor() {
      this._litter = {
        id: 0,
        name: '',
        damID: 0,
        sireID: 0,
        breed: '',
        generation: '',
        dob: new Date(),
        photos: '',
        notes: '',
        tasks: this._tasks,
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

    damID(damID: number): LitterBuilder {
      this._litter.damID = damID;
      return this;
    }

    sireID(sireID: number): LitterBuilder {
      this._litter.sireID = sireID;
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

    photos(photos: string): LitterBuilder {
      this._litter.photos = photos;
      return this;
    }

    notes(notes: string): LitterBuilder {
      this._litter.notes = notes;
      return this;
    }

    tasks(tasks: Task[]): LitterBuilder {
      this._litter.tasks = tasks;
      return this;
    }

    build(): Litter {
      return this._litter;
    }
}
