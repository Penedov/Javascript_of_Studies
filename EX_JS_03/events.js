
var c = document.getElementById('clickme')

function clickme(){
    c.innerText = "Muito forte"
    c.style.background = "yellow"
    c.style.color = "black"

}
function enter(){
    c.innerText = "Dentro da area"
    c.style.background = "#1e5757"
}
function exit(){
    c.innerText = "Deixou a area"
    c.style.background = "red"
    c.style.color = "#faebd7"
}
function somar(){
    var tn1 = document.querySelector('input#txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var res = document.querySelector('pre#result')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    var sub = n1 - n2
    var m = n1 * n2
    var d = n1 / n2
    res.innerText =`A soma: ${n1} + ${n2} = ${s} \n` + `A subtração: ${n1} - ${n2} = ${sub}\n`+`A multiplicação: ${n1} * ${n2} = ${m}\n`+`A divisão: ${n1} / ${n2} = ${d}`

}