// SS12_BT01_04_Nguyễn Bình Lam Nghi

let a = Number(prompt("Hãy nhập một số nguyên A bất kỳ"));
let b = Number(prompt("Hãy nhập một số nguyên B bất kỳ"));
let c = Number(prompt("Hãy nhập một số nguyên C bất kỳ"));

// Cách 1:

// if (a >= b && a > c) {
//     alert("A là số lớn nhất");
// } else if (a < b && b > c) {
//     alert("B là số lớn nhất");
// } else { alert("C là số lớn nhất"); }

// Cách 2:

let max = Math.max (a, b, c);

if (max === a) {
    alert("A là số lớn nhất");
} else if (max === b) {
    alert("B là số lớn nhất");
} else {
    alert("C là số lớn nhất");
}