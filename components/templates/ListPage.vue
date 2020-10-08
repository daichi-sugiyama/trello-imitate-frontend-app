<template>
  <div>
    <h1>トレロ風アプリ</h1>
    <div>
      <CardList v-model="cardData.data" :data="cardData.data" />
    </div>
      <br>{{ JSON.stringify(cardData.data)}}
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
  cardData = cardData
}
</script>

<style lang="scss" scoped>
</style>