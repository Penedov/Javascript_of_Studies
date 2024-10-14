function celcius(tag){
    let i = window.prompt('Digite a temperatura em Fahrenheit:');
    let x =(i-32)*(5/9);
    document.querySelector(tag).innerHTML =  'a temperatura em celcius e ' + x;

}
celcius('h3')