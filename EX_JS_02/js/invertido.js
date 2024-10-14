function invertido(tag){
    let i = window.prompt('Digite um número: ')
    let n = i.split('').reverse().join('');
    document.querySelector(tag).innerHTML = "Seu número ficou -> " + n
}
invertido('h6')