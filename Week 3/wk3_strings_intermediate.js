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
    numb = parseInt(string[i]);
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
  numb = parseInt(numberString);
  console.log(numb);
  return numb;
}
console.log("----- GET STRING DIGITS -----");
getStringDigits("a123b");
getStringDigits("0s1a3y5w7h9a2t4?6!8?0");
// leading 0 not working...hmmmmmmm
// how about using charAt() to find numbers?

/*

  for (let i = 0; i < string.length; i++) {
    if (string[i] >= "a" )
  }

*/





// 3. Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
function acronyms(string) {
  // Note: This seems uncomfortably like a long solution, but alas, this was the best my mind could achieve at this moment. Perhaps I can come back and look again or compare with other submissions, to find a better or cleaner strategy.

  // Input check / edge case check:
  if (typeof (string) !== "string") {
    console.log("Must be a string.");
    return null;
  } else if (string.length < 1) {
    console.log("String must have at least 1 character.");
    return null;
  } 
  
  // If passes checks:
  else {
    
    // create variable to hold our acronym:
    let acronym = "";

    // loop through string:
    for (let i = 0; i < string.length; i++) {
      /*
        The basic premise, is we're going to:
          - first check if a character is indeed a letter, dash or space.
          - if this letter is first in the array string, we'll uppper case it and add it to our acronym
          - if this letter is a space, we'll analyze the letter next to it (looking for the letter of the start of the following word)
            - if the neighboring letter is NOT a space,but IS a dash OR alpha (a-zA-Z), add to acrnoym (as this is a new word).
        
        Note that this progression uses functional programming stylings, breaking up each potential statement into functions which return expressions (boolean values of true or false).
      */
      
      // check if character is only letters (a-z) (e.g, codes 65-90), or a dash (e.g, code 45), or a space (e.g., code 32):
      if (isAlphaDashSpace(string.charCodeAt(i))) {

        // if first index, immedietely capitalize and add to acronym:
        if (i === 0) {
          acronym += string[i].toUpperCase();
        }

        // if space is detected, analyze the letter next to it (with an index of i +1):
        if (isSpace(string.charCodeAt(i))) {

          // if the letter next to a space is NOT a space, IS a dash OR IS a letter a-z, add it to the acronym:
          if (!isNewLineTab(string.charCodeAt(i + 1)) && isAlphaDash(string.charCodeAt(i + 1))) {
            acronym += string[i + 1].toUpperCase();
          }

        } 

      } 
    }
    console.log(acronym);
    return acronym;
  }
}
function isAlpha(code) {
  return (isUpper(code) || isLower(code));
}
function isUpper(code) {
  return (code >= 65 && code <= 90);
}
function isLower(code) {
  return (code >= 97 && code <= 122);
}
function isDash(code) {
  return (code === 45);
}
function isSpace(code) {
  return (code === 32);
}
function isAlphaDashSpace(code) {
  return (isAlpha(code) || isDash(code) || isSpace(code));
}
function isAlphaDash(code) {
  return ((isSpace(code) !== 'true') && (isAlpha(code) || isDash(code)));
}
// function isNewLineTab(code) {
//   return (code === 13 || code === 10 || code === 9);
// }
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


/*
// Right now I had trouble figuring out how to handle carriage returns (code 13), new lines (code 10), or tabs (code 9)
// E.g, how would you handle something like this?

  ```
  acronyms(`Fun 

  Times - Every Day`);
  ```

  Notice how `acronyms("Fun Times - Every Day")` has a new line entered in the middle of the string. We are also using string literals (``). I was able to figure out how to detect the new line, but I wasn't able to figure out how to get the next starting letter. See commented out `isNewLineTab()` function: when I tried to use this, I'd get the next word ("Every"), rather than the first word in the break ("Times").

  Will want to come back and look at this a bit more but for time management going to move forwards for now.
*/