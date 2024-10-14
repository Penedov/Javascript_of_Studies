function cubo(tag) {
    let i = window.prompt('Digite o número:');
    let x = i * i * i; 
    document.querySelector(tag).innerHTML = 'Resultado = ' + x; 
}


cubo('h2'); 
