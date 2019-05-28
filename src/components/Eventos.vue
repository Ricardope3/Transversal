<template>
  <div class="eventos">
    <v-container fluid grid-list-xl>
      <p class="font-weight-regular display-3 text-xs-center primary--text text--darken-1">Eventos</p>
      <!-- LAYOUT DE TODAS LAS CARDS DE LOS EVENTOS -->
      <v-layout row wrap justify-start>
        <v-flex xs12 md6 lg4 pb-5 v-for="index in cuantosEventosToDisplay()" :key="index">
          <v-card dark color="grey lighten-4" class="evento" height="220" raised hover>
            <v-layout align-center fill-height>
              <v-flex xs3 pl-4>
                <v-avatar :size="100" color="grey lighten-4">
                  <v-img contain class="transparent" :src="eventosOrdenados[index+darIndexFinal()].imagen"></v-img>
                </v-avatar>
              </v-flex>
              <v-flex xs9 pl-2 class="black--text">
                <v-subheader
                  v-if="eventosOrdenados[index+darIndexFinal()].diff>0"
                  class="primary--text"
                >Evento Pasado</v-subheader>
                <v-subheader v-else class="primary--text">Próximo Evento</v-subheader>
                <div
                  class="title font-weight-bold pl-3 pa-2"
                >{{eventosOrdenados[index+darIndexFinal()].titulo}}</div>
                <div
                  v-if="eventosOrdenados[index+darIndexFinal()].descripcion"
                  class="text-truncate pl-3 pa-2 body-2 font-weight-light"
                >{{eventosOrdenados[index+darIndexFinal()].descripcion}}</div>
                <div
                  class="pl-3 pa-1 body-1 font-weight-thin"
                >{{eventosOrdenados[index+darIndexFinal()].fecha}}</div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
 
  imagen1: require("../assets/logo1.jpg"),
  data: () => ({
    
    eventos: [
      {
        titulo: "Semana de la Evidencia",
        descripcion:
          "En el marco de la Semana de la Evidencia en América Latina: presentacion del Libro “Medio siglo de captura y discrecionalidad en el presupuestos de México” del Dr. Gabriel Farfan, Presidente de la Comunidad de Gestion de Resultados",
        lugar: "Soluciones Prácticas: Av Arequipa 4499 Miraflores",
        fecha: "2018-10-24",
        imagen: require("../assets/semana_de_la_evidencia.jpg")
      },
      {
        titulo:
          "Presentacion del Libro, La Negociación Política del Presupuesto 1997 – 2018",
        descripcion:
          "INTEGRALIA CONSULTIRES, TRANSVERSAL, COPARMEX JALISCO Y EL ECONOMISTA",
        lugar: "",
        fecha: "2018-11-16",
        imagen: require("../assets/negociacion_politica.png")
      },
      {
        titulo:
          "Taller para el  fortalecimiento de las capacidades de las organizaciones de la sociedad civil",
        descripcion:
          "En monitoreo y evaluación del sistema de justicia en Jalisco. USAID, ProJusticia y TRANSVERSAL",
        lugar: "",
        fecha: "2019-02-15",
        imagen: require("../assets/taller_fortalecimiento.png")
      },
      {
        titulo: "CO_INCIDENCIA",
        descripcion:
          "Foro Abierto sobre Sociedad Civil y Transformación Social.",
        lugar: "",
        fecha: "2019-03-28",
        imagen: require("../assets/co_incidencia.png")
      },
      {
        titulo:
          "Presentacion del Informe (In) Justicia Abierta Ranking de la Opacidad Judicial en México",
        descripcion: "",
        lugar: "ITESO",
        fecha: "2019-05-17",
        imagen: require("../assets/justicia_abierta.png")
      },
    ]
  }),
  computed: {
    indexOffset: function() {
      return this.darIndexFinal();
    },
    eventosOrdenados: function() {
      return this.ordenarPorFecha(this.diferenciaFecha(this.eventos));
    }
  },
  methods: {
    cuantosEventosToDisplay: function() {
      if (window.location.pathname === "/") {
        if (this.eventos.length < 4) {
          return this.eventos.length;
        } else {
          return 3;
        }
      }
      return this.eventos.length;
    },
    ordenarPorFecha: function(arreglo) {
      return arreglo.sort((a, b) => {
        return new Date(a.fecha) - new Date(b.fecha);
      });
    },
    diferenciaFecha: function(input) {
      let arreglo = this.ordenarPorFecha(input);
      let nuevo = [];
      for (let evento of arreglo) {
        let diff = new Date() - new Date(evento.fecha);
        let nuevoEvento = evento;
        nuevoEvento.diff = diff;
        nuevo.push(nuevoEvento);
      }
      return nuevo;
    },
    buscarIndexPivote: function(input) {
      let arr = this.diferenciaFecha(input);
      let menor = Math.abs(arr[0].diff);
      let index = 0;
      for (let i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i].diff) < menor) {
          menor = Math.abs(arr[i].diff);
          index = i;
        }
      }
      return index;
    },
    darIndexFinal: function() {
      if (window.location.pathname === "/") {
        let index = this.buscarIndexPivote(this.eventos);
        if (this.eventos.length - index < 3) {
          if (this.eventos.length === 2) {
            return index - 2;
          } else {
            return index - 3;
          }
        } else {
          return index - 1;
        }
      } else {
        return -1;
      }
    }
  }
};
</script>


<style>
.texto {
  word-wrap: unset;
}
/* .evento {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
} */
</style>