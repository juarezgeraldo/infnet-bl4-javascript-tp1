const dataHoraAtual = new Date()
const hora = dataHoraAtual.getHours()
const dataHoraAtualFormatada = dataHoraAtual.getDay() + "/" + dataHoraAtual.getMonth() + "/" + dataHoraAtual.getFullYear() + " " + dataHoraAtual.getHours() + ":" + dataHoraAtual.getMinutes()

let msg = ""

if (hora < 12){
    msg = "Bom dia!!! A hora atual é: " + dataHoraAtualFormatada
}else{
    if (hora < 18){
        msg = "Boa tarde!!! A hora atual é: " + dataHoraAtualFormatada
    }else{
        msg = "Bom noite!!! A hora atual é: " + dataHoraAtualFormatada
    }
}

console.log(msg)
