const personName = "Rizwan Manzoor";
const lowercaseName = personName.toLowerCase();
const uppercaseName = personName.toUpperCase();
const titlecaseName = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log("Original Name: " + personName);
console.log("Lowercase Name: " + lowercaseName);
console.log("Uppercase Name: " + uppercaseName);
console.log("Title Case Name: " + titlecaseName);
export {};
