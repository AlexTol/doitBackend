import { PhoneNumber } from "./util_classes/PhoneNumber";
class User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: PhoneNumber;
  constructor(fn: string, ln: string, e: string, pn: PhoneNumber) {
    this.firstName = fn;
    this.lastName = ln;
    this.email = e;
    this.phoneNumber = pn;
  }
}
