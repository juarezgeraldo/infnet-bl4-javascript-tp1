const numero1 = parseInt(window.prompt("Informe o primeiro número: "))
const numero2 = parseInt(window.prompt("Informe o segundo número: "))

let msg = ""
if(numero1 > numero2){
    msg = "O maior dos dois números é:" + numero1.toString()
} else {
    if (numero2 > numero1){
        msg = "O maior dos dois números é:" + numero2.toString()
    }else{
        msg = "Os números informados são iguais"
    }
}
console.log(msg)
