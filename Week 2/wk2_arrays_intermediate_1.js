// Wk 2 - Advanced Arrays - Tim K




// 1. arrConcat

/*
Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.:
arrConcat( ['a','b'], [1,2] ) should return ['a','b',1,2].
*/

// Here's a solution not using built-in methods and actually is not very efficient:
function arrConcat(arr1, arr2) {
  // Make sure array lengths are at least 1:
  if (arr1.length > 0 && arr2.length > 0) {
    // Create a new array to hold both values:
    let concated = [];

    // Add values from each array into concat, starting with arr1:
    for (let i = 0; i < arr1.length; i++) {
      concated[i] = arr1[i];
    };
    // Add values from second array, but being sure to not overwrite the indexes from arr1:
    console.log(concated.length);
    for (let j = 0; j < arr2.length; j++ ) {
      concated[concated.length] = arr2[j];
    };
    return concated;
  } else {
    // if arr1 has values but arr2 does not:
    if (arr1.length > 0 && arr2.length == 0) {
      return arr1;
    }
    // if arr2 has values but arr1 does not:
    else if (arr1.length == 0 && arr2.length > 0) {
      return arr2;
    }
    return null; // otherwise return null if both empty
  }
};

// Test:
console.log("--- CONCAT ---");
console.log(arrConcat([1,2,3], [4,5,6]));
console.log(arrConcat([3], [])); // edge
console.log(arrConcat([], [])); // edge
console.log(arrConcat(['1', '2', '3'], [1, 2, 3])); // edge

// Here's another way to do it:
function arrConcatAgain(arr1, arr2) {
  let arr3 = [];
  for (var idx = 0; idx < arr1.length; idx++ ) {
    arr3.push(arr1[idx]); // using push here
  }
  for (var counter = 0; counter < arr2.length; counter++){
    arr3[arr3.length] = arr2[counter];
    // You can use push() and is actually recommended over direct index assignment, but we left the line in above for concept.
    // arr3.push(arr2[counter]);
  }
  return arr3;
};

// Test
console.log("--- CONCAT AGAIN ---");
console.log(arrConcatAgain(['a', 'b', 'c'], [1, 2, 3]));









// 2. fasterFactorial

/*
Remember iFactorial from last chapter? Take that implementation and use a time-space tradeoff to accelerate the average running time. Recall that iFactorial(num) returns the product of positive integers from 1 to the given num. For example: fact(1) = 1, fact(2) = 2, fact(3) = 6. For these purposes, fact(0) = 1.
*/

function fasterFactorial(number) {

  // If number is 0 or 1:
  if (number == 0 || number == 1) {
    return 1;
  };

  // If number is less than 0:
  if (number < 0) {
    return null;
  };

  // We loop from our number downwards, multiplying it until we reach 1:
  let total = 1;
  while (number > 0) {
    total *= number;
    number--;
  }

  console.log(total);
  return total;

};
console.log("--- FASTER FACTORIAL ---");
fasterFactorial(6);

function anotherFactorial(number) {

  // Do an input check for data type:
  if (typeof(number) != 'number') {
    return null;
  };

  // Check for edge cases:
  if (number == 0 || number == 1) {
    return 1;
  } else if (number < 0) {
    return null;
  };

  // This time we loop from 1 forwards to the end of our number:
  let total = 1;
  for (let i = 1; i <= number; i++) {
    total *= i;
  }
  console.log(total);
  return total;
};

console.log("--- ANOTHER FACTORIAL ---");
anotherFactorial(6);









// 3. shuffle

/*
Recreate the shuffle()built into JavaScript, to efficiently shuffle a given array’s values. Do you need to return anything from your function?
*/

// Here's one approach where we swap an array value with a random index position:
function shuffle(arr) {
 let pos;
 let temp;

 for (var idx = arr.length - 1; idx > 0; idx--) {
   pos = Math.floor(Math.
     random() * (idx + 1));
   temp = arr[idx];
   arr[idx] = arr[pos];
   arr[pos] = temp;
   console.log(idx, pos, arr);
 }
 console.log(arr);
 return arr;
};

// Test:
console.log("<--- SHUFFLE --->");
console.log("--- RESULT 1 ---");
shuffle([1,2,3,4,5]);
console.log("--- RESULT 1 ---");
shuffle([10,12,14,16,18,20,22,24,26,28,30,32]);

// Here's another approach:
function shuffleAgain(arr) {
  for (let i = 0; i < arr.length; i++) {
    let rand = Math.floor(Math.random()*arr.length);
    let temp = arr[i];
    arr[i] = arr[rand];
    arr[rand] = temp;
    console.log(i, rand, arr);
  }
  console.log(arr);
  return arr;
};

// Test:
console.log("<--- SHUFFLE AGAIN --->");
console.log("--- RESULT 1 ---");
shuffleAgain([1,2,3,4,5]);
shuffleAgain([10,12,14,16,18,20,22,24,26,28,30,32]);
console.log("--- RESULT 2 ---");
shuffleAgain([1,2,3,4,5]);


// Here's a method where no random number within our range is generated more than once. In the above method, certain indexes, are more frequently targeted than others, since the random number being used to do so may repeat itself within such a short range (no greater than the last index in the array). The method below ensures each random number generated is only done so once, however with more testing, this method actually seems LESS random, as on rare occassions with short arrays, the values will be swapped around resulting in the same values as the original. Because the other methods seem to favor certain indexes, there is less liklihood of getting the same array as a result when using small arrays.
function shufflingOneMoreTime(arr) {

  // Create an array to store already generated random numbers:
  let found = [];

  // Loop through array:
  for (let i = 0; i < arr.length; i++) {

    let unique = false;

    // Continue generating random numbers if they've already been used before:
    while (!unique) {
      // Generate a random number between 0 and array.length-1
      let random = Math.floor(Math.random() * arr.length);

      // Check if this value already exists in our previously random numbers array:
      if (found.indexOf(random) != -1) {
        unique = false;
      }
      // Otherwise this number is unique! Add it to our found array, and swap the arr[random] with arr[i]
      else {
        // Add random value to swapped array:
        found.push(random);
        // Set unique to true
        unique = true;
        // temporarily store arr[i]
        let temp = arr[i];
        // set arr[i] to arr[random]
        arr[i] = arr[random];
        // set arr[random] to temp
        arr[random] = temp;
        console.log(i, random, arr);
      };
    };
  };
  console.log(arr);
  return arr;
};

// Test:
console.log("<--- SHUFFLING ONE MORE TIME --->");
console.log("--- RESULT 1 ---");
shufflingOneMoreTime([1,2,3,4,5]);
console.log("--- RESULT 2 ---");
shufflingOneMoreTime([10,12,14,16,18,20,22,24,26,28,30,32]);
