function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
  
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push(`the Great ${magicians[i]}`);
    }
  
    return greatMagicians;
  }
  
  // Create an array of magician's names
  const magicianNames: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
  
  // Make a copy of the array and modify it using make_great()
  const greatMagicians = make_great([...magicianNames]);
  
  // Call show_magicians() with both the original and modified arrays
  console.log("Original Magicians:");
  show_magicians(magicianNames);
  
  console.log("\nModified Magicians:");
  show_magicians(greatMagicians);
  