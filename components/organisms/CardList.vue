<template>
  <v-container>
    <draggable v-model="listData" group="myGroupList" @start="drag=true" @end="drag=false" :options="options" tag="v-row" class="flex-nowrap">
      <v-col v-for="(value, index) in listData" :key="index" cols="3">
        <v-card color="grey lighten-1">
          <v-card-title>{{ value.listTitle }}</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <Card :propListData="value" :propCardData="value.cardData"/>
          <CardAddButton :data="value.data"/>
        </v-card>
      </v-col>
    </draggable>
  </v-container>
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
  propData!: listType[]

  get listData() {
    return this.propData
  }

  set listData(items) {
    dataStore.updateList(items)
  }

  options = {
    group: "myGroupList",
    animation: 200
  }
}
</script>