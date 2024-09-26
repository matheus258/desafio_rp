/* 

4) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, ___
b) 2, 4, 8, 16, 32, 64, ____
c) 0, 1, 4, 9, 16, 25, 36, ____
d) 4, 16, 36, 64, ____
e) 1, 1, 2, 3, 5, 8, ____
f) 2,10, 12, 16, 17, 18, 19, ____

*/

// a) Sequêcia de números ímpares

console.log(`A resolução da letra a) sendo com numeros ímpares, o proximo número seria o 9.`);

// Imprimindo os 6 primeiros numeros impares.
for (let i = 1, count = 0; count < 6; i += 2) {
    console.log(i);
    count++;
}

// b) o dobro do número anterior.

console.log(`A resolução da letra b) sendo com o dobro do número anterior, o proximo número seria o 128.`);

// Imprimindo os 8 primeiros dobros anteriores.
for (let i = 2, count = 0; count < 8; i *= 2) {
    console.log(i);
    count++;
}

// C) sequência dos quadrados perfeitos.

console.log(`A resolução da letra c) sendo com a sequência dos quadrados perfeitos, o proximo número seria o 49.`);

// Imprimindo os 8 primeiros quadrados perfeitos.
for (let i = 0, count = 0; count < 8; i++) {
    console.log(i * i);
    count++;
}

// d) Sequência dos quadrados dos números pares
console.log(`A resolução da letra d) sendo com a sequência dos quadrados dos números pares, o próximo número seria o 100.`);

// Imprimindo os 5 primeiros quadrados dos números pares.
for (let i = 2, count = 0; count < 5; i += 2) {
    console.log(i * i);
    count++;
}

// e) Sequência de Fibonacci
console.log(`A resolução da letra e) sendo com a sequência de Fibonacci, o próximo número seria o 13.`);

// Imprimindo os 7 primeiros números de Fibonacci.
let a = 1, b = 1;
console.log(a);
console.log(b);
for (let count = 2; count < 7; count++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}

// f) Alternância entre múltiplos de 2 e números consecutivos
console.log(`A resolução da letra f) sendo com a alternância entre múltiplos de 2 e números consecutivos, o próximo número seria o 20.`);

// Imprimindo os 8 primeiros números da sequência.
let nums = [2, 10, 12, 16, 17, 18, 19];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
// O próximo número é o próximo múltiplo de 2
console.log(20);