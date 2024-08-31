// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


function isFibonacci(number) {
    let a = 0, b = 1, next = 0;
    
    while (next < number) {
        next = a + b;
        a = b;
        b = next;
    }

    const result = (next === number || number === 0) ? `${number} pertence à sequência de Fibonacci.` : `${number} não pertence à sequência de Fibonacci.`;
    return result;
}

let number = 5;
console.log(isFibonacci(number));
