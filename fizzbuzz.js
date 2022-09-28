
function fizzbuzz() {

    /* Print numbers 1 - 100 */

    for (let i = 1; i <= 100; i++) {
        // console.log(i);

    /* Print Fizz/Buzz/FizzBuzz depending on value*/
        
        if (i%3 === 0 & i%5 === 0) { 
            console.log("FizzBuzz");
        } else if (i%3) {
            console.log("Fizz");
        } else if (i%5 === 0) {
            console.log("Buzz");
        }

    }
}

fizzbuzz();
