
function normalization (s) {
    const a = s.trim().toLowerCase().split(" ");
    let res = "";
    for (let i = 0; i < a.length; i++) {
        if (a[i] != "") {
            res += a[i][0].toUpperCase() + a[i].slice(1) + " ";
        }
    }
    return res;
}
let s = prompt("Nhap ten cua ban");
console.log(normalization(s));
// Test case
console.log(normalization("     ngUYen vaN a "));
console.log(normalization("tRan   THI    b"));
console.log(normalization("  le  vAn  c  "));
