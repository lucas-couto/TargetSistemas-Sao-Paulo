function inverterString() {
    let palavra = 'programacao'
    let palavraInvertida = ''
    let fim = palavra.length-1
    while (fim != 0) {
        palavraInvertida += palavra[fim]
        fim--
    }
    return palavraInvertida
}

console.log(inverterString())

