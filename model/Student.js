


import Person from "../model/Person.js";

export default class Student extends Person{
    constructor(name, address, id, email, math, physics, chemistry) {
        super(name, address, id, email);
        this.math = math;
        this.physics = physics;
        this.chemistry = chemistry;
      }
    tinhDiemTrungBinh = () => { 
        return ((this.math*1 + this.physics*1 +this.chemistry*1)/3);
     };
}

