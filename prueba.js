eventos = [
    {
        titulo: "Semana de la Evidencia",
        descripcion:
            "En el marco de la Semana de la Evidencia en América Latina: presentacion del Libro “Medio siglo de captura y discrecionalidad en el presupuestos de México” del Dr. Gabriel Farfan, Presidente de la Comunidad de Gestion de Resultados",
        lugar: "Soluciones Prácticas: Av Arequipa 4499 Miraflores",
        fecha: "2018-10-24",
    },
    {
        titulo: "Presentacion del Libro, La Negociación Política del Presupuesto 1997 – 2018",
        descripcion: "INTEGRALIA CONSULTIRES, TRANSVERSAL, COPARMEX JALISCO Y EL ECONOMISTA",
        lugar: "",
        fecha: "2018-11-16",
    },
    {
        titulo: "Taller para el  fortalecimiento de las capacidades de las organizaciones de la sociedad civil, en monitoreo y evaluación del sistema de justicia en Jalisco",
        descripcion: "USAID, ProJusticia y TRANSVERSAL",
        lugar: "",
        fecha: "2019-02-15",
    },
    {
        titulo: "CO_INCIDENCIA",
        descripcion: "Foro Abierto sobre Sociedad Civil y Transformación Social.",
        lugar: "",
        fecha: "2019-03-28",
    },
    {
        titulo: "Presentacion del Informe (In) Justicia Abierta Ranking de la Opacidad Judicial en México",
        descripcion: "",
        lugar: "ITESO",
        fecha: "2019-05-17",
    }
]
let ordenarPorFecha = function (arreglo) {
    return arreglo.sort((a, b) => {
        return  new Date(a.fecha)-new Date(b.fecha);
    });
}

let diferenciaFecha = function (input) {
    let arreglo = ordenarPorFecha(input);
    let nuevo = []
    for (let evento of arreglo) {
        let diff = new Date() - new Date(evento.fecha);
        nuevoEevento = evento;
        nuevoEevento.diff = diff;
        nuevo.push(nuevoEevento);
    }
    console.log(nuevo);
    return nuevo;
}

let buscarIndexPivote = function (input) {
    let arr = diferenciaFecha(input);
    let menor = Math.abs(arr[0].diff);
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i].diff) < menor) {
            menor = Math.abs(arr[i].diff);
            index = i;
        }
    }
    return index;
}

let darIndexFinal = function () {
    let index = buscarIndexPivote(this.eventos);
    if (this.eventos.length - index < 3) {
        if (this.eventos.length === 2) {
            return index - 2;
        } else {
            return index - 3;
        }
    } else {
        return index - 1;
    }
}


console.log(darIndexFinal());