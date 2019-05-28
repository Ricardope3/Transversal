// eventos = [
//     {
//         titulo: "Semana de la Evidencia",
//         descripcion:
//             "En el marco de la Semana de la Evidencia en América Latina: presentacion del Libro “Medio siglo de captura y discrecionalidad en el presupuestos de México” del Dr. Gabriel Farfan, Presidente de la Comunidad de Gestion de Resultados",
//         lugar: "Soluciones Prácticas: Av Arequipa 4499 Miraflores",
//         fecha: "2018-10-24",
//     },
//     {
//         titulo: "Presentacion del Libro, La Negociación Política del Presupuesto 1997 – 2018",
//         descripcion: "INTEGRALIA CONSULTIRES, TRANSVERSAL, COPARMEX JALISCO Y EL ECONOMISTA",
//         lugar: "",
//         fecha: "2018-11-16",
//     },
//     {
//         titulo: "Taller para el  fortalecimiento de las capacidades de las organizaciones de la sociedad civil, en monitoreo y evaluación del sistema de justicia en Jalisco",
//         descripcion: "USAID, ProJusticia y TRANSVERSAL",
//         lugar: "",
//         fecha: "2019-02-15",
//     },
//     {
//         titulo: "CO_INCIDENCIA",
//         descripcion: "Foro Abierto sobre Sociedad Civil y Transformación Social.",
//         lugar: "",
//         fecha: "2019-03-28",
//     },
//     {
//         titulo: "Presentacion del Informe (In) Justicia Abierta Ranking de la Opacidad Judicial en México",
//         descripcion: "",
//         lugar: "ITESO",
//         fecha: "2019-05-17",
//     }
// ]
// let ordenarPorFecha = function (arreglo) {
//     return arreglo.sort((a, b) => {
//         return  new Date(a.fecha)-new Date(b.fecha);
//     });
// }

// let diferenciaFecha = function (input) {
//     let arreglo = ordenarPorFecha(input);
//     let nuevo = []
//     for (let evento of arreglo) {
//         let diff = new Date() - new Date(evento.fecha);
//         nuevoEevento = evento;
//         nuevoEevento.diff = diff;
//         nuevo.push(nuevoEevento);
//     }
//     console.log(nuevo);
//     return nuevo;
// }

// let buscarIndexPivote = function (input) {
//     let arr = diferenciaFecha(input);
//     let menor = Math.abs(arr[0].diff);
//     let index = 0;
//     for (let i = 1; i < arr.length; i++) {
//         if (Math.abs(arr[i].diff) < menor) {
//             menor = Math.abs(arr[i].diff);
//             index = i;
//         }
//     }
//     return index;
// }

// let darIndexFinal = function () {
//     let index = buscarIndexPivote(this.eventos);
//     if (this.eventos.length - index < 3) {
//         if (this.eventos.length === 2) {
//             return index - 2;
//         } else {
//             return index - 3;
//         }
//     } else {
//         return index - 1;
//     }
// }


// console.log(darIndexFinal());


