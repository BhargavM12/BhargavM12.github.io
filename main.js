var name = prompt("What is your name?", "Your Name");  // Prompting user to input their name
document.getElementById("displayName").innerText = "Hello, " + name + "!";
function toggleImageSize() {
    var img = document.getElementById("profileImage");
    if (img.style.transform === "scale(1.5)") {
        img.style.transform = "scale(1)"; 
    } else {
        img.style.transform = "scale(1.5)";
    } 
    // this javascript code is repsonsible for enlarging the image if its set to 1, if not it transforms it to 1.5.
}
function highlightLink(link) {
    link.style.color = 'white';          // Change text color
    link.style.backgroundColor = 'blue'; // Change background color
}

function resetLink(link) {
    link.style.color = '';                // Reset text color
    link.style.backgroundColor = '';      // Reset background color
}