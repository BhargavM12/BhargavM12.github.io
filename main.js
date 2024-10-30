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