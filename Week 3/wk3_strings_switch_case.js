// Week 3 - Strings, Switch/Case - Tim K

//**********************************************************//
//************           PARENS VALID            ***********//
//**********************************************************//
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






//************************************************************//
//*************           BRACES VALID            ************//
//************************************************************//
// 2. Braces Valid: Given an input, return a boolean whether the sequence of parentheses, braces and brackets in that string are valid.
function bracesValid(string) {

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






//*************************************************************//
//*********         WARNING: PLEASE READ FIRST         ********//
//*************************************************************//
/*
*
* Each palidrome function below has 2 versions.
* One that allows for punctuation, and another version that doesn't.
*
*  - `isPalindrome()`:
*    Analyses a string to see if it's a palindrome. Punctuation, white space and upper cases preserved.
*
*  - `isPalindromeNoPunct()`
*    Analyzes a string to see if it's a palindrome. Punctuation, white space and upper cases REMOVED.
*    
*  - `longestPalindrome()`
*    Analyzes a string to capture all palindromes exist within it. Punctuation, white space and upper cases preserved.
*    
*  - `longestPalindromeNoPunct()`
*    Analyzes a string to capture all palindromes exist within it. Punctuation, white space and upper cases REMOVED.
*    
* Note: These may or may not be the most elegant of solutions -- they definitely seemd to require a LOT more code than I would have liked.
* I did break things into "helper functions" to help make things easier to read. But this still comes across as rather complicated.
* 
* Some notes about the approach for each are logged beneath each function.
*
*/
//*************************************************************//
//*********               END OF WARNING               ********//
//*************************************************************//





//*************************************************************//
//*********       IS PALINDROME PUNCTUATION OK         ********//
//*************************************************************//
// 3. Is Palindrome: Given a string, return a boolean whether that string is a strict palindrome.
// Our approach here reverses the string and compares it to the original, punctuation and all.
// I didn't use any helper functions here.
function isPalindrome(string) {
  // Typical input and length checks:
  if (typeof(string) !== "string" || string.length < 1) {
    console.log("Only strings of at least 1 character accepted.");
    return null;
  }

  // Loop through string and reverse it:
  let reversed = "";
  for (let i = string.length-1; i >= 0; i--) {
    reversed += string[i];
  }
  // console.log(reversed);

  // Then, see if it matches the original string exactly:
  if (reversed === string) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
console.log("----- IS PALINDROME -----");
isPalindrome("racecar");
// => true

isPalindrome("Dud");
// => false

isPalindrome("oho!");
// => false

isPalindrome("oh  o");
// => false

isPalindrome("evil olive");
// => false
// Note: This should return `true` in the flexible palindrome below.






//*************************************************************//
//***********      IS PALINDROME NO PUNCTUATION        ********//
//*************************************************************//
// 3B. Is Palindrome:
// Our approach here is to sanitize the string first, using charCodeAt() to grab all numbers and letters.
// We catch any lowercase numbers and convert them to upper writing our own manual function.
// Once the string has been sanitized, it is reversed and compared to itself.
// We use helper functions here to make things cleaner.
function isPalindromeNoPunct(string) {
  // Typical input and length checks:
  if (typeof (string) !== "string" || string.length < 1) {
    console.log("Only strings of at least 1 character accepted.");
    return null;
  }

  // First, let's sanitize our string:
  /* 
    Strip out any white spaces (spaces, tabs, returns), capitalization and punctuation. We also won't grab any numbers
  */
  let sanitized = sanitize(string);

  // Now that our string has been sanitized, let's reverse it:
  let reversed = reverse(sanitized);

  // Uncomment below to see sanitized string and reversed:
  // console.log(`SANITIZED: ${sanitized} REVERSED: ${reversed}`);
  
  // Compare if reversed === sanitized, if so, it's a palindrome:
  if (reversed === sanitized) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }

  /*
  *
  * Helper Functions
  * 
  */ 
  function lower(code) {
    /*
      Converts a code to it's lowercase dec equivalent.

      Parameters:
      - `code` = Uppercase dec code to convert to lowercase.
    */
    // Converts an uppercase letter to a lowercase letter:
    return String.fromCharCode(code + 32);
  }
  function reverse(str) {
    /*
      Reverses a string and returns a new string as reversed.

      Parameters:
      - `str` = String to be reversed.
    */
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverseStr += str[i];
    }
    return reverseStr;
  }
  function sanitize(str) {
    /*
      Sanitizes a string by grabbing all `a-z` letters, all `A-Z` (converts them to lowercase) and numbers (0-9). New string is returned without any punctuation or white spaces.

      Parameters:
      - `str` = String to be sanitized.
    */
    let sanitized = "";
    // Loop through string and only grab any letters A-Za-z.
    // Any capital letters, we'll change to lowercase equivalents:
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      switch (true) {
        // Capture any uppercase A-Z codes and convert to lowercase:
        case code >= 65 && code <= 90:
          // Add to string lowercase equivalent value of character:
          sanitized += lower(code);
          // Note: `String.fromCharCode()` converts a code to a charcter. We add 32 to our code (`code + 32`) to get the lowercase `a-z` equivalent.  
          break;
        // Capture any lowercase a-z codes:
        case code >= 97 && code <= 122:
          // Add lowercase letters to string:
          sanitized += str[i];
          break;
        default:
          break;
      }
    }
    return sanitized;
  }

}
// Test
console.log("----- IS PALINDROME NO PUNCTUATION  -----");
isPalindromeNoPunct("Evil oliv     e!!!");
// => true

