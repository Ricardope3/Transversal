<template>
  <div class="m">
    <v-container class="grey lighten-4" grid-list-xl>
      <p
        class="font-weight-regular display-3 text-xs-center primary--text text--darken-1"
      >Nuestros Expertos</p>

      <!-- Director 
    ***********
    ***********
    ***********
    ***********
      -->

      <v-container>
        <p
          class="font-weight-regular display-1 text-xs-left primary--text text--darken-1"
        >Director ejecutivo</p>
        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-menu open-on-hover  absolute right open-delay="60" >
              <template v-slot:activator="{ on }">
                <v-card hover height="140" v-on="on">
                  <v-layout align-center justify-space-around fill-height>
                    <v-flex xs3 offset-xs1>
                      <v-avatar :tile="false" size="110" color="primary">
                        <img :src="director().imagen" alt="avatar">
                      </v-avatar>
                    </v-flex>
                    <v-flex xs10 mr-3 ml-2>
                      <v-card fill-height min-height="130" max-width="390" max-height="130" flat>
                        <div>
                          <div class="px-2 pt-2 font-weight-medium title">{{director().nombre}}</div>
                          <div class="font-weight-light pa-2">{{director().puesto}}</div>
                          <v-icon v-if="director().twitter" color="blue">mdi-twitter</v-icon>
                          <a
                            class="font-italic"
                            v-if="director().twitter"
                            :href="director().link"
                          >{{director().twitter}}</a>
                        </div>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-card>
              </template>
              <v-card  max-width="390px">
                <v-container>
                  <v-layout row wrap grid-list-md text-xs-center justify-space-around>
                    <v-flex xs12>
                      <v-avatar left wrap size="200" color="primary">
                        <img :src="director().imagen" alt="avatar">
                      </v-avatar>
                    </v-flex>
                    <v-flex xs6 py-4>
                      <div class="font-weight-medium">{{director().nombre}}</div>
                    </v-flex>
                    <v-flex xs6 py-4>
                      <div class="font-weight-medium">{{director().puesto}}</div>
                    </v-flex>
                    <v-flex xs6>
                      <v-icon pt-4 v-if="director().twitter" color="blue">mdi-twitter</v-icon>
                      <a class="font-italic" v-if="director().twitter" :href="director().link">{{director() .twitter}}</a>
                    </v-flex>
                    <v-flex xs12>
                      <div class=" pt-4 pa-1 font-weight-light ">{{director().descripcion}}</div>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-menu>
          </v-flex>
        </v-layout>
      </v-container>

      <!-- Consejo Consultivo 
    ***********
    ***********
    ***********
    ***********
      -->
      <v-container>
        <p
          class="font-weight-regular display-1 text-xs-left primary--text text--darken-1"
        >Consejo Consultivo</p>

        <v-layout row wrap>
          <v-flex py-3 xs12 md6 v-for="item in consejoConsultivo()" :key="item.nombre">
            <v-menu open-on-hover absolute :nudge-right="window" >
              <template v-slot:activator="{ on }">
                <v-card hover pa-4 min-height="140" v-on="on">
                  <v-layout align-center justify-center fill-height>
                    <v-flex xs4 sm3 offset-sm1>
                      <v-avatar :tile="false" size="110" color="primary">
                        <img :src="item.imagen" alt="avatar">
                      </v-avatar>
                    </v-flex>
                    <v-flex xs6 sm10 mr-3 ml-2>
                      <v-card
                        flat
                        fill-height
                        min-width="100"
                        min-height="130"
                        max-width="390"
                        max-height="110"
                      >
                        <div>
                          <div class="px-2 pt-2 font-weight-medium title pb-2">{{item.nombre}}</div>
                          <div class="font-weight-light pl-2 hidden-xs-only">{{item.puesto}}</div>
                          <v-icon pt-4 v-if="item.twitter" color="blue">mdi-twitter</v-icon>
                          <a
                            class="font-italic"
                            v-if="item.twitter"
                            :href="item.link"
                          >{{item.twitter}}</a>
                        </div>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-card>
              </template>
              <v-card max-width="390px">
                <v-container>
                  <v-layout row wrap grid-list-md text-xs-center justify-space-around>
                    <v-flex xs12>
                      <v-avatar left wrap size="200" color="primary">
                        <img :src="item.imagen" alt="avatar">
                      </v-avatar>
                    </v-flex>
                    <v-flex xs6 py-4>
                      <div class="font-weight-bold">{{item.nombre}}</div>
                    </v-flex>
                    <v-flex xs6 py-4>
                      <div class="font-weight-medium">{{item.puesto}}</div>
                    </v-flex>
                    <v-flex xs6>
                      <v-icon pt-4 v-if="item.twitter" color="blue">mdi-twitter</v-icon>
                      <a class="font-italic" v-if="item.twitter" :href="item.link">{{item.twitter}}</a>
                    </v-flex>
                    <v-flex xs12>
                      <div class="pt-4 pa-1  font-weight-light">{{item.descripcion}}</div>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-menu>
          </v-flex>
        </v-layout>
      </v-container>

      <!-- Staff 
    ***********
    ***********
    ***********
    ***********
      -->
      <v-container>
        <p class="font-weight-regular display-1 text-xs-left primary--text text--darken-1">Staff</p>
        <v-layout row wrap>
          <v-flex py-3 xs12 md6 v-for="item in staff()" :key="item.nombre">
            <v-menu open-on-hover absolute>
              <template v-slot:activator="{ on }">
                <v-card hover pa-4 min-height="140" v-on="on">
                  <v-layout align-center justify-center fill-height>
                    <v-flex xs4 sm3 offset-sm1>
                      <v-avatar :tile="false" size="110" color="primary">
                        <img :src="item.imagen" alt="avatar">
                      </v-avatar>
                    </v-flex>
                    <v-flex xs6 sm10 mr-3 ml-2>
                      <v-card
                        flat
                        fill-height
                        min-width="100"
                        min-height="130"
                        max-width="390"
                        max-height="110"
                      >
                        <div>
                          <div class="px-2 pt-2 font-weight-bold title pb-2">{{item.nombre}}</div>
                          <div class="font-weight-light pl-2 hidden-xs-only">{{item.puesto}}</div>
                          <v-icon pt-4 v-if="item.twitter" color="blue">mdi-twitter</v-icon>
                          <a
                            class="font-italic"
                            v-if="item.twitter"
                            :href="item.link"
                          >{{item.twitter}}</a>
                        </div>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-card>
              </template>
              <v-card max-width="390px">
                <v-container>
                  <v-layout row wrap grid-list-md text-xs-center justify-space-around>
                    <v-flex xs12>
                      <v-avatar left wrap size="200" color="primary">
                        <img :src="item.imagen" alt="avatar">
                      </v-avatar>
                    </v-flex>
                    <v-flex xs6 py-4>
                      <div class="font-weight-medium">{{item.nombre}}</div>
                    </v-flex>
                    <v-flex xs6 py-4>
                      <div class="font-weight-medium">{{item.puesto}}</div>
                    </v-flex>
                    <v-flex xs6>
                      <v-icon pt-4 v-if="item.twitter" color="blue">mdi-twitter</v-icon>
                      <a class="font-italic" v-if="item.twitter" :href="item.link">{{item.twitter}}</a>
                    </v-flex>
                    <v-flex xs12>
                      <div class="pt-4 pa-1  font-weight-light">{{item.descripcion}}</div>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-menu>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    showMenu: false,
    expertos: [
      {
        nombre: "David Gómez-Álvarez",
        puesto: "Director ejecutivo Transversal",
        titulo: "director",
        twitter: "@GomezAlvarezD",
        link: "https://twitter.com/GomezAlvarezD",
        imagen: require("../assets/david_gomez.jpg"),
        descripcion:
          "Es doctor en administración pública por la Universidad de Nueva York y tiene diversas publicaciones en políticas públicas. Ha sido consultor de organismos internacionales, funcionario público y académico en la Universidad de Guadalajara. También es editorialista en el periódico Mural y analista político en el Canal44"
      },
      {
        nombre: "Víctor Manuel González Romero",
        puesto: "Presidente del Consejo del Instituto de Aprendizaje en Línea",
        titulo: "consejo_consultivo",
        twitter: "",
        link: "",
        imagen: require("../assets/victor_manuel.jpg"),
        descripcion:
          "Doctor en Filosofía (PhD) por la Universidad de Minnesota e Ingeniero Químico por la Universidad de Guadalajara. Presidente del Consejo del Instituto de Aprendizaje en Línea y asesor en temas relacionados con: inclusión digital, tecnologías para el aprendizaje, planeación estratégica y metodologías de evaluación por indicadores. "
      },
      {
        nombre: "Luis Miguel González",
        puesto: "Director Editorial del diario El Economista",
        titulo: "consejo_consultivo",

        twitter: "",
        link: "",
        imagen: require("../assets/luis_miguel.jpg"),
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
        imagen: require("../assets/salvador_camarena.jpg"),
        descripcion:
          "Periodista egresado del ITESO, Columnista en Financiero. En este momento, es director general de Investigación Periodística en Mexicanos contra la Corrupción."
      },
      {
        nombre: "Luis Alfonso de Alba ",
        puesto: "Diplomático",
        titulo: "consejo_consultivo",
        twitter: "@ladealba",
        link: "https://twitter.com/ladealba",
        imagen: require("../assets/luis_alfonso.jpg"),
        descripcion:
          "Luis Alfonso de Alba es diplomático mexicano que ha fungido como Representante Permanente ante las Naciones Unidas en Nueva York y en Ginebra. Ha sido Director General del Sistema de las Naciones Unidas en la Secretaría de Relaciones Exteriores de México. Ha sido nombrado Enviado Especial del Secretario General de la Organización de las Naciones Unidas para dirigir los preparativos de la Cumbre sobre Cambio Climático 2019. "
      },
      {
        nombre: "Alejandro Anaya Muñoz",
        puesto: "Profesor del ITESO",
        titulo: "consejo_consultivo",
        twitter: "@alejandroanaya",
        link: "https://twitter.com/alejandroanaya",
        imagen: require("../assets/alejandro_anaya.jpg"),
        descripcion:
          "Doctor en Gobierno y Maestro en Teoría y Práctica de los Derechos Humanos, por la Universidad de Essex, Inglaterra. Profesor del Departamento de Estudios Sociopolíticos y Jurídicos (DSOJ) y coordinador de la Maestría en Derechos Humanos y Paz del Instituto Tecnológico y de Estudios Superiores de Occidente (ITESO)."
      },
      {
        nombre: "Oliver Meza",
        puesto: "Profesor en CIDE",
        titulo: "equipo",
        twitter: "@odmeza",
        link: "https://twitter.com/odmeza",
        imagen: require("../assets/oliver_meza.jpg"),
        descripcion:
          "Doctor en Políticas Públicas en CIDE y obtuvo un MPA en London School of Economics and Political Science. Actualmente es profesor investigador de la división de Administración Pública"
      },
      {
        nombre: "David Lopez García",
        puesto:
          "Investigador asociado en el Observatorio Latinoamericano (OLA)",
        titulo: "equipo",
        twitter: "",
        link: "",
        imagen: require("../assets/david_lopez.jpg"),
        descripcion:
          "David López García es candidato a doctor en Public and Urban Policy en la universidad The New School, en Nueva York. Es investigador asociado en el Observatorio Latinoamericano (OLA) y en el Global Urban Futures Project (GUF), ambos en The New School. Es miembro del capítulo Latinoamericano de la International Network for Transport and Accessibility in Low Income Communities (INTALInC-LAC)."
      },
      {
        nombre: "Alicia Espinoza",
        puesto: "",
        titulo: "staff",
        twitter: "@alisespinozar5",
        link: "https://twitter.com/alisespinozar5",
        imagen: require("../assets/alicia_espinoza.jpg"),
        descripcion:
          "Licenciada en Relaciones Internacionales del Tec de Monterrey. Ha sido consultora para gobiernos municipales en México	y ha trabajado en Organismos Internacionales. Actualmente trabaja 	en Transversal"
      }
    ]
  }),
  methods: {
    consejoConsultivo: function() {
      return this.expertos.filter(experto => {
        return experto.titulo === "consejo_consultivo";
      });
    },
    staff: function() {
      return this.expertos.filter(experto => {
        return experto.titulo === "staff";
      });
    },
    director: function() {
      for (let e of this.expertos) {
        if (e.titulo === "director") {
          return e;
        }
      }
    },
    getWidth: function(){
      alert(window);
      return window;
    }
  }
};
</script>

<style>
.clip {
  text-overflow: clip;
}
</style>