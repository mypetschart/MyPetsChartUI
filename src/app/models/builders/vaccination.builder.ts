import { Vaccination, RecurringDate, Task } from '../interfaces';

export class VacBuilder {
    private readonly _vac: Vaccination;
    private readonly _recur: RecurringDate;

    constructor(t: Task) {
      this._vac = {
        id: t.id,
        dogID: t.dogID,
        title: t.title,
        type: 'vac',
        recur: this._recur = {
            dateCreated: t.recur.dateCreated,
            regularity: t.recur.regularity,
            nextDate: t.recur.nextDate,
        },
        vacType: '',
        date: new Date(),
        lot: '',
        administeredBy: '',
        notes: t.notes
      };
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
