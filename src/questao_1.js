// Resolução desafio RIBEIRAO PRETO
// 1) 

// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function fibonacci(num) {
    if (num < 0) {
        return false;
    }

    let a = 0;
    let b = 1;

    while (a <= num) {
        if (a === num) {
            return true;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }

    return false;
}

function checkFibonacci(num) {
    if (fibonacci(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}

// Verificando numero
const numero = 34;
const segundoNumero = 20;

// iniciando função que verifica se é da sequência de Fibonacci.
checkFibonacci(numero);
checkFibonacci(segundoNumero);
