<template>
  <input type="text" v-model="cardData.cardTitle">
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

}
</script>
