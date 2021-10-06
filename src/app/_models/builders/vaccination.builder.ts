import { Vaccination, Task } from '../interfaces';

export class VacBuilder {
    private readonly _vac: Vaccination;

    constructor(t: Task) {
      this._vac = t as Vaccination;
      this._vac.vacType = '';
      this._vac.date = new Date();
      this._vac.lot = '';
      this._vac.administeredBy = '';
    }

    vacType(vacType: string): VacBuilder {
      this._vac.vacType = vacType;
      return this;
    }

    date(date: Date): VacBuilder {
      this._vac.date = new Date(date);
      return this;
    }

    lot(lot: string): VacBuilder {
      this._vac.lot = lot;
      return this;
    }

    administeredBy(administeredBy: string): VacBuilder {
      this._vac.administeredBy = administeredBy;
      return this;
    }

    build(): Vaccination {
      return this._vac;
    }
}
