// console.log("hello world");

//     CODING CHALLENGES      //

//   ADD 2 NUMBERS   //
// const addTwoNumbers = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwoNumbers(16, 4));

//   COUNTING VOWELS   //
// const getCount = (str) => {
//   let vowelsCount = 0;
//   const arr = str.split("");
//   for (let i = 0; i < arr.length; i++) {
//     switch (arr[i]) {
//       case "a":
//         vowelsCount++;
//         break;
//       case "e":
//         vowelsCount++;
//         break;
//       case "i":
//         vowelsCount++;
//         break;
//       case "o":
//         vowelsCount++;
//         break;
//       case "u":
//         vowelsCount++;
//         break;
//     }
//   }

//   return vowelsCount;
// };
// console.log(getCount("hey it's chris"));

// const getCount = (str) => {
//   let vowels = ["a", "e", "i", "o", "u"];
//   return str.split("").filter((letter) => {
//     return vowels.includes(letter) ? true : false;
//   }).length;
// };
// console.log(getCount("a raven is a wicked bird"));

//   EVEN OR ODD   //
// const evenOrOdd = (number) => {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };
// console.log(evenOrOdd(10));

//   GET PLANET ID   //
// const getPlanetName = (id) => {
//   let name;
//   switch (id) {
//     case 1:
//       name = "Mercury";
//       break;
//     case 2:
//       name = "Venus";
//       break;
//     case 3:
//       name = "Earth";
//       break;
//     case 4:
//       name = "Mars";
//       break;
//     case 5:
//       name = "Jupiter";
//       break;
//     case 6:
//       name = "Saturn";
//       break;
//     case 7:
//       name = "Uranus";
//       break;
//     case 8:
//       name = "Neptune";
//       break;
//   }
//   return name;
// };
// console.log(getPlanetName(4));

//   JENNYS SECRET MESSAGE   //
// const greet = (name) => {
//   if (name === "Johnny") return "Hello, my love!";
//   else return "Hello, " + name + "!";
// };
// console.log(greet("Johnny"));

//   LONGEST PREFIX   //
// let longestCommonPrefix = function (strs) {
//   if (strs.length == 0) {
//     return "";
//   }

//   let prefix = strs[0];

//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) != 0) {
//       prefix = prefix.substring(0, prefix.length - 1);
//     }
//   }
//   return prefix;
// };

//   MULTIPLY   ///
// const multiply = (a, b) => {
//   return a * b;
// };
// console.log(multiply(5, 2));

//   NAME TO INITIALS   //
// const abbrevName = (name) => {
//   let nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// };

// console.log(abbrevName("Chris Calleja"));

//   PALINDROME NUMBER   //
// function isPalindrome(num) {
//   const n = num;
//   if (num < 0 || n > 2 ** 32) {
//     return false;
//   }
//   let rev = 0;
//   while (num > 0) {
//     let digit = num % 10;
//     rev = rev * 10 + digit;
//     num = parseInt(num / 10);
//   }
//   if (rev === n) {
//     return true;
//   } else {
//     return false;
//   }
// }

//   PHONE NUMBER   ///
// let phoneArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// function createPhoneNumber(numbers) {
//   let phNumber = "(";
//   phNumber += numbers.splice(0, 3).join("");
//   phNumber += ") ";
//   phNumber += numbers.splice(0, 3).join("");
//   phNumber += "-";
//   phNumber += numbers.splice(0).join("");
//   return phNumber;
// }
// console.log(createPhoneNumber(phoneArray));

//   REVERSE STRING   //
// const solution = (str) => {
//   return str.split("").reverse().join("").toString();
// };
// console.log(solution("hello"));

//   ROMAN TO INTEGER   //
// var romanToInt = function(s) {
//     const key = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
//     let ans = [];

//     for (let i = 0; i < s.length; i++){
//         if (key[s[i]] > key[s[i + 1]]){
//             ans.push(key[s[i + 1]] - key[s[i]]);
//             i++;
//             continue
//         } else {
//             ans.push(key[s[i]])
//         }
//     }

//     return ans.reduce((total, current) => total + current)

//refresher//
// let firstName = "Chris";
// let lastName = "Calleja";
// let fullName = firstName + " " + lastName;
// console.log(fullName);
// let population = 1000;
// console.log(population);
// let newPop = population * 3;
// console.log(newPop);
// javaScriptIsCool = true;
// let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// for (i = 1; i <= 5; i++) {
//   console.log(i);
// }
// for (i = 0; i <= 4; i++) {
//   console.log(i);
// }

