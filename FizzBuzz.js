/* Comment: FizzBuzz count from 1-100
* If a number is divisible by 3 print 'Fizz'
* If a number is divisible by 5 print 'Buzz'
* If a number is divisible by 3 and 5 print 'FizzBuzz'

*/

for(i = 1; i < 100; i++) {
    fizzBuzz(i);
    }

function fizzBuzz(i){
    if (i%3 == 0 && i%5 == 0) {
        console.log("FizzBuzz");
    }

    if(i%5 == 0) {
    console.log("Buzz");
    }

    if(i%3 == 0){
        console.log("Fizz");
    }
}