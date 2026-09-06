// ==============================================================================
// Ejercicio 12: Pipeline de Procesamiento de Compra Móvil
// Consigna: Escribir una función `procesarCompraMovil` que reciba `precioBase` y `descuentoPct`.
// Debe declarar internamente 3 funciones auxiliares (con sintaxis tradicional, expresión y flecha):
// 1. aplicarDescuento
// 2. sumarIva (21%)
// 3. redondear (2 decimales)
// Ejecutar el pipeline y retornar el precio final.
// ==============================================================================

function procesarCompraMovil(precioBase, descuentoPct) {

    function aplicarDescuento(precio, descuento) {
        return precio - (precio * descuento / 100);
    }

    const sumarIva = function(precio) {
        return precio * 1.21;
    };

    const redondear = (valor) => {
        return Number(valor.toFixed(2));
    };

    let precioDescontado = aplicarDescuento(precioBase, descuentoPct);
    let precioConIva = sumarIva(precioDescontado);
    let precioFinal = redondear(precioConIva);

    return precioFinal;
}

console.log(procesarCompraMovil(100, 10)); // 108.9

// 📌 Feedback Docente (Profesor Axel):
// ¡Impecable solución, Santiago! Utilizaste los 3 tipos de declaración de funciones correctamente dentro del pipeline.
// Te comparto la variante con declaración de funciones helpers externas (modularizadas), ideal para testear cada paso por separado:

function procesarCompraMovilModular(precioBase, descuentoPct) {
    const aplicarDescuento = (precio, descuento) => precio - (precio * descuento / 100);
    const sumarIva = (precio) => precio * 1.21;
    const redondear = (valor) => Number(valor.toFixed(2));

    const descontado = aplicarDescuento(precioBase, descuentoPct);
    const conIva = sumarIva(descontado);
    const precioFinal = redondear(conIva);

    return precioFinal;
}

console.log(procesarCompraMovilModular(200, 15)); // 205.7