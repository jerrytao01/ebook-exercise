import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
  computed: {
    ...mapGetters([
      'fileName',
      'menuVisable',
      'settingVisible',
      'defaultFontSize'
    ])
  },
  methods: {
    ...mapActions([
      'setFileName',
      'setMenuVisable',
      'setSettingVisible',
      'setDefaultFontSize'
    ])
  }
}
