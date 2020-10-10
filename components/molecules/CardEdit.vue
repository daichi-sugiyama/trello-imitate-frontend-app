<template>
  <div>
    <div v-if="isEdit === false" v-on:dblclick="StartEdit">
      <p>{{ value.name }}</p>
    </div>
    <div v-else v-click-outside="EndEdit">
      <CardEditText :data="data" :value="value" :index="index" />
      <button v-on:click="EndEdit">終了</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import CardEditText from 'components/atoms/CardEditText.vue'
const ClickOutside = require('vue-click-outside')

@Component({
  directives: {ClickOutside}
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
