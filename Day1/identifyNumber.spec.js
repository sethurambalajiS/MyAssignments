var num = 5; // Example number

function identifyNumber(num) {
    if (num <  0) {
        return "Negative number";
    } else if (num >= 0) {
        return "Positive number";
    } else {
        return "Zero";
    }
}
console.log(identifyNumber(num));
console.log(identifyNumber(-3));
console.log(identifyNumber(0));

