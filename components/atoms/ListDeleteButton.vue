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
        v-bind="attrs"
        v-on="on"
      >
        <v-icon dark small>mdi-minus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline mb-5">
        リストを削除しますか？
      </v-card-title>
      <v-card-text>削除したリストは元に戻せません。</v-card-text>
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
          @click="deleteList()"
        >
          削除する
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import { listType } from '~/models/DataType.ts'
import { dataStore } from '~/store'

@Component({
  components: {}
})

export default class ListDeleteButton extends Vue {
  @Prop()
  listData!: listType

  dialog=false

  deleteList() {
    dataStore.deleteList(this.listData)
    this.dialog=false
  }
}
</script>

<style lang="scss">
</style>