isPalindromeNoPunct("Dud");
// => true

isPalindromeNoPunct("oho!");
// => true

isPalindromeNoPunct("o ho!");
// => true

isPalindromeNoPunct("Kaya@k");
// => true

isPalindromeNoPunct("Cosmo Kramer");
// => false

isPalindromeNoPunct("mammoth");
// => false






//**********************************************************//
//********     LONGEST PALINDROME PUNCTUATION OK     *******//
//**********************************************************//
// 4. Longest Palindrome: 
// Our method here is somewhat similar. We again use a bunch of helper functions that we've created.
// Examine the notes within each helper function to understand what we're doing.
// In summary, we first check to make sure type and length is correct.
// Then we split the string into characters into an array.
// Then we examine this character array for palindromes, comparing each letter to the rest of the letters in the array.
// If a match is found, we splice between these two points and examine it for being a palindrome.
// If it's a palindrome, it gets added to an array.
// This array is then examined for the longest-lengthed palindrome.
// If a palindrome is made of only punctuaton (e.g, `...`), a default value of the first character in the array is returned.
// The longest palindrome is returned. This includes ALL original whitespace, punctuation and capitaliztion.
function longestPalindrome(string) {
  // Note: This got really complicated, so I broke things up into little helper functions -- all still contained within the scope of this original function.

  // Runs `isValid()` function, if input type and minimum string length are correct, `true` is returned. Otherwise `null` is returned.
  if (isValid(string)) {

    // Split string into characters to be stored in an array:
    const characters = split(string);

    // Loop through string checking for palindromes:
    palindromes = findPalindromes(characters);

    // If palindromes are found, examine to find greatest lengthed palidrome. And make sure any palindrome returned is not strictly punctuation :
    if (palindromes.length > 0) {

      // Find greatest palindrome:
      let greatest = findGreatest(palindromes, string);

      // Return greatest palindrome:
      console.log(greatest);
      return greatest;

    } else {
      console.log("No palindromes found.");
      return null;
    }

  } 
  else { // if invalid input, return null
    return null;
  }
  



  // *
  // * Helper Functions:
  // *
  function isValid(str) {
    /*
      Quick input check and minimum length check. Returns `true` if passes, otherwise returns `null`.

      Parameters:
      `str` - A string to be evaluated for validity of type and length.
    */
    if (typeof (str) !== "string" || str.length < 1) {
      console.log("Only strings of at least 1 char allowed.");
      return null;
    } else {
      return true;
    }
  }
  function split(str) {
    /*
      Splits string characters into array, including all white space and punctuation. A new array is returned containing all characters as strings.

      Parameters:
      `str` - A string to be split into an array.
    */
    const characters = [];
    for (let i = 0; i < str.length; i++) {
      characters[i] = str[i];
    }
    return characters;
  }
  
  function isPalindrome(str) {
    /*
      Reverses a string and checks if matches original string. Returns true if palindrome, otherwise false.

      Parameters:
      `str` - A string to be evaluated if a palindrome.
    */
    let reverse = "";
    for (let  i = str.length - 1; i >= 0; i--) {
      reverse += str[i];
    }
    return (str === reverse);
  }

  function slice(charArr, i, j) {
    /*
      Slices a string between 2 points and returns a sub-string. A new string is returned.

      Parameters:
      `charArr` = an array of characters from original string
      `i` = beginning point of slice
      `j` = ending point of slice
    */
    let slicedString = "";
    for (let k = i; k <= j; k++) {
      slicedString += charArr[k];
    }
    return slicedString;
  }

  function findPalindromes(charArr) {
    /*
      Moves through an array seeing if any values match one another, if so, slices the string between those values to create a sub-string. This sub-string is then analyzed if it is a valid palidrome.

      Parameters:
      `charArr` = Characters array with each character as a value (including spaces and punctuation).
    */
    let found = [];
    for (let i = 0; i < charArr.length; i++) {
      // Move reverse through same array, checking for matches:
      for (let j = charArr.length - 1; j >= i + 1; j--) {
        // if characters match, slice between them and evaluate:
        if (charArr[i] === charArr[j]) {
          let slicedString = slice(charArr, i, j);

          // Check if this slicedString is a palindrome:
          if (isPalindrome(slicedString)) {
            // If so, add to our array (which we'll analyze later):
            found.push(slicedString);
          }
        }
      }
    }
    return found;
  }

  function findGreatest(palindromesArr, str) {
    /*
      Find greatest lengthed palindrome and ensure it contains more than just punctuation.

      Parameters:
      `palindromesArr` = array of palindromes to be analyzed
      `str` = original string to be evaluated in the event all palindromes are punctuation 
    */
    let greatestPalindrome = "";
    // Loop through palindromes array comparing to `greatestPalindrome`:
    for (let i = 0; i < palindromesArr.length; i++) {
      // If a palindrome length is greater than `greatestPalindrome` length:
      if (palindromesArr[i].length > greatestPalindrome.length) {
        // If the palindrome contains letters or numbers (no punctuation only allowed), set it as the greatest: 
        if (containsAlphaNum(palindromesArr[i])) {
          greatestPalindrome = palindromesArr[i];
        }
        else {
          // If no letters are found in the palindrome, set the greatest palindrome to the first letter of string (default in this scenario):
          greatestPalindrome = str[0];
        }
      }
    } // End looping through palindromesArray
    return greatestPalindrome;
  }

  function containsAlphaNum(palindrome) {
    /*
      Returns true if letters or numbers are found, otherwise returns false.

      Parameters:
      `palindrome` = A palindrome to be evaluated to ensure it does not only contain punctuation.
    */
    let alphaNumFound = false;
    // Loop through each character in the palindrome:
    for (let j = 0; j < palindrome.length; j++) {
      let code = palindrome.charCodeAt(j);
      switch (true) {
        case code >= 48 && code <= 57:// 0123456789
          alphaNumFound = true;
          break;
        case code >= 65 && code <= 90:// A-Z
          alphaNumFound = true;
          break;
        case code >= 97 && code <= 122:// a-z
          alphaNumFound = true;
          break;
      }
    } // End looping through individual palindrome characters
    return alphaNumFound;
  }

}
console.log("----- LONGEST PALINDROME -----");
longestPalindrome("what up, daddy-o?");
// => dad

