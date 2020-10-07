<template>
  <div>
    <b-list-group v-for="(item, index) in data" :key="index">
      <draggable group="myGroupCard" @start="drag=true" @end="drag=false" :options="options">
        <b-list-group-item>{{item.name}}</b-list-group-item>
      </draggable>
    </b-list-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import draggable from 'vuedraggable'

@Component({
  components: {
    draggable
  }
})

export default class Card extends Vue {
  @Prop()
  data!: any
  options = {
    group: "myGroupCard",
    animation: 200
  }
}
</script>

<style lang="scss" scoped>
</style>