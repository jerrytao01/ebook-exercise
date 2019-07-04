const actions = {
  setFileName: ({ commit }, fileName) => {
    return commit('SET_FILENAME', fileName)
  },
  setMenuVisable: ({ commit }, menuVisable) => {
    return commit('SET_MENUVISABLE', menuVisable)
  },
  setSettingVisible: ({ commit }, settingVisible) => {
    return commit('SET_SETTING_VISIBLE', settingVisible)
  },
  setDefaultFontSize: ({ commit }, defaultFontSize) => {
    return commit('SET_DEFAULT_FONT_SIZE', defaultFontSize)
  }
}
export default actions
