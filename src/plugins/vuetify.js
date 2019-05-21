import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'
Vue.use(Vuetify, {
  iconfont: 'md',
  theme : {
    primary : '#4CC0AD',
    secondary : '#58595B',
    accent: colors.blue.darken1,
    info: '',
    succes : '',
    warning: ''
  }
})
