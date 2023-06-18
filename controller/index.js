
import Student from "../model/Student.js";
import ListPerson from "../model/ListPerson.js";
import Person from "../model/Person.js";
// sự kiện thêm student

let listPerson = new ListPerson();


listPerson.layLocal();
document.getElementById('btnThemStudent').addEventListener('click',()=>{
    console.log('Hi')
    //lấy data người dùng
    //sử dung queryselector all
    let arrInput = document.querySelectorAll(
        '#studentForm input');
    // console.log(arrInput);
    let student = new Student();
    //dùng vòng lặp để lấy dữ liệu
    for (const item of arrInput) {
        // let id = item.id;
        // let value = item.value;
        let { id, value } = item;
        student[id] = value;
    }
    listPerson.addStudent(student);
    listPerson.luuLocal();
    listPerson.renderPerson();
    document.getElementById('btnClose').click();
});

//Khi lấy giá trị từ id các biến id phải trùng với biến contructor phải không?

window.xoaPerson=(idPerson) => { 
    listPerson.xoaPerson(idPerson);
 };

 window.layThongTinPerson=(idPerson) => { 
    listPerson.layThongTinPerson(idPerson);
  }

  document.getElementById('btnCapNhat').onclick = () => {
    // lấy dữ liệu người dùng
    let arrInput = document.querySelectorAll(
        '#studentForm input');
        let student = new Student();
        //dùng vòng lặp để lấy dữ liệu
        for (const item of arrInput) {
            // let id = item.id;
            // let value = item.value;
            let { id, value } = item;
            student[id] = value;
        }
    listPerson.chinhSuaPerson(student);
  };