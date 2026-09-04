function calcularTarifa(tipoVehiculo, hora, esFeriado) {

    tipoVehiculo = tipoVehiculo.toLowerCase();

    let tarifa = 0;

    if (tipoVehiculo === "moto") {
        tarifa = 150;
    } else if (tipoVehiculo === "auto") {
        tarifa = 300;
    } else if (tipoVehiculo === "camion") {
        tarifa = 600;
    } else {
        console.log("Vehículo no válido");
        return 0;
    }

    if ((hora >= 8 && hora <= 10 || hora >= 17 && hora <= 19) && esFeriado === false) {
        tarifa = tarifa * 1.30;
    }

    return tarifa;
}


function simularFilaCabina(cantidadVehiculos) {

    let total = 0;

    let vehiculos = ["moto", "auto", "camion"];

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