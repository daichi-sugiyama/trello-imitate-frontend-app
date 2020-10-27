import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { data, listType, cardType } from '~/models/DataType'

// stateFactory: true → Vuex をモジュールモードで扱うために指定
@Module({ stateFactory: true, namespaced: true, name: 'data' })
export default class Data extends VuexModule {
  // サンプルデータを読み込み
  data: listType[] = data;

  /**
   * listを追加
   * @param title
   */
  @Mutation
  addList(title: string) {
    const lists: listType[] = this.data;
    const list: listType = {
      // リストがない場合、cardId = 0
      // リストがある場合、cardId = リストの最終要素の id + 1
      listId: this.data.length === 0 ? 0 : this.data[lists.length - 1].listId + 1,
      listTitle: title,
      cardData: []
    }
    lists.push(list)
  }

  /**
   * listを削除
   * @param list
   */
  @Mutation
  removeList(list: listType) {
    this.data.splice(this.data.indexOf(list), 1)
  }


  /**
   * cardを追加
   * @param title card カードタイトル
   */
  @Mutation
  addCard(title: string, list: listType) {
    const cards: cardType[] = list.cardData;
    const card: cardType = {
      // カードがない場合、cardId = 0
      // カードがある場合、cardId = カードの最終要素の id + 1
      cardId: cards.length === 0 ? 0 : cards[cards.length - 1].cardId + 1,
      cardTitle: title
    }
    cards.push(card)
  }

  /**
   * cardを削除
   * @param card
   */
  @Mutation
  removeCard(card: cardType, list: listType) {
    list.cardData.splice(list.cardData.indexOf(card), 1)
  }

  /**
   * listを編集
   * @param list title list リストタイトル
   */
  @Mutation
  updateList(title: string, list: listType) {
    list.listTitle = title
  }

  /**
   * cardを編集
   * @param card title card カードタイトル
   */
  @Mutation
  updateCard(title: string, card: cardType) {
    card.cardTitle = title
  }
}