<template>
  <div>
    <draggable :options="options">
      <div class="item" v-for="item in items" :key="item.id">{{item.name}}</div>
    </draggable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import draggable from 'vuedraggable'

@Component({
  components: {
    draggable
  }
})

export default class CardContents extends Vue {
  animation = 200;
  items = [
        { id: 1, name: 'name01' },
        { id: 2, name: 'name02' },
        { id: 3, name: 'name03' },
        { id: 4, name: 'name04' },
        { id: 5, name: 'name05' }
      ]
}
</script>

<style>
  .item {
    display: inline-block;
    margin: 10px;
    padding: 10px;
    border: 1px solid #7f7f7f;
    border-radius: 10px;
    background-color: #ffffff;
  }
  .item:hover {
    cursor: grab;
  }
  .item:active {
    cursor: grabbing;
  }
</style>