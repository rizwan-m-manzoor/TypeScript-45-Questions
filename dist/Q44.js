function make_sandwich(...items) {
    console.log('Sandwich Order:');
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log('Enjoy your sandwich!\n');
}
// Call the make_sandwich() function with different numbers of arguments
make_sandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
make_sandwich('Turkey', 'Swiss Cheese', 'Mustard');
make_sandwich('PB&J', 'Banana');
export {};
