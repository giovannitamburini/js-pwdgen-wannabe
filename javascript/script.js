/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina la concatenazione delle variabili + un numero a caso scelto da voi
(es: MarioRossiVerde21)
*/

let name = prompt ("what's your name?")

// console.log ("your name is " + name)

let surname = prompt ("what's your surname?")

// console.log ("your surname is " + surname)

let color = prompt ("what's your favorite color?")

// console.log ("your favorite color is " + color);

document.writeln (name + surname + color + 12)

// oppure

document.writeln (`${name}${surname}${color}${9}`)