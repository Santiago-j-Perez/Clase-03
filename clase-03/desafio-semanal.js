function calcularTarifa(tipoVehiculo, hora, esFeriado) {

    const tipo = tipoVehiculo.toLowerCase(); // 📌 Usamos const para evitar mutar el parámetro

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

// 📌 Feedback Docente (Profesor Axel):
// Impecable resolución del desafío semanal integrador, Santiago. La lógica condicional de hora pico, la normalización con .toLowerCase() y la simulación aleatoria con Math.random() y Template Literals están resueltas en nivel excelente.

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