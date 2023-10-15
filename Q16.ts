const dinnerGuests: string[] = ["Albert Einstein", "Nelson Mandela", "Jane Austen"];

// Informing people about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");

// Add one new guest to the beginning of the array
const newGuestAtBeginning: string = "Marie Curie";
dinnerGuests.unshift(newGuestAtBeginning);

// Add one new guest to the middle of the array
const newGuestInMiddle: string = "Isaac Newton";
const middleIndex: number = Math.floor(dinnerGuests.length / 2);
dinnerGuests.splice(middleIndex, 0, newGuestInMiddle);

// Use push() to add one new guest to the end of your list
const newGuestAtEnd: string = "Charles Darwin";
dinnerGuests.push(newGuestAtEnd);

// Loop through the updated list and print new invitation messages
for (const guest of dinnerGuests) {
  console.log(`Dear ${guest}, you are cordially invited to dinner at my place. We would be honored to have you join us.`);
}
