// Program: Famous Quote
// Author: [Your Name]
// Date: [Current Date]
// Description: This program prints a famous quote and its author's name.
const famous_person = "Albert Einstein"; // Store the author's name
const message = `${famous_person} once said, "A person who never made a mistake never tried anything new."`; // Compose the message
console.log(message); // Print the famous quote and author
// Program: Stripping Names
// Author: [Your Name]
// Date: [Current Date]
// Description: This program stores a person's name with whitespace characters, then prints the name both with and without leading and trailing whitespace.
const nameWithWhitespace = "\t\n   John Doe   \n\t"; // Store the name with whitespace
console.log("Name with Whitespace: " + nameWithWhitespace); // Print the name with whitespace
const strippedName = nameWithWhitespace.trim(); // Strip leading and trailing whitespace
console.log("Stripped Name: " + strippedName); // Print the name without leading and trailing whitespace
export {};
