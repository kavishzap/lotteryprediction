function drawNumbers() {
  // Generate 6 unique random numbers between 1 and 40
  const selectedNumbers = new Set();

  while (selectedNumbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 40) + 1; // Random number between 1 and 40
    selectedNumbers.add(randomNumber);
  }

  // Display the numbers on the screen
  const predictedArray = Array.from(selectedNumbers);
  for (let i = 0; i < 6; i++) {
    const ball = document.getElementById(`ball${i + 1}`);
    if (ball) {
      ball.textContent = predictedArray[i];
    }
  }

  // Optional: Log the prediction for debugging
  console.log("Predicted Numbers:", predictedArray);
}
