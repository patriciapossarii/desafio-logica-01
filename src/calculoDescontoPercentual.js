function calcularDescontoPercentual (valor, descontoPercentual){

    const resultado = valor - (valor * ( descontoPercentual / 100))
    return resultado;
}


module.exports = {
    calcularDescontoPercentual
};


