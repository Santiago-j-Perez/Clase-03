// ==============================================================================
// Ejercicio 9: Estadísticas de Descarga de Archivos
// Consigna: Escribir una función llamada `calcularEstadisticasDescarga` que reciba
// la cantidad de archivos a descargar y el tamaño promedio en MB de cada uno.
// Debe convertir los datos a Number, calcular el peso total en KB (1 MB = 1024 KB)
// y retornar un mensaje formateado con template string.
// ==============================================================================

function calcularEstadisticasDescarga(cantArchivos, tamanoPromedioMB) {
    cantArchivos = Number(cantArchivos);
    tamanoPromedioMB = Number(tamanoPromedioMB);

    let pesoTotalMB = cantArchivos * tamanoPromedioMB;
    let pesoTotalKB = pesoTotalMB * 1024;

    return `Se descargarán ${cantArchivos} archivos con un peso total de ${pesoTotalKB} KB.`;
}

console.log(calcularEstadisticasDescarga("10", "1.5"));

// 📌 Feedback Docente (Profesor Axel):
// ¡Muy bien resuelto, Santiago! Excelente el parseo explícito a Number y el uso de Template Literals.


console.log(calcularEstadisticasDescarga(5, 2));