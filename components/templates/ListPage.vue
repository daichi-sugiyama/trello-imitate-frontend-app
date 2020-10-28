<template>
  <div>
    <h1>トレロ風アプリ</h1>
    <div>
      {{listData}}
      <!-- <CardList v-model="data" :data="data" /> -->
    </div>
      <br>{{ JSON.stringify(listData)}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CardList from '~/components/organisms/CardList.vue'
// list の型定義をインポート
import { listType } from '~/models/DataType'
// data のストアモジュールをインポート
import { dataStore } from '~/store'

@Component({})

export default class ListPage extends Vue {
  get listData(): Array<listType> {
    return dataStore.listData
  }
}
</script>

<style lang="scss" scoped>
</style>