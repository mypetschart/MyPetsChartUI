import { Dog, Sire } from '../interfaces';

export class SireBuilder {
    private readonly _sire: Sire;

    constructor(d: Dog) {
      this._sire = d as Sire;
      // this._sire.studAppointments = [];
    }

    // studAppointments(studAppointments: Date[]): SireBuilder {
    //   this._sire.studAppointments = studAppointments;
    //   return this;
    // }

    build(): Sire {
      return this._sire;
    }
}
