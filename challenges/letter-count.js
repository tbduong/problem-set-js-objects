/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/
// YOUR CODE HERE

// var randStr = {
//   strCharCounter: function(word){
//     for(i=0; i < word.length; i++){
//       var strChecker;
//       if (word[i]===word[i+1]){
//         strChecker++;
//       }
//       else {
//         console.log(word[i] + ": ");
//       }
//     }
//   }
// };


// Create an empty object.
// Loop through the array.
// While looping, for each of array element, create an object property of it (for that empty object).
// The value of that object property will then be filled with array of index where the element (object property) is found.
//


// function splitString(stringToSplit) {
//   var arrayOfStrings = stringToSplit.split('');
//   var sortedString = arrayOfStrings.sort();
//   var current = null;
//   var count = 0;
//   for (var i = 0; i < sortedString.length; i++) {
//       if (sortedString[i] != current) {
//           if (count > 0) {
//                 console.log(current + ' = ' + count/sortedString.length);
//                 console.log(current + ' = ' + count);
//               }
//               current = sortedString[i];
//               count = 1;              //compares letter to the next, if not the same count =1 and moves on.
//           } else {
//               count++;                //compares letter to the next, if it is the same increment by +1 (++)
//           }
//       }
//       if (count > 0) {              //console.logs count
//           console.log(current + ' = ' + count/sortedString.length);
//           console.log(current + ' = ' + count);
//     }
// }

//This function will turn the word into an array (wordArray).
function letterCount(word) {
    var wordArray = word.split("");
    var sortedWordArray = wordArray.sort();   //sorts array
    var current = null;
    var count = 0;

    for (var i= wordArray.length-1; i>0; i++); {
      if (sortedWordArray[i] !=current) {
        if (count > 0) {
            console.log(current + " = " + count);   ///sortedWordArray.length);
            console.log(current + " = " + count);
        }
        current = sortedWordArray[i];     //Checks index
        count = 1;
    } else {
        count++;
      }
    } if (count > 0) {              //console.logs count
          console.log(current + ' = ' + count);    ///sortedWordArray.length);
          console.log(current + ' = ' + count);
    }

}
