// ==============================================================================
// Ejercicio 7: Contador de Caracteres Específicos
// Consigna: Escribir una función llamada `numeroDeCaracteres` que reciba un string
// y un carácter, y retorne la cantidad de veces que aparece dicho carácter en el string.
// ==============================================================================

function numeroDeCaracteres(str, caracter) {
    let cantidad = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === caracter) {
            cantidad++;
        }
    }

    return cantidad;
}

console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m"));      // 0
console.log(numeroDeCaracteres("eeee", "e"));       // 4

// 📌 Feedback Docente (Profesor Axel):
// ¡Excelente, Santiago! El bucle recorriendo el string como un array de caracteres funciona bárbaro.
// Te comparto la variante con patrón de retorno único asignando la cuenta final:

function numeroDeCaracteres(str, caracter) {
    let totalCoincidencias = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === caracter) {
            totalCoincidencias++;
        }
    }

    return totalCoincidencias;
}

console.log(numeroDeCaracteres("Desarrollo Móvil", "o")); // 3
console.log(numeroDeCaracteres("JavaScript", "a"));       // 2