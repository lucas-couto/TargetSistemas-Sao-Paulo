// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

const faturamentoMensalEstado = [
    { estado: 'SP', faturamento: 67836.43 },
    { estado: 'RJ', faturamento: 36678.66 },
    { estado: 'MG', faturamento: 29229.88 },
    { estado: 'ES', faturamento: 27165.48 },
    { estado: 'Outros', faturamento: 19849.53 }
]

function somaTotalFaturamento() {
    let somaFaturamento = 0
    for (let i = 0; i < faturamentoMensalEstado.length; i++)
        somaFaturamento += faturamentoMensalEstado[i].faturamento
    return somaFaturamento
}

function percentualCadaEstado(){
    let somaFaturamento = somaTotalFaturamento()
    let percentual = 0;
    let percentualEstados = []
    for (let i = 0; i < faturamentoMensalEstado.length; i++){
        percentual = faturamentoMensalEstado[i].faturamento / somaFaturamento
        percentualEstados.push({estado: faturamentoMensalEstado[i].estado, percentual})
    }
    return percentualEstados
}

console.log(percentualCadaEstado())