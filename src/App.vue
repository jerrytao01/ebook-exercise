<template>
  <div id="app">
    <span class="text">ABCDEFG</span>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    mounted () {
      console.log(this.book)
    },
    computed: {
      ...mapGetters(['book'])
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize
    html.style.fontSize = fontSize + 'px'
  })
</script>

<style>
  .text {
    /*font-family: "Days One";*/
    font-size: 1rem;
    color: orange;
  }
</style>
