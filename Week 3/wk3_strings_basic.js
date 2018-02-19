// Arrs2 Map:
// Consider if arrays are different lengths how that might match up.

// InvertHash
// use for...in loop
// create a new object -- don't modify same object

// 3. ReverseString
// In this first approach we'll push to an array:
function reverseString(str) {
  let start = Date.now();
  // input check
  if (typeof(str) != "string") {
    console.log("This is not a string.");
    return null;
  } else {
    // Create array to hold existing string:
    let letters = [];
    // Loop through string backwards and add values to array:
    for (let i = str.length-1; i >= 0; i--) {
      letters.push(str[i]);
    }
    console.log(letters);
    // Loop through array and concat to a string:
    let newString = "";
    for (let j = 0; j < letters.length; j++) {
      newString += letters[j];
    }
    console.log(`Result: ${newString} | Duration: ${Date.now() - start} ms`);
    // Return new string
    return newString;
  }
}

console.log("----- REVERSE STRING -----");
reverseString(123);
reverseString("helio");
reverseString("racecar");
reverseString("dishpan");
reverseString("mit");

// Let's try another way though, not using an array (no storage) -- any difference in result?
// Note: This actually seems faster than the function above. Most likely because the function above has an exta for loop. 
// However, there might be occassions if we needed to modify the string again and again, having it already stored in array would speed up our manipulation.
function reverseStringAgain(str) {
  let start = Date.now();
  if (typeof (str) != "string") {
    console.log("This is not a string.");
    return null;
  } else {
    let newString = "";
    // loop backwards through array and concat to new string:
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    console.log(`Result: ${newString} | Duration: ${Date.now() - start} ms`);
    return newString;
  }
}
console.log("----- REVERSE STRING AGAIN -----");
reverseStringAgain("This is a test");
reverseStringAgain({"this": "Shouldn't be allowed"});
reverseStringAgain("happy holidays");
reverseStringAgain("penny");
reverseStringAgain("wheat");