import { Task, TempReading } from '../interfaces';

export class TempReadingBuilder {
    private readonly _temp: TempReading;

    constructor(t: Task) {
      this._temp = t as TempReading;
      this._temp.date = new Date();
      this._temp.temp = 0;
    }

    date(date: Date): TempReadingBuilder {
      this._temp.date = date;
      return this;
    }

    temp(temp: number): TempReadingBuilder {
      this._temp.temp = temp;
      return this;
    }

    build(): TempReading {
      return this._temp;
    }
}
