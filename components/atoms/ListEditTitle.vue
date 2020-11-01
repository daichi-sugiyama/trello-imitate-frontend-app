<template>
  <v-form
    ref="list_edit_title_form"
    lazy-validation
  >
    <v-text-field
      v-model="listTitle"
      label="リストタイトル"
      :rules="[required]"
    ></v-text-field>
    <v-btn
      color="info"
      @click="listTitleUpdate(listTitle)"
    >
      保存
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import { listType, cardType } from '~/models/DataType.ts'
import { dataStore } from '~/store'

@Component({
  components: {}
})

export default class CardEditTitle extends Vue {
  @Prop()
  listData!: listType

  listTitle: string = this.listData.listTitle
  success: boolean = false

  // 必須入力の判定
  required = (value: any) => !!value || "必ず力してください"

  // TODO:plugins/ に実装を検討
  get refs(): any {
    // eslint-disable-next-line
    return this.$refs;
  }

  listTitleUpdate(title: string) {
    if(this.refs.card_edit_title_form.validate()) {
      // <v-form ref="card_edit_title_form"> 内のバリデーションが通過した場合
      this.success = true
      // カード更新用のパラメータを作成
      let listParam: listType = {
        listId: this.listData.listId,
        listTitle: title,
        cardData: this.listData.cardData
      }
      // リストを更新
      dataStore.updateList({
        list: this.listData,
        listParam: listParam
      })
      this.$emit('cardEditTitleClose');
    } else {
      this.success = false
    }
  }
}
</script>
