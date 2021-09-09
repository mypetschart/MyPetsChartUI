import { Notification } from '../interfaces';

export class NotificationBuilder {
    private readonly _notification: Notification;

    constructor() {
        this._notification = {
            id: 0,
            dateCreated: new Date(),
            title: 'title',
            body: 'body'
        };
    }

    id(id: number): NotificationBuilder {
        this._notification.id = id;
        return this;
    }

    dateCreated(dateCreated: Date): NotificationBuilder {
        this._notification.dateCreated = dateCreated;
        return this;
    }

    title(title: string): NotificationBuilder {
        this._notification.title = title;
        return this;
    }

    body(body: string): NotificationBuilder {
        this._notification.body = body;
        return this;
    }

    build(): Notification {
      return this._notification;
    }
}
