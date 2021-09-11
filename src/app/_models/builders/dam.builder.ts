import { Dog, Dam } from '../interfaces';

export class DamBuilder {
    private readonly _dam: Dam;

    constructor(d: Dog) {
      this._dam = d as Dam;
      // this._dam.heat = {
      //   predicatedDate: new Date(),
      //   actualDate: new Date(),
      //   estFutureDate: new Date(),
      //   lengthInDays: 0
      // };
    }

    heat(heat: {
        predicatedDate: Date;
        actualDate: Date;
        estFutureDate: Date;
        lengthInDays: number
    }): DamBuilder {
      this._dam.heat.predicatedDate = heat.predicatedDate;
      this._dam.heat.actualDate = heat.actualDate;
      this._dam.heat.estFutureDate = heat.estFutureDate;
      this._dam.heat.lengthInDays = heat.lengthInDays;
      return this;
    }


    build(): Dam {
      return this._dam;
    }
}
