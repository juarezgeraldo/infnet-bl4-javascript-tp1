const nota1 = parseFloat(window.prompt("Informe a primeira nota do aluno: "))
const nota2 = parseFloat(window.prompt("Informe a segunda nota do aluno: "))

let msg = ""
let media = ((nota1 + nota2) / 2)

if(media < 7){
    msg = "O aluno foi REPROVADO com a nota:" + media.toString()
} else {
    if (media < 10){
        msg = "O aluno foi APROVADO com a nota:" + media.toString()
    }else{
        msg = "O aluno foi APROVADO COM DISTINÇÃO com a nota:" + media.toString()
    }
}
console.log(msg)
