<template>
  <div>
    <h1>トレロ風アプリ</h1>
    <v-container>
      <draggable v-model="listData" group="myGroupList" @start="drag=true" @end="drag=false" :options="options" tag="v-row" class="flex-nowrap">
        <CardList v-for="(value, index) in listData" :key="index" :listData="value" />
      </draggable>
    </v-container>
      <br>{{ JSON.stringify(listData)}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import draggable from 'vuedraggable'
import CardList from '~/components/organisms/CardList.vue'
// list の型定義をインポート
import { listType } from '~/models/DataType'
// data のストアモジュールをインポート
import { dataStore } from '~/store'

@Component({
  components: {
    draggable,
    CardList
  }
})

export default class ListPage extends Vue {
  get listData() {
    return dataStore.listData
  }

  set listData(items) {
    dataStore.updateList(items)
  }

  options = {
    group: "myGroupList",
    animation: 200
  }
}
</script>

<style lang="scss" scoped>
</style>