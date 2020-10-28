<template>
  <v-container>
    <draggable v-model="cardData" group="myGroupCard" @start="drag=true" @end="drag=false" :options="options" tag="v-row">
      <v-col cols="12" v-for="(value, index) in cardData" :key="index">
        <v-card color="grey lighten-4" elevation="5">
          <v-card-title>{{ value.cardTitle }}</v-card-title>
        </v-card>
      </v-col>
    </draggable>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import CardEdit from 'components/molecules/CardEdit.vue'
import draggable from 'vuedraggable'
import { cardType, listType } from '~/models/DataType.ts'
import { dataStore } from '~/store'

@Component({
  components: {
    draggable
  }
})

export default class Card extends Vue {
  @Prop()
  propListData!: listType
  @Prop()
  propCardData!: cardType[]

  get cardData() {
    return this.propCardData
  }

  set cardData(items) {
    dataStore.updateCard(this.propListData, this.propCardData)
  }

  options = {
    group: "myGroupCard",
    animation: 200
  }
}
</script>

<style lang="scss" scoped>
</style>