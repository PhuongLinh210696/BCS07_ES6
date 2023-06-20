/**
 * Chứa các phương thức: thêm student, customer, employee, lấy thông tin chi tiết, render , CRUD
 * Lưu xuống local
 * Gọi dữ liệu từ local, tìm kiếm
 * 
 */

import Employee from "./Employee.js";
import Student from "./Student.js";
import Customer from "./Customer.js";

export default class ListPerson{
  constructor() {
    this.persons = [];
  }

  addPerson(person) {
    this.persons.push(person);
  }

  removePerson(person) {
    const index = this.persons.indexOf(person);
    if (index !== -1) {
      this.persons.splice(index, 1);
    }
  }

  renderPerson() {
    let output = "";

    for (const person of this.persons) {
      let output = 
      `<tr>
                <td>${person.id}</td>
                <td>${person.name}</td>
                <td>${person.email}</td>
                <td>${person.address}</td>
      `;

      if (person instanceof Student) {
        output += `
          <td>${person.tinhDiemTrungBinh()}</td>
          <td>
          <button class="btn btn-danger" onclick="xoaMonAn('${person.id}')">Xoá</button>
          <button class="btn btn-warning" onclick="layThongTinMonAn('${person.id}')">Sửa</button>
          </td>
          </tr>
        `;
      } 
      else if (person instanceof Employee) {
        output += `
          <td>${person.tinhLuong()}</td>
          <td>
          <button class="btn btn-danger" onclick="xoaMonAn('${person.id}')">Xoá</button>
          <button class="btn btn-warning" onclick="layThongTinMonAn('${person.id}')">Sửa</button>
          </td>
          </tr>
        `;
      } 
      // else if (person instanceof Customer) {
      //   personInfo += `
      //     Company Name: ${person.companyName}
      //     Order Value: ${person.orderValue}
      //     Rating: ${person.rating}
      //   `;
      // }

      // output += `${personInfo}\n---------------------------\n`;
      document.getElementById('tbodyPerson').innerHTML = output;
    }

    console.log(output);
  }
  luuLocal(){
    localStorage.setItem('listPerson', JSON.stringify(this.persons));
  }
  layLocal(){
    const storedListPerson = localStorage.getItem('listPerson');
    if (storedListPerson) {
      const listPerson = JSON.parse(storedListPerson);
      // Sử dụng đối tượng listPerson
      console.log(listPerson)
    } else {
      // Nếu không có dữ liệu trong localStorage
    }
  }
renderPersonTest(){
    // Lấy đối tượng ListPerson từ localStorage
const storedListPerson = localStorage.getItem('listPerson');
const listPerson = storedListPerson ? JSON.parse(storedListPerson) : new ListPerson();

// Render danh sách đối tượng Student hoặc Customer vào bảng
const table = document.getElementById('person-table');
table.innerHTML = '';

// Tạo hàng tiêu đề
const headerRow = `
<thead>
  <tr class="bg-warning text-white">
    <th>Họ tên</th>
    <th>Địa chỉ</th>
    <th>Mã</th>
    <th>Email</th>
    ${this.persons[0] instanceof Student ? '<th>Đặc tả</th><th></th>' : ''}
    ${this.persons[0] instanceof Employee ? '<th>Đặc tả</th><th></th>' : ''}
    ${this.persons[0] instanceof Customer ? '<th>Đặc tả</th><th></th>' : ''}

  </tr>
  </thead>
`;
// ${listPerson.persons[0] instanceof Student ? '<th>Toán</th><th>Lý</th><th>Hóa</th><th>Điểm trung bình</th>' : ''}
    // ${listPerson.persons[0] instanceof Customer ? '<th>Tên công ty</th><th>Trị giá hóa đơn</th><th>Đánh giá</th>' : ''}
// Tạo hàng dữ liệu cho mỗi đối tượng
const dataRows = this.persons.map(person => {
  let dataRow = `
    <tr>
      <td>${person.name}</td>
      <td>${person.address}</td>
      <td>${person.id}</td>
      <td>${person.email}</td>
  `;

  if (person instanceof Student) {
    dataRow += `
      <td>Điểm trung bình: ${person.tinhDiemTrungBinh()}</td>
      <td>
                <button class="btn btn-danger" onclick="">Xoá</button>
                <button class="btn btn-warning" onclick="">Sửa</button>
                </td>
    `;
  } else if (person instanceof Customer) {
    dataRow += `
      <td>Công ty: ${person.companyName},Hoá đơn: ${person.orderValue},Đánh giá ${person.rating}</td>
      <td>
                <button class="btn btn-danger" onclick="">Xoá</button>
                <button class="btn btn-warning" onclick="">Sửa</button>
                </td>
    `;
  }else{
    dataRow += `
      <td>Lương: ${person.tinhLuong()}</td>
      <td>
                <button class="btn btn-danger" onclick="">Xoá</button>
                <button class="btn btn-warning" onclick="">Sửa</button>
                </td>
    `;
  }

  dataRow += '</tr>';
  return dataRow;
}).join('');

// Kết hợp các hàng và hiển thị trong bảng
const tableHTML = `${headerRow}${dataRows}`;
table.innerHTML = tableHTML;

  }
}

