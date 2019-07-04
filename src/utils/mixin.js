import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
  computed: {
    ...mapGetters([
      'fileName',
      'menuVisable'
    ])
  },
  methods: {
    ...mapActions([
      'setFileName',
      'setMenuVisable'
    ])
  }
}
