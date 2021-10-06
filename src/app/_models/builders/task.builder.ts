import { Task, RecurringDate, Vaccination } from '../interfaces';

export class TaskBuilder {
    private readonly _task: Task;
    private readonly _recur: RecurringDate;

    constructor() {
        this._task = {
            id: 0,
            name: 'task',
            refId: 0,
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
      const i: number = id ?? 0; // default it to empty if null
      this._task.id = i;
      return this;
    }

    name(name: string | undefined): TaskBuilder {
      const i: string = name ?? ''; // default it to empty if null
      this._task.name = i;
      return this;
    }

    refId(refId: number | undefined): TaskBuilder {
      const i: number = refId ?? 0; // default it to empty if null
      this._task.refId = i;
      return this;
    }

    type(type: string | undefined): TaskBuilder {
      const i: string = type ?? ''; // default it to empty if null
      this._task.type = i;
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
