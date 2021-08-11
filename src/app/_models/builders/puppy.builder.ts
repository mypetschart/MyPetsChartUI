import { Dog, Puppy } from '../interfaces';

export class PuppyBuilder {
    private readonly _puppy: Puppy;

    constructor(d: Dog) {
      this._puppy = d as Puppy;
      this._puppy.sex = '';
      this._puppy.litter = 0;
    }

    sex(sex: string): PuppyBuilder {
      this._puppy.sex = sex;
      return this;
    }

    litter(litter: number): PuppyBuilder {
      this._puppy.litter = litter;
      return this;
    }

    build(): Puppy {
      return this._puppy;
    }
}
