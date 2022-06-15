// Author: Lucas Silva Couto

function fibonacci(numDesejado) {
    let fibonacci = [0, 1]
    let contador = fibonacci.length
    let soma = 0;
    while (true) {
        soma = fibonacci[contador - 2] + fibonacci[contador - 1]
        fibonacci.push(soma)
        contador++
        if (soma == numDesejado)
            return true
        else if (soma > numDesejado) {
            return false
        }
    }
}

function numExistenteFibonacci(numDesejado) {
    let numExistente = fibonacci(numDesejado)
    if (numExistente)
        console.log(`O numero ${numDesejado} faz parte da sequencia de Fibonacci`)
    else
        console.log(`O numero ${numDesejado} nao faz parte da sequencia de Fibonacci`)
}


numExistenteFibonacci(53)