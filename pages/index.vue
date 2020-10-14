<template>
  <v-app>
    <v-content class="overflow-x-auto">
      <ListPage />
    </v-content>
  </v-app>
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