const reverseString = function(str) {
 var splitString = str.split("");
 var reverseString = splitString.reverse();
 var result = reverseString.join("");

 return result;
};

// Do not edit below this line
module.exports = reverseString;
