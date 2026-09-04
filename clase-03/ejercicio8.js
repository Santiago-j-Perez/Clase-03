function duplicar(arreglo) {
    let resultado = [];

    for (let i = 0; i < arreglo.length; i++) {
        resultado.push(arreglo[i] * 2);
    }

    return resultado;
}

console.log(duplicar([1, 2, 3])); // [2, 4, 6]
console.log(duplicar([]));        // []