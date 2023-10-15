const dinnerGuests = ["Albert Einstein", "Nelson Mandela", "Jane Austen"];
// Print the name of the guest who can't make it
const guestWhoCantMakeIt = "Jane Austen";
console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.`);
// Replace the guest who can't make it with the new person you're inviting
const newGuest = "Leonardo da Vinci";
const indexOfCantMakeItGuest = dinnerGuests.indexOf(guestWhoCantMakeIt);
if (indexOfCantMakeItGuest !== -1) {
    dinnerGuests[indexOfCantMakeItGuest] = newGuest;
}
// Loop through the updated list and print new invitation messages
for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are cordially invited to dinner at my place. We would be honored to have you join us.`);
}
export {};
