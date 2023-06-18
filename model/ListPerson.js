/**
 * Chứa các phương thức: thêm student, customer, employee, lấy thông tin chi tiết, render , CRUD
 * Lưu xuống local
 * Gọi dữ liệu từ local, tìm kiếm
 * 
 */

import Student from "./Student.js";


export default class ListPerson{
    constructor(){
        this.arrListPerSon = [];
    }
  
    addStudent(student){
        this.arrListPerSon.push(student);
    }

    luuLocal(){
        localStorage.setItem('arrListPerSon',JSON.stringify(this.arrListPerSon));
    }

    layLocal() {
        let listPersonLocal = JSON.parse(localStorage.getItem('arrListPerSon'));
        // kiểm tra xem có value bên dưới local hay không, nếu có mới gán giá trị vào mảng arrMenu
        if (listPersonLocal) {
          this.arrListPerSon = [...listPersonLocal];
          this.renderPerson();
        }
      }
      xoaPerson(idPerson) {
        // dùng hàm findIndex để tìm vị trí của món ăn cần xoá trong mảng và sau đó dùng hàm splice để xoá
        let index = this.arrListPerSon.findIndex((item) => item.id == idPerson);
        if (index != -1) {
          this.arrListPerSon.splice(index, 1);
          this.renderPerson();
          this.luuLocal();
        }
      }
      layThongTinPerson(id) {
        // dùng hàm find để tìm ra phần tử bên trong array
        let person = this.arrListPerSon.find((item) => item.id == id);
        if (person) {
          // dom tới nút button thêm món ăn để mở modal sau đó hiển thị dữ liệu lên các input cho người chỉnh sửa
          document.getElementById('btnThem').click();
          let arrInput = document.querySelectorAll(
            '#studentForm input');
          for (let item of arrInput) {
            // let id = item.id
            let { id } = item;
            // item sẽ có id là foodID , item.value = monAn.foodID
            item.value = person[id];
          }
        }
      }
      chinhSuaPerson(student) {
        let index = this.arrListPerSon.findIndex((item) => item.id == student.id);
        if (index != -1) {
          this.arrListPerSon[index] = student;
          this.renderPerson();
          this.luuLocal();
          document.getElementById('btnClose').click();
        }
      }
      renderPerson(){
        let content = this.arrListPerSon.map((item,index) => { 
            let student = new Student();
            Object.assign(student,item);
            console.log(student)
            let {
                id,
                name,
                email,
                address
            } = student;

            return `
            <tr>
                      <td>${id}</td>
                      <td>${name}</td>
                      <td>${email}</td>
                      <td>${address}</td>
                      <td>
                      <button class="btn btn-danger" onclick="xoaPerson('${id}')">Xoá</button>
                      <button class="btn btn-warning" onclick="layThongTinPerson('${id}')">Sửa</button>
                      </td>
            </tr>
            `;
         });
         document.getElementById('tbodyPerson').innerHTML = content;
      }

      
}

