<template>
  <v-footer dark  height="auto">
    <v-card class="flex" raised>
      <v-card-title class="secondary">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn href="https://www.facebook.com/TransversalTT/" v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="primary justify-center">
        &copy; 2019 —
        <strong>Transversal</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>


<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-google-plus',
        'mdi-linkedin',
        'mdi-instagram'
      ]
    })
  }
</script>
