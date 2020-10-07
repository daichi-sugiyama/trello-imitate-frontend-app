<template>
  <div>
    <draggable v-model="realData" group="myGroupCard" @start="drag=true" @end="drag=false" :options="options" @input="emitter">
      <b-list-group v-for="(value, index) in realData" :key="index">
        <b-list-group-item v-model="value.name" >{{value.name}}</b-list-group-item>
      </b-list-group>
    </draggable>
    <br>
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

  realData = this.data;

  options = {
    group: "myGroupCard",
    animation: 200
  }

  emitter(value: any) {
    this.$emit("input", value);
  }
}
</script>

<style lang="scss" scoped>
</style>