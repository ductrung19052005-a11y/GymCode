class DienThoai {
    constructor(ma, ten, hang, gia) {
        this.ma = ma;
        this.ten = ten;
        this.hang = hang;
        this.gia = gia;
    }
} 
let danhSachDienThoai = [
    { ma: "1", ten: "Samsung", hang: "Samsung", gia: "2000" },
    { ma: "2", ten: "Apple", hang: "Apple", gia: "2500" },
    { ma: "3", ten: "Xiaomi", hang: "Xiaomi", gia: "1500" }, 
    { ma: "4", ten: "Oppo", hang: "Oppo", gia: "1800" },
    { ma: "5", ten: "Vivo", hang: "Vivo", gia: "1700" }
];
danhSachDienThoai.sort(function(a, b) {
    if (a.ten > b.ten) {
        return 1; 
    } else if (a.ten < b.ten) {
        return -1; 
    } else {
        return 0; 
  }
});
function hienThiDanhSach() {
    let tbody = document.getElementById("BangDanhSachDienThoai");
    let htmlContent = "";  
    for (let i = 0; i < danhSachDienThoai.length; i++) {
        let cn = danhSachDienThoai[i];
        htmlContent += "<tr>";
        htmlContent += "<td>" + cn.ma + "</td>";
        htmlContent += "<td>" + cn.ten + "</td>";
        htmlContent += "<td>" + cn.hang + "</td>";
        htmlContent += "<td>" + cn.gia + "</td>";
        htmlContent += "</tr>";
    }   
    tbody.innerHTML = htmlContent;
}
hienThiDanhSach();