// ==============================================================================
// Ejercicio 10: Evaluación de Acceso a App Móvil
// Consigna: Escribir una función llamada `evaluarAccesoApp` que tome `edad`,
// `tienePermisoDocente` y `esInvitado`. Retornar `true` si no es invitado y
// cumple tener 18 o más años O tener permiso docente. En caso contrario, `false`.
// ==============================================================================

function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) {
    if (esInvitado) {
        return false;
    }

    if (edad >= 18 || tienePermisoDocente) {
        return true;
    }

    return false;
}

console.log(evaluarAccesoApp(16, true, false));  // true
console.log(evaluarAccesoApp(20, false, true));  // false

// 📌 Feedback Docente (Profesor Axel):
// ¡Excelente lógica, Santiago! El descarte temprano (`guard clause`) para invitados quedó clarísimo.
// Te comparto la variante con retorno único combinando las condiciones en una sola expresión booleana:

function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) {
    let tieneAcceso = !esInvitado && (edad >= 18 || tienePermisoDocente);
    return tieneAcceso;
}

console.log(evaluarAccesoApp(17, false, false)); // false
console.log(evaluarAccesoApp(18, false, false)); // true