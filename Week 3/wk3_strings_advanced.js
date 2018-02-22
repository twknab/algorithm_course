// Week 3 - Strings, Advanced - Tim K

// 1. Remove Blanks
// Create a JavaScript function that given a string, returns the integer made from the string’s digits.
// (Keeping it simple just to solve it quick)
function removeBlanks(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      continue;
    } else {
      newString += string[i];
    }
  }
  console.log(newString);
  return newString;
}
console.log("----- REMOVE BLANKS -----");
removeBlanks("This is just a test, I repeat, just a test.");





// 2. Get String 
// Create a JavaScript function that given a string, returns the integer made from the string’s digits.
function getStringDigits(string) {
  let numberString = "";
  let numb; // we'll use this below
  for (let i = 0; i < string.length; i++) {
    // convert each string value to number:
    numb = Number(string[i]);
    // Note: if value is not a number, `NaN` will be returned.
    // Use the NaN() method to check if each converted value is NaN:
    // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
    // If not `NaN`, add to numberString:
    if (isNaN(numb) === false) {
      numberString += numb;
    } else { // otherwise continue:
      continue;
    }
  }
  // convert numberString to actual number data type:
  // let's recycle our `numb` variable:
  numb = Number(numberString);
  console.log(numb);
  return numb;
}
console.log("----- GET STRING DIGITS -----");
getStringDigits("a123b");
getStringDigits("0s1a3y5w7h9a2t4?6!8?0");





// 3. Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
function acronyms(string) {
  // Note: This seems uncomfortably like a long solution, but alas, this was the best my mind could achieve at this moment. Perhaps I can come back and look again or compare with other submissions, to find a better or cleaner strategy.
  if (typeof (string) !== "string") {
    console.log("Must be a string.");
    return null;
  } else if (string.length < 1) {
    console.log("String must have at least 1 character.");
    return null;
  } else {
    // create variable to hold our acronym:
    let acronym = "";
    // loop through string:
    for (let i = 0; i < string.length; i++) {
      // check if character is only letters (a-z) (e.g, codes 65-90), or a dash (e.g, code 45), or a space (e.g., code 32):
      if ((string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) || string.charCodeAt(i) === 45 || string.charCodeAt(i) === 32) {
        // if first index, immedietely capitalize and add to acronym:
        if (i === 0) {
          acronym += string[i].toUpperCase();
        }
        // if space is detected, analyze the letter next to it (with an index of i +1):
        if (string.charCodeAt(i) === 32) {
          // if the letter next to a space is NOT a space, IS a dash OR IS a letter a-z, add it to the acronym:
          if ((string.charCodeAt(i + 1) !== 32) && ((string.charCodeAt(i + 1) === 45) || (string.charCodeAt(i + 1) >= 65 && string.charCodeAt(i) <= 90))) {
            acronym += string[i + 1].toUpperCase();
          } else {
            continue; // if character next to space is rejected, continue
          }
        }

      } else { // if character is not a letter, space or dash, continue
        continue;
      }
    }
    console.log(acronym);
    return acronym;
  }
}
console.log("----- ACRONYMS -----");
// Words, one dash with one space between itself and previous/next word
acronyms("This is just - a test");
// => TIJ-AT

// Words, one dashes with two spaces between itself and previous/next word
acronyms("there's no free lunch  -  gotta pay yer way");
// => TNFL-GPYW

// Words, no dashes
acronyms("Live from New York, it's Saturday Night!");
// => LFNYISN

// Empty string
acronyms("");
// => null

// String one letter
acronyms("T");
// => T

// Numbers
acronyms(13);
// => null

acronyms(undefined);
// => null

acronyms("National Aeronautics Space Administration");
// => NASA

acronyms("Testing, With, Commas");
// => TWC

acronyms("Testing'  With'  Apostrophes'  And'  2'  Spaces'");
// => TWAAS

acronyms("123 456 Only 789 Letters 1011 And Dashes -- Matter");
// => OLAD-M
// (ignores all numbers but includes any dashes)

acronyms("- Afternoons - Are - Best - Napping");
// => -A-A-B-N
// (ignores all numbers but includes any dashes)

acronyms("Fun Times - Every Day");
// => FT-ED
// (ignores all numbers but includes any spaces)