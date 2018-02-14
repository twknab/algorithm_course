// Week 2 -- Arrays -- Tim K

/*
In our first round of solutions here, we are not worrying about edge cases or improper data types being submitted. We're going to just assume that whatever we're given is an array with at least 2 values, and is indeed an array (not a string, object, etc).

It definitely is in my benefit to come back and take these algorithms to edge cases as well as check for data types, minimum array lengths and so forth.
*/

// 1.
function pushFront(arr, val) {
  arr.length += 1; // add value to end of array
  // loop through array backwards
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1]; // shift values to right
  };
  arr[0] = val; // set first array item to val
  console.log(arr);
  return arr; // return array
};

pushFront([2, 3, 4, 5], 1); // test




// 2.
function popFront(arr) {
  // store first value:
  let firstVal = arr[0];
  // shift all values left:
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  };
  // Remove last value of array:
  arr.length -= 1;
  console.log(firstVal);
  console.log(arr);
  return firstVal;
};

popFront([1, 2, 3, 4, 5]); // test




// 3.
function insertAt(arr, idx, val) {
  // add value at end of array:
  arr.length += 1;
  // shift everything to right of chosen idx:
  for (let i = arr.length - 1; i > idx; i--) {
    arr[i] = arr[i - 1];
  };
  arr[idx] = val;
  console.log(arr);
  return arr;
};

insertAt([1, 2, 4, 5], 2, 3);




// 4.
function removeAt(arr, idx) {
  // store value at chosen index:
  let value = arr[idx];

  // shift values left:
  for (let i = idx; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  };
  // remove last value on array:
  arr.length -= 1;
  console.log(value);
  console.log(arr);
  return value;
};

removeAt([1, 2, 3, 4, 5], 2);




// 5.
function secondToLast(arr) {
  // check if array has at least 2 values:
  if (arr.length >= 2) {
    console.log(arr[arr.length - 2]);
    return arr[arr.length - 2];
  } else {
    return null;
  };
};

secondToLast([2, 3, 4, 5, 6]); // test




// 6. - Optional
function nthToLast(arr, n) {
  // Check if array is long enough:
  if (arr.length - n >= 0) {
    console.log(arr[arr.length - n]);
    return arr[arr.length - n];
  } else {
    console.log(null);
    return null;
  }
};

nthToLast([1, 2, 3], 2); // test
nthToLast([1, 2, 3], 4); // edge case


// 7. - Optional
function secondLargest(arr) {
  let firstLargest = 0; // set first largest to 0
  let secondLargest = 0; // set second largest to 0

  // loop through array once and find largest value:
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) { //if value than first largest
      firstLargest = arr[i]; // set as first largest
    } else {
      secondLargest = arr[i]; // otherwise set as second largest
    }
  };

  // Loop through array a second time to find second largest value:
  // Note: I tried using only one for loop but was not able to figure out the correct logic for also assessing the second largest value. I opted for a second for loop, which doesn't seem elegant, and there ought to be a better way?
  for (let j = 0; j < arr.length; j++) { // loop through array
    if (arr[j] > secondLargest && arr[j] < firstLargest) {
      secondLargest = arr[j];
    }
  };
  console.log(secondLargest);
  return secondLargest;
};

secondLargest([1, 2, 3, 4, 5]); // test
secondLargest([100, 2, 43, 4, -5]); // edge case
secondLargest([-5, 2, 43, 4, 100]); // edge case
secondLargest([-1, -2, 43, -4, -5]);


// 8. - Optional
function nthLargest(arr, n) {
  // This function I was having trouble determining how to do.
  // I did find a few examples online using the .sort() method,
  // but our goal here is to NOT use this. I also found a few solutions
  // without .sort(), but they were difficult to follow or poorly
  // commented. Have to study this algorithm a bit more to think out a solution.
};

nthLargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4);