//heating/cooling//
// let actualTemp = 80;
// let desiredTemp = 80;
// if (actualTemp === desiredTemp) {
//   console.log("Standby");
// } else if (actualTemp > desiredTemp) {
//   console.log("Run A/C");
// } else {
//   console.log("Run Heat");
// }

//longest name//
// let name1 = "dave";
// let name2 = "jack";
// let name3 = "star";
// if (name1.length > name2.length && name1.length > name3.length) {
//   console.log(`${name1} has the longest name.`);
// } else if (name2.length > name1.length && name2.length > name3.length) {
//   console.log(`${name2} has the longest name.`);
// } else if (name3.length > name1.length && name3.length > name2.length) {
//   console.log(`${name3} has the longest name.`);
// } else if (name1.length === name2.length && name1.length > name3.length) {
//   console.log(`${name1} and ${name2} tie for the longest name.`);
// } else if (name1.length === name3.length && name1.length > name2.length) {
//   console.log(`${name1} and ${name3} tie for the longest name.`);
// } else if (name2.length === name3.length && name2.length > name1.length) {
//   console.log(`${name2} and ${name3} tie for the longest name.`);
// } else {
//   console.log(
//     `All three names, ${name1}, ${name2}, and ${name3} are the same length.`
//   );
// }

//   COUNTING   //

// Use a for loop to log numbers from 1 to 10, then another for loop to count down, logging numbers from 10 to 1.
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }
// for (i = 10; i >= 1; i--) {
//   console.log(i);
// }

// while loop
// let count = 1;
// while (count <= 10) {
//   console.log(count);
//   count++;
// }
// let countDown = 10;
// while (countDown >= 1) {
//   console.log(countDown);
//   countDown--;
// }

//for of//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const number of numbers) {
//   console.log(number);
// }

//   STUDENT SUBMISSIONS   //
// const submissions = [
//   { name: "Jane", score: 95, date: 2020 - 01 - 24, passed: true },
//   { name: "Joe", score: 77, date: 2020 - 01 - 24, passed: true },
//   { name: "Jack", score: 59, date: 2020 - 01 - 24, passed: true },
//   { name: "Jill", score: 88, date: 2020 - 01 - 24, passed: true },
// ];

// const addSubmission = (array, newName, newScore, newDate) => {
//   const newObject = {
//     name: newName,
//     score: newScore,
//     date: newDate,
//     passed: newScore >= 60,
//   };
//   array.push(newObject);
// };

// addSubmission(submissions, "Jerry", 75, 2020 - 01 - 24);
// console.log(submissions);

// const deleteSubmissionByIndex = (array, index) => {
//   array.splice(index, 1);
// };

// const deleteSubmissionByName = (array, name) => {
//   const index = array.findIndex((item) => {
//     return item.name === name;
//   });
//   if (index >= 0) {
//     array.splice(index, 1);
//   } else {
//     console.log("enter valid name");
//   }
// };

// deleteSubmissionByName(submissions, "Jerry");
// console.log(submissions);

// const editSubmission = (array, index, score) => {
//   array[index].score = score;
//   if (score >= 60) {
//     array[index].passed = true;
//   } else {
//     array[index].passed = false;
//   }
// };
// editSubmission(submissions, 2, 80);
// console.log(submissions);

// const findSubmissionByName = (array, name) => {
//   return array.find((item) => item.name === name);
// };

// console.log(findSubmissionByName(submissions, "Jane"));

// const findLowestScore = (array) => {
//   let lowestScore = array[0];
//   array.forEach((student) => {
//     if (lowestScore.score > student.score) {
//       lowestScore = student;
//     }
//   });
//   return lowestScore;
// };
// console.log(findLowestScore(submissions));

// const findAverageScore = (array) => {
//   let sum = 0;
//   for (let item of array) {
//     sum += item.score;
//   }
//   return sum / array.length;
// };
// console.log(findAverageScore(submissions));

// const filterPassing = (array) => {
//   return array.filter((score) => {
//     return score.passed === true;
//   });
// };

// console.log(filterPassing(submissions));

// const filter90AndAbove = (array) => {
//   return array.filter((item) => {
//     return item.score >= 90;
//   });
// };

// console.log(filter90AndAbove(submissions));

// const createRange = (start, end) => {
//   let numbers = [];
//   for (let i = start; i <= end; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// };
// console.log(createRange(3, 19));

// const countElements = (array) => {
//   const newObject = {};
//   array.forEach((letter) => {
//     if (newObject[letter] === undefined) {
//       newObject[letter] = 1;
//     } else {
//       newObject[letter]++;
//     }
//   });
//   return newObject;
// };

// console.log(countElements(["a", "b", "a", "c", "a", "r"]));
