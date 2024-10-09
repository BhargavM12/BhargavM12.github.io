var name = prompt("What is your name?", "Your Name");  // Prompting user to input their name
document.getElementById("displayName").innerText = "Hello, " + name + "!";
function toggleImageSize() {
    var img = document.getElementById("profileImage");
}
function highlightLink(link) {
    link.style.color = 'white';          // Change text color
    link.style.backgroundColor = 'blue'; // Change background color
}

function resetLink(link) {
    link.style.color = '';                // Reset text color
    link.style.backgroundColor = '';      // Reset background color
}