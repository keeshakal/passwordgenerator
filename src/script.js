function generatePsw() {
    let output = document.getElementById("output");
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#_-*&%+=/";
    let length = parseInt(document.getElementById("length").value); 
    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    output.value = password;
}

function copyPsw() {
    let output = document.getElementById("output").value;  // Get the password from the input field
    if (output) {
        navigator.clipboard.writeText(output)  // Use the modern clipboard API
            .then(() => {
                alert("Password copied to clipboard!");
            })
            .catch(err => {
                alert("Failed to copy password: " + err);
            });
    } else {
        alert("No password to copy!");
    }
}