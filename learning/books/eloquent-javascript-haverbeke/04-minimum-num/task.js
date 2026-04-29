/* TASK: Minimum number

Write a function min that accepts two arguments
and returns the smaller of the two.

*/

function min(numOne, numTwo) {
    if (numOne === numTwo) {
        console.log(`The numbers ${numOne} and ${numTwo} are equal`);
        return numOne;
    }

    const minNum = numOne < numTwo ? numOne : numTwo;
    console.log(`Minimum number is: ${minNum}`);
    return minNum;
}

// Write 2 arguments & get min number
min(16, 16);