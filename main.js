// Function to ask for user name and display it
function askName() {
    const userName = prompt("What is your name?", "Your Name"); // Prompting user to input their name
    if (userName) { // Check if userName is not null or an empty string
        document.getElementById("displayName").innerText = "Hello, " + userName + "!"; // Display user's name
    } else {
        document.getElementById("displayName").innerText = "Hello!"; // Fallback message if no name was provided
    }
}
// Function to toggle profile image size
function toggleImageSize() {
    const img = document.getElementById("profileImage");
    img.style.transform = img.style.transform === "scale(1.5)" ? "scale(1)" : "scale(1.5)"; // Toggle image size
}

// Functions to highlight and reset link styles
function highlightLink(link) {
    link.style.color = 'white'; // Change text color
    link.style.backgroundColor = 'blue'; // Change background color
}

function resetLink(link) {
    link.style.color = ''; // Reset text color
    link.style.backgroundColor = ''; // Reset background color
}

// Function to increase text size by 20%
function increaseTextSize() {
    const body = document.querySelector('body');
    const currentSize = parseFloat(window.getComputedStyle(body).fontSize);
    body.style.fontSize = `${currentSize * 1.2}px`; // Increase font size
}

// Function to toggle between light and high-contrast color schemes
function toggleColors() {
    const body = document.querySelector('body');
    const currentBgColor = window.getComputedStyle(body).backgroundColor;

    if (currentBgColor === 'rgb(255, 255, 255)') { // White background
        body.style.backgroundColor = '#FFFFE0'; // Light yellow background
        body.style.color = '#000000'; // Black text
    } else {
        body.style.backgroundColor = '#FFFFFF'; // White background
        body.style.color = '#000000'; // Black text
    }
}
