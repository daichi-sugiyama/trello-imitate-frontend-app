<template>
  <div>
    <v-card-title v-if="isCardEdit === false" v-on:dblclick="startCardEdit">
      {{ cardData.cardTitle }}
    </v-card-title>
    <v-card-title v-else v-click-outside="endCardEdit">
      <CardEditTitle :listData="listData" :cardData="cardData" @cardEditTitleClose="endCardEdit" />
    </v-card-title>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import CardEditTitle from 'components/atoms/CardEditText.vue'
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

  startCardEdit() {
    this.isCardEdit=true
  }

  endCardEdit() {
    this.isCardEdit=false
  }
}

</script>