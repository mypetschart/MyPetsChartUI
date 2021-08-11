import { User } from '../interfaces';

export class UserBuilder {
    private readonly _user: User;

    constructor() {
      this._user = {
        id: 0,
        role: '',
        handle: '',
        fullName: '',
        businessName: '',
        email: '',
        password: '',
        phone: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        profilePhoto: ''
      };
    }

    id(id: number): UserBuilder {
      this._user.id = id;
      return this;
    }

    role(role: string): UserBuilder {
      this._user.role = role;
      return this;
    }

    handle(handle: string): UserBuilder {
      this._user.handle = handle;
      return this;
    }

    fullName(fullName: string): UserBuilder {
      this._user.fullName = fullName;
      return this;
    }

    businessName(businessName: string): UserBuilder {
      this._user.businessName = businessName;
      return this;
    }

    email(email: string): UserBuilder {
      this._user.email = email;
      return this;
    }

    password(password: string): UserBuilder {
      this._user.password = password;
      return this;
    }

    phone(phone: string): UserBuilder {
      this._user.phone = phone;
      return this;
    }

    street(street: string): UserBuilder {
      this._user.street = street;
      return this;
    }

    city(city: string): UserBuilder {
      this._user.city = city;
      return this;
    }

    zip(zip: string): UserBuilder {
      this._user.zip = zip;
      return this;
    }

    profilePhoto(profilePhoto: string): UserBuilder {
      this._user.profilePhoto = profilePhoto;
      return this;
    }

    state(state: string): UserBuilder {
      this._user.state = state;
      return this;
    }

    build(): User {
      return this._user;
    }
}
