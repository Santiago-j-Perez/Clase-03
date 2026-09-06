// ==============================================================================
// Ejercicio 8: Duplicar Elementos de un Arreglo
// Consigna: Escribir una función llamada `duplicar` que reciba un arreglo de números
// y retorne un nuevo arreglo con cada elemento multiplicado por 2.
// ==============================================================================

function duplicar(arreglo) {
    let resultado = [];

    for (let i = 0; i < arreglo.length; i++) {
        resultado.push(arreglo[i] * 2);
    }

    return resultado;
}

console.log(duplicar([1, 2, 3])); // [2, 4, 6]
console.log(duplicar([]));        // []

// 📌 Feedback Docente (Profesor Axel):
// ¡Excelente, Santiago! Uso impecable de `.push()` para construir el nuevo arreglo sin mutar el original.
// Te comparto también la versión funcional usando `.map()`, muy utilizada en desarrollo con React Native:

function duplicar(arreglo) {
    let arregloDuplicado = arreglo.map(num => num * 2);
    return arregloDuplicado;
}

console.log(duplicar([5, 10, 15])); // [10, 20, 30]