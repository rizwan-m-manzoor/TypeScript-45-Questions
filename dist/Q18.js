const placesToVisit = [
    "Paris",
    "Kyoto",
    "Machu Picchu",
    "Santorini",
    "Banff National Park"
];
// Print the original list
console.log("Original Order:", placesToVisit);
// Print the list in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", [...placesToVisit].sort());
// Show that the original list is still in its original order
console.log("Original Order (After Alphabetical Sort):", placesToVisit);
// Print the list in reverse alphabetical order without modifying the actual list
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());
// Show that the original list is still in its original order
console.log("Original Order (After Reverse Alphabetical Sort):", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reverse the order of the list again to get it back to its original order
placesToVisit.reverse();
console.log("Original Order (After Double Reverse):", placesToVisit);
// Sort the list in alphabetical order
placesToVisit.sort();
console.log("Alphabetical Order (After Sort):", placesToVisit);
// Sort the list in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order (After Sort):", placesToVisit);
export {};
