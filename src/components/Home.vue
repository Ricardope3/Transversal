<template>
  <div class="m">
    <!-- <v-img   :src="require('../assets/calle2.png') "></v-img> -->
    <v-parallax height="690" :src="require('../assets/calle5.jpg')"></v-parallax>
    <Publicaciones></Publicaciones>
    <v-divider color="primary"></v-divider>
    <Eventos></Eventos>
    <v-divider color="primary"></v-divider>
    <Blogs></Blogs>
    <v-divider color="primary"></v-divider>
    <twitter></twitter>
  </div>
</template>

<script>
import Publicaciones from "./Publicaciones";
import Eventos from "./Eventos";
import Blogs from "./Blogs";
import twitter from "./twitter";

export default {
  components: { Publicaciones, Eventos, Blogs, twitter },
  data: () => ({})
};
</script>


<style>
</style>