<template>
  <div>
    <CardAdd v-model="data" :data="data"/>
    <draggable v-model="data" group="myGroupCard" @start="drag=true" @end="drag=false" :options="options" @input="emitter">
      <b-list-group v-for="(value, index) in data" :key="index">
        <b-list-group-item>
          {{value.name}}
          <CardDelete :data="data" :index="index" />
        </b-list-group-item>
      </b-list-group>
    </draggable>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import CardAdd from 'components/atoms/CardAdd.vue'
import CardDelete from 'components/atoms/CardDelete.vue'
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

  emitter(value: any) {
    this.$emit("input", value);
  }
}
</script>

<style lang="scss" scoped>
</style>