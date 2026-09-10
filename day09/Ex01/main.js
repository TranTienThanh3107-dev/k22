const gpa = (t, v, a) => (t + v + a) / 3;
function ranking (t, v, a) {
    if (gpa(t, v, a) >= 9.0 && t >= 8 && v >= 8 && a >= 8){
        return "Xuất sắc";
    }
    else if (gpa(t, v, a) >= 8.0 && t >= 6.5 && v >= 6.5 && a >= 6.5) {
        return "Giỏi";
    }
    else if (gpa(t, v, a) >= 6.5 && t >= 5.0  && v >= 5.0  && a >= 5.0 ){
        return "Khá";
    }
    else if (gpa(t, v, a) >= 5 && t >= 3.5 && v >= 3.5 && a >= 3.5){
        return "Trung bình";
    }
    else {
        return "Yếu";
    }
}

let t = 5;
let v = 8;
let a = 4;

if (t > 10 || t < 0 || v > 10 || v < 0 || a > 10 || a < 0) {
    console.log("Dữ liệu không hợp lệ");
}
else{
    console.log(`${gpa(t, v, a)} - ${ranking(t, v, a)}`)
}