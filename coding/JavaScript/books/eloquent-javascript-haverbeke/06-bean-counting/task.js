/* TASK: Bean Counting

You can get the Nth character of a string by adding .charAt(N) to it 
("string".charAt(5)) – similar to getting the length of a string 
using .length. The returned value will be a string consisting of 
a single character (for example, "k"). The first character of a string 
has position 0, which means the last character's position will be 
string.length – 1. In other words, a two-character string has 
length 2, and its characters' positions are 0 and 1.

Write a function countBs that takes a string as an argument 
and returns the number of "B" characters contained in the string.

Next, write a function countChar that works similarly to countBs, 
except it takes a second parameter — the character we will be 
looking for in the string (instead of just counting "B" characters). 
To do this, rewrite the countBs function.

*/

// Function with one parameter
function countBs(string) {
    let numberOfBs = 0;
    let stringLength = string.length;

    function verifyChar(stringLength) {
        let updatedLength = stringLength - 1;
        let lastChar = string.charAt(updatedLength);

        if (updatedLength < 0) return numberOfBs;
        if (lastChar === 'B') numberOfBs++;

        return verifyChar(updatedLength);
    }

    return verifyChar(stringLength);
}

// Function with two parameters
function countChar(string, char) {
    let numberOfChar = 0;
    let stringLength = string.length;

    function verifyChar(stringLength) {
        let updatedLength = stringLength - 1;
        let lastChar = string.charAt(updatedLength);

        if (updatedLength < 0) return numberOfChar;
        if (lastChar === char) numberOfChar++;

        return verifyChar(updatedLength);
    }

    return verifyChar(stringLength);
}

console.log(countBs('ABABBB'));
console.log(countChar('AFAFAFFFFF', 'F'))
