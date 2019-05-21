<template>
  <div class="m">
    <Publicaciones></Publicaciones>
    <v-divider></v-divider>
    <Eventos></Eventos>
    <v-divider></v-divider>
    <Blogs></Blogs>
    <v-divider></v-divider>
  </div>
</template>

<script>
import Publicaciones from "./Publicaciones";
import Eventos from "./Eventos";
import Blogs from "./Blogs";
export default {
  components: { Publicaciones, Eventos, Blogs }
};
</script>