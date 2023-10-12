import {ingresos_db, egresos_db} from './data.js';

function generaPerdida(ingresos, egresos) {
    let totalIngresos = 0;
    let totalEgresos = 0;
    for (let i = 0; i < ingresos.length; i++) {
        totalIngresos += ingresos[i].monto;
        totalEgresos += egresos[i].monto;
    }
    // modificar el DOM que muestre "Si" cuando hay perdida y "No" cuando hay ganancia
    let perdida = document.getElementById("balance");
    if (totalEgresos > totalIngresos) {
        perdida.innerHTML = "Si";
    } else {
        perdida.innerHTML = "No";
    }
}

// Crear una funcion para modificar la tabla de ingresos y egresos en todos los meses usando DOM

function modificaTabla(ingresos, egresos) {
    for (let i = 0; i < ingresos.length; i++) {
        let tablaIngresos = document.getElementById("ingresos" + ingresos[i].periodo);
        let tablaEgresos = document.getElementById("egresos" + egresos[i].periodo );
        tablaIngresos.innerHTML = ingresos[i].monto;
        tablaEgresos.innerHTML = egresos[i].monto;
    }
}

modificaTabla(ingresos_db, egresos_db);

generaPerdida(ingresos_db, egresos_db);
