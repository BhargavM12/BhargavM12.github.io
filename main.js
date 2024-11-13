function askName() {
    const userName = prompt("What is your name?", "Your Name"); // Prompting user to input their name
    if (userName) { // Check if userName is not null or an empty string
        document.getElementById("displayName").innerText = "Hello, " + userName + "!"; // Display user's name
    } else {
        document.getElementById("displayName").innerText = "Hello!"; // Fallback message if no name was provided
    }
}

function toggleImageSize() {
    const img = document.getElementById("profileImage");
    if (img.style.transform === "scale(1.5)") {
        img.style.transform = "scale(1)"; 
    } else {
        img.style.transform = "scale(1.5)";
    }
}

// Functions to highlight and reset link styles
function highlightLink(link) {
    link.style.color = 'white';          // Change text color
    link.style.backgroundColor = 'blue'; // Change background color
}

function resetLink(link) {
    link.style.color = '';                // Reset text color
    link.style.backgroundColor = '';      // Reset background color
}

// New function to increase text size
function increaseTextSize() {
    const body = document.querySelector('body');
    let currentSize = window.getComputedStyle(body, null).getPropertyValue('font-size');
    let newSize = parseFloat(currentSize) * 1.2;
    body.style.fontSize = newSize + 'px';
}
function toggleColors() {
    const body = document.querySelector('body');
    const currentBgColor = window.getComputedStyle(body, null).getPropertyValue('background-color');
    
    // Use high-contrast color scheme (black text on light yellow background)
    if (currentBgColor === 'rgb(255, 255, 255)') {  // White background
        body.style.backgroundColor = '#FFFFE0';  // Light yellow background (high contrast)
        body.style.color = '#000000';  // Black text color
    } else {
        body.style.backgroundColor = '#FFFFFF';  // White background
        body.style.color = '#000000';  // Black text color
    }
}

