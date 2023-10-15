const dinnerGuests: string[] = ["Marie Curie", "Albert Einstein", "Isaac Newton", "Nelson Mandela", "Jane Austen", "Charles Darwin"];

// Print a message indicating that you can invite only two people for dinner
console.log("Unfortunately, due to limited space, we can invite only two people for dinner.");

// Remove guests until only two names remain in your list
while (dinnerGuests.length > 2) {
  const removedGuest = dinnerGuests.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner this time.`);
}

// Loop through the updated list and print new invitation messages to the two remaining guests
for (const guest of dinnerGuests) {
  console.log(`Dear ${guest}, you are cordially invited to dinner at my place. We would be honored to have you join us.`);
}

// Remove the last two names from your list, making it empty
dinnerGuests.pop();
dinnerGuests.pop();

// Print the list to confirm it's empty
console.log("Dinner guest list is now empty:", dinnerGuests);
