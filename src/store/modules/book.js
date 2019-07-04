const book = {
  state: {
    fileName: '',
    menuVisable: false
  },
  mutations: {
    'SET_FILENAME': (state, fileName) => {
      state.fileName = fileName
    },
    'SET_MENUVISABLE': (state, menuVisable) => {
      state.menuVisable = menuVisable
    }
  },
  actions: {
    setFileName: ({ commit }, fileName) => {
      return commit('SET_FILENAME', fileName)
    },
    setMenuVisable: ({ commit }, menuVisable) => {
      return commit('SET_MENUVISABLE', menuVisable)
    }
  }
}

export default book
