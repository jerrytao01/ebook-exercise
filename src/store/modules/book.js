const book = {
  state: {
    fileName: '',
    menuVisable: false,
    settingVisible: -1, // -1代表不显示,0代表字号,1代表主题设置,2表示进度条,3表示目录
    defaultFontSize: 16
  },
  mutations: {
    'SET_FILENAME': (state, fileName) => {
      state.fileName = fileName
    },
    'SET_MENUVISABLE': (state, menuVisable) => {
      state.menuVisable = menuVisable
    },
    'SET_SETTING_VISIBLE': (state, settingVisible) => {
      state.settingVisible = settingVisible
    },
    'SET_DEFAULT_FONT_SIZE': (state, defaultFontSize) => {
      state.defaultFontSize = defaultFontSize
    }
  }
}

export default book
