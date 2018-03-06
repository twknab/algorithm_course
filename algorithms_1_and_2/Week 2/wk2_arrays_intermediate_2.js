// Arrays Intermediate 2 - Tim K

/*
Note: I know the purpose of this assignment was to be aware of the associations between speed and storage: that is to say, the more data that is cached or stored, the faster. Decreasing storage often must also mean a compromise to speed. In my millisecond assesments of the algorithms below, it seemed that all performed in less than 1ms. This could be me not calcuating this correctly (despite having tested it with the `setTimeout()` function in which I did get a reading). But I was surprised that almost everything registered as 0 ms. I'll have to investigate this more to see why the speed is so quick, or if I've made an error.

It is likely that simply because these algorithms are so simple, they do execute very quickly. Large datasets (like the number 10,000 in the fib sequence) will affect this speed.
*/

// 1. Smarter Sum
function smarterSum(number) {
  // This method generates a sum using a single for loop:
  // Log start time:
  let start = Date.now();

  // Input check and edge cases:
  if (typeof (number) != 'number') {
    console.log(`Sum: ${null} | Duration: ${Date.now() - start} ms`);
    return null;
  }
  // If value is not a positive integer:
  else if (number <= 0) {
    console.log(`Sum: ${null} | Duration: ${Date.now() - start} ms`);
    return null;
  }
  // If value is 1, return 1:
  else if (number == 1) {
    console.log(`Sum: ${1} | Duration: ${Date.now() - start} ms`);
    return 1;
  }

  // Loop from 1 to number adding values:
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  // Examine elapsed time:
  console.log(`Sum: ${sum} | Duration: ${Date.now() - start} ms`);
  return sum;
}

console.log("----- SMARTER SUM -----");
smarterSum(1); // test
smarterSum(-2); // edge case
smarterSum(0); // edge case
smarterSum("my strings!"); // edge case
smarterSum(1);
smarterSum(2);
smarterSum(3);
smarterSum(4);




// 2. Facny Fibonacci
function fancyFibonacci(number) {
  // Start time log:
  let start = Date.now();
  // Edge cases and input checks:
  // check if not positive or not number:
  if (number < 0 || typeof(number) != "number") {
    console.log(null);
    return null;
  }
  // If number is 0 or 1:
  else if (number === 0) {
    console.log(0);
    return 0;
  } 
  else if (number === 1) {
    console.log(1);
    return 1;
  } 
  // Otherwise create storage for sequence values and get sequence:
  else {
    // create an array to hold sequence (add 0 and 1 as these are the values of 0 and 1 when sequenced):
    let sequence = [0, 1];
    // loop to desired number, generating fib sequence:
    for (let i = sequence.length; i <= number; i++ ){
      sequence[i] = sequence[i-2] + sequence[i-1]; // add two previous values
    }
    // Console log desired value and millisecond duration:
    console.log(`Value: ${sequence[sequence.length - 1]} | Duration: ${Date.now() - start} ms`);
    // returns last value in array:
    return sequence[sequence.length - 1];
  }
}

console.log("----- FANCY FIBONACCI -----");
fancyFibonacci(0);
fancyFibonacci(1);
fancyFibonacci(2);
fancyFibonacci(3);
fancyFibonacci(1000);




// 3. Tricky Tribonacci 
function trickyTribonacci(number) {
  let start = Date.now();
  if (typeof(number) != "number" || number < 0) {
    console.log(`Value: Not a positive integer | Duration: ${Date.now() - start} ms`);
    return null;
  } else if (number === 0 || number === 1) {
    console.log(`Value: 0 | Duration: ${Date.now() - start} ms`);
    return 0;
  } else {
    // create array to hold our sequence with first 3 values defined:
    let sequence = [0, 0, 1];
    for (let i = sequence.length; i <= number; i++) {
      sequence[i] = sequence[i-3] + sequence[i-2] + sequence[i-1];
    }
    console.log(`Value: ${sequence[sequence.length - 1]} | Duration: ${Date.now() - start} ms`);
    return sequence[sequence.length - 1];
  }
}

console.log("----- TRICKY TRIBONACCI -----");
trickyTribonacci(0);
trickyTribonacci(1);
trickyTribonacci(2);
trickyTribonacci(3);
trickyTribonacci(4);
trickyTribonacci(5);
trickyTribonacci(6);
trickyTribonacci(7);
trickyTribonacci(8);
trickyTribonacci(9);
trickyTribonacci(10);