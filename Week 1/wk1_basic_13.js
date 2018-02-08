// Basic 13 -- Tim Knab -- Week 1



// 1. Print 1 to 255:
function print_1_to_255() {
  // Loop from 1 to 255 and console.log the value:
  for (let i = 1; i <= 255; i++) {
    console.log(i);
  }
};

// Test function:
print_1_to_255();



// 2. Print integers from 0 to 255 and with each integer, print sum thus far:
function print_ints_and_sum(){
  // Create empty var to hold sum value:
  let sum = 0;
  // Loop from 0 to 255, add integer to sum and print integer and sum thus far:
  for (let i = 0; i<= 255; i++) {
    sum += i;
    console.log(`Integer: ${i} Sum: ${sum}`);
  };
};

// Test function:
print_ints_and_sum();



// 3. Given an array, find and print its largest element:
function find_and_print_max(arr) {
  /*
  Note: we are assuming that we are given an array of at least 1 element.
  We could add more strict checks into this algorithm, for but simplicty and time we'll assume that we are given our proper cases:
  */

  // Set max to first element in the array:
  let max = arr[0];
  // Loop through array, and if any element is greater than max, set to as max:
  for (var i = 0; i < arr.length; i++) {
    if (i > max) {
      max = arr[i];
    }
  };
  console.log(max);
  return max;
};

// Test our function:
find_and_print_max([1,2,3,4,5,6,-3,-4,-3,1001,-400]);



// 4. Create an array with all the odd integers between 1 an 255 (inclusive):
function array_with_odds(){
  // Will hold all odd integers:
  let arr = [];
  // Loop from 1 to 255, find odds numbers and add to array. Log and return array:
  for (let i = 1; i <= 255; i++) {
    // If number is odd:
    if (i % 2 == 1) {
      // Push to array:
      arr.push(i);
    };
  };
  // Log and return:
  console.log(arr);
  return arr;
};

// Test function:
array_with_odds();



// 5. Given an array and a value of Y, count and print the number of array values greater than Y:
function greater_than_y(arr, y) {
  // Create an empty counter for vals > y:
  let count = 0;
  // Loop through array and compare to y, if greater increase counter:
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      count += 1;
    };
  };
  // Log and return count:
  console.log(count);
  return count;
};

// Test function:
greater_than_y([1,2,3,4,5], 0);



// 6. Max, Min, Avg: Given an array, print the max, min and average values of that array:
function max_min_avg(arr) {
  // Set min and max to first array item:
  let max = arr[0];
  let min = arr[0];
  // Create sum variable for help calculating avg:
  let sum = 0;

  // Loop through array and compare values to max and min:
  for (let i = 0; i < arr.length; i++) {
    // Increase sum:
    sum += arr[i];
    // If value greater than max set as new max:
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    };
  };

  // Print max, min and avg:
  console.log(`Max: ${max} | Min: ${min} | Average: ${sum / (arr.length)}`)
};

// Test our function:
max_min_avg([1,2,3,4,-100,100]);



// 7. Given an array of numbers, replace any negative values with the string "Dojo":
function swap_string_for_negative_values(arr){
  // Loop through array looking for negative values:
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    };
  };
  console.log(arr);
  return arr;
};

// Test our function:
swap_string_for_negative_values([1,2,-100,3,4,-1000]);



// 8. Print all odd integers from 1 to 255:
function print_odds() {
  for (let i = 0; i <= 255; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  };
};

// Test:
print_odds();



// 9. Iterate through a given array, printing each value:
function iterate_and_print(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  };
};

// Test:
iterate_and_print([1,2,3,4,5]);



// 10. Analyze an array's values and print the average:
function get_and_print_average(arr) {
  // Create empty sum var for help w/ average:
  let sum = 0;
  // Loop through array and add to sum:
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum / arr.length);
  return (sum / arr.length);
};

// Test:
get_and_print_average([1,2,3,4,5,6,7,8]);



// 11. Square each value in a given array, return that same array with changed values:
function square_the_values(arr) {
  // Loop through array and square each value:
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.pow(arr[i], 2); // Math.pow(value, multBy)
  }
  console.log(arr);
  return (arr);
};

// Test our function:
square_the_values([2,4,6,8]);



// 12. Return the given array, after setting any negative values to zero:
function zero_out_neg_numb(arr){
  // Loop through array and check if any values are negative:
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    };
  };
  console.log(arr);
  return arr;
};

// Test function:
zero_out_neg_numb([1,-2,3,-4,5,-6]);



// 13. Given an array, move all values forward by one index, dropping the first and leaving a 0 value at the end:
function shift_array_values(arr) {
  // Loop backwards through array:
  for (let i = arr.length-1; i >= 0; i--) {
    console.log(i);
    // If i = 0 (first index), set this to 0:
    if (i == 0) {
      arr[i] = 0;
    } else { // Otherwise replace array item with that of its left neighbor:
      arr[i] = arr[i - 1];
    };
  };
  console.log(arr);
  return arr;
};

// Test function:
shift_array_values([1,2,3,4,10]);
