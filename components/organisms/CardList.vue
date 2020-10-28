<template>
  <v-container>
    <draggable v-model="listData" group="myGroupList" @start="drag=true" @end="drag=false" :options="options" @input="emitter" tag="v-row" class="flex-nowrap">
      <v-col v-for="(value, index) in listData" :key="index" cols="3">
        <v-card color="grey lighten-1">
          <v-card-title>{{ value.listTitle }}</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <Card v-model="value.cardData" :cardData="value.cardData"/>
          <CardAddButton v-model="value.data" :data="value.data"/>
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

@Component({
  components: {
    Card,
    draggable
  }
})

export default class CardList extends Vue {
  @Prop()
  listData!: listType[]

  options = {
    group: "myGroupList",
    animation: 200
  }

  emitter(value: any) {
    this.$emit("input", value);
  }
}
</script>