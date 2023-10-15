const fruits: string[] = ["apple", "banana", "cherry", "date"];

// Intentionally access an index that doesn't exist to produce an error
const indexToAccess: number = 5;
console.log(fruits[indexToAccess]); // This will produce an error

// Correct the error by checking if the index is within the array bounds
if (indexToAccess >= 0 && indexToAccess < fruits.length) {
  console.log("Accessing the element at index", indexToAccess, ":", fruits[indexToAccess]);
} else {
  console.log("Index", indexToAccess, "is out of bounds.");
}
