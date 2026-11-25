function checkAge() {

    // Get name
    let name = document.getElementById("name").value.trim();

    // Get age
    let age = document.getElementById("age").value;

    // Get message
    let message = document.getElementById("message");

    // Check empty name
    if (name === "") {
        message.textContent = "Please enter your name.";
    }

    // Check invalid age
    else if (age === "" || Number(age) < 0 ||
        !Number.isInteger(Number(age))) {
        message.textContent = "Please enter a valid age.";
    }

    // Check age limit
    else if (Number(age) >= 12) {

        // Save player name
        sessionStorage.setItem("playerName", name);

        // Go to game
        window.location.href = "index.html";
    }

    // Under 12
    else {
        message.textContent = "You must be at least 12 years old.";
    }
}


