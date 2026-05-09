// SS12_BT03_Nguyễn Bình Lam Nghi
// Số nguyên tố là số tự nhiên lớn hơn 1, chỉ chia hết cho 1 và chính nó.

let primes = [];
let n = 2;

// Check số chia hết từ 2 ---> căn bậc 2 của chính nó, nếu ko tồn tại thì nó là số nguyên tố.
function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

while (primes.length < 20) {
    if (isPrime(n)) {
        primes.push(n);
    }
    n++;
}

console.log(primes);