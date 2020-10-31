<template>
  <input type="text">
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import { listType, cardType } from '~/models/DataType.ts'
import { dataStore } from '~/store'

@Component({
  components: {}
})

export default class CardEditText extends Vue {
  @Prop()
  listData!: listType

  @Prop()
  cardData!: cardType

  cardTitleUpdate(title: string) {
    // カード更新用のパラメータを作成
    let cardParam: cardType = {
      cardId: this.cardData.cardId,
      cardTitle: title
    }
    // カードを更新
    dataStore.updateCard({
      list: this.listData,
      card: this.listData.cardData,
      cardParam: cardParam
    })
  }
}
</script>
