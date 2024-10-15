function greeting(id) {
    document.getElementById(id).innerHTML = "Bom dia, Mundo!!!";
}

function cube(id) {
    let number = window.prompt('Digite um número:');
    let result = number ** 3;
    document.getElementById(id).innerHTML = "O cubo do número é -> " + result;
}

function fahrenheitToCelsius(id) {
    let fahrenheit = window.prompt('Digite a temperatura em Fahrenheit:');
    let celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById(id).innerHTML = "A temperatura em Celsius é -> " + celsius.toFixed(2);
}

function triangleArea(id) {
    let base = window.prompt('Digite a base do triângulo:');
    let height = window.prompt('Digite a altura do triângulo:');
    let area = (base * height) / 2;
    document.getElementById(id).innerHTML = "A área do triângulo é -> " + area;
}

function circle(id) {
    let radius = window.prompt('Digite o raio do círculo:');
    const area = Math.PI * radius ** 2;
    const perimeter = 2 * Math.PI * radius;
    document.getElementById(id).innerHTML = `Área: ${area.toFixed(2)}, Perímetro: ${perimeter.toFixed(2)}`;
}

function reverseNumber(id) {
    let number = window.prompt('Digite um número:');
    let reversed = number.split('').reverse().join('');
    document.getElementById(id).innerHTML = "Número invertido -> " + reversed;
}

function countVowels(id) {
    let str = window.prompt('Digite uma palavra:');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    document.getElementById(id).innerHTML = "Número de vogais -> " + count;
}

function calculateInvestment(id) {
    let capital = parseFloat(window.prompt('Digite o capital inicial:'));
    let rate = parseFloat(window.prompt('Digite a taxa de juros mensal (%):'));
    let time = parseInt(window.prompt('Digite o tempo em meses:'));
    let amount = capital * (1 + rate / 100) ** time;
    document.getElementById(id).innerHTML = "Montante final -> " + amount.toFixed(2);
}

function factorial(id) {
    let n = parseInt(window.prompt('Digite um número:'));
    let result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    document.getElementById(id).innerHTML = "Fatorial -> " + result;
}

function countCharacter(id) {
    let str = window.prompt('Digite uma palavra:');
    let character = window.prompt('Digite o caractere a ser contado:');
    let count = 0;
    for (let char of str) {
        if (char === character) {
            count++;
        }
    }
    document.getElementById(id).innerHTML = `O caractere "${character}" aparece -> ${count} vezes`;
}

function isPrime(id) {
    let number = parseInt(window.prompt('Digite um número:'));
    let prime = number > 1;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            prime = false;
            break;
        }
    }
    document.getElementById(id).innerHTML = prime ? "O número é primo" : "O número não é primo";
}
