<template>
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
        <div class="font-weight-medium">{{item.nombre}}</div>
      </v-flex>
      <v-flex xs6>
        <v-icon pt-4 v-if="item.twitter" color="blue">mdi-twitter</v-icon>
        <a class="font-italic" v-if="item.twitter" :href="item.link">{{item.twitter}}</a>
      </v-flex>
      <v-flex xs12>
        <div class="font-weight-medium">{{item.descripcion}}</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    item: [
      {
        nombre: "David Gómez-Álvarez",
        puesto: "Director ejecutivo Transversal",
        titulo: "director",
        twitter: "@GomezAlvarezD",
        link: "https://twitter.com/GomezAlvarezD",
        imagen: require("../assets/david_gomez.jpg"),
        descripcion:
          "Es doctor en administración pública por la Universidad de Nueva York y tiene diversas publicaciones en políticas públicas. Ha sido consultor de organismos internacionales, funcionario público y académico en la Universidad de Guadalajara. También es editorialista en el periódico Mural y analista político en el Canal44"
      }
    ]
  })
};
</script>

<style scoped>
.imagen {
  margin-left: auto;
  margin-right: auto;
}
