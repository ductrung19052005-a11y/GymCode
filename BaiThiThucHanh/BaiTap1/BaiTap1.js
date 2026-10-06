let n = Number(prompt("Nhập số lượng phần tử:"));
let mang = [];
for (let i = 0; i < n; i++) {
    let so = Number(prompt("Nhập số thứ " + (i + 1) + ":"));
    mang.push(so); 
}
console.log("Mảng bạn vừa nhập là:", mang);
let tongChan = 0;
let tongLe = 0;
for (let i = 0; i < mang.length; i++) {
    let soHienTai = mang[i];
    if (soHienTai % 2 === 0) {
        tongChan = tongChan + soHienTai;
    } else {
        tongLe = tongLe + soHienTai;
    }
}
let ketQua = tongChan - tongLe;
console.log("Kết quả: (" + tongChan + ") - (" + tongLe + ") = " + ketQua);