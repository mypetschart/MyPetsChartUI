import { Worming, RecurringDate, Task } from '../interfaces';

export class WormingBuilder {
    private readonly _worm: Worming;
    private readonly _recur: RecurringDate;

    constructor(t: Task) {
      this._worm = {
        id: t.id,
        dogID: t.dogID,
        title: t.title,
        type: 'worm',
        recur: this._recur = {
            dateCreated: t.recur.dateCreated,
            regularity: t.recur.regularity,
            nextDate: t.recur.nextDate,
        },
        wormType: '',
        date: new Date(),
        dose: '',
        duration: '',
        administeredBy: '',
        notes: t.notes
      };
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
