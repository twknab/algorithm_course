// Week 3 - Switch/Case - Strings - Tim K

// 1. Parens Valid: Given an input, return a boolean whether parentheses in that string are valid.
function parensValid(string) {
  // Note: I did not use switch cases here and ought to find a way to incorporate that. 
  // Type of and edge case check:
  if (typeof (string) !== "string" || string.length < 1) {
    console.log("Strings only of at least 1 char please.");
    return null;
  }
  // Variable to store representation of open and closed pattern:
  // Note that `1` is open and `0` is closed, in the `parenPattern` array below:
  let parenPattern = [];
  // loop through string
  for (let i = 0; i < string.length; i++) {
    if (openParen(string.charCodeAt(i))) {
      parenPattern.push(1);
    }
    if (closedParen(string.charCodeAt(i))) {
      parenPattern.push(0);
    }
  }
  // If pattern starts with a 0, we have a parenthesis out of order and should return false:
  // (Note: We already checked prior to this to ensure the length of the string is at least 1 charater)
  if (parenPattern[0] === 0) {
    console.log(false);
    return false; // closed parenthesis cannot be first char, return false
  } else { // If first pattern is an open parenthesis, then see if the number matches:
    // If length of pattern array, divided by its number of open parentheses = 0, everything is closed:
    let sum = 0;
    for (let i = 0; i < parenPattern.length; i++) {
      if (parenPattern[i] === 1) {
        sum += parenPattern[i];
      }
    }

    if ((parenPattern.length % sum) === 0) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }
  // Functions used to help us determine character:
  function openParen(code) {
    /*
      Returns true if open parenthesis:
    */
    return code === 40;
  }

  function closedParen(code) {
    /*
      Returns true if closed parenthesis:
    */
    return code === 41;
  }
}
// Test:
console.log("----- PAREN VALID -----");
parensValid("y(3(p)p(3)r)s"); // should return true
// open open close open close close
// 1 1 0 1 0 0
// => true

parensValid("n(0(p)3"); // should return false
// open open close
// 1 1 0
// => false

parensValid("this(is(something(here)))");
// open open open close close close
// 1 1 1 0 0 0
// => true

parensValid("is(this(complete(or(not?)))");
// open open open open close close close
// 1 1 1 1 0 0 0
// => false

parensValid("is)this(complete)r(");
// close open close open
// 0 1 0 1
// (starts with closing parenthesis -- 0)
// => false






// 2. Braces Valid: Given an input, return a boolean whether the sequence of parentheses, braces and brackets in that string are valid.
function bracesValid(string) {
  // Edge cases and input checks:
  if (typeof(string) !== "string" || string.length < 1) {
    console.log("Strings at least 1 char only.");
    console.log(false);
    return false;
  }

  // Create variables to hold respective patterns:
  let parentheses = [],
    braces = [],
    brackets = [];

  // Loop through string and detect pattern for each, adding them respective arrays above.
  // Note that `1` means the item is open, and `0` means the item is closed:
  // e.g, (this(would(be))) = [1,1,1,0,0,0] for the respective symbol and array

  for (let i = 0; i < string.length; i++) {
    // Use Switch/Case rather than a bunch of if/else statements or custom methods:
    switch (string.charCodeAt(i)) {
      case 40: // `(`
        parentheses.push(1);
        break;
      case 41: // `)`
        parentheses.push(0);
        break;
      case 123: // `{`
        braces.push(1);
        break;
      case 125: // `}`
        braces.push(0);
        break;
      case 91: // `[`
        brackets.push(1);
        break;
      case 93: // `]`
        brackets.push(0);
        break;
      default:
        break;
    } 
  }
  // Uncomment line below to see pattern results after switch/case and for loop completion:
  console.log("PARENTHESES:", parentheses, "BRACES", braces, "BRACKETS", brackets);

  // *
  // Obtain Our Result:
  // *
  // The statement here takes advantage of custom helper functions defined beneath. 
  // Please see helper functions below to better understand.
  if (isValid(parentheses) && isValid(braces) && isValid(brackets)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }

  // *
  // Helper Functions:
  // *
  function sum(array) {
    /*
    Sums the values in an array.
    */
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  // Array Modulus Sum Check:
  function arrayModulusSum(array) {
    /*
    Checks if number of open and closed characters match. Achieves this by dividing the length of the array, by the number of values whom had a `1`. If the number is even (e.g, `0`), it means there are an equal number of opening to closing characters. If this number is odd, `(e.g, >= 1)`, we don't have a matching number of elements. 
    */
    if (array.length % sum(array) === 0) {
      return true;
    } else {
      return false;
    }
  }
  // Check if Starts with Open:
  function isStartOpen(array) {
    /*
    If first value in array is open (e.g., `1`), returns `true`.
    */
    if (array[0] === 1) {
      return true;
    } else {
      return false;
    }
  }
  // Checks Modulus and Ensures Starts with Open Item:
  function isValid(array) {
    if (arrayModulusSum(array) && isStartOpen(array)) {
      return true;
    } else {
      return false;
    }
  }
}
console.log("------ BRACES VALID -----")
// bracesValid("w(a{t}s[o(n{c}o)m]e)h[e{r}e]!");
// => true

/*
a1 - open
b1 - open
b1 - close
c1 - open
a2 - open
b2 - open
b2 - close
a2 - close
c1 - close
a1 - close
c2 - open
b3 - open
b3 - close
c2 - close
*/

// bracesValid("d(i{a}l[t]o)n{e");
// => false

bracesValid("a(1)s[O(n]0{t)0}k");
// => false

par1 = open
par1 = closed
brack1 = open
par2 = open
brack2 = closed 

/*
a1 - open
a1 - close
c1 - open
a2 - open !!
c1 - close
b1 - open
a2 - close !!
b2 - close
*/



// 3. Is Palindrome: Given a string, return a boolean whether that string is a strict palindrome.
function isPalindrome() {

}







// 4. Longest Palindrome: 
function longestPalindrome() {

}