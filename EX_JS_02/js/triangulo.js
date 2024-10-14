function triangulo(tag){
    let t = window.prompt('Digite a base de um triângulo: ');
    let r = window.prompt('Digite a altura de um triângulo: ')
    let i = (t*r)/2;

    document.querySelector(tag).innerHTML =  'a base do seu triângulo é ' + t + ' e a altura é ' + r + ' a área do triânulo é ' + i + "metros";
}
triangulo('h4')