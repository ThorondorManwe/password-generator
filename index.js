// Bonus: ability to set the password length
// Bonus: 1-click copy passwors to the clipboard


const chars = [
    "a", "b", "c", "d", "e", "f", 
    "g", "h", "i", "j", "k", "l", 
    "m", "n", "o", "p", "q", "r", 
    "s", "t", "u", "v", "w", "x", 
    "y", "z", "A", "B", "C", "D", 
    "E", "F", "G", "H", "I", "J", 
    "K", "L", "M", "N", "O", "P", 
    "Q", "R", "S", "T", "U", "V", 
    "W", "X", "Y", "Z", "+", "-",
    "*", "/", "-", "_", "?", "¿",
    "¡", "!", "|", "#", "$", "&",
    "(", ")", "=", "'", "`", "°",
    "~", ";", ",", ":", ".", "{",
    "}", "[", "]", "^", "<", ">",
    "0", "1", "2", "3", "4", "5",
    "6", "7", "8", "9",
];

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let password3 = document.getElementById("password3");
let password4 = document.getElementById("password4");

function generatePassword() {
    let password = "";
    for(let i = 0; i < 8; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
}

function passwords() {
    let passwordGenerado1 = generatePassword();
    password1.textContent = passwordGenerado1;

    let passwordGenerado2 = generatePassword();
    password2.textContent = passwordGenerado2;

    let passwordGenerado3 = generatePassword();
    password3.textContent = passwordGenerado3;

    let passwordGenerado4 = generatePassword();
    password4.textContent = passwordGenerado4;
    
}

/* for (let i = 0; i < 5; i++) {
    password1 = textContent = "prueba: " + i
} */