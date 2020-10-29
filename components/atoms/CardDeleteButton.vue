<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="320"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">
        カードを削除しますか？
      </v-card-title>
      <v-card-text>削除したカードは元に戻せません。</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          text
          @click="dialog = false"
        >
          Disagree
        </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="dialog = false"
        >
          Agree
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
}
</script>
