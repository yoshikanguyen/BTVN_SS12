// SS12_BT02_Nguyễn Bình Lam Nghi

// Bài 1: Chuyển từ độ C sang độ F.

let cel = +prompt ("Hãy nhập nhiệt độ Celcius");

let fah = cel * 1.8 + 32;

alert("Nhiệt độ sau chuyển đổi là: " + fah + " độ F");

// -----------------------------------------
// Bài 2: Chuyển từ mét sang feet

// let met = + prompt("Hãy nhập số mét (m) bạn muốn chuyển đổi");
// let feet = met * 3.2808;

// alert(met + " (m) = " + feet + " (ft)");

// -----------------------------------------
// Bài 3: Tính diện tích hình vuông khi biết cạnh a.

// let a = +prompt("Hãy nhập chiều dài cạnh a");

// let s = a*a;

// alert("Diện tích hình vuông là: " + s);

// -----------------------------------------
// Bài 4: Tính diện tích hình chữ nhật khi biết 02 cạnh a, b.

// let a = +prompt("Hãy nhập cạnh a");
// let b = +prompt("Hãy nhập cạnh b");

// let s = a*b;

// alert("Diện tích hình chữ nhật là: " + s);

// -----------------------------------------
// Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.

// let a = +prompt("Hãy nhập cạnh a");
// let b = +prompt("Hãy nhập cạnh b");

// let s = (a*b)/2;

// alert("Diện tích tam giác vuông là: " + s);

// -----------------------------------------
// Bài 6: Giải phương trình bậc 1.
// Dạng tổng quát: (ax + b = 0) 
// Trong đó x là ẩn số, a và b là các số đã cho, a khác 0.

// Cách 1:

// let a = +prompt("Hãy nhập số a");
// let b = +prompt("Hãy nhập số b");

// let x = (-b) / a;

// if (a === 0 && b !== 0) {
//     alert ("Phương trình vô nghiệm")
// } if ( a === 0 && b === 0) {
// alert ("Phương trình vô số nghiệm")
// } else {
//     alert (`Nghiệm của phương trình: ${x}`);
// }

// Cách 2:

// let a = +prompt("Hãy nhập số a");
// let b = +prompt("Hãy nhập số b");

// let x = (-b) / a;

// switch (true) {
//     case (a === 0 && b !== 0):
//         alert("Phương trình vô nghiệm");
//         break;
//     case (a === 0 && b === 0):
//         alert("Phương trình vô số nghiệm");
//         break;
//     default:
//         alert(`Nghiệm của phương trình: ${x}`);
// }

// -----------------------------------------
// Bài 7: Giải phương trình bậc 2.
// Dạng tổng quát: (ax2 + bx + c = 0)
// Trong đó x là ẩn số, a b c là các số đã cho.

// let a = +prompt("Hãy nhập số a");
// let b = +prompt("Hãy nhập số b");
// let c = +prompt("Hãy nhập số c");

// let delta = (b ** 2) - 4 * a * c;

// if (a === 0) {
//     if (b === 0) {
//         if (c === 0) {
//             alert("Phương trình vô số nghiệm");
//         }
//     } else {
//         let x = -c / b;
//         alert (`Nghiệm phương trình x = ${x}`);
//     }
// } else if (delta < 0) {
//     alert("Phương trình vô nghiệm");
// } else if (delta > 0) {
//     let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//     let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//     alert(`Phương trình có 2 nghiệm phân biệt x1 = ${x1} và x2 = ${x2}`);
// } else {
//     let x = -b / 2 * a;
//     alert(`Phương trình có nghiệm kép x1 = x2 = ${x}`);
// };


// -----------------------------------------
// Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không.
// Một số nguyên là tuổi của một người khi nhỏ 120 và lớn hơn 0.

// let age = +prompt ("Hãy nhập một số nguyên để kiểm tra");

// if (age > 0 && age < 120) {
//     alert ("Đây là tuổi của người");
// } else {
//     alert ("Đây không phải tuổi của người")
// };