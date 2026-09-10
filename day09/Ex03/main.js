let dis = 18;
function price(a) {
    if (a > 12) {
        return ((a - 5) * 11 + 4 * 13.5 + 15 ) * 0.9;
    }
    else if (a <= 0 ) {
        return "Không hợp lệ";
    }
    else if (a >= 5 ) {
        return ((a - 5) * 11 + 4 * 13.5 + 15 );
    }
    else {
        return (a - 1) * 13.5 + 15;
    }
}

console.log(`price: ${price(dis)}`);