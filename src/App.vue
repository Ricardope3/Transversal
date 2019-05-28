<template>
  <v-app>
    <Toolbar></Toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Toolbar, Footer },
  data() {
    return {};
  }
};
</script>
