import { Worming, Task } from '../interfaces';

export class WormingBuilder {
    private readonly _worm: Worming;

    constructor(t: Task) {
      this._worm = t as Worming;
      this._worm.wormType = '';
      this._worm.date = new Date();
      this._worm.dose = '';
      this._worm.duration = '';
      this._worm.administeredBy = '';
    }

    wormType(wormType: string): WormingBuilder {
      this._worm.wormType = wormType;
      return this;
    }

    date(date: Date): WormingBuilder {
      this._worm.date = date;
      return this;
    }

    dose(dose: string): WormingBuilder {
      this._worm.dose = dose;
      return this;
    }

    duration(duration: string): WormingBuilder {
      this._worm.duration = duration;
      return this;
    }

    administeredBy(administeredBy: string): WormingBuilder {
      this._worm.administeredBy = administeredBy;
      return this;
    }

    build(): Worming {
      return this._worm;
    }
}
