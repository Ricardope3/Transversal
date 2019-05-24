<template>
  <div class="m">
    <v-img height=500 :src="require('../assets/calle2.png')"></v-img>
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
  components: { Publicaciones, Eventos, Blogs },
  data : ()=>({
    
  }),
};
</script>