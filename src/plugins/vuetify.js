import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'
import VueWindowSize from 'vue-window-size';
Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme : {
    primary : '#4CC0AD',
    secondary : '#58595B',
    accent: colors.blue.darken1,
    info: '',
    succes : '',
    warning: ''
  },VueWindowSize
})
