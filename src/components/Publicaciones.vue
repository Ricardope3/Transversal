<template>
  <div class="publicaciones">
    <!-- CONTENEDOR DE TODO -->
    
    <v-container fluid class="grey lighten-4" grid-list-lg >
      <p class="font-weight-regular display-3 text-xs-center primary--text text--darken-1">Publicaciones</p>
      <!-- LAYOUT DE TODO LA ROW DE TODOS LOS LIBROS -->
      <v-layout row justify-space-around pa-2 wrap class="ma-1">
        <v-flex wrap xs12 sm6  lg4  v-for="index in cuantosLibrosToDisplay()" :key="index">
          <v-card dark color="transparent" hover raised>
            <!-- LAYOUT DE UN SOLO LIBRO -->
            <v-layout py-2  >
              <!-- FLEX DE LA IMAGEN -->
              <v-flex xs5 sm6 md4 lg4 mx-2>
                <v-img
                  contain
                  position="left"
                  height="220"
                  width="150" 
                  :src="libros[index-1].imagen"
                ></v-img>
              </v-flex>
              <!-- FLEX DE LA DESCRIPCION DE LA IMAGEN -->
              <v-flex sx4 sm8 md6 lg7 wrap >
                <div dark class="black--text ">
                  <div
                    class="title font-weight-regular px-3 pt-3 pb-1 text-xs-left "
                  >{{libros[index-1].titulo}}</div>
                  <div
                    class="font-weight-light font-italic subheading px-3 text-xs-left hidden-sm-and-down "
                  >{{libros[index-1].subtitulo}}</div>
                  <div class="px-3">{{libros[index-1].autor}}</div>
                  <div class="body-1 px-3 text-xs-left px-3">{{libros[index-1].fecha}}</div>
                </div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <!-- LAYOUT DE TODO LA ROW DE LIBROS -->
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data : () =>({
    
      
      libros: [
        {
          titulo: "Steering the metropolis",
          autor: "Robin Rajack, Gabriel Lanfranchi",
          subtitulo:
            "Metropolitan Governance for Sustainable Urban Development",
          fecha: "October 24, 2017",
          imagen:
            "https://unhabitat.org/wp-content/uploads/2017/11/Pages-from-Steering_the_Metropolis-311x400@2x.jpg"
        },
        {
          titulo: "The Republic",
          subtitulo: "",
          autor: "Platón",
          fecha: "October 24, 2017",
          imagen:
            "https://images-eu.ssl-images-amazon.com/images/I/51B7YkNA5nL.jpg"
        },
        {
          titulo: "Brothers Karamazov",
          subtitulo: "",
          autor: "Dostoyevzky",
          fecha: "October 24, 2017",
          imagen:
            "https://images-na.ssl-images-amazon.com/images/I/8117HB7WbvL.jpg"
        },
        {
          titulo: "Gulag Archipelago",
          subtitulo: "",
          autor: "Aleksandr Solzhenitsyn",
          fecha: "October 24, 2017",
          imagen: "https://pictures.abebooks.com/isbn/9780006336426-us.jpg"
        }
      ]
  }),
  methods: {
    cuantosLibrosToDisplay: function() {
      if (window.location.pathname === "/") {
        if (this.libros.length < 4) {
          return this.libros.length;
        } else {
          return 3;
        }
      }
      return this.libros.length;
    }
  },
  computed: {}
};
</script>