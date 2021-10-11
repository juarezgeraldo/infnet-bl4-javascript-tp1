const vogais = "aeiou"
const consoantes = "bcdfghjklmnpqrstvwxyz"

let letra = window.prompt("Ente com a letra a ser verificada: ")

if (vogais.includes(letra.toLowerCase())) {
    console.log(letra + " é uma vogal")
} else {
    if (consoantes.includes(letra.toLowerCase())) {
        console.log(letra + " é uma consoante")
    } else {
        console.log(letra + " não é vogal nem constante")
    }
}