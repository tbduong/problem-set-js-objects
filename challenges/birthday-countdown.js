/*
  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE

function daysUntilDate(dateString){
  var days = Math.round((new Date(dateString) - Date.now())/86400000);
  var age = (days/86400000 %1);
  //console.log(days);             //returns negative number
  var absDays = Math.abs(days);    //creates absolute value; no negative days
  console.log(absDays);
}


  function birthdayReminder(dob) {
    info.dob.forEach(function daysUntilDate() {
      (console.log(array.name + "'s'" + " " + "is in" + daysUntilDate + "days!"));
    });


// birthdayReminder([
//   {
//     name: "Jack",
//     dob: "10/31/2013"
//   },
//   {
//     name: "Jill",
//     dob: "4/01/1975"
//   }
// ]);


}


}
