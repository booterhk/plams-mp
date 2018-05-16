import Vue from 'vue'
import Vuex from 'vuex'
import homePage from './pages/homePage/module'
import article from './pages/articlePage/module'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

Vue.use({
  install(Vue, options) {
    Vue.prototype.$store = new Vuex.Store({
      modules: {
        homePage,
        article
      },
      strict: debug
    })
  }
})

// export default new Vuex.Store({
//   modules: {
//     counter
//   },
//   strict: debug
// })
