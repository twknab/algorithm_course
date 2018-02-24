// Week 3 - Switch/Case - Strings - Tim K

// 1. Parens Valid: Given an input, return a boolean whether parentheses in that string are valid.
function parensValid(string) {
  // Input and edge case check:
  if (typeof (string) !== "string" || string.length < 1) {
    console.log("Strings only of at least 1 char please.");
    return null;
  }

  // Create an array to hold our opening parentheses:
  let opened = [];

  // Create an associated array that holds our matching parentheses values:
  // Note: The pairing is with the closed character as the key, and the opening character as the value. This will be important for checking later.
  const parentheses = {
    ")" : "(",
  };

  // Loop through string:
  for (let i = 0; i < string.length; i++) {
    // Uncomment the line below to see the opened array grow and shrink as characters are evaluated:
    // console.log(string[i], opened);
    
    // Examine each character to detect any opening and closing characters.
    // If opening character, push to opened array.
    // If closing character, pop last opened array value and compare.
    switch (string[i]) {
      case "(":
        opened.push(string[i]);
        break;
      case ")":
        last = opened.pop();
        // If last value does not match corresponding associated array value, log & return false:
        if (parentheses[string[i]] !== last) {
          console.log(false);
          return false;
        } 
        break;
      default:
        break;
    }
  }

  // If any values left inside of `opened` array, we know we have mismatched values, log & return false:
  if (opened.length > 0) {
    console.log(false);
    return false;
  } else {
    console.log(true);
    return true;
  }
}
// Test:
console.log("----- PAREN VALID -----");
parensValid("y(3(p)p(3)r)s"); // should return true
// => true

parensValid("n(0(p)3"); // should return false
// => false

parensValid("this(is(something(here)))");
// => true

parensValid("is(this(complete(or(not?)))");
// => false

parensValid("is)this(complete)r(");
// => false

parensValid("a(bc)d)e(f(g)h)i(jk");
// => false




// 2. Braces Valid: Given an input, return a boolean whether the sequence of parentheses, braces and brackets in that string are valid.
function bracesValid(string) {
  /*
    Note: I really struggled with approaching this -- and despite having some approaches that did make sure opening and closing characters were equal, I had trouble detecting correct ordering (I was easily able to fool my first attempt). I did some research using StackOverflow, I understand the reasonings of being cautioned, and I will additionally examine other student's work, but viewing one solution helped give me a strategy. This is an adaption with my own modifications, of using an associated array to evalue if a character matches or not. This could be done using `string.charCodeAt()` as well, but I opted to just analyze the character directly.
  */

  // First, perform edge cases check and input checks (only string datatypes and no empty strings):
  if (typeof(string) !== "string" || string.length < 1) {
    console.log("Strings of at least 1 char only allowed.");
    console.log(false);
    return false;
  }

  // Create an associated array which holdes matches:
  /* 
    Note how the closing character is stored as the key, and the opening character is stored as the value. This is important, as we will be using this arrangement when detecting if a pair of characters have been appropriately matched. In short, when we find a closing character, we'll check if the most recent opening character matches it. If it doesn't, we know right away we have a character mismatch in our string (e.g., our parentheses, braces and brackets don't match up properly):
  */
  const matches = { // use const here b/c this won't change
    ")" : "(",
    "}" : "{",
    "]" : "[",
  };
  // Create variable to hold the opening character pattern:
  /* 
    Note: we'll only be pushing opening characters to this pattern, and when we find a closing character, well see if it matches the most recent opening character.
  */
  let opened = [];

  // Loop through string and scan for parentheses, braces or brackets:
  for (let  i = 0; i < string.length; i++) {
    // use switch/case here:
    switch(string[i]) {
      // If opening characters are found, push to character array:
      case "(":
      case "{":
      case "[":
        opened.push(string[i]);
        break;
      // If closing characaters are found, pop last item in opened array and check if it matches:
      case ")":
      case "}":
      case "]":
        let lastItem = opened.pop(); // grabs last item from opened array
        // If the closing character does not match its opening character, log & return false:
        if (matches[string[i]] !== lastItem) {
          // Note: `matches[string[i]]` will go to our `matches` associated array, and grab the value matching the key of `string[i]` (which in this case, will be one of our closing characters). This should return an opening characater. If this opening character does not match the last opening character pushed to our `opened` array, than we know we have mismatched characters and are not balanced.
          console.log(false);
          return false;
        }
        break;
      default:
        break;
    }
  }
  // If any opening characters remain in our `opened` array, we know we are also mismatched (missing a closing characater) -- log & return false:
  if (opened.length > 0) {
    console.log(false);
    return false;
  } 
  else { // Otherwise, if our opening characters are all empty from the `opened` array, we have accurate matching -- log & return true:
    console.log(true);
    return true;
  }
}
console.log("------ BRACES VALID -----");
bracesValid("w(a{t}s[o(n{c}o)m]e)h[e{r}e]!");
// => true

bracesValid("d(i{a}l[t]o)n{e");
// => false

bracesValid("a(1)s[O(n]0{t)0}k");
// => false

bracesValid("abc(def{ghik[lmnopq]rs}tuv)wxyz");
// => true

bracesValid("abc(def{ghik[lmnopq]rs)tuv}wxyz");
// => false



// 3. Is Palindrome: Given a string, return a boolean whether that string is a strict palindrome.
function isPalindrome() {

}







// 4. Longest Palindrome: 
function longestPalindrome() {

}