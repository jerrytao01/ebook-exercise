<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
  import { ebookMixin } from '../../utils/mixin'
  import Epub from 'epubjs'

  global.ePub = Epub

  export default {
    name: 'EbookReader',
    mixins: [
      ebookMixin
    ],
    methods: {
      // 隐藏标题和菜单栏
      hideTitleAndMenu () {
        this.setMenuVisable(false)
        this.setSettingVisible(-1)
      },
      // 上一页
      prevPage () {
        if (this.rendition) {
          this.rendition.prev()
          this.hideTitleAndMenu()
        }
      },
      // 下一页
      nextPage () {
        if (this.rendition) {
          this.rendition.next()
          this.hideTitleAndMenu()
        }
      },
      // 显示标题和菜单
      showTitleAndMemu () {
        if (this.rendition) {
          this.setSettingVisible(-1)
        }
        this.setMenuVisable(!this.menuVisable)
      },
      // 初始化阅读器
      initEpub () {
        const url = 'http://192.168.14.21:8081/epub/' + this.fileName + '.epub'
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
          event.preventDefault() // 兼容微信
          event.stopPropagation() // 阻止冒泡
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
