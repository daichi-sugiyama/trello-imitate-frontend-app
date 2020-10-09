<template>
  <div>
    <input type="text" v-model="value.name">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'

@Component({
  components: {}
})

export default class CardEditText extends Vue {
  @Prop()
  data!: any

  @Prop()
  value!: any

  @Prop()
  index!: any

}
</script>
