let notas = []

for (let index = 0; index < 4; index++) {
    const nota = window.prompt("Ente com a nota do " + (index + 1).toString() + "o. bimestre: ")
    notas[index] = parseInt(nota)
}

soma = 0

for (let index = 0; index < 4; index++) {
    soma = soma + notas[index]
}
const media = soma / 4

console.log("A média é: " + media.toString())
