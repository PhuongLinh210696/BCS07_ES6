


import Person from "../model/Person.js";

export default class Student extends Person{
    constructor(id,name,email,address,toan,ly,hoa){
        super(id,name,email,address);
        this.toan = toan;
        this.ly = ly;
        this.hoa = hoa;
    }
}

