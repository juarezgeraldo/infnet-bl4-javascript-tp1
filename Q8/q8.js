const lado1 = parseFloat(window.prompt("Informe o lado 1 do triângulo: "))
const lado2 = parseFloat(window.prompt("Informe o lado 2 do triângulo: "))
const lado3 = parseFloat(window.prompt("Informe o lado 3 do triângulo: "))

let msg = ""

if ((lado1 + lado2) > lado3 && (lado2 + lado3) > lado1 && (lado3 + lado1) > lado2){
    if ((lado1 == lado2) && (lado2 == lado3)){
        msg = "É um triângulo equilátero"
    }else{
        if((lado1 == lado2) || (lado2 == lado3) || (lado3 == lado1)){
            msg = "É um triângulo isósceles"
        }else{
            msg = "É um triângulo escaleno"
        }
    }
}else{
    msg = "Com os dados informados não é possível formar um triângulo!"
}

console.log(msg)

