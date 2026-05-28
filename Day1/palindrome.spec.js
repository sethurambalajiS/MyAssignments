var str = "racecar";
var str1 = "";
function isPalindrome(str) {
    var len = str.length;
    for ( var i = len - 1 ; i >= 0 ; i-- ) {
        str1 += str[i];
    }
    if (str === str1) {
        return "Palindrome";
    } else {
        return "Not a Palindrome";
    }
}

console.log(isPalindrome(str));
console.log(isPalindrome("madurai"));

