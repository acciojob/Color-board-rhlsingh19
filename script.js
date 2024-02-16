//your JS code here. If required.
const colorBoard = document.getElementById('colorBoard');

    // Function to generate squares
    function generateSquares() {
        for (let i = 0; i < 800; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseover', changeColor);
            colorBoard.appendChild(square);
        }
    }

    // Function to change color on hover and revert after 1 second
    function changeColor(event) {
        const square = event.target;
        square.style.backgroundColor = getRandomColor();
        setTimeout(() => {
            square.style.backgroundColor = '#ccc';
        }, 1000);
    }

    // Function to generate random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Generate squares when the page loads
    generateSquares();