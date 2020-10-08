<template>
  <div>
    <button v-on:click="doAdd">追加</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'

@Component({
  components: {}
})

export default class CardAdd extends Vue {
  @Prop()
  data!: any

  doAdd() {
    let self = this.data
    // itemsの中の一番大きなidを取得して1を足す
    let id = Math.max.apply(null, self.map(function(item: any){return item.id}))
    let newId = id + 1;
    // itemsにアイテムを追加
    this.data.push(
      {
        id: newId,
        name: 'name' + newId + '_Add',
      }
    )
  }
}
</script>
