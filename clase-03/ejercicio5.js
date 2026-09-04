function sumarRango(numeroInicial, numeroFinal) {
    let suma = 0;

    for (let i = numeroInicial; i <= numeroFinal; i++) {
        suma += i;
    }

    return suma;
}

console.log(sumarRango(0, 10));  

