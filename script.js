//your JS code here. If required.
// Function to simulate a delay with a promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to manipulate the array using chained promises
function manipulateArray() {
  // Initial array
  const initialArray = [1, 2, 3, 4];

  // Step 1: Initial Promise resolving after 3 seconds
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(initialArray);
    }, 3000);
  })
  .then((array) => {
    // Step 2: Filter out the odd numbers (leaving only even numbers)
    const evenNumbers = array.filter(num => num % 2 === 0);
    
    // After 1 second, update the output with the filtered even numbers
    delay(1000).then(() => {
      document.getElementById('output').innerText = evenNumbers.join(',');
    });

    // Return the filtered array for the next step in the promise chain
    return evenNumbers;
  })
  .then((evenNumbers) => {
    // Step 3: Multiply each even number by 2
    const multipliedNumbers = evenNumbers.map(num => num * 2);
    
    // After 2 seconds, update the output with the multiplied numbers
    delay(2000).then(() => {
      document.getElementById('output').innerText = multipliedNumbers.join(',');
    });
  });
}

// Call the function to start the manipulation and chaining
manipulateArray();
