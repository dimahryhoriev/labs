/* TASK: FizzBuzz
    Write a program that uses console.log to print all the numbers from 1 to 100, 
    with two exceptions. 
    
    For numbers divisible by 3, print "Fizz" instead of the number, 
    and for numbers divisible by 5 (and not 3), print "Buzz" instead.

    When you have that working, modify your program to print "FizzBuzz" 
    for numbers that are divisible by both 3 and 5 
    (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

/*
To see how separate solution works:
comment out the function call for
the solution you don't
want to see in the console.
*/

// 01 Solution: through 'for' loop and 'if' logic structure
ifSolution()

// 02 Solution: through 'for' loop and 'switch' logic structure
// switchSolution()

function ifSolution() {
    for (let current = 1; current <= 100; current++) {
        if (current % 3 == 0 && current % 5 == 0) {
            console.log('FizzBuzz')
        } else if (current % 3 == 0) {
            console.log('Fizz')
        } else if (current % 5 == 0) {
            console.log('Buzz')
        }
        else {
            console.log(current)
        }
    }
}

function switchSolution() {
    for (let current = 1; current <= 100; current++) {
        switch (true) {
            case (current % 3 == 0 && current % 5 == 0):
                console.log('FizzBuzz');
                continue;

            case (current % 3 == 0):
                console.log('Fizz');
                continue;

            case (current % 5 == 0):
                console.log('Buzz');
                continue;

            default:
                console.log(current);
                continue;
        }
    }
}