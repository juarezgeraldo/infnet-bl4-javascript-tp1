const numero = parseFloat(window.prompt("Informe um valor: "))
console.log(numero)

let msg = ""
if (numero < 0) {
    msg = "O número informado é negativo:"
} else {
    msg = "O número informado é positivo"
}
console.log(msg)
