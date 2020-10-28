<template>
  <v-col cols="12">
    <v-card color="grey lighten-4" elevation="5">
      <v-card-title>{{ cardData.cardTitle }}</v-card-title>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import CardEdit from 'components/molecules/CardEdit.vue'
import { cardType, listType } from '~/models/DataType.ts'
import { dataStore } from '~/store'

@Component({})

export default class Card extends Vue {
  @Prop()
  cardData!: cardType
}
</script>

<style lang="scss" scoped>
</style>