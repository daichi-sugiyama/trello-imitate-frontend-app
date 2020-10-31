<template>
  <div>
    <v-card-title v-if="isCardEdit === false" v-on:dblclick="StartEdit">
      {{ cardData.cardTitle }}
    </v-card-title>
    <v-card-title v-else v-click-outside="EndEdit">
      <CardEditText :listData="listData" :cardData="cardData" />
      <button v-on:click="EndEdit">終了</button>
    </v-card-title>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import CardEditText from 'components/atoms/CardEditText.vue'
import { listType, cardType } from '~/models/DataType.ts'
const ClickOutside = require('vue-click-outside')

@Component({
  directives: {ClickOutside}
})

export default class CardTitle extends Vue {
  @Prop()
  listData!: listType

  @Prop()
  cardData!: cardType

  isCardEdit=false

  StartEdit() {
    this.isCardEdit=true
  }

  EndEdit() {
    this.isCardEdit=false
  }
}
</script>
