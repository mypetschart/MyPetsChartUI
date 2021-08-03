import { Dog } from '../interfaces';

export class DogBuilder {
    private readonly _dog: Dog;

    constructor() {
      this._dog = {
        id: 0,
        type: '',
        name: '',
        sex: '',
        breed: '',
        generation: '',
        dob: new Date(),
        color: '',
        weight: 0,
        microchip: '',
        photos: ''
      };
    }

    type(type: string): DogBuilder {
      this._dog.type = type;
      return this;
    }

    name(name: string): DogBuilder {
      this._dog.name = name;
      return this;
    }

    sex(sex: string): DogBuilder {
      this._dog.sex = sex;
      return this;
    }

    breed(breed: string): DogBuilder {
      this._dog.breed = breed;
      return this;
    }

    generation(generation: string): DogBuilder {
      this._dog.generation = generation;
      return this;
    }

    dob(dob: Date): DogBuilder {
      this._dog.dob = dob;
      return this;
    }

    color(color: string): DogBuilder {
      this._dog.color = color;
      return this;
    }

    weight(weight: number): DogBuilder {
      this._dog.weight = weight;
      return this;
    }

    microchip(microchip: string): DogBuilder {
      this._dog.microchip = microchip;
      return this;
    }

    photos(photos: string): DogBuilder {
      this._dog.photos = photos;
      return this;
    }

    build(): Dog {
      return this._dog;
    }
}
