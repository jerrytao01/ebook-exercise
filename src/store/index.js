import Vue from 'vue'
import Vuex from 'vuex'
import book from './modules/book'
import getters from './getters'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    book
  },
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
