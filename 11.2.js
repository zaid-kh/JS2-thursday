/**1. Write a function called doubleValues which accepts an
array of integers and returns a new array with all the
values in the array passed to the function doubled. */
const values = [213, 21, 22, 1, 5, 9, 54];

function doubleValues(vals) {
  return vals.map((v) => v * 2);
}
console.log("values: " + values);
console.log("doubleValues(values): " + doubleValues(values));
/**2. Write a function called onlyEvenValues which accepts an
array and returns a new array with only the even values in
the array passed to the function. */
function onlyEvenValues(vals) {
  return vals.filter((n) => n % 2 === 0);
}
console.log("values: " + values);
console.log("onlyEvenValues(values): " + onlyEvenValues(values));
/**3. Write a function called showFirstAndLast which accepts
an array as an argument and returns a new array with only
the first and last elements from the function’s argument
array. The returned array should only contain elements
that are strings. */
const strArray = [1, "and welcome", "this is", "a fun array"];
function showFirstAndLast(array) {
  const result = [];
  if (isString(array[0])) {
    result.push(array[0]);
  }
  if (isString(array[array.length - 1])) {
    result.push(array[array.length - 1]);
  }
  return result;
}
function isString(text) {
  return typeof text === "string";
}
console.log("strArray: " + strArray);
console.log("showFirstAndLast(strArray): " + showFirstAndLast(strArray));
/**4. Write a function called vowelCount which accepts a string
as an argument. The function should return an object
which has the count of the number of vowels that are in
the string. The key should be the vowel and the value
should be the count. e.g. {a:3, o:2,u:4}. Should not be case-sensitive.*/
function vowelCount(text) {
  const vowels = {
    a: 0,
    i: 0,
    o: 0,
    e: 0,
    u: 0,
    y: 0,
    w: 0,
  };
  // we can check using hasOwn(object, property) of the object, as in: vowelCount.hasOwn(vowels, character)
  text.split("").forEach((char) => {
    if (Object.hasOwn(vowels, char)) {
      // using [char] and not .char ,, since that would look for a property named char instead
      vowels[char]++;
    }
  });
  return vowels;
}
let str = "hello my name is zaid, i am 23 years old.";
console.log("str: " + str);
console.log("vowelCount(str): ", vowelCount(str));
/** 5. Write a function capitalize that takes a string as an
argument and will return the whole string capitalized. */
function capitalize(text) {
  return text.toUpperCase();
}
console.log("str: " + str);
console.log("capitalize(str): " + capitalize(str));
/**6. Write a function called shiftLetters that takes a string as an
argument and returns an encoded string with each letter
shifted down the alphabet by one. */
console.log("****************************");
function shiftLetters(text) {
  return text
    .split("")
    .map((c) => String.fromCharCode(c.charCodeAt(0) - 1))
    .join("");
}
console.log("str: " + str);
console.log("shiftLetters(str): ", shiftLetters(str));

/**7. Create a function called swapCase that takes a string as
an argument and returns a string that every other word is
capitalized. (you can use the fifth’s exercise's function to
keep it dry */
function swapCase(text) {
  return text.split(/[., ]/).map((word, i) => {
    if (i % 2 !== 0) {
      return capitalize(word);
    } else return word;
  });
}
console.log("str: ", str);
console.log("swapCase: ", swapCase(str));
