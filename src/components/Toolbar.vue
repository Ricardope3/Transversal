<template>
  <v-toolbar  height="98" dark color="secondary" app >
    <v-toolbar-items>
      <v-btn round  class="grey darken-1"  small router :to = '"/"'>
        <img src="../assets/logo.png" height="60" width="190">
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn round  class="primary--text ma-2" flat v-on="on">Sobre Nosotros</v-btn>
        </template>
        <v-list>
          <v-list-tile v-for="(item, index) in dropDownItems" :key="index" router :to="item.route">
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn flat round class="primary--text hidden-sm-and-down ma-2" v-for="item in toolbarButtons" :key="item.text" router :to="item.route">
        <span>{{item.text}}</span>
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn flat>
      <v-icon>search</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      toolbarButtons: [
        { text: "Proyectos", icon: "payment", route: "/proyectos" },
        { text: "Eventos", icon: "polymer", route: "/eventos" },
        { text: "Publicaciones", icon: "room", route: "/publicaciones" },
        { text: "Blogs", icon: "theaters", route: "/blogs" },
        { text: "Think Tanks", icon: "warning", route: "/thinkTanks" }
      ],
      dropDownItems: [
        { text: "Misión y Visión", route: "/misionYVision" },
        { text: "Nuestros Expertos", route: "/expertos" }
      ]
    };
  }
};
</script>