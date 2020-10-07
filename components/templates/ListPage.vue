<template>
  <div>
    <h1>トレロ風アプリ</h1>
    <div>
      <CardList />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import CardList from '~/components/organisms/CardList.vue'

@Component({
  components: {
    CardList
  }
})

export default class ListPage extends Vue {}

</script>