<template>
  <v-col cols="3">
    <v-card color="grey lighten-1">
      <v-card-title>{{ listData.listTitle }}</v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-container>
        <draggable v-model="cardData" group="myGroupCard" @start="drag=true" @end="drag=false" :options="options" tag="v-row">
          <Card v-for="(value, index) in cardData" :key="index" :cardData="value" :propCardData="value.cardData"/>
        </draggable>
          <CardAddButton :listData="listData"/>
      </v-container>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import draggable from 'vuedraggable'
import Card from '~/components/organisms/Card.vue'
import CardAddButton from '~/components/atoms/CardAddButton.vue'
import { listType } from '~/models/DataType.ts'
import { dataStore } from '~/store'

@Component({
  components: {
    Card,
    draggable
  }
})

export default class CardList extends Vue {
  @Prop()
  listData!: listType

  get cardData() {
    return this.listData.cardData
  }

  set cardData(items) {
    dataStore.updateCard({list: this.listData, card: items})
  }

  options = {
    group: "myGroupList",
    animation: 200
  }
}
</script>