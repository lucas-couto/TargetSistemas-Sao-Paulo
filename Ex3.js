const diasMes = require('./dados.json')

function menorValorMes() {
    let valorBase = diasMes[0].valor
    let menorValor = valorBase
    for (let i = 0; i < diasMes.length; i++) {
        if (diasMes[i].valor != 0)
            if (diasMes[i].valor < menorValor)
                menorValor = diasMes[i].valor
    }
    return menorValor;
}

function maiorValorMes() {
    let valorBase = diasMes[0].valor
    let maiorValor = valorBase
    for (let i = 0; i < diasMes.length; i++) {
        if (diasMes[i].valor != 0)
            if (diasMes[i].valor > maiorValor)
                maiorValor = diasMes[i].valor
    }
    return maiorValor;
}

function mediaMensal() {
    let somaValores = 0
    let media = 0
    for (let i = 0; i < diasMes.length; i++)
        somaValores += diasMes[i].valor
    media = somaValores / (diasMes.length)
    return media;
}

function diasSuperiorValorMedioMes() {
    let somaDias = 0
    let mediaMes = mediaMensal()
    for(let i = 0; i < diasMes.length; i++)
        if(diasMes[i].valor > mediaMes)
            somaDias++
    return somaDias
}

console.log(menorValorMes())
console.log(maiorValorMes())
console.log(diasSuperiorValorMedioMes())

