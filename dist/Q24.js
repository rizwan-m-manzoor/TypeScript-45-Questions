const str1 = "apple";
const str2 = "banana";
const num1 = 10;
const num2 = 15;
const fruits = ["apple", "banana", "cherry", "date"];
const colors = ["red", "green", "blue", "yellow"];
// Equality and inequality with strings
console.log("Test 1: Is str1 equal to 'apple'? I predict True.");
console.log(str1 === "apple"); // True
console.log("Test 2: Is str2 not equal to 'cherry'? I predict True.");
console.log(str2 !== "cherry"); // True
// Tests using the lowercase function
console.log("Test 3: Is str1 lowercase 'apple'? I predict True.");
console.log(str1.toLowerCase() === "apple"); // True
console.log("Test 4: Is str2 lowercase 'Banana'? I predict True.");
console.log(str2.toLowerCase() === "banana"); // True
// Numerical tests
console.log("Test 5: Is num1 greater than num2? I predict False.");
console.log(num1 > num2); // False
console.log("Test 6: Is num1 less than or equal to num2? I predict True.");
console.log(num1 <= num2); // True
// Tests using 'and' and 'or' operators
console.log("Test 7: Is num1 less than 5 and num2 greater than 10? I predict False.");
console.log(num1 < 5 && num2 > 10); // False
console.log("Test 8: Is num1 less than 5 or num2 greater than 10? I predict True.");
console.log(num1 < 5 || num2 > 10); // True
// Test whether an item is in an array
console.log("Test 9: Is 'cherry' in the fruits array? I predict True.");
console.log(fruits.includes("cherry")); // True
// Test whether an item is not in an array
console.log("Test 10: Is 'purple' not in the colors array? I predict True.");
console.log(!colors.includes("purple")); // True
export {};
