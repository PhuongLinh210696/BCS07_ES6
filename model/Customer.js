import Person from "../model/Person.js";

export default class Customer extends Person{
    constructor(name, address, id, email, companyName, orderValue, rating) {
        super(name, address, id, email);
        this.companyName = companyName;
        this.orderValue = orderValue;
        this.rating = rating;
      }
}