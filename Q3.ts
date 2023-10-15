const personName: string = "Rizwan Manzoor";

const lowercaseName: string = personName.toLowerCase();
const uppercaseName: string = personName.toUpperCase();
const titlecaseName: string = personName.replace(/\b\w/g, (char) => char.toUpperCase());

console.log("Original Name: " + personName);
console.log("Lowercase Name: " + lowercaseName);
console.log("Uppercase Name: " + uppercaseName);
console.log("Title Case Name: " + titlecaseName);