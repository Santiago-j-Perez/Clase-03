// ==============================================================================
// Ejercicio 11: Simulación de Diagnóstico de Red (Ping)
// Consigna: Escribir una función `simularReportePing` que reciba `intentosMaximos`.
// Recorrer los intentos del 1 al máximo. Si el intento es múltiplo de 5, emitir
// error crítico y cortar (`break`). Si es par "Exitoso", si es impar "Fallido".
// ==============================================================================

function simularReportePing(intentosMaximos) {
    for (let intento = 1; intento <= intentosMaximos; intento++) {

        if (intento % 5 === 0) {
            console.log(`Error crítico de hardware en intento ${intento}`);
            break;
        }

        if (intento % 2 === 0) {
            console.log(`Intento ${intento}: Exitoso`);
        } else {
            console.log(`Intento ${intento}: Fallido`);
        }
    }
}
simularReportePing(9);

// 📌 Feedback Docente (Profesor Axel):
// ¡Muy bien resuelto, Santiago! El control de flujo con `break` en múltiplos de 5 está perfecto.
// Te dejo la variante refactorizada utilizando el operador ternario para simplificar la emisión del estado:

function simularReportePing(intentosMaximos) {
    for (let intento = 1; intento <= intentosMaximos; intento++) {
        if (intento % 5 === 0) {
            console.log(`Error crítico de hardware en intento ${intento}`);
            break;
        }

        const estado = (intento % 2 === 0) ? "Exitoso" : "Fallido";
        console.log(`Intento ${intento}: ${estado}`);
    }
}

simularReportePing(4);