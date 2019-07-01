<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Epub from 'epubjs'

  global.ePub = Epub

  export default {
    name: 'EbookReader',
    computed: {
      ...mapGetters(['fileName'])
    },
    methods: {
      // 上一页
      prevPage () {
        this.rendition.prev()
      },
      // 下一页
      nextPage () {
        this.rendition.next()
      },
      // 显示标题和菜单
      showTitleAndMemu () {
        console.log('toggle')
      },
      // 初始化阅读器
      initEpub () {
        const url = 'http://192.168.14.15:8081/epub/' + this.fileName + '.epub'
        this.book = new Epub(url)
        this.rendition = this.book.renderTo('read', {
          width: innerWidth,
          height: innerHeight,
          method: 'default'
        })
        this.rendition.display()
        this.rendition.on('touchstart', event => {
          this.touchStartX = event.changedTouches[0].clientX
          this.touchStartTime = event.timeStamp
        })
        this.rendition.on('touchend', event => {
          const offsetX = event.changedTouches[0].clientX - this.touchStartX
          const time = event.timeStamp - this.touchStartTime
          if (time < 500 && offsetX > 40) {
            this.prevPage()
          } else if (time < 500 && offsetX < -40) {
            this.nextPage()
          } else {
            this.showTitleAndMemu()
          }
        })
      }
    },
    mounted () {
      const fileName = this.$route.params.fileName.split('|').join('/')
      this.$store.dispatch('setFileName', fileName).then(() => {
        this.initEpub()
      })
    }
  }
</script>

<style scoped>

</style>
