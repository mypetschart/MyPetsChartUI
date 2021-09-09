import { Dog } from '../interfaces';

export class DogBuilder {
    private readonly _dog: Dog;

    constructor() {
      this._dog = {
        id: 0,
        type: '',
        name: '',
        breed: '',
        generation: '',
        dob: new Date(),
        color: '',
        weight: 0,
        microchip: '',
        photos: []
      };
    }

    id(id: number | undefined): DogBuilder {
      const i: number = id ?? 0; // default it to empty if null
      this._dog.id = i;
      return this;
    }

    type(type: string | undefined): DogBuilder {
      const i: string = type ?? ''; // default it to empty if null
      this._dog.type = i;
      return this;
    }

    name(name: string | undefined): DogBuilder {
      const i: string = name ?? ''; // default it to empty if null
      this._dog.name = i;
      return this;
    }

    breed(breed: string | undefined): DogBuilder {
      const i: string = breed ?? ''; // default it to empty if null
      this._dog.breed = i;
      return this;
    }

    generation(generation: string | undefined): DogBuilder {
      const i: string = generation ?? ''; // default it to empty if null
      this._dog.generation = i;
      return this;
    }

    dob(dob: Date | undefined): DogBuilder {
      const i: Date = dob ?? new Date(); // default it to empty if null
      this._dog.dob = i;
      return this;
    }

    color(color: string | undefined): DogBuilder {
      const i: string = color ?? ''; // default it to empty if null
      this._dog.color = i;
      return this;
    }

    weight(weight: number | undefined): DogBuilder {
      const i: number = weight ?? 0; // default it to empty if null
      this._dog.weight = i;
      return this;
    }

    microchip(microchip: string | undefined): DogBuilder {
      const i: string = microchip ?? ''; // default it to empty if null
      this._dog.microchip = i;
      return this;
    }

    photos(photos: string[] | undefined): DogBuilder {
      const i: string[] = photos ?? []; // default it to empty if null
      this._dog.photos = i;
      return this;
    }

    build(): Dog {
      return this._dog;
    }
}
