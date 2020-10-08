<template>
  <div>
    <div v-text="$dayjs('2020-10-10 10:10:10').format('')"></div>
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