<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card-actions>
          <v-btn
            block
            text
            dark
            v-bind="attrs"
            v-on="on"
          >
            <v-icon dark>mdi-plus</v-icon>
            カードを追加
          </v-btn>
        </v-card-actions>
      </template>
      <!-- ダイアログ　カード追加フォーム -->
      <v-card>
        <v-card-title>
          <span class="headline">カードを追加</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-form ref="card_add_form">
                  <v-text-field
                    v-model="cardTitle"
                    label="カードタイトル"
                    :rules="[required]"
                  ></v-text-field>
                </v-form>
              </v-col>
            </v-row>
          </v-container>
          <small>※カードタイトルは必須です</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="dialog = false"
          >
            中止
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="addCard(cardTitle)"
          >
            保存
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <!-- /ダイアログ カード追加フォーム -->
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import { listType } from '~/models/DataType.ts'
import { dataStore } from '~/store'

@Component({
  components: {}
})

export default class CardAddButton extends Vue {
  @Prop()
  listData!: listType

  cardTitle: string = ''
  dialog: boolean = false
  success: boolean = false

  // 必須入力の判定
  required = (value: any) => !!value || "必ず入力してください"

  // TODO:plugins/ に実装を検討
  get refs(): any {
    // eslint-disable-next-line
    return this.$refs;
  }

  addCard(title: string): void {
    if(this.refs.card_add_form.validate()) {
      // <v-form ref="card_add_form"> 内のバリデーションが通過した場合
      this.success = true
      dataStore.addCard({title: title, list: this.listData})
      this.dialog = false
    } else {
      this.success = false
    }
  }
}
</script>
