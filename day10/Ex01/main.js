function primeNumber(a) {
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return false
        }
    }
    return a > 1;
}

let a  = prompt("So can check:");
console.log(primeNumber(a));
// Test case
console.log(primeNumber(2));
console.log(primeNumber(7));
console.log(primeNumber(10));
console.log(primeNumber(1));
console.log(primeNumber(-5));
