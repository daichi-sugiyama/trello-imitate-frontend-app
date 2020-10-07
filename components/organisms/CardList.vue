<template>
  <div>
    <div>
      <Card />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import Card from '~/components/molecules/Card.vue'

@Component({
  components: {
    Card
  }
})

export default class CardList extends Vue {}

</script>