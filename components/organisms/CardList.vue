<template>
  <draggable v-model="realData" group="myGroupList" @start="drag=true" @end="drag=false" :options="options" class="list-width" @input="emitter">
    <b-card v-for="(value, index) in realData" :header="value.title" class="list-item" :key="index">
      <Card v-model="value.data" :data="value.data" />
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

  realData = this.data;

  options = {
    group: "myGroupList",
    animation: 200
  }

  emitter(value: any) {
    this.$emit("input", value);
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