// Basic 13 Assignment -- Tim K
// Total time: 20 minutes

// 1.
function print1To255() {
  for (let i = 1; i <= 255; i++) {
    console.log(i);
  }
};

print1To255(); // Test function



// 2.
function printIntsAndSum0To255() {
  let sum = 0;
  for (let i = 0; i <= 255; i++) {
    sum += i;
    console.log(`${i}, ${sum}`);
  }
};

printIntsAndSum0To255(); // test function



// 3.
function findAndPrintMax(arr) {
  let max = arr[0]; // set max to first arr value
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) { // if array val greater than max
      max = arr[i] // set as new max
    };
  };
  console.log(max);
  return max;
};

findAndPrintMax([-100,1002,4,5]); // test function



// 4.
function arrayWithOdds() {
  let arr = [];
  for (let i = 1; i <= 255; i++) {
    if (i % 2 == 1) { // if i is odd:
      arr.push(i); // push to arr
    };
  };
  console.log(arr);
  return arr;
};

arrayWithOdds(); // test function



// 5.
function greaterThanY(arr, y) {
  let gtrThanYCount = 0;
  for (let i = 0; i < arr.length; i++) { // loop through arr
    if (arr[i] > y) { // if value greater than y
      gtrThanYCount += 1; // increase counter by 1
    };
  };
  console.log(gtrThanYCount);
  return gtrThanYCount;
};

greaterThanY([3,6,9,10], 1); // test function



// 6.
function maxMinAverage(arr) {
  let max = arr[0], // set max to first array value
  min = arr[0], // set min to first array value
  sum = 0; // set sum to 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) { // if bigger than max
      max = arr[i] // set as new max
    } else if (arr[i] < min) { // if smaller than min
      min = arr[i]; // set as new min
    }
    sum += arr[i]; // add value to sum
  };
  let avg = (sum / arr.length); // get average
  console.log(`${max}, ${min}, ${avg}`);
  return (`${max}, ${min}, ${avg}`);
};

maxMinAverage([10,20,30,40,50]); // test function



// 7.
function swapStringForNegativeValues(arr) {
  for (let i = 0; i < arr.length; i++) { // loop through array values
    if (arr[i] < 0) { // if value less than 0
      arr[i] = "Dojo" // set as string 'Dojo'
    };
  };
  console.log(arr);
  return arr;
};

swapStringForNegativeValues([100,-10,900,-5,200]); // test



// 8.
function printOdds1To255() {
  for (let i = 1; i <= 255; i++) { // loop through numbers 1 - 255
    if (i % 2 == 1) { // if number is odd
      console.log(i); // print it
    };
  };
};

printOdds1To255(); // test



// 9.
function iterateAndPrintArray(arr) {
  for (let i = 0; i < arr.length; i++) { // loop through array
    console.log(arr[i]); // log value
  }
};

iterateAndPrintArray([3,5,6,1,0,4,2]); // test



// 10.
function getAndPrintAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i ++) { // loop through array
    sum += arr[i]; // add value to sum
  };
  console.log(sum / arr.length); // print average
  return (sum / arr.length);
};

getAndPrintAverage([3,6,9,10]); // test



// 11.
function squareValues(arr) {
  for (let i = 0; i < arr.length; i++) { // loop through array
    arr[i] = Math.pow(arr[i], 2); // square the value
  };
  console.log(arr);
  return arr;
};

squareValues([2,4,6]); // test



// 12.
function zeroOutNegativeNumbers(arr) {
  for (let i = 0; i < arr.length; i++) { // loop through array
    if (arr[i] < 0) { // if value less than 0
      arr[i] = 0; // set array value to 0
    };
  };
  console.log(arr);
  return arr;
};

zeroOutNegativeNumbers([3,6,-9,-10]); // test



// 13.
function shiftArrayValues(arr) {
  for (let i = 0; i < arr.length; i++) { // loop through array
    if (i == (arr.length-1)) { // if index value is last in array
      arr[i] = 0; // set value to 0
    } else {
      arr[i] = arr[i + 1]; // set value to its right neighbor
    };
  };
  console.log(arr);
  return arr;
};

shiftArrayValues([1,2,3,4,5,6,7,8]); // test
