// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

function contarLetraA(texto) {
    // Converter a string para minúsculas
    const textoMinusculo = texto.toLowerCase(); 
    let contador = 0;

    for (let caractere of textoMinusculo) {
        if (caractere === 'a') {
            contador++;
        }
    }
    // Verificando quantas vezes vai repetir a letra na string.
    if (contador > 0) {
        console.log(`A letra "a" aparece ${contador} vez(es) na string.`);
    } else {
        console.log(`A letra "a" não aparece na string.`);
    }
}

// Verificando
contarLetraA("A informática está interligada ao mundo sobre as reações intergalaxias!"); 
