export default class Employee extends Person{
    constructor(id,name,email,address,soNgayLam,luongTheoNgay){
        super(id,name,email,address);
        this.soNgayLam = soNgayLam;
        this.luongTheoNgay = luongTheoNgay;
    }
}

