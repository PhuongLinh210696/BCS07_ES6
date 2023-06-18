export default class Customer extends Person{
    constructor(id,name,email,address,tenCongTy,triGiaHoaDon,danhGia){
        super(id,name,email,address);
        this.tenCongTy = tenCongTy;
        this.triGiaHoaDon = triGiaHoaDon;
        this.danhGia = danhGia;
    }
}