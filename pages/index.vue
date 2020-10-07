<template>
  <div>
    <ListPage />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListPage from '~/components/templates/ListPage.vue'

@Component({
  components: {
    ListPage
  }
})

export default class IndexPage extends Vue {}
</script>