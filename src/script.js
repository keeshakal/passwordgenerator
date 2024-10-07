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
    let output = document.getElementById("output");
    output.select();
    output.setSelectionRange(0, 99999); // For mobile compatibility
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}