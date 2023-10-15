const current_users: string[] = ['John', 'Alice', 'Bob', 'Charlie', 'Eve'];
const new_users: string[] = ['Eric', 'Alice', 'Mallory', 'Frank', 'John'];

for (const new_username of new_users) {
  const isTaken = current_users.some(
    (current_username) => current_username.toLowerCase() === new_username.toLowerCase()
  );

  if (isTaken) {
    console.log(`Username '${new_username}' is already taken. Please enter a new username.`);
  } else {
    console.log(`Username '${new_username}' is available.`);
  }
}
