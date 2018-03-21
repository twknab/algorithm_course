// Algos 4, Week 1, Recursion - Tim Knab

/****************************
rSigma

Write a recursive
function that, given a number, returns the sum of integers from one up to that number.For example, rSigma(5) = 1 + 2 + 3 + 4 + 5 = 15;
rSigma(2.5) = 1 + 2 = 3;
rSigma(-1) = 0.
****************************/
function rSigma(num, sum=0, counter=1) {
  // If counter greater than number, return sum:
  if (counter > num) {
    console.log(sum);
    return sum;
  }

  // If number is less than 0, return sum (which will be 0)
  if (num < 0) {
    return sum;
  }

  // Step forwards:
  sum += counter;
  counter += 1;

  rSigma(num, sum, counter); // Will run recursive function until counter is greater than num
}

console.log("$$$$$ R SIGMA $$$$$");
rSigma(5);
rSigma(-1);
rSigma(2.5);




/****************************
rBinarySearch

Write a recursive
function that, given a sorted array and a value, determines whether the value is found within the array.For example, rBinarySearch([1, 3, 5, 6], 4) = false;
rBinarySearch([4, 5, 6, 8, 12], 5) = true.
****************************/

function rBinarySearch(arr, value, index=0) {
  // If array[index] matches value, return true (value has been found):
  if (arr[index] === value) {
    console.log(true);
    return true;
  }

  // If index gets to arr length and value still not found, return false (value not found)
  if (index === arr.length-1) {
    console.log(false);
    return false;
  }

  // Forward advance index:
  index+=1;

  // Recursively run function again and again until array length is reached or value is found:
  rBinarySearch(arr, value, index);
}
console.log("$$$$$ BINARY SEARCH $$$$$");
rBinarySearch([1,2,3,4], 1);
rBinarySearch([1,2,3,4], 100);
rBinarySearch([1,2,3,4], 100);




/****************************
Recursive Fibonacci

Write rFib(num).Recursively compute and
return the numth Fibonacci value.As earlier, treat the first two(num = 0, num = 1) Fibonacci values as 0 and 1. Thus, rFib(2) = 1(0 + 1);
rFib(3) = 2(1 + 1);
rFib(4) = 3(1 + 2);
rFib(5) = 5(2 + 3).Also, rFib(3.65) = rFib(3) = 2. Finally, rFib(-2) = rFib(0) = 0.
****************************/
function recursiveFib(n, idx=2, arr=[0,1]) {
  if (typeof(n) !== 'number') { // input check
    console.log("Numbers only please.");
    return null;
  }
  if (n < 0) { // if n is negative
    console.log("Fibonacci sequence is for positive numbers only.");
    return null; // (base case)
  }
  if (n === 0) { // if n is 0
    console.log(n);
    return n; // (base case)
  }
  if (n === 1) { // if n is 1
    console.log(n);
    return n; // (base case)
  }

  arr[idx] = arr[idx-1] + arr[idx-2]; // Add last 2 array values

  if (idx === n) { // If idx is same as n, return last value (this is fib sequence number for n)
    console.log(arr[idx]);
    return arr[idx]; // (base case)
  }

  idx++; // Otherwise, increment and recursively continue:
  recursiveFib(n, idx, arr);
}
console.log("$$$$$ RECURSIVE FIB $$$$$");
recursiveFib(0);
recursiveFib(1);
recursiveFib(2);
recursiveFib(3);
recursiveFib(4);
recursiveFib(5);




/****************************
Binary String Expansion

You will be given a string containing characters‘ 0’, ‘1’, and‘ ? ’.For every‘ ? ’, either‘ 0’ or‘ 1’ characters can be substituted.Write a recursive
function that returns an array of all valid strings that have‘ ? ’characters expanded into‘ 0’ or‘ 1’.Ex. : binStrExpand("1?0?") should
return ["1000", "1001", "1100", "1101"].For this challenge, you can use string functions such as slice(), etc., but be frugal with their use, as they are expensive.
****************************/

function binaryStringExpansion(str, arr=[], qCount=0, index=0) {
  /*
  Note: This solution is not developed fully and only works in the event of 2 question marks. I was playing around with using arrays to hold various states, and to hop back and forth between them, but seems my logic took a very wrong turn and will have to come back and re-hash this out.
  */

  
  let originalString = str, 
    alternate = false,
    c1 = [1, 0, 1, 0], // combination 1
    c2 = [1, 0, 0, 1]; // combination 2

  if (typeof(str) !== "string") {
    console.log("Strings only please!");
    return null;
    
  }

  // Split string for analysis:
  str = str.split('');

  // Get q count if value not inherited in recursion:
  if (qCount < 1) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "?") {
        qCount++;
      }
    }
  }
  
  if (arr.length === qCount * 2) {
    console.log(arr);
    return arr; // base case
  }

  // Loop through string generating possibilities using configuration possibiltiies:
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "?") {
      if (!alternate) {
        str[i] = c1[index];
        alternate = true;
      } else {
        str[i] = c2[index];
        alternate = false;
      }
    }
  }

  str = str.join(''); // join split string together again
  arr.push(str);
  index++;

  // Reset string:
  str = originalString;

  binaryStringExpansion(str, arr, qCount, index);
}
console.log("$$$$$ BINARY STRING EXPANSION $$$$$");
binaryStringExpansion("1?0?");
binaryStringExpansion("1?0?0?"); // Doesn't work on this string...