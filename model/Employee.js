import Person from "../model/Person.js";

export default class Employee extends Person{
    constructor(name, address, id, email, workDays, dailySalary) {
        super(name, address, id, email);
        this.workDays = workDays;
        this.dailySalary = dailySalary;
      }
    tinhLuong = () => { 
        return (this.workDays*1)*(this.dailySalary*1);
     };
}

