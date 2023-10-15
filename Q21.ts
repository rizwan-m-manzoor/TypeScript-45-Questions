const books: { title: string; author: string; publicationYear: number }[] = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publicationYear: 1960,
    },
    {
      title: "1984",
      author: "George Orwell",
      publicationYear: 1949,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publicationYear: 1813,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationYear: 1925,
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      publicationYear: 1997,
    },
  ];
  
  // Print the list of books
  console.log("List of Books:");
  for (const book of books) {
    console.log(`Title: ${book.title}, Author: ${book.author}, Publication Year: ${book.publicationYear}`);
  }
  