<template>
  <div>
    <b-card v-for="(value, name, index) in cardData" :header="name" class="card-width" :key="index">
      <b-list-group v-for="(item, index) in value" :key="index">
        <draggable v-model="itemsA" group="myGroup" @start="drag=true" @end="drag=false" :options="options">
          <b-list-group-item>{{item.name}}</b-list-group-item>
        </draggable>
      </b-list-group>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import draggable from 'vuedraggable'
import cardData from '~/assets/card.json'

@Component({
  components: {
    draggable
  }
})

export default class CardContents extends Vue {
  cardData = cardData
  options = {
    group: "myGroup",
    animation: 200
  }
}
</script>

<style lang="scss" scoped>
  .card-width {
    width: 50%;
  }
</style>