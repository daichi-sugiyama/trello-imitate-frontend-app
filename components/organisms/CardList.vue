<template>
  <v-col cols="3">
    <v-card color="grey lighten-1">
      <v-row>
        <v-col cols="10" class="ma-0 pa-0"><v-card-title>{{ listData.listTitle }}</v-card-title></v-col>
        <v-col cols="2" class="block-center__into-vblock"><ListDeleteButton :listData="listData"/></v-col>
      </v-row>
      <v-divider class="mx-4"></v-divider>
      <v-container>
        <draggable v-model="cardData" group="myGroupCard" @start="drag=true" @end="drag=false" :options="options" tag="v-row">
          <Card v-for="(value, index) in cardData" :key="index" :listData="listData" :cardData="value"/>
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
import ListDeleteButton from '~/components/atoms/ListDeleteButton.vue'
import CardAddButton from '~/components/atoms/CardAddButton.vue'
import { listType } from '~/models/DataType.ts'
import { dataStore } from '~/store'

@Component({
  components: {
    Card,
    ListDeleteButton,
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

<style lang="scss">
.block-center__into-vblock {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>