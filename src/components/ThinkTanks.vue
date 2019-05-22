<template>
  <div  class="m">
    <v-container  grid-list-xl grey lighten-4>
      <p
        class="font-weight-regular display-3 text-xs-center primary--text text--darken-1"
      >Think Tanks</p>
      <v-layout v-for="item in thinkTanks" :key="item.titulo" wrap>
        <v-flex xs12 >
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
      
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    thinkTanks: [
      {
        titulo: "¿Qué es un think tank?",
        imagen: "",
        texto:
          "Un think tank (tanque de pensamiento, laboratorio de ideas, centro de análisis, gabinete de estrategia) es una organización/institución sin fines de lucro dedicada a la generación de ideas y conocimiento aplicado. Por lo general es una organización independiente del gobierno y financiada con fondos privados."
      },
      {
        titulo: "¿Por qué surgen los think tanks?",
        imagen: "",
        texto:
          "Frente a la dificultad de las universidades para producir resultados aplicables, prácticos y expeditos, durante la posguerra surgió la figura del think tank como una organización proveedora de ideas y soluciones, tanto al sector público como al privado. Por lo general los think tanks son considerados organizaciones civiles o privadas, apartidistas, críticas e independientes. "
      },
      {
        titulo: "¿Dónde se ubica México en el mundo del think tankery?",
        imagen: "",
        texto:
          "En México existen 74 think tanks según este índice, lo que ubica al país en el número 16 por número de think tanks (Argentina tiene 146 think tanks y se ubica en el número7 mientras que Brasil tiene 93 y está en el lugar 11). Según el Think Tank Index en México existe un déficit de think tankery en comparación con países similares tanto de América Latina, además de que todos están concentrados en la Ciudad de México. "
      },
      {
        titulo: "¿Qué distingue a los think tanks de las universidades? ",
        imagen: "",
        texto:
          "Los think tanks plantean preguntas de política pública (policy questions) en términos de la solución de los problemas públicos (problem solving oriented). De ahí que también se conozcan como “think-and-do-tanks” por su perfil práctico y aplicado, que no necesariamente caracteriza a la academia u otras organizaciones ciudadanas."
      }
    ]
  })
};
</script>
    