<template>
  <div>
    <button v-on:click="doDelete(data, index)">削除</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'

@Component({
  components: {}
})

export default class CardDelete extends Vue {
  @Prop()
  data!: any

  @Prop()
  index!: any

  doDelete(data: any, index: any) {
    this.data.splice(index, 1);
  }
}
</script>
