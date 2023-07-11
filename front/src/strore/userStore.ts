import { makeAutoObservable } from 'mobx';
import { UserType } from '../types/userTypes';

class User {
  email: string | null = null;
  firstName: string | null = null;
  lastName: string | null = null;
  id: number | null = null;

  constructor() {
    makeAutoObservable(this)
  }

  setUser(user: UserType) {
    console.log(user);
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.id = user.id;
  }
}

export default new User();