<template>
  <div>
    <CardList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CardList from '~/components/organisms/CardList.vue'

@Component({
  components: {
    CardList
  }
})

export default class IndexPage extends Vue {}
</script>