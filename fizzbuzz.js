
function fizzbuzz() {

    /* Print numbers 1 - 100 */

    for (let i = 1; i <= 100; i++) {
        // console.log(i);

    /* Print Fizz/Buzz/FizzBuzz/Bang depending on value*/
        
         if (i%3 === 0 && i%5 === 0) { 
            console.log("FizzBuzz");
        } else if (i%7 === 0 && i%3 === 0) {
            console.log("FizzBang");
        } else if (i%7 === 0 && i%5 === 0) {
            console.log("BuzzBang");
        } else if (i%11 === 0) {
            console.log("Bong");
        } else if (i%3 === 0) {
            console.log("Fizz");
        } else if (i%5 === 0) {
            console.log("Buzz");
        } else if (i%7 === 0) {
            console.log("Bang");
        } else {
            console.log(i);
        }

    }
}

fizzbuzz();
