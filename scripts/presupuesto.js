const form = document.getElementById("formulario");

const operacion = form['operacion'];
const descripcion = form['descripcion'];
const cantidad = form['cantidad'];

let presupuestoTotal = 0;
let ingresoTotal = 0;
let egresoTotal = 0;

const ingresos = [
    new Ingreso("Salario", 2100),
    new Ingreso("Venta coche", 1500)
];

const egresos = [
    new Egreso("Renta departamento", 900),
    new Egreso("Ropa", 400)
];

const validarFormulario = () => {
    return descripcion.value !== "" && cantidad.value !== "" && !isNaN(cantidad.value) && cantidad.value > 0;
}

const limpiarCampos = () => {
    descripcion.value = "";
    cantidad.value = "";
}

const agregarItems = () => {
    if(validarFormulario()){
        switch(operacion.value){
            case '+':
                ingresos.push(new Ingreso(descripcion.value, cantidad.value));
                break;
            case '-':
                egresos.push(new Egreso(descripcion.value, cantidad.value));
                break;
            default:
                console.log("Error de sistema");
        }
    }

    mostrarInfo();
    limpiarCampos();
}

const generarPresupuesto = () => {
    presupuestoTotal = 0, ingresoTotal = 0, egresoTotal = 0;
    for (const elementos of ingresos) {
        ingresoTotal += Number.parseInt(elementos.valor);
    }

    for (const elementos of egresos) {
        egresoTotal += Number.parseInt(elementos.valor);
    }

    presupuestoTotal = ingresoTotal - egresoTotal;
}

function formatoDinero (dinero){
    return `$${parseFloat(dinero).toFixed(2)}`;
}

const calcularPorcentaje = () => {
    return ((egresoTotal * 100) / ingresoTotal).toFixed(2); 
}


function mostrarInfo() {
    generarPresupuesto();
    document.getElementById("lista-ingresos").innerHTML = "";
    document.getElementById("lista-egresos").innerHTML = "";

    document.getElementById("presupuesto-disponible").innerHTML = formatoDinero(presupuestoTotal);
    document.getElementById("ingresos-totales").innerHTML = formatoDinero(ingresoTotal);
    document.getElementById("egresos-totales").innerHTML = formatoDinero(egresoTotal);
    document.getElementById("porcentaje-egresos").innerHTML = calcularPorcentaje() + "%";

    for (const elementos of ingresos) {
        document.getElementById("lista-ingresos").innerHTML += mostrarIngreso(elementos);
    }

    for (const elementos of egresos) {
        document.getElementById("lista-egresos").innerHTML += mostrarEgreso(elementos);
    }
}

const eliminarIngreso = (id) => {
    let indice = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indice, 1);
    mostrarInfo();
}

const eliminarEgreso = (id) => {
    let indice = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indice, 1);
    mostrarInfo();
}

const mostrarIngreso = (ingreso) => {
    
    return `
    <!--Nuevo ingreso-->
    <div class="mostrar-item transition" id="item">
            <div class="mostrar-elemento titulo-item">${ingreso.descripcion}</div>
            <div class="mostrar-elemento valor-item ingreso">+ ${ingreso.valor} $</div>

            <div class="mostrar-elemento contenedor-eliminar-item">
                <button class="eliminar-item ingreso" onclick='eliminarIngreso(${ingreso.idIngreso})'><i class="fa-regular fa-circle-xmark"></i></button>
            </div>
    </div>
    `;
}

const mostrarEgreso = (egreso) => {

    return `
    <!--Nuevo egreso-->
        <div class="mostrar-item transition">
            <div class="mostrar-elemento titulo-item">${egreso.descripcion}</div>
            <div class="mostrar-elemento valor-item egreso">- ${egreso.valor} $</div>
            <div class="mostrar-elemento porcentaje-item egreso">${(100/egresos.length).toFixed(2)}%</div>

            <div class="mostrar-elemento contenedor-eliminar-item eliminar-item">
                <button class="eliminar-item egreso" onclick='eliminarEgreso(${egreso.idEgreso})'><i class="fa-regular fa-circle-xmark"></i></button>
            </div>
        </div>
    `;

}