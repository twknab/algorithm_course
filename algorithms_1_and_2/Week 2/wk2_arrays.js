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

// Here's another way you can write this without having to manually alter the length of the array (this one is more elegant):
function pushFrontAgain(arr, val) {
  // loop through array backwards
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1]; // shift values to right
  };
  arr[0] = val; // set first array item to val
  console.log(arr);
  return arr; // return array
};

pushFrontAgain([6, 7, 8, 9], 5); // test



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

// Here's a similar way to do it again, just not actually modifying the array.length directly:
function insertAt(arr,index,val){
  for(var i = arr.length; i > index; i--){
    arr[i] = arr[i - 1]; // will create new array value at end of array on first iteration of for loop
  };
  arr[index] = val;
};




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
  // make sure nth largest is not outside of array length:
  if (n > arr.length) {
    console.log("n is out of range; please choose a smaller number.")
    return null;
  };

  // manually sort array:
  // start by looping through array at first value:
  for (let i = 0; i < arr.length; i++) {
    // loop again through the array, comparing each value to arr[i]:
    // note: in the for loop below, we set our counter `j = i`.
    // this is so that our second for loop advances with our first for loop, and that we move on from our last analyzed value, which we already found to be the largest
    // if we for example, set `j = 0`, we'd get some undesired behavior.
    // setting `j = i` ensures that once we detect the highest value, we leave that index alone and move forwards through the array.
    // sorry for the poor explanation but if you play around you'll see
    for (let j = i; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      };
    };
  };

  console.log(arr);
  console.log(arr[n-1]);

  // return nth-largest item:
  return arr[n-1];
};

nthLargest([1,2,3,4,5], 4);
nthLargest([12,13,-1,2,5,6,7], 1);
nthLargest([-1000,-23,11,22,54,62,50043], 5);
nthLargest([-1000,-23,11,22,54,62,50043], 100); // edge


// For fun, let's isolate the sort function we wrote manually above and see how to sort from Greatest to Least, and from Least to Greatest:

// Sort Greatest to Least:
function sortGreatest(arr) {
  // manually sort array from largest to smallest:
  // loop forwards through array:
  for (let i = 0; i < arr.length; i++) {
    // loop through the array, moving forwards:
    // note in loop below we set `j = i` so we move on after finding greatest value:
    for (let j = i; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i]; // store original value for swapping
        arr[i] = arr[j]; // set original value position to greater value
        arr[j] = temp; // set greater value position to original value
      };
    };
  };
  return arr;
};

console.log(sortGreatest([10,9,1000,12,-11,3]));


// Sort Least to Greatest:
function sortLeast(arr) {
  // manually sort array from smallest to largest:
  // loop through array backwards:
  for (let i = arr.length-1; i >= 0; i--) {
    // loop again through the array, moving backwards:
    for (let j = i; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      };
    };
  };
  return arr;
};

console.log(sortLeast([10,9,1000,12,-11,3]));
