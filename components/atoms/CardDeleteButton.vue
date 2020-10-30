<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="320"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        x-small
        dark
        color="red"
        class="thumb-up right-btn mr-2"
        style="top: 5px"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon dark small>mdi-minus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline mb-5">
        カードを削除しますか？
      </v-card-title>
      <v-card-text>削除したカードは元に戻せません。</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="dialog = false"
        >
          削除しない
        </v-btn>
        <v-btn
          color="red darken-1"
          text
          @click="deleteCard()"
        >
          削除する
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import { listType, cardType } from '~/models/DataType.ts'
import { dataStore } from '~/store'

@Component({
  components: {}
})

export default class CardDeleteButton extends Vue {
  @Prop()
  listData!: listType

  @Prop()
  cardData!: cardType

  dialog=false

  deleteCard() {
    dataStore.deleteCard({list: this.listData, card: this.cardData})
    this.dialog=false
  }
}
</script>

<style lang="scss">
.thumb-up::before {
  background-color: #ff0000;
}
.right-btn {
  display: block;
  margin: 0 0 0 auto;
}
</style>
