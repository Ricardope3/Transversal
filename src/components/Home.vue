<template>
  <div class="m">
    <Publicaciones></Publicaciones>
    <v-divider color="primary"></v-divider>
    <Eventos></Eventos>
    <v-divider color="primary"></v-divider>
    <Blogs></Blogs>
    <v-divider color="primary"></v-divider>
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