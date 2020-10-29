<template>
  <v-col cols="12">
    <v-card color="grey lighten-4" elevation="5">
      <CardDeleteButton :listData="listData" :cardData="cardData" />
      <v-card-title col="7">{{ cardData.cardTitle }}</v-card-title>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import CardEdit from 'components/molecules/CardEdit.vue'
import CardDeleteButton from 'components/atoms/CardDeleteButton.vue'
import { listType, cardType } from '~/models/DataType.ts'
import { dataStore } from '~/store'

@Component({
  components: {
  }
})

export default class Card extends Vue {
  @Prop()
  listData!: listType

  @Prop()
  cardData!: cardType
}
</script>

<style lang="scss" scoped>
</style>