<template>
  <draggable group="myGroupList" @start="drag=true" @end="drag=false" :options="options" class="list-width">
    <b-card v-for="(value, name, index) in data" :header="name" class="list-item" :key="index">
      <Card :data="value" />
    </b-card>
  </draggable>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import draggable from 'vuedraggable'
import Card from '~/components/molecules/Card.vue'

@Component({
  components: {
    Card,
    draggable
  }
})

export default class CardList extends Vue {
  @Prop()
  data!: any
  options = {
    group: "myGroupList",
    animation: 200
  }
}
</script>

<style lang="scss" scoped>
  .list-width {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }
  .list-item {
    display: inline-block;
    vertical-align: top;
    width: 20%;
    margin: 0px 5px 0px;
  }
</style>