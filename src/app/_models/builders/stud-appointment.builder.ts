import { StudAppointment, Task } from '../interfaces';

export class StudAppointmentBuilder {
    private readonly _appt: StudAppointment;

    constructor(t: Task) {
      this._appt = t as StudAppointment;
      this._appt.breeder = 0;
      this._appt.dam = 0;
      this._appt.cost = 0;
      this._appt.time = '';
      this._appt.location = '';
      this._appt.success = false;
    }

    breeder(breeder: number): StudAppointmentBuilder {
      this._appt.breeder = breeder;
      return this;
    }

    dam(dam: number): StudAppointmentBuilder {
      this._appt.dam = dam;
      return this;
    }

    cost(cost: number): StudAppointmentBuilder {
      this._appt.cost = cost;
      return this;
    }

    time(time: string): StudAppointmentBuilder {
      this._appt.time = time;
      return this;
    }

    location(location: string): StudAppointmentBuilder {
      this._appt.location = location;
      return this;
    }

    success(success: boolean): StudAppointmentBuilder {
      this._appt.success = success;
      return this;
    }

    build(): StudAppointment {
      return this._appt;
    }
}