let not = {
    nombre: "David Gómez-Álvarez",
    puesto: "Director ejecutivo Transversal",
    titulo: "equipo_de_trabajo",
    twitter: "@GomezAlvarezD",
    link: "https://twitter.com/GomezAlvarezD",
    imagen: require("../assets/david_gomez.jpg"),
    descripcion:
      "Es doctor en administración pública por la Universidad de Nueva York y tiene diversas publicaciones en políticas públicas. Ha sido consultor de organismos internacionales, funcionario público y académico en la Universidad de Guadalajara. También es editorialista en el periódico Mural y analista político en el Canal44"
  };

 let expertos = [
    {
        nombre: "Alberto Sandoval",
        puesto: "Director asociado",
        titulo: "equipo_de_trabajo",
        twitter: "@betoman1",
        link: "https://twitter.com/betoman1",
       // imagen: require("../assets/alberto_sandoval.jpg"),
        descripcion:
          "Experto en Geomática, recursos naturales y cambio climático. Consultor de la Unión Europea en el marco del proyecto Low Carbon Action para México. Ha propuesto diversas iniciativas metropolitanas en materia de calidad del aire, economía verde, producción y consumo sustentable de alimentos, y gobernanza metropolitana.  Fue responsable de la coordinación de la FAO en la cumbre de Rio+20 y actualmente participa en el grupo de trabajo de la agenda post 2015 de las Naciones Unidas."
      },
      {
        nombre: "Cecilia de Alba",
        puesto: "Colaboradora asociada",
        titulo: "equipo_de_trabajo",
        twitter: "",
        link: "",
        //imagen: require("../assets/cecilia_de_alba.jpg"),
        descripcion: "Directora Ejecutiva de Policy LAB, es Maestra en Negocios Internacionales y Desarrollo Económico, y Candidata a Doctor en Economía Política por la escuela Fletcher de la Universidad de Tufts. Ha trabajado proyectos de consultoría para el Banco Mundial, el Banco Interamericano de Desarrollo, PNUD, OEA y USAID. Tiene experiencia en formulacioon políticas públicas, desarrollo de capacidades institucionales, y economía del comportamiento. Cuenta con diversas publicaciones y es dictaminadora del Journal of African Economies de la Universidad de Oxford"
      },
      {
        nombre: "Víctor Manuel González Romero",
        puesto: "Presidente del Consejo del Instituto de Aprendizaje en Línea",
        titulo: "consejo_consultivo",
        twitter: "",
        link: "",
        //imagen: require("../assets/victor_manuel.jpg"),
        descripcion:
          "Doctor en Filosofía (PhD) por la Universidad de Minnesota e Ingeniero Químico por la Universidad de Guadalajara. Presidente del Consejo del Instituto de Aprendizaje en Línea y asesor en temas relacionados con: inclusión digital, tecnologías para el aprendizaje, planeación estratégica y metodologías de evaluación por indicadores. "
      },
      {
        nombre: "Luis Miguel González",
        puesto: "Director Editorial del diario El Economista",
        titulo: "consejo_consultivo",
    
        twitter: "",
        link: "",
        //imagen: require("../assets/luis_miguel.jpg"),
        descripcion:
          "Economista de la Universidad de Guadalajara, Máster de Periodismo en El País. Director editorial del periódico Economista y sub-director de Milenio Jalisco. Analista Económico en varios medios. "
      },
      {
        nombre: "Salvador Camarena",
        puesto:
          "Director general de Investigación Periodística en Mexicanos contra la Corrupción",
        titulo: "consejo_consultivo",
        twitter: "@SalCamarena",
        link: "https://twitter.com/SalCamarena",
        //imagen: require("../assets/salvador_camarena.jpg"),
        descripcion:
          "Periodista egresado del ITESO, Columnista en Financiero. En este momento, es director general de Investigación Periodística en Mexicanos contra la Corrupción."
      },
      {
        nombre: "Luis Alfonso de Alba ",
        puesto: "Diplomático",
        titulo: "consejo_consultivo",
        twitter: "@ladealba",
        link: "https://twitter.com/ladealba",
        //imagen: require("../assets/luis_alfonso.jpg"),
        descripcion:
          "Luis Alfonso de Alba es diplomático mexicano que ha fungido como Representante Permanente ante las Naciones Unidas en Nueva York y en Ginebra. Ha sido Director General del Sistema de las Naciones Unidas en la Secretaría de Relaciones Exteriores de México. Ha sido nombrado Enviado Especial del Secretario General de la Organización de las Naciones Unidas para dirigir los preparativos de la Cumbre sobre Cambio Climático 2019. "
      },
      {
        nombre: "Alejandro Anaya Muñoz",
        puesto: "Profesor del ITESO",
        titulo: "consejo_consultivo",
        twitter: "@alejandroanaya",
        link: "https://twitter.com/alejandroanaya",
        //imagen: require("../assets/alejandro_anaya.jpg"),
        descripcion:
          "Doctor en Gobierno y Maestro en Teoría y Práctica de los Derechos Humanos, por la Universidad de Essex, Inglaterra. Profesor del Departamento de Estudios Sociopolíticos y Jurídicos (DSOJ) y coordinador de la Maestría en Derechos Humanos y Paz del Instituto Tecnológico y de Estudios Superiores de Occidente (ITESO)."
      },
      {
        nombre: "Oliver Meza",
        puesto: "Profesor en CIDE y director de investigación",
        titulo: "equipo",
        twitter: "@odmeza",
        link: "https://twitter.com/odmeza",
        //imagen: require("../assets/oliver_meza.jpg"),
        descripcion:
          "Doctor en Políticas Públicas en CIDE y obtuvo un MPA en London School of Economics and Political Science. Actualmente es profesor investigador de la división de Administración Pública"
      },
      {
        nombre: "David Lopez García",
        puesto:
          "Investigador asociado en el Observatorio Latinoamericano y en Global Urban Futures Project",
        titulo: "equipo",
        twitter: "",
        link: "",
       // imagen: require("../assets/david_lopez.jpg"),
        descripcion:
          "David López García es candidato a doctor en Public and Urban Policy en la universidad The New School, en Nueva York. Es investigador asociado en el Observatorio Latinoamericano (OLA) y en el Global Urban Futures Project (GUF), ambos en The New School. Es miembro del capítulo Latinoamericano de la International Network for Transport and Accessibility in Low Income Communities (INTALInC-LAC)."
      },
      {
        nombre: "Alicia Espinoza",
        puesto: "",
        titulo: "staff",
        twitter: "@alisespinozar5",
        link: "https://twitter.com/alisespinozar5",
        //imagen: require("../assets/alicia_espinoza.jpg"),
        descripcion:
          "Licenciada en Relaciones Internacionales del Tec de Monterrey. Ha sido consultora para gobiernos municipales en México	y ha trabajado en Organismos Internacionales. Actualmente trabaja 	en Transversal"
      }
    
 ]
let nuevo = expertos.sort((eA,eB)=>{
    eA.nombre>eB.nombre;
});


console.log(nuevo);