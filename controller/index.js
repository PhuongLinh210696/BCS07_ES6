import Student from "../model/Student.js";
import ListPerson from "../model/ListPerson.js";
import Person from "../model/Person.js";
import Employee from "../model/Employee.js"
import Customer from "../model/Customer.js"
// sự kiện thêm student

let listPerson = new ListPerson();


// listPerson.layLocal();
// const personTypeSelect = document.getElementById("loai");
const personForm = document.getElementById("personForm");
const typeSelect = document.getElementById("loai");
const studentFields = document.getElementById("studentFields");
const employeeFields = document.getElementById("employeeFields");
const customerFields = document.getElementById("customerFields");

typeSelect.addEventListener("change", function () {
    const selectedType = typeSelect.value;
    if (selectedType === "student") {
      studentFields.style.display = "block";
      employeeFields.style.display = "none";
      customerFields.style.display = "none";
    } else if (selectedType === "employee") {
      studentFields.style.display = "none";
      employeeFields.style.display = "block";
      customerFields.style.display = "none";
    } else if (selectedType === "customer") {
      studentFields.style.display = "none";
      employeeFields.style.display = "none";
      customerFields.style.display = "block";
    }
  });
  personForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const selectedType = typeSelect.value;
    const name = document.getElementById("nameInput").value;
    const address = document.getElementById("addressInput").value;
    const id = document.getElementById("idInput").value;
    const email = document.getElementById("emailInput").value;
  
    let person;
  
    if (selectedType === "student") {
      const math = document.getElementById("mathInput").value;
      const physics = document.getElementById("physicsInput").value;
      const chemistry = document.getElementById("chemistryInput").value;
      person = new Student(name, address, id, email, math, physics, chemistry);
    } else if (selectedType === "employee") {
      const workDays = document.getElementById("workDaysInput").value;
      const dailySalary = document.getElementById("dailySalaryInput").value;
      person = new Employee(name, address, id, email, workDays, dailySalary);
    } else if (selectedType === "customer") {
      const companyName = document.getElementById("companyNameInput").value;
      const orderValue = document.getElementById("orderValueInput").value;
      const rating = document.getElementById("ratingInput").value;
      person = new Customer(name, address, id, email, companyName, orderValue, rating);
    }
  
    listPerson.addPerson(person);
    listPerson.luuLocal();
    console.log(listPerson)
    listPerson.renderPersonTest();
    personForm.reset();
  });
//   personForm.addEventListener('submit',function (event){
//     event.preventDefault();
//     const personType = typeSelect.value;
//     const name = document.getElementById("name").value;
//     const address = document.getElementById("address").value;
//     const id = document.getElementById("id").value;
//     const email = document.getElementById("email").value;
//     let person;
//     if (selectedType === "student") {
//         const math = document.getElementById("math").value;
//         const physics = document.getElementById("physics").value;
//         const chemistry = document.getElementById("chemistry").value;
//         person = new Student(name, address, id, email, math, physics, chemistry);
//       } else if (selectedType === "employee") {
//         const workDays = document.getElementById("workDays").value;
//         const dailySalary = document.getElementById("dailySalary").value;
//         person = new Employee(name, address, id, email, workDays, dailySalary);
//       } else if (selectedType === "customer") {
//         const companyName = document.getElementById("companyName").value;
//         const orderValue = document.getElementById("orderValue").value;
//         const rating = document.getElementById("rating").value;
//         person = new Customer(name, address, id, email, companyName, orderValue, rating);
//       }
    
//       listPerson.addPerson(person);
//       listPerson.render();
    
//       personForm.reset();
//     // console.log('Hi')
//     // var selectList = document.getElementById('loai');
//     // var value = selectList.options[selectList.selectedIndex].value;
//     // if(personType === 'loai1'){
//     //     //lấy data người dùng
//     //     //sử dung queryselector all
//     //     let arrInput = document.querySelectorAll(
//     //     '#studentForm input, #studentForm select');
//     //     console.log(arrInput);
//     //     let person = new Student();
//     //     //dùng vòng lặp để lấy dữ liệu
//     //     for (const item of arrInput) {
//     //         // let id = item.id;
//     //         // let value = item.value;
//     //         let { id, value } = item;
//     //         person[id] = value;
//     //     }
//     // }else if(personType === 'loai2'){
//     //     let person = new Employee();
//     //     //dùng vòng lặp để lấy dữ liệu
//     //     for (const item of arrInput) {
//     //         // let id = item.id;
//     //         // let value = item.value;
//     //         let { id, value } = item;
//     //         person[id] = value;
//     //     }
//     // }
//     // if (person) {
//     //     listPerson.addPerson(person);
//     //     listPerson.render();
//     // }
//     //     console.log(listPerson)
//     document.getElementById('btnClose').click();
// });

//Khi lấy giá trị từ id các biến id phải trùng với biến contructor phải không?

window.removePerson=(idPerson) => { 
    listPerson.removePerson(idPerson);
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

// document.getElementById('loai').addEventListener('change',()=>{
//     var selectList = document.getElementById('loai');
//     var value = selectList.options[selectList.selectedIndex].value;
//     console.log(value); 
//     if(value == 'loai1'){
//         document.getElementById("ngayLamViecDisplay").style.display = "none";
//         document.getElementById("luongDisplay").style.display = "none";
//         document.getElementById("congTyDisplay").style.display ="none";
//         document.getElementById("hoaDonDisplay").style.display = "none";
//         document.getElementById("danhGiaDisplay").style.display = "none";
//         document.getElementById("toanDisplay").style.display ="inline-block";
//         document.getElementById("lyDisplay").style.display = "inline-block";
//         document.getElementById("hoaDisplay").style.display = "inline-block";
//         console.log(true)
//     }else if (value == 'loai2') {
//         document.getElementById("toanDisplay").style.display ="none";
//         document.getElementById("lyDisplay").style.display = "none";
//         document.getElementById("hoaDisplay").style.display = "none";
//         document.getElementById("congTyDisplay").style.display ="none";
//         document.getElementById("hoaDonDisplay").style.display = "none";
//         document.getElementById("danhGiaDisplay").style.display = "none";
//         document.getElementById("ngayLamViecDisplay").style.display = "inline-block";
//         document.getElementById("luongDisplay").style.display = "inline-block";
//     } else if (value == 'loai3') {
//         document.getElementById("toanDisplay").style.display ="none";
//         document.getElementById("lyDisplay").style.display = "none";
//         document.getElementById("hoaDisplay").style.display = "none";
//         document.getElementById("ngayLamViecDisplay").style.display = "none";
//         document.getElementById("luongDisplay").style.display = "none";
//         document.getElementById("congTyDisplay").style.display ="inline-block";
//         document.getElementById("hoaDonDisplay").style.display = "inline-block";
//         document.getElementById("danhGiaDisplay").style.display = "inline-block";
//     }else{
//         document.getElementById("toanDisplay").style.display ="none";
//         document.getElementById("lyDisplay").style.display = "none";
//         document.getElementById("hoaDisplay").style.display = "none";
//         document.getElementById("ngayLamViecDisplay").style.display = "none";
//         document.getElementById("luongDisplay").style.display = "none";
//         document.getElementById("congTyDisplay").style.display ="none";
//         document.getElementById("hoaDonDisplay").style.display = "none";
//         document.getElementById("danhGiaDisplay").style.display = "none";
//     }
// })