longestPalindrome("uh... not much");
// => u
// Note, if all palindromes are only punctuation (like in this example, `...` is a palindrome, return the first value of the string)

longestPalindrome("Yikes! my favorite racecar erupted!");
// => e racecar e

longestPalindrome("A man, a plan, a canal: Panama");
// => a

longestPalindrome("123 racecar 321");
// => 123 racecar 123







//**********************************************************//
//*******     LONGEST PALINDROME (NO PUNCTUATION)     ******//
//**********************************************************//
// 4B. Longest Palindrome Phrase (NO Punctuation):
// Our method here is somewhat similar to that above but we santize our string, the same as we do above.
// We again use a bunch of helper functions that we've created.
// Examine the notes within each helper function to understand what we're doing.
// In summary, we first check to make sure submitted string's type and length is correct.
// We then sanitize our string, removing any white spaces, capitalization or punctuation.
// Then we split the sanitized string into an array of characters.
// Then we examine this sanitized character array for palindromes, comparing each letter to the rest of the letters in the array.
// If a letter match is found, we splice between these two points and examine it for being a palindrome.
// If it's a palindrome, it gets added to an array.
// When all palindromes are gathered, this array is examined for the longest-lengthed palindrome.
// If a palindrome is made of only punctuaton (e.g, `...`or `!!!`), a default value of the first character in the string is returned.
// Otherwise, the longest palindrome is returned. This includes ALL original whitespace, punctuation and capitaliztion.
function longestPalindromeNoPunct(string) {
  // Note: This got really complicated, so I broke things up into little helper functions -- all still contained within the scope of this original function.

  // Runs `isValid()` function, if input type and minimum string length are correct, `true` is returned. Otherwise `null` is returned.
  if (isValid(string)) {

    // Sanitize string, removing all white spaces, punctuation, capitalization:
    sanitized = sanitize(string);

    // Split string into characters to be stored in an array:
    const characters = split(sanitized);

    // Loop through string checking for palindromes:
    palindromes = findPalindromes(characters);

    // If palindromes are found, examine to find greatest lengthed palindrome. And make sure any palindrome returned is not strictly punctuation characters:
    if (palindromes.length > 0) {

      // Find greatest palindrome:
      let greatest = findGreatest(palindromes, sanitized);

      // Return greatest palindrome:
      console.log(greatest);
      return greatest;

    } else {
      console.log("No palindromes found.");
      return null;
    }
  }
  else { // if invalid input, return null
    return null;
  }




  // *
  // * Helper Functions:
  // *
  function sanitize(str) {
    let sanitized = "";
    // Loop through string and only grab any letters A-Za-z.
    // Any capital letters, we'll change to lowercase equivalents:
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      switch (true) {
        case code >= 65 && code <= 90: // Captures A-Z
          // Add to string lowercase equivalent value of character:
          sanitized += (String.fromCharCode(code + 32));
          // Note: `String.fromCharCode()` converts a code to a charcter. We add 32 to our code (`code + 32`) to get the lowercase `a-z` equivalent.  
          break;
        case code >= 97 && code <= 122: // Captures a-z
          // Add lowercase letters to string:
          sanitized += str[i];
          break;
        case code >= 48 && code <= 57: // Captures 0-9
          // Add lowercase letters to string:
          sanitized += str[i];
          break;
        default:
          break;
      }
    }
    return sanitized;
  }
  function isValid(str) {
    /*
      Quick input check and minimum length check. Returns `true` if passes, otherwise returns `null`.

      Parameters:
      `str` - A string to be evaluated for validity of type and length.
    */
    if (typeof (str) !== "string" || str.length < 1) {
      console.log("Only strings of at least 1 char allowed.");
      return null;
    } else {
      return true;
    }
  }
  function split(sanitizedStr) {
    /*
      Splits string characters into array, including all white space and punctuation. A new array is returned containing all characters as strings.

      Parameters:
      `sanitizedStr` - A sanitized string to be split into an array.
    */
    const characters = [];
    for (let i = 0; i < sanitizedStr.length; i++) {
      characters[i] = sanitizedStr[i];
    }
    return characters;
  }

  function isPalindrome(str) {
    /*
      Reverses a string and checks if matches original string. Returns true if palindrome, otherwise false.

      Parameters:
      `str` - A string to be evaluated if a palindrome.
    */
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverse += str[i];
    }
    return (str === reverse);
  }

  function slice(charArr, i, j) {
    /*
      Slices a string between 2 points and returns a sub-string. A new string is returned.

      Parameters:
      `charArr` = an array of characters from original string
      `i` = beginning point of slice
      `j` = ending point of slice
    */
    let slicedString = "";
    for (let k = i; k <= j; k++) {
      slicedString += charArr[k];
    }
    return slicedString;
  }

  function findPalindromes(charArr) {
    /*
      Moves through an array seeing if any values match one another, if so, slices the string between those values to create a sub-string. This sub-string is then analyzed if it is a valid palidrome.

      Parameters:
      `charArr` = Characters array with each string character as a value (including spaces and punctuation).
    */
    let found = [];
    for (let i = 0; i < charArr.length; i++) {
      // Move reverse through same array, checking for matches:
      for (let j = charArr.length - 1; j >= i + 1; j--) {
        // if characters match, slice between them and evaluate:
        if (charArr[i] === charArr[j]) {
          let slicedString = slice(charArr, i, j);

          // Check if this slicedString is a palindrome:
          if (isPalindrome(slicedString)) {
            // If so, add to our array (which we'll analyze later):
            found.push(slicedString);
          }
        }
      }
    }
    return found;
  }

  function findGreatest(palindromesArr, sanitizedStr) {
    /*
      Find greatest lengthed palindrome and ensure it contains more than just punctuation.

      Parameters:
      `palindromesArr` = array of palindromes to be analyzed
      `sanitizedStr` = Sanitized string to be evaluated in the event all palindromes are punctuation 
    */
    let greatestPalindrome = "";
    // Loop through palindromes comparing to `greatest`:
    for (let i = 0; i < palindromesArr.length; i++) {
      // If a palindrome length is greater than `greatestPalindrome` length:
      if (palindromesArr[i].length > greatestPalindrome.length) {
        // If the palindrome contains letters or numbers (no punctuation only allowed), set it as the greatest: 
        if (containsAlphaNum(palindromesArr[i])) {
          greatestPalindrome = palindromesArr[i];
        }
        else {
          // If no letters are found in the palindrome, set the greatest palindrome to the first letter of string (default in this scenario):
          greatestPalindrome = sanitizedStr[0];
        }
      }
    } // End looping through palindromesArray
    return greatestPalindrome;
  }

  function containsAlphaNum(palindrome) {
    /*
      Returns true if letters are found, otherwise returns false.

      Parameters:
      `palindrome` = A palindrome to be evaluated to ensure it does not only contain punctuation.
    */
    let alphaNumFound = false;
    // Loop through each character in the palindrome:
    for (let j = 0; j < palindrome.length; j++) {
      let code = palindrome.charCodeAt(j);
      switch (true) {
        case code >= 48 && code <= 57:// 0123456789
          alphaNumFound = true;
          break;
        case code >= 65 && code <= 90:// A-Z
          alphaNumFound = true;
          break;
        case code >= 97 && code <= 122:// a-z
          alphaNumFound = true;
          break;
      }
    } // End looping through individual palindrome characters
    return alphaNumFound;
  }

}
console.log("----- LONGEST PALINDROME NO PUNCTUATION -----");
longestPalindromeNoPunct("what up, daddy-o?");
// => dad

longestPalindromeNoPunct("uh... not much");
// => null

longestPalindromeNoPunct("Yikes! my favorite racecar erupted!");
// => eracecare

longestPalindromeNoPunct("A man, a plan, a canal: Panama");
// => amanaplanacanalpanama
// Without punctuation, this is a palindrome!

longestPalindromeNoPunct("123 racecar 321");
// => 123racecar123

longestPalindromeNoPunct("findingLions That ... ROOR!!!!");
// => roor