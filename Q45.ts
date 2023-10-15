function create_car(manufacturer: string, model: string, ...options: Record<string, any>[]): Record<string, any> {
    const car: Record<string, any> = {
      manufacturer,
      model,
    };
  
    for (const option of options) {
      const [key, value] = Object.entries(option)[0];
      car[key] = value;
    }
  
    return car;
  }
  
  // Call the create_car() function with required and optional information
  const carInfo = create_car('Toyota', 'Camry', { color: 'Blue' }, { feature: 'Sunroof' });
  
  // Print the Object to verify the stored information
  console.log(carInfo);
  