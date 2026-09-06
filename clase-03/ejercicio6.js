// ==============================================================================
// Ejercicio 6: Imprimir Elementos de un Arreglo
// Consigna: Escribir una función llamada `imprimirArreglo` que reciba un arreglo
// de elementos e imprima cada uno en la consola en una línea separada.
// ==============================================================================

function imprimirArreglo(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
}

imprimirArreglo([1, "Hola", 2, "Mundo"]);

// 📌 Feedback Docente (Profesor Axel):
// ¡Muy bien, Santiago! Recorriste el arreglo con `for` de manera impecable.
// Como buena práctica para producción/mobile, recordá que si el enunciado no pide mostrar en consola,
// las funciones de lógica pura deben retornar datos en lugar de hacer `console.log` internamente (salvo para depuración).
// Te muestro también la alternativa moderna con `for...of`:

function imprimirArreglo(arreglo) {
    for (const elemento of arreglo) {
        console.log(elemento);
    }
}

imprimirArreglo(["React Native", "Expo", "JavaScript"]);