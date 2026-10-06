function demKyTuInHoa(chuoi) {
            let dem = 0;
            for (let i = 0; i < chuoi.length; i++) {
                let kyTu = chuoi[i];
                if (kyTu >= 'A' && kyTu <= 'Z') {
                    dem = dem + 1;
                }
            }        
            if (dem > 0) {
                return dem;
            } else {
                return "The Strings is not contain upper char";
            }
        }
       let chuoiNhap = prompt("nhập ký tự bất kỳ \nVD:abcdEF");
       let ketQua = demKyTuInHoa(chuoiNhap);
       alert("Kết quả: " + ketQua);
       console.log("Kết quả:", ketQua);