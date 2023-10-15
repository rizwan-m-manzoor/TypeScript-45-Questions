const animals: string[] = ['Dog', 'Cat', 'Rabbit'];
const commonCharacteristic: string = 'They are domesticated animals';

for (const animal of animals) {
  console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log(`Common characteristic: ${commonCharacteristic}`);
