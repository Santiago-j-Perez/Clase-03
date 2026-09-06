// ==============================================================================
// Ejercicio 5: Sumar Rango de Números
// Consigna: Escribir una función llamada `sumarRango` que reciba dos números
// (inicio y fin) y retorne la suma de todos los números en ese rango (inclusive).
// ==============================================================================

function sumarRango(numeroInicial, numeroFinal) {
    let suma = 0;

    for (let i = numeroInicial; i <= numeroFinal; i++) {
        suma += i;
    }

    return suma;
}

console.log(sumarRango(0, 10));  

// 📌 Feedback Docente (Profesor Axel):
// ¡Excelente trabajo, Santiago! Tu lógica del bucle for acumulador es limpia y efectiva.


console.log(sumarRango(1, 5));  // 15
console.log(sumarRango(5, 5));  // 5
