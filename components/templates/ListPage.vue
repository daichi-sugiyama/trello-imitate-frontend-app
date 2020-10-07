<template>
  <div>
    <h1>トレロ風アプリ</h1>
    <div>
      <CardList :data="data" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'nuxt-property-decorator'
import CardList from '~/components/organisms/CardList.vue'
import cardData from '~/assets/card.json'

@Component({
  components: {
    CardList
  }
})

export default class ListPage extends Vue {
  data = cardData
}
</script>

<style lang="scss" scoped>
</style>