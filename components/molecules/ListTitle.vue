<template>
  <div>
    <v-card-title v-if="isListEdit === false" v-on:dblclick="startListEdit">
      {{ listData.listTitle }}
    </v-card-title>
    <v-card-title v-else v-click-outside="endListEdit">
      <ListEditTitle :listData="listData" :cardData="cardData" @listEditTitleClose="endListEdit" />
    </v-card-title>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import ListEditTitle from 'components/atoms/ListEditText.vue'
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

  isListEdit=false

  startListEdit() {
    this.isListEdit=true
  }

  endListEdit() {
    this.isListEdit=false
  }
}

</script>