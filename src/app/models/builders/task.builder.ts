import { Task, RecurringDate, Vaccination } from '../interfaces';

export class TaskBuilder {
    private readonly _task: Task;
    private readonly _recur: RecurringDate;

    constructor() {
        this._task = {
            id: 0,
            dogID: 0,
            title: '',
            type: 'task',
            recur: this._recur = {
                dateCreated: new Date(),
                regularity: '',
                nextDate: new Date(),
                },
            notes: ''
        };
    }

    id(id: number | undefined): TaskBuilder {
      const i: number = id ?? 0; // default it to zero if null
      this._task.id = i;
      return this;
    }

    type(type: string | undefined): TaskBuilder {
      const i: string = type ?? ''; // default it to empty if null
      this._task.type = i;
      return this;
    }

    dogID(dogID: number | undefined): TaskBuilder {
      const i: number = dogID ?? 0; // default it to zero if null
      this._task.dogID = i;
      return this;
    }

    title(title: string | undefined): TaskBuilder {
      const i: string = title ?? ''; // default it to empty if null
      this._task.title = i;
      return this;
    }

    recur(recur: RecurringDate | undefined): TaskBuilder {
      const i: RecurringDate = recur ?? {
        dateCreated: new Date(),
        regularity: '',
        nextDate: new Date()
      }; // default it to empty if null

      this._task.recur.dateCreated = new Date(i.dateCreated);
      this._task.recur.regularity = i.regularity;
      this._task.recur.nextDate = new Date(i.nextDate);
      return this;
    }

    notes(notes: string | undefined): TaskBuilder {
      const i: string = notes ?? ''; // default it to empty if null
      this._task.notes = i;
      return this;
    }

    build(): Task {
      return this._task;
    }
}
