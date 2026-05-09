// SS12_BT04_Nguyễn Bình Lam Nghi


// -----------------------------------------
// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. 
// Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.

for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i === 99) {
        alert("Dừng");
        break;
    }
};

// -----------------------------------------
// Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ.
// Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.

// let temp = +prompt("Hãy nhập nhiệt độ");

// if (temp < 20) {
//     alert ("Hãy tăng nhiệt độ");
// } else if (temp > 100) {
//     alert("Hãy giảm nhiệt độ");
// } else {
//     alert ("OK!!!");
// }

// -----------------------------------------
// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377...

// let f = [1, 1];
// let n = 2;

// while (f.length < 20) {
//     let i = f[f.length - 1] + f[f.length - 2];
//     f.push(i);
// };

// console.log("20 số Fi đầu tiên");
// console.log(f);

// -----------------------------------------
// Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.

// let f = [1, 1];
// let n = 2;
// let a = null;

// while (f.length < 20) {
//     let i = f[f.length - 1] + f[f.length - 2];
//     f.push(i);
//     if (i !== 0 && i % 5 === 0) {
//         a = i;
//         break;
//     }
// }

// console.log(`Số Fi đầu tiên chia hết cho 5 là: ${a}`);

// -----------------------------------------
// Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.

// let f = [1, 1];
// let n = 2;
// let sum = 2;

// while (f.length < 20) {
//     let i = f[f.length - 1] + f[f.length - 2];
//     f.push(i);
//     sum += i;
// }

// console.log(f);
// console.log(`Tổng 20 số đầu là: ${sum}`);

// -----------------------------------------
// Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.

// let n = 0;
// let sum = 0;
// let step = 7;

// while (n < 30) {
//     if (step % 7 === 0) {
//         n++;
//         sum += step;
//     }
//     step +=7;
// };

// console.log(`Tổng 30 số đầu tiên chia hết cho 7 là: ${sum}`);

// Cách 2: không dùng vòng lặp
// Cứ cách 7 đơn vị sẽ có 1 số chia hết cho 7 ---> Cấp số cộng có khoảng cách đơn vị là 7
// Áp dụng công thức tổng n số hạng đầu tiên của cấp số cộng

// let n = 30;
// let start = 7;
// let last = 7 * n;

// let sum = ((start + last) * n) / 2;

// console.log(`Tổng 30 số đầu tiên chia hết cho 7 là: ${sum}`);

// -----------------------------------------
// Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100. 
// Nếu chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. 
// Nếu chia hết cho cả 3 và 5 thì in ra chữ “FizzBuzz”

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`FizzBuzz (${i})`);
//     } else if (i % 5 === 0) {
//         console.log(`Buzz (${i})`);
//     } else if (i % 3 === 0) {
//         console.log(`Fizz (${i})`);
//     } else {
//         console.log(i);
//     }
// };
