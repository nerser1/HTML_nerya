
function CheckStringLength (str) {
    if (str.length > 10) {
        return "Too long";
    }
    return "valid string length: " + str.length;
}

let str = "";
console.log(CheckStringLength(str)); // valid string length: 11