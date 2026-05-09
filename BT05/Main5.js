// SS12_BT05_Nguyễn Bình Lam Nghi

// -----------------------------------------
// Bài 1: In dãy Fibonacci

// let f = [1, 1];
// let n = +prompt("Hãy nhập số lượng phần tử của dãy số mà bạn muốn hiển thị");

// while (f.length < n) {
//     let i = f[f.length - 1] + f[f.length - 2];
//     f.push(i);
// };

// console.log(`Đây là dãy ${n} số bạn muốn hiển thị:`);
// console.log(f);

// -----------------------------------------
// Bài 2: Tính giai thừa của một số nguyên dương
// Là tích của tất cả các số nguyên dương từ 1 đến n
// Quy ước: 0! = 1

// let n = +prompt("Hãy nhập số bạn muốn tính giai thừa");

// function fact(n) {
//     if (n < 0) return false;

//     if (n === 0 || n === 1) { return 1; }
//     return n * fact(n - 1);
// };

// if (n < 0) {
//     alert("Số bạn nhập không phù hợp");
// } else {
//     console.log(fact(n));
//     alert(`Giai thừa của ${n} là: ${fact(n)}`)
// };

// -----------------------------------------
// Bài 3: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau

// Hình 1:
console.log("Hình 1:");

for (let i1 = 0; i1 < 5; i1++) {
    let text1 = "*";
    for (let n1 = 0; n1 < i1; n1++) {
        text1 += "*";
    };
    console.log(text1);
};

// Hình 2:
console.log("----------------------");
console.log("Hình 2:");

for (let i2 = 4; i2 >= 0; i2--) {
    let text2 = "*";
    for (let n2 = 0; n2 < i2; n2++) {
        text2 += "*";
    };
    console.log(text2);
};

//Hình 3:
console.log("Hình 3:");

for (let i3 = 5; i3 > 0; i3--) {
    let text3 = "";
    for (let s3 = 0; s3 < 5 - i3; s3++) {
        text3 += " ";
    };
    for (let n3 = 0; n3 < i3; n3++) {
        text3 += "*";
    }
    console.log(text3);
};

//Hình 4:
console.log("Hình 4:");

for (let i4 = 1; i4 <= 5; i4++) {
    let text4 = "";
    for (let s4 = 5; s4 > 0 + i4; s4--) {
        text4 += " ";
    };
    for (let n4 = 0; n4 < i4; n4++) {
        text4 += "*";
    }
    console.log(text4);
};

// -----------------------------------------
// Bài 4: In hình chữ nhật rỗng

// for (let i = 1; i <= 5; i++) {
//     let row = " ";
//     for (let n = 1; n <= 10; n++) {
//         if (i === 1 || i === 5 || n === 1 || n === 10) {
//             row += "*";
//         } else {
//             row += " ";
//         }
//     };
//     console.log(row);
// };

// -----------------------------------------
// Bài 5: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lãi con) khi biết số tiền ban đầu, số tháng cho vay và lãi suất hàng tháng.
// Công thức: a = p * (1 + r)^n
// a: tổng số tiền cuối kỳ
// p: số tiền gốc ban đầu
// r: lãi suất mỗi kỳ (kỳ theo năm)
// n: thời gian vay (số tháng vay)

// let p = +prompt("Hãy nhập số tiền gốc của bạn");
// let r = +prompt("Hãy nhập mức lãi suất (%/tháng) bạn muốn áp dụng")/100;
// let n = +prompt ("Hãy nhập thời gian vay (tính bằng tháng)");

// let a = p * (1 + r)**n;

// alert (`Số tiền bạn phải trả: ${a}`);