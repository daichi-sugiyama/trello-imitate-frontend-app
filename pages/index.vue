<template>
  <div>
    <CardContents />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CardContents from '~/components/organisms/CardContents.vue'

@Component({
  components: {
    CardContents
  }
})

export default class IndexPage extends Vue {}
</script>