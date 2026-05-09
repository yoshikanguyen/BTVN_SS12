// SS12_BT06_Nguyễn Bình Lam Nghi

while (true) {
    let userInput = +prompt("Bấm số 1 -> 10 để chọn hành động tiếp theo");
    if (userInput > 10 || userInput < 1) {
        alert("Bạn đã nhập sai câu lệnh");
    } else if (userInput === 1) {
        let name = prompt("Hãy nhập tên của bạn");
        alert(`Cảm ơn ${name} đã nhập thông tin`);
    } else if (userInput === 2) {
        let age = +prompt("Hãy nhập tuổi của bạn");
        alert(`Cảm ơn bạn đã nhập thông tin. Tuổi của bạn là ${age}`);
    } else if (userInput === 3) {
        let name = prompt("Hãy nhập tên của bạn");
        let age = +prompt("Hãy nhập tuổi của bạn");
        alert("Tên: " + name + " - Tuổi: " + age);
    } else if (userInput === 4) {
        let n = +prompt("Hãy nhập số bạn muốn xem cửu chương");

        if (isNaN(n) || n === 0) {
            alert("Số không hợp lệ, hãy nhập lại");
        } else {
            for (let i = 1; i <= 10; i++) {
                let cal = n * i;
                let result = `${n} x ${i.toString()} = ${cal.toString()}`;
                console.log(result);
                document.write(`${n} x ${i.toString()} = ${cal.toString()} | `);
            }
        };
        break;
    } else if (userInput === 5) {
        let n = +prompt("Hãy nhập một số bất kỳ");
        if (n % 2 === 0) {
            alert("Đây là số chẵn");
        } else (alert("Đây là số lẻ"));
        break;
    } else if (userInput === 6) {
        let n = +prompt("Hãy nhập một số nguyên bất kỳ");
        if (n < 1) {
            alert("Số không hợp lệ");
        } else {
            let sum = 0;
            for (let i = 1; i <= n; i++) {
                sum += i;
            } alert(`Tổng từ 1 ---> ${n} là ${sum}`);
            break;
        }
    } else if (userInput === 7) {
        let n = prompt("Hãy nhập một dãy số bất kỳ");
        alert("Dãy số của bạn là: " + n);
        break;
    } else if (userInput === 8) {
        let n = +prompt("Hãy nhập một số bất kỳ");
        function check(n) {
            for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
                if (n % i === 0) return false;
            }
            return n > 1;
        }
        if (check(n)) {
            alert(`${n} là số nguyên tố`);
        } else {
            alert(`${n} không phải số nguyên tố`);
        } break;
    } else if (userInput === 9) {
        let n = prompt("Hãy nhập một dãy số bất kỳ");
        let nRev = n.split(" ").reverse().join(" ")
        alert("Dãy số của bạn sau khi đảo ngược là: " + nRev);
        break;
    } else {
        alert("Cảm ơn bạn đã sử dụng chương trình!");
        break;
    }
};


