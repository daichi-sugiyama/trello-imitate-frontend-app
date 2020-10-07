<template>
  <div>
    <draggable group="myGroupList" @start="drag=true" @end="drag=false" :options="options" class="row">
      <b-card v-for="(value, name, index) in data" :header="name" class="card-width" :key="index">
        <Card :data="value" />
      </b-card>
    </draggable>
  </div>
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
  .card-width {
    width: 50%;
  }
</style>