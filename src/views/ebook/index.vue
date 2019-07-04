<template>
  <div class="ebook">
    <ebook-reader></ebook-reader>
    <ebook-title></ebook-title>
    <ebook-memu></ebook-memu>
  </div>
</template>

<script>
  import EbookReader from '../../components/ebook/EbookReader'
  import EbookTitle from '../../components/ebook/EbookTitle'
  import EbookMemu from '../../components/ebook/EbookMemu'

  export default {
    name: 'index',
    components: { EbookMemu, EbookTitle, EbookReader }
  }
</script>

<style scoped>

</style>
