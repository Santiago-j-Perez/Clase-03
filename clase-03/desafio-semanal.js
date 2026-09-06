// ==============================================================================
// Desafío Semanal Obligatorio: Peaje Inteligente (Telepase)
// Consigna: Implementar la facturación automática de una cabina de peaje:
// 1. `calcularTarifa(tipoVehiculo, hora, esFeriado)`:
//    - Tarifas base: "moto": $150, "auto": $300, "camion": $600.
//    - Hora pico (8 a 10 y 17 a 19 inclusive): +30% recargo si NO es feriado.
//    - Aceptar mayúsculas/minúsculas. Si es inválido, advertir y retornar 0.
// 2. `simularFilaCabina(cantidadVehiculos)`:
//    - Simular aleatoriamente tipo, hora (0-23) y feriado (true/false).
//    - Mostrar detalle de cada intento en consola y retornar total recaudado.
// ==============================================================================

function calcularTarifa(tipoVehiculo, hora, esFeriado) {

    const tipo = tipoVehiculo.toLowerCase();

    let tarifa = 0;

    if (tipo === "moto") {
        tarifa = 150;
    } else if (tipo === "auto") {
        tarifa = 300;
    } else if (tipo === "camion") {
        tarifa = 600;
    } else {
        console.log("Vehículo no válido");
        return 0;
    }

    if ((hora >= 8 && hora <= 10 || hora >= 17 && hora <= 19) && !esFeriado) {
        tarifa = tarifa * 1.30;
    }

    return tarifa;
}

function simularFilaCabina(cantidadVehiculos) {

    let total = 0;

    const vehiculos = ["moto", "auto", "camion"];

    for (let i = 1; i <= cantidadVehiculos; i++) {

        let numero = Math.floor(Math.random() * 3);
        let tipo = vehiculos[numero];

        let hora = Math.floor(Math.random() * 24);

        let feriado = Math.random() < 0.5;

        let tarifa = calcularTarifa(tipo, hora, feriado);

        total = total + tarifa;

        console.log(
            `[Intento ${i}] Vehículo: ${tipo} | Hora: ${hora} | Feriado: ${feriado} | Tarifa cobrada: $${tarifa}`
        );
    }

    return total;
}

console.log("Total recabado en fila:", simularFilaCabina(5));

// 📌 Feedback Docente (Profesor Axel):
// Impecable resolución del desafío semanal integrador, Santiago. La lógica condicional de hora pico, la normalización con .toLowerCase() y la simulación aleatoria con Math.random() y Template Literals están resueltas con excelente calidad de código.
//
// 💡 Desafío de Modularización (Responsabilidad Única):
// En desarrollo profesional buscamos dividir problemas complejos en funciones auxiliares más pequeñas donde cada una hace una sola cosa bien. Mirá cómo quedaría desacoplando la lógica en funciones que cooperan:

// 1. Función que normaliza y valida el vehículo
function normalizarVehiculo(tipo) {
    let vehiculoLimpio = tipo.toLowerCase();
    let esValido = vehiculoLimpio === "moto" || vehiculoLimpio === "auto" || vehiculoLimpio === "camion";

    if (!esValido) {
        console.warn("Vehículo no válido: " + tipo);
        return null;
    }
    return vehiculoLimpio;
}

// 2. Función que determina la tarifa base
function obtenerTarifaBase(tipo) {
    let tarifa = 0;
    if (tipo === "moto") tarifa = 150;
    if (tipo === "auto") tarifa = 300;
    if (tipo === "camion") tarifa = 600;
    return tarifa;
}

// 3. Función que evalúa si corresponde recargo por hora pico
function esHorarioPico(hora, esFeriado) {
    let enRango = (hora >= 8 && hora <= 10) || (hora >= 17 && hora <= 19);
    return enRango && !esFeriado;
}

// 4. Función orquestadora principal
function calcularTarifaModular(tipoVehiculo, hora, esFeriado) {
    let vehiculo = normalizarVehiculo(tipoVehiculo);
    if (!vehiculo) return 0;

    let tarifaFinal = obtenerTarifaBase(vehiculo);

    if (esHorarioPico(hora, esFeriado)) {
        tarifaFinal = tarifaFinal * 1.30;
    }

    return tarifaFinal;
}

console.log(calcularTarifaModular("moto", 9, false)); // 195
console.log(calcularTarifaModular("auto", 18, true)); // 300
console.log(calcularTarifaModular("camion", 12, false)); // 600
console.log(calcularTarifaModular("bicicleta", 10, false)); // Muestra una advertencia y retorna 0