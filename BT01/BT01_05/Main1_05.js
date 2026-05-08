// SS12_BT01_05_Nguyễn Bình Lam Nghi

let a = Number(prompt("Hãy nhập điểm kiểm tra"));
let b = Number(prompt("Hãy nhập điểm thi giữa kỳ"));
let c = Number(prompt("Hãy nhập điểm thi cuối kỳ"));

let dtb = (a + b*2 + c*3)/6;

if (dtb >= 9) {
    alert ("Điểm trung bình: " + dtb.toFixed(2) + ", xếp loại Xuất sắc");
} else if (dtb < 9 && dtb >=8) {
    alert ("Điểm trung bình: " + dtb.toFixed(2) + ", xếp loại Giỏi");
} else if (dtb < 8 && dtb >=5) {
    alert ("Điểm trung bình: " + dtb.toFixed(2) + ", xếp loại Khá");
} else if (dtb < 5 && dtb >= 2.5) {
    alert ("Điểm trung bình: " + dtb.toFixed(2) + ", xếp loại Trung bình");
} else {
    alert ("Điểm trung bình: " + dtb.toFixed(2) + ", xếp loại Yếu");
};