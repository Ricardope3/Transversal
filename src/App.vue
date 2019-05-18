<template>
  <v-app>
    <v-toolbar dark color="primary" app>
      <img src="./assets/toolbar_logo.png" height="52" width="166">
      <v-toolbar-items>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn flat v-on="on">Sobre Nosotros</v-btn>
          </template>
          <v-list>
            <v-list-tile v-for="(item, index) in dropDownItems" :key="index" @click = "dropDownItems()">
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat v-for="item in toolbarButtons" :key="item.text">
          <v-icon>{{item.icon}}</v-icon>
          <span>{{item.text}}</span>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn flat>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      toolbarButtons: [
        { text: "Proyectos", icon: "payment", route: "/sobre_nosotros" },
        { text: "Eventos", icon: "polymer", route: "/sobre_nosotros" },
        { text: "Publicaciones", icon: "room", route: "/sobre_nosotros" },
        { text: "Blogs", icon: "theaters", route: "/sobre_nosotros" },
        { text: "Think Tanks", icon: "warning", route: "/sobre_nosotros" }
      ],
      dropDownItems: [
        { text: "Misión y Visión" },
        { text: "Nuestros Expertos" }
      ]
    };
  }
};
</script>
