<template>
  <div>
    <div v-if="isEdit === false" v-on:click="StartEdit">
      <p>{{ value.name }}</p>
    </div>
    <div v-else>
      <input type="text" v-model="value.name">
      <button v-on:click="EndEdit">終了</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'

@Component({
  components: {}
})

export default class CardEdit extends Vue {
  @Prop()
  data!: any

  @Prop()
  value!: any

  @Prop()
  index!: any

  isEdit=false

  StartEdit() {
    this.isEdit=true
  }

  EndEdit() {
    this.isEdit=false
  }
}
</script>
