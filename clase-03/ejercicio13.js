// ==============================================================================
// Ejercicio 13: Gráficos de Consumo de Memoria en Consola
// Consigna: Escribir una función `dibujarGraficoConsumo` que reciba una cantidad de `pasos`.
// Retornar un string con una pirámide de bloques '█' usando ciclos anidados (o `.repeat()`).
// ==============================================================================

function dibujarGraficoConsumo(pasos) {
    let grafico = "";

    for (let i = 1; i <= pasos; i++) {

        for (let j = 1; j <= i; j++) {
            grafico += "█";
        }

        grafico += "\n";
    }

    return grafico;
}

console.log(dibujarGraficoConsumo(5));

// 📌 Feedback Docente (Profesor Axel):
// ¡Gran trabajo con los bucles anidados, Santiago! La lógica para construir patrones visuales paso a paso quedó muy bien.
// Te comparto también la versión más concisa utilizando el método moderno de strings `.repeat()`:

function dibujarGraficoConsumo(pasos) {
    let resultadoVisual = "";

    for (let i = 1; i <= pasos; i++) {
        resultadoVisual += "█".repeat(i) + "\n";
    }

    return resultadoVisual;
}

console.log(dibujarGraficoConsumo(3));