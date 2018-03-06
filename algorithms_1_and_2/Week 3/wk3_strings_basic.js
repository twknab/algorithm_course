// Week 3, Strings - Basic - Tim K

// 1. Arrs2 Map:
function arrs2Map(arr1, arr2) {
  /* 
  Note in regards to handling different array lengths:
  I wanted my algorithm to be able to handle variations in lengths, including scenarios where the first array is shorter than the second (the trickier bit). I found that trying to use undefined as a value for a key, is actually fine, e.g, `{undefined: "This is actually OK"}`. However, because every key value (not pair value) must be unique, I opted to, in this scenario, to subsitute `key+index` as the name for any keys that go out of bounds (rather than `undefined`). 
  */

  // input checks:
  if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
    console.log("Only arrays are allowed.");
    return null;
  } else {
    // If array values do not match, add to their length:
    if (arr1.length != arr2.length) {
      if (arr1.length > arr2.length) {
        arr2.length = arr1.length; // set arr2 length to arr1
      } else {
        arr1.length = arr2.length; // set arr1 length to arr2
      }
    } 
    // create object and associate values:
    let object = {};
    for (let i = 0; i < arr1.length; i++) {
      // if arr1 value is out of original bounds, give it a unique name and associate with arr2 value.
      // note: this only happens if arr1 is shorter than arr2
      if (arr1[i] === undefined) {
        object[`key${i}`] = arr2[i];
      } else { // otherwise associate value as normal
        object[arr1[i]] = arr2[i];
      }
    }
    console.log(object);
    return object;
  }

}
console.log("----- ARR2 MAP -----");
// input check test case
arrs2Map("Yello Der", "Friend"); 
// => null

// input check test case
arrs2Map(123123123); 
// => null

arrs2Map(["a", "b", "c", "d"], [1, 2, 3, 4]);
// => { a: 1, b: 2, c: 3, d: 4 }

// if array 1 is larger, array 2 values are filled in as undefined
arrs2Map(["a", "b", "c", "d", "e", "f"], [1, 2, 3, 4]);
// => { a: 1, b: 2, c: 3, d: 4, e: undefined, f: undefined }

// if array 2 is larger, outlying array 1 key names will be replaced with "key+idx"
arrs2Map(["a", "b", "c"], [1, 2, 3, 4, 5, 6, 7]); 
// => { a: 1, b: 2, c: 3, key3: 4, key4: 5, key5: 6, key6: 7 }

arrs2Map(["this", "is", "just", "a", "test"], ["hi", "hello", "howdy", "how-do-you-do", "greetings"]);
/* => { 
  this: 'hi', 
  is: 'hello', 
  just: 'howdy', 
  a: 'how-do-you-do', 
  test: 'greetings' 
}
*/

arrs2Map([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"]);
// => { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e' }





// 2. InvertHash
// Hints: use for...in loop, don't modify existing objects.
function invertHash(object) {
  // Note: I added some logic to this algorithm so that if an object with duplicate values is provided, the keys will be given unique names rather than ovewritten.
  // input check:
  if (typeof(object) != "object") {
    console.log("This is not an object.");
    return null;
  } else {
    // create new object to hold swapped values
    let inverted = {};
    // loop through object and swap value with key name into new object:
    for (let key in object) {
      // make sure key doesn't already exist (so we don't mess up our associations):
      if (object[key] in inverted) {
        // key already exists, give it a unique name with original key index attached:
        inverted[object[key] + Object.keys(object).indexOf(key)] = key; 
      } else {
        inverted[object[key]] = key;
      }
    }
    console.log(inverted);
    return inverted;
  }
}
console.log("----- INVERT HASH -----");
// test basic case
invertHash({"this": "is", "a": "test"}); 
// => {"is": "this", "test": "a"}

// case with duplicate values
invertHash({"this": "is", "a": "is"}); 
// => {"is": "this", "is1": "a"}

// case with triplicate values
invertHash({"this": "is", "a": "is", "repeating": "is"}); 
// => {"is": "this", "is1": "a", "is2": "repeating"}




// 3. myJoin - Given an array of strings, return a string
function myJoin(array) {
  // Input check:
  if (Array.isArray(array) !== true) {
    console.log("Must be an array.");
    return null;
  }
  // Create empty string to hold all strings:
  let string = "";
  // Iterate through array adding it to string:
  for (let i = 0; i < array.length; i++) {
    if (i === 0) { // if first element:
      string += array[i]; // don't add a space
    } else { // otherwise
      string += " " + array[i]; // add a space before the item
    }
  }
  console.log(string);
  return string;
}
console.log("----- MY JOIN -----");
// returns empty string
myJoin([]); 
// => ""

myJoin(["h","ello","der","friend"]); 
// => "h ello der friend"

// test wrong type
myJoin(1234); 
// => null

myJoin(["🎵", "It's", "beginning", "to", "look", "a", "lot", "like", "Christmas","🎵"]);
// => "🎵 It's beginning to look a lot like Christmas 🎵"



// 4. mySplit - Given ‘abc’, return [‘a’, ’b’, ’c’]
function mySplit(string) {
  // input check:
  if (typeof(string) !== "string") {
    console.log("Must be a string.");
    return null;
  } else {
    // Create empty array to hold string values:
    let array = [];
    // Iterate through string and array:
    for (let i = 0; i < string.length; i++) {
      // Omit pushing any spaces or dashes:
      if (string[i] === " " || string[i] === "-") {
        continue;
      } else {
        array.push(string[i]);
      }
    }
    console.log(array);
    return array;
  }
}
console.log("----- MY SPLIT -----");
mySplit(123); 
// => null

mySplit("This is a string"); 
// => [ 'T', 'h', 'i', 's', 'i', 's', 'a', 's', 't', 'r', 'i', 'n', 'g' ]

mySplit("This-is-a-string");
// => [ 'T', 'h', 'i', 's', 'i', 's', 'a', 's', 't', 'r', 'i', 'n', 'g' ]





// 5. ReverseString
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
// => null

reverseString("helio");
// => oileh

reverseString("racecar");
// => racecar

reverseString("dishpan");
// => naphsid

reverseString("mit");
// => tim

// Something really really long:
reverseString("Amet anim aliquip nostrud exercitation anim elit excepteur veniam labore aliquip. Id nisi consectetur occaecat sunt esse et cillum officia ipsum ex. Eiusmod culpa ad magna voluptate veniam sint eiusmod duis velit cupidatat sit.");
// => .tis tatadipuc tilev siud domsuie tnis mainev etatpulov angam da apluc domsuiE .xe muspi aiciffo mullic te esse tnus taceacco rutetcesnoc isin dI .piuqila erobal mainev ruetpecxe tile mina noitaticrexe durtson piuqila mina temA


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
// => tset a si sihT

reverseStringAgain({"this": "Shouldn't be allowed"});
// => null

reverseStringAgain("happy holidays");
// => syadiloh yppah

reverseStringAgain("penny");
// => ynnep

reverseStringAgain("wheat");
// => taehw