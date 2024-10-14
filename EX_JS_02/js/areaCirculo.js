function circulo(tag){
    let r = window.prompt(' Digite o raio do círculo:');
    let x = Math.PI * r * r;
    document.querySelector(tag).innerHTML =  'A area do criculo é: ' + x;
}

circulo('h5')