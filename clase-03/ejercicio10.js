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