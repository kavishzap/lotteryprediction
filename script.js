function drawNumbers() {
    // Show the loader
    const loader = document.getElementById('loader');
    loader.style.display = 'block';

    // Hide previous results
    document.querySelectorAll('.circle').forEach(circle => circle.classList.remove('selected'));
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`ball${i}`).innerText = '';
    }

    // Simulate a delay of 2 seconds
    setTimeout(() => {
        // Generate random unique numbers
        const selectedNumbers = [];
        while (selectedNumbers.length < 6) {
            const num = Math.floor(Math.random() * 40) + 1; // Random number between 1 and 40
            if (!selectedNumbers.includes(num)) {
                selectedNumbers.push(num);
            }
        }

        // Highlight selected numbers in the grid
        selectedNumbers.forEach(num => {
            document.getElementById(`circle${num}`).classList.add('selected');
        });

        // Display the results in the balls
        for (let i = 0; i < 6; i++) {
            document.getElementById(`ball${i + 1}`).innerText = selectedNumbers[i];
        }

        // Hide the loader after showing results
        loader.style.display = 'none';
    }, 2000); // 2 seconds delay
}
