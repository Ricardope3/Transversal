<template>
  <div class="m">
    <v-container grid-list-xl grey lighten-4>
      <p
        class="font-weight-regular display-3 text-xs-center primary--text text--darken-1"
      >Sobre Nosotros</p>
      <v-layout v-for="item in sobreNosotros" :key="item.titulo" wrap>
        <v-flex xs12>
          <div class="display-1 font-weight-light">{{item.titulo}}</div>
        </v-flex>
        <v-flex xs12>
          <v-card tile flat class="secondary" dark>
            <v-card-text>
              <div class="texto subheading font-weight-regular">{{item.texto}}</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-divider color="primary"></v-divider>
      <v-layout wrap>
        <v-flex xs12 sm6  v-for="item in misionVision" :key="item.titulo">
          <p
            class="font-weight-regular display-3 text-xs-center primary--text text--darken-1"
          >{{item.titulo}}</p>
          <v-card tile flat class="secondary" dark>
            <v-card-text>
              <div class="texto subheading font-weight-regular">{{item.texto}}</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-divider color="primary"></v-divider>
      <v-layout>
        <v-flex xs12>
          <p
            class="font-weight-regular display-3 text-xs-center primary--text text--darken-1"
          >Valores</p>
          <v-card tile flat class="secondary" dark>
            <v-card-text>
              <div
                class="texto subheading font-weight-regular"
              >Transversal es una organización de la sociedad civil que se basa en los valores de la libertad de asociación, la equidad de oportunidades y el derecho al desarrollo sostenible. En Transversal creemos que las soluciones a los problemas públicos y las alternativas del desarrollo más efectivas son aquellas que involucran a diversos actores y sectores de forma plural e incluyente, promueven la participación activa, y se rigen por su integridad y ética pública.</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    sobreNosotros: [
      {
        titulo: "¿Qué hacemos en Transversal?",
        texto:
          "En transversal transformamos ideas en soluciones públicas por medio de la generación de conocimiento útil. Somos una organización que busca resolver los problemas públicos por medio de: a) incidencia pública, b) desarrollo de capacidades, e c) iniciativasde política pública. Desde la publicación de un tuit hasta un libro, incluyendo una conferencia abierta o una misión de estudios, Transversal se plantea una amplia gama de productos y proyectos que permitan cumplir su propósito."
      },
      {
        titulo: "¿Qué temas se abordan en Transversal?",
        texto:
          "El campo de conocimiento del think tank es el de la gobernanza y las políticas públicas. La agenda de trabajo incluye, pero no se limita a, tres líneas temáticas: 1) gobiernos subnacionales y ciudades metropolitanas; 2) rendición de cuentas e instituciones responsivas, y 3) análisis y evaluación de políticas "
      },
      {
        titulo: "¿Por qué se llama Transversal el think tank?",
        texto:
          "Transversal no solo es un método de análisis, sino una perspectiva de la realidad. Según la Real Academia de la Lengua Española, transversal significa que se extiende atravesando de un lado a otro; que cruza en dirección perpendicular con aquello de que se trata; que atañen a distintos ámbitos o disciplinas; que estudia la estructura un problema. Transversal es uno de los mantras de la Agenda 2030 del desarrollo sostenible que plantea la necesidad de abordar los retos del desarrollo de forma integral, holística, transversal."
      }
    ],
    misionVision: [
      {
        titulo: "Misión",
        texto:
          "Transversal busca generar conocimiento útil, incidir en las decisiones públicas, construir capacidades individuales e institucionales, asícomopromover la buena gobernanza del desarrollo sostenible e incluyente."
      },
      {
        titulo: "Visión",
        texto:
          " Transversal busca convertirse en la organización cívica más influyente de la ciudad y en uno de los think tanks más relevantes del país. Transversal pretende ser uno de los principales referentes en asuntos de gobernanza y políticas públicas locales en el debate nacional e internacional"
      }
    ]
  })
};
</script>
<style>
.texto {
  line-height: 1.6;
}
</style>

