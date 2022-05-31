// Bonus: ability to set the password length
// Bonus: 1-click copy passwors to the clipboard Done


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
let passwordAviso = document.getElementById("passwordCopiado");

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
    password1.setAttribute('class', "passwordGenerated verde");

    let passwordGenerado2 = generatePassword();
    password2.textContent = passwordGenerado2;
    password2.setAttribute('class', "passwordGenerated verde");

    let passwordGenerado3 = generatePassword();
    password3.textContent = passwordGenerado3;
    password3.setAttribute('class', "passwordGenerated verde");

    let passwordGenerado4 = generatePassword();
    password4.textContent = passwordGenerado4;
    password4.setAttribute('class', "passwordGenerated verde");
    
}

/* for (let i = 0; i < 5; i++) {
    password1 = textContent = "prueba: " + i
} */
function copyPassword(e) {
    if(e.target.textContent === "···") {
        console.log("Esto no rules");
        passwordAviso.textContent = "Click on 'Generate passwords' first";
        setTimeout(function(){
            //Code that will run after 5000 milliseconds
            passwordAviso.textContent = "";
        }, 5000);
    } else {
        passwordAviso.textContent = "Password copied to clipboard";
        setTimeout(function(){
            //Code that will run after 5000 milliseconds
            passwordAviso.textContent = "";
        }, 5000);
        console.log(e.target.textContent);
        navigator.clipboard.writeText(e.target.textContent);
    }
}